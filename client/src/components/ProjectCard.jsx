export default function ProjectCard({ project }) {
  return (
    <div className="border rounded p-4 shadow">
      <img src={project.image} alt={project.title} className="mb-2" />
      <h3 className="font-semibold text-xl">{project.title}</h3>
      <p>{project.description}</p>
      <p className="italic text-sm mt-1">Techs : {project.techs.join(', ')}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline mt-2 block">
        Voir le projet
      </a>
    </div>
  )
}
