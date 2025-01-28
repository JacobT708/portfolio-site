
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
        title: "CI/CD Pipeline with AWS",
        description: "This project demonstrates a fully automated CI/CD pipeline built on AWS using CodePipeline, CodeBuild, CodeDeploy, and CloudFormation. It integrates with GitHub for version control and deploys a web application to an EC2 instance.",
        type: "CNIT-371 Final Project",
        links: {
          github: "https://github.com/JacobT708/CI-CD-Repo",
          website: ""
        }
      },
      {
        title: "Personal Portfolio Website",
        description: "This website was built using Next.js and Tailwind CSS. It showcases my projects and skills as a software developer.",
        type: "Personal Project",
        links: {
          github: "https://github.com/JacobT708/portfolio-site",
          website: "https://jacobthompson.xyz"
      }
    }
    ]
  
    return (
      <div className="min-h-screen text-gray-100">
        <main className="max-w-4xl mx-auto p-4">
          <h1 className="text-4xl mb-8 text-center">My Projects</h1>
          <div className="space-y-8">
            {projects.map((project, index) => (
                <div key={index} className="border border-gray-700 p-6 rounded-lg bg-gray-800">
                <h2 className="text-2xl mb-2">{project.title} - {project.type}</h2>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="space-x-4 text-purple-400">
                {project.links.github && (
                <a 
                  href={project.links.github} 
                  className="hover:text-purple-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              )}
              {project.links.website && (
                <a 
                  href={project.links.website} 
                  className="hover:text-purple-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
              )}
          </div>
        </div>
            ))}
          </div>
        </main>
      </div>
    )
  }