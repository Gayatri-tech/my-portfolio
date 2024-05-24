import Link from "next/link";

const ProjectCard = ({ title, desc, href, src }) => {
  return (
    <>
      <div className="card rounded-lg overflow-hidden shadow-lg border border-gray-400 w-72 m-auto transform transition-transform hover:scale-110">
        <img src={src} className="w-full" alt={title} />
        <div className="card-body p-4">
          <h5 className="card-title text-xl font-bold mb-2">{title}</h5>
          <p className="card-text text-gray-700">{desc}</p>
          <Link href={href}>
            <button className="btn btn-primary mt-4 px-4 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Visit Website
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
