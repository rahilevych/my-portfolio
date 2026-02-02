import { ProjectCategory } from '@/components/projects-category/ProjectCategory';
import { Project, projects } from '@/data/projectsData';

export default function ProjectsPage() {
  const groupedProjects = projects.reduce(
    (acc, project) => {
      if (!acc[project.type]) {
        acc[project.type] = [];
      }
      acc[project.type].push(project);
      return acc;
    },
    {} as Record<string, Project[]>,
  );

  return (
    <div>
      <div className='wrapper'>
        <div className='container'>
          <main className='main'>
            {Object.entries(groupedProjects).map(([type, projects]) => (
              <ProjectCategory key={type} type={type} projects={projects} />
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
