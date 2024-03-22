import ProjectCard from "@/components/sub/ProjectCard";
import { PROJECTS } from "@/constants";

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="grid md:grid-cols-3 gap-10 px-10">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
