// components/Projects.js
const Projects = () => (
  <section id="projects" className="py-20 text-center">
    <h2 className="text-3xl font-bold mb-4">Projects</h2>
    <div className="flex flex-col items-center space-y-8">
      <div className="bg-white shadow-md rounded p-4">
        <h3 className="text-xl font-bold">Project 1</h3>
        <p className="text-gray-600">Description of project 1.</p>
      </div>
      <div className="bg-white shadow-md rounded p-4">
        <h3 className="text-xl font-bold">Project 2</h3>
        <p className="text-gray-600">Description of project 2.</p>
      </div>
    </div>
  </section>
);

export default Projects;
