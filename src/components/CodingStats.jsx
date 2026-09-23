async function getLeetCodeStats(username) {
  try {
    const query = `
      query userProblemsSolved($username: String!) {
        matchedUser(username: $username) {
          submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
      }
    `;

    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { username } }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;
    const json = await res.json();
    const stats = json?.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum;
    if (!stats) return null;

    const find = (diff) => stats.find((s) => s.difficulty === diff)?.count ?? 0;
    return {
      totalSolved: find("All"),
      easySolved: find("Easy"),
      mediumSolved: find("Medium"),
      hardSolved: find("Hard"),
    };
  } catch {
    return null;
  }
}
async function getCodeforcesStats(handle) {
  try {
    const res = await fetch(`https://codeforces.com/api/user.info?handles=${handle}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.result?.[0] ?? null;
  } catch {
    return null;
  }
}

export default async function CodingStats() {
  const leetcodeUsername = "vvsai";
  const codeforcesHandle = "varunsaivasantham";

  const [leetcode, codeforces] = await Promise.all([
    getLeetCodeStats(leetcodeUsername),
    getCodeforcesStats(codeforcesHandle),
  ]);

  return (
    <section id="coding-stats" className="max-w-5xl mx-auto px-6 py-24">
      <p className="text-[var(--accent-secondary)] mb-3">{`// coding stats`}</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Problem solving</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {leetcode && (
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6">
            <h3 className="font-semibold mb-4 text-[var(--accent)]">LeetCode</h3>
            <p className="text-3xl font-bold mb-4">{leetcode.totalSolved}</p>
            <p className="text-sm text-[var(--muted)] mb-4">problems solved</p>
            <div className="flex gap-4 text-sm">
              <span className="text-green-400">Easy: {leetcode.easySolved}</span>
              <span className="text-yellow-400">Medium: {leetcode.mediumSolved}</span>
              <span className="text-red-400">Hard: {leetcode.hardSolved}</span>
            </div>
            {leetcode.ranking && (
              <p className="text-xs text-[var(--muted)] mt-4">Global rank: {leetcode.ranking.toLocaleString()}</p>
            )}
          </div>
        )}

        {codeforces && (
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6">
            <h3 className="font-semibold mb-4 text-[var(--accent)]">Codeforces</h3>
            <p className="text-3xl font-bold mb-4">{codeforces.rating ?? "Unrated"}</p>
            <p className="text-sm text-[var(--muted)] mb-4">current rating</p>
            <div className="flex gap-4 text-sm text-[var(--muted)]">
              <span>Max: {codeforces.maxRating ?? "—"}</span>
              <span className="capitalize">Rank: {codeforces.rank ?? "unrated"}</span>
            </div>
          </div>
        )}

        {!leetcode && !codeforces && (
          <p className="text-[var(--muted)] col-span-2">Stats unavailable right now — check back later.</p>
        )}
      </div>
    </section>
  );
}