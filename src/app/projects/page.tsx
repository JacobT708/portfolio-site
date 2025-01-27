interface Project {
  title: string;
  description: string;
  type: string;
  links: {
    github: string;
    website?: string;
  };
}

export default function Projects() {
  const projects: Project[] = [
    {
        title: "Project Name",
        description: "A brief description of your project goes here.",
        type: "Personal Project",
        links: {
          github: "#",
          website: "#"
        }
      }
    ]
  
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <main className="max-w-4xl mx-auto p-4">
          <h1 className="text-4xl mb-8">My Projects</h1>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="border border-gray-700 p-6 rounded-lg">
                <h2 className="text-2xl mb-2">{project.title} - {project.type}</h2>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="space-x-4 text-purple-400">
                  <a href={project.links.github} className="hover:text-purple-300"> Github</a>
                  {project.links.website && (
                    <a href={project.links.website} className="hover:text-purple-300"> Website</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    )
  }