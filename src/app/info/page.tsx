export default function Info() {
    const languages: string[] = ["JavaScript/Typescript", "C++", "Python", "Java", "HTML/CSS"];
  
    return (
      <div className="min-h-screen text-gray-100">
        <main className="max-w-4xl mx-auto p-4 pl-32">
          <h1 className="text-4xl mb-8">Hi, my name is Jacob Thompson.</h1>
          
          <section className="mb-8">
        <p className="text-gray-400">
          I am a junior studying Cybersecurity at UW-Stout.
        </p>
        <p className="text-gray-400">
            I am actively looking for an internship in IT or software development
        </p>
        <br />
        <p>
            <a href="/JacobThompsonResume.pdf" download>{'>'} Download my Resume!</a>
        </p>
          </section>
      
          <section className="mb-8">
        <h2 className="text-2xl mb-4">Contact</h2>
        <div className="space-y-2 text-purple-400 pl-4">
          <div>{'-'} Personal Email: jacobjthompson708@gmail.com</div>
          <a href="https://www.linkedin.com/in/jacobthompson708/" className="block hover:text-purple-300">{'-'} LinkedIn</a>
          <a href="https://github.com/JacobT708" className="block hover:text-purple-300">{'-'} GitHub</a>
        </div>
          </section>
      
          <section className="mb-8">
        <h2 className="text-2xl mb-4">Languages</h2>
        <div className="space-y-2 text-purple-400 pl-4">
          {languages.map((lang, index) => (
            <div key={index}>{"-"} {lang}</div>
          ))}
        </div>
          </section>
        </main>
      </div>
    )
  }