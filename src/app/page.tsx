export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <main className="max-w-4xl mx-auto p-4">
        <section className="mb-12">
          <h1 className="text-4xl mb-4">Hello I</h1>
          <div className="text-gray-400">
            Welcome to my personal portfolio website!
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl mb-4">&quot;What do I do?&quot;</h2>
          <div className="space-y-2 text-purple-400">
            <div> Personal Projects</div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl mb-4">Connect with me!</h2>
          <div className="space-y-2 text-purple-400">
            <a href="#" className="block hover:text-purple-300"> GitHub</a>
            <a href="#" className="block hover:text-purple-300"> LinkedIn</a>
          </div>
        </section>
      </main>
    </div>
  )
}