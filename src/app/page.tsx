export default function Home() {
  return (
    <div className="min-h-screen text-gray-100">
      <main className="max-w-4xl mx-auto p-4">
        <section className="mb-12 text-center">
          <h1 className="text-4xl mb-4">Hello, I&apos;m Jacob Thompson</h1>
          <div className="text-gray-400">
            Welcome to my personal portfolio website!
          </div>
        </section>

        <section className="mb-12 text-center">
          <h2 className="text-2xl mb-4 text">What I&apos;m Passionate About&quot;</h2>
          <div className="space-y-2 text-purple-400">
            <a href="/projects" className="block hover:text-purple-300"> Personal Projects</a>
            <p>Computer Networking and Network Design</p>
          </div>
        </section>

        <section className="mb-12 text-center">
          <h2 className="text-2xl mb-4">Connect with me!</h2>
          <div className="space-y-2 text-purple-400">
          <a href="https://www.linkedin.com/in/jacobthompson708/" className="block hover:text-purple-300"> LinkedIn</a>
          <a href="https://github.com/JacobT708" className="block hover:text-purple-300"> GitHub</a>
          </div>
        </section>
      </main>
    </div>
  ) 
}