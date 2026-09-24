import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import GitHub from "@/components/GitHub";
import CodingStats from "@/components/CodingStats";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";


import { client } from "@/lib/sanity";

async function getRecipes() {
  return client.fetch(`*[_type == "recipe"] | order(_createdAt desc)`);
}
async function getBooks() {
  return client.fetch(`*[_type == "book"] | order(_createdAt desc)`);
}


export default async function Home() {

  const [recipes, books] = await Promise.all([getRecipes(), getBooks()]);

  return (
    <>
      <CommandPalette />
      <main>
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <GitHub />
        <CodingStats />
        <Hobbies recipes={recipes} books={books} />
        <Contact />
        <Footer />
      </main>
    </>
  );
}