import React from "react";

const articles = [
  { title: "Here are some things you should know regarding how we work", image: "/cat1.png" },
  { title: "Granny gives everyone the finger, and other tips from OFFF Barcelona", image: "/cat1.png" },
  { title: "Hello world, or, in other words, why this blog exists", image: "/cat1.png" },
  { title: "Clients are part of the team", image: "/cat1.png" },
  { title: "Connecting AI with digital product design", image: "/cat1.png" },
  { title: "It's all about finding the perfect balance", image: "/cat1.png" },
  { title: "I believe learning is the most important skill", image: "/cat1.png" },
  { title: "Clients are part of the team", image: "/cat1.png" },
  { title: "Here are some things you should know regarding how we work", image: "/cat1.png" },
  { title: "How modern remote working tools get along with Old School Cowboy's methods", image: "/cat1.png" },
];

export default function NordicRosePage() {
  return (
    <div className="font-sans text-black bg-white">
      {/* Top Bar */}
      <header className="flex justify-between items-center px-6 py-4 border-b">
        <h1 className="text-xl font-semibold">NORDIC ROSE</h1>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#">BLOG</a>
          <a href="#">ABOUT</a>
          <a href="#">LINKS</a>
          <a href="#">PROJECTS</a>
        </nav>
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Featured Post */}
      <section className="text-center px-4 py-8">
        <img src="/cat1.png" alt="Featured" className="mx-auto mb-6 max-w-md" />
        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
          A few words about this blog platform, Ghost, and how this site was made
        </h2>
        <p className="text-xs text-gray-500 mb-2">
          Why Ghost (& Figma) Instead of Medium, WordPress or other options?
        </p>
        <hr className="w-16 mx-auto border-black my-6" />
        <h3 className="text-xl font-semibold">All articles</h3>
      </section>

      {/* Articles */}
      <section className="px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {articles.map((article, index) => (
            <div key={index} className="text-center hover:scale-[1.02] transition-transform duration-200">
              <img src={article.image} alt={article.title} className="mb-2 w-full rounded-md" />
              <p className="text-sm font-medium">{article.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center px-6 py-10 mt-10">
        <div className="flex flex-wrap justify-center gap-4 text-xs uppercase tracking-wider mb-6">
          <a href="#" className="hover:underline">Digital Product Design</a>
          <a href="#" className="hover:underline">Remote Work</a>
          <a href="#" className="hover:underline">UX Design</a>
          <a href="#" className="hover:underline">Distributed Teams</a>
          <a href="#" className="hover:underline">Creativity</a>
          <a href="#" className="hover:underline">Strategy</a>
          <a href="#" className="hover:underline">Suspense</a>
          <a href="#" className="hover:underline">Growth</a>
        </div>
        <p className="text-sm text-gray-400 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur.
        </p>
        <div className="flex justify-center gap-6 text-sm mb-4">
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">LinkedIn</a>
          <a href="#" className="hover:underline">RSS</a>
        </div>
        <p className="text-xs text-gray-500">© 2015-2025 Nordic Rose Co. All rights reserved.</p>
      </footer>
    </div>
  );
}
