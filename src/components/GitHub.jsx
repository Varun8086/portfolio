import { Star, GitFork } from "lucide-react";
import ContributionCalendar from "./ContributionCalendar";

async function getRepos(username) {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`, {
        next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    return res.json();
}

async function getContributions(username) {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`, {
        next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
}

export default async function GitHub() {
    const username = "Varun8086";
    const [repos, contributions] = await Promise.all([
        getRepos(username),
        getContributions(username),
    ]);


    return (
        <section id="github" className="max-w-5xl mx-auto px-6 py-24">
            <p className="text-[var(--accent-secondary)] mb-3">{`// github`}</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Latest activity</h2>

            {contributions && (
                <div className="mb-10 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
                    <ContributionCalendar data={contributions.contributions} totals={contributions.total} />
                </div>
            )}

            <div className="grid md:grid-cols-3 gap-6">
                {repos.map((repo) => (
                    <a
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 hover:border-[var(--accent)] transition-colors duration-200"
                    >
                        <h3 className="font-semibold mb-2 truncate">{repo.name}</h3>
                        <p className="text-sm text-[var(--muted)] mb-4">
                            {repo.description || "No description provided."}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-[var(--muted)]">
                            {repo.language && (
                                <span className="flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-[var(--accent-secondary)]" />
                                    {repo.language}
                                </span>
                            )}
                            <span className="flex items-center gap-1"><Star size={12} /> {repo.stargazers_count}</span>
                            <span className="flex items-center gap-1"><GitFork size={12} /> {repo.forks_count}</span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}