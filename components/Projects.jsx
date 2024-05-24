import ProjectCard from "./ProjectCard";
import project1 from "../public/project1.png";
import project2 from "../public/project2.png";
import project3 from "../public/project3.png";

const Projects = () => (
  <section id="projects" className="py-20 text-center">
    <h2 className="text-3xl font-bold mb-6">My Personal Projects</h2>
    <div className="flex flex-col gap-10 md:flex-row md:p-2">
      <ProjectCard
        title="Microsoft Clone"
        desc="Designed Microsoft-style interface with Tailwind CSS, ensuring
100% responsiveness and user-centric interface."
        href="https://cloningms.netlify.app/"
        src={project1.src}
      />
      <ProjectCard
        title="Spotify Clone"
        desc="Designed a Spotify clone with HTML, Tailwind CSS, and JavaScript
        featuring music playback, playlist management, and local song
        storage."
        href="https://github.com/Gayatri-tech/SpotifyClone-Tailwind"
        src={project2.src}
      />
      <ProjectCard
        title="Text-Utils"
        desc="Developed a project with Bootstrap CSS and React.js, delivering
        100% conversion accuracy and enhanced copy functionality."
        href="https://textessentials.netlify.app/"
        src={project3.src}
      />
    </div>
  </section>
);

export default Projects;
