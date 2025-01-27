export default function Info() {
    const languages: string[] = ["JavaScript", "Python", "React", "Node.js"]
  
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <main className="max-w-4xl mx-auto p-4">
          <h1 className="text-4xl mb-8">Hi, my name is [Your Name].</h1>
          
          <section className="mb-8">
            <p className="text-gray-400">
              I&apos;m a software developer based in [Your Location].
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl mb-4">Contact</h2>
            <div className="space-y-2 text-purple-400">
              <div>{'>'}Personal Email: your.email@example.com</div>
              <a href="#" className="block hover:text-purple-300">{'>'}LinkedIn</a>
              <a href="#" className="block hover:text-purple-300">{'>'}GitHub</a>
            </div>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl mb-4">Languages</h2>
            <div className="space-y-2 text-purple-400">
              {languages.map((lang, index) => (
                <div key={index}> {lang}</div>
              ))}
            </div>
          </section>
        </main>
      </div>
    )
  }