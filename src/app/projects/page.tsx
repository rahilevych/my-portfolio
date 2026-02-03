'use client';
import { motion } from 'framer-motion';
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
          <motion.main
            className='main'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.5, ease: 'easeOut' }}
          >
            {Object.entries(groupedProjects).map(([type, projects]) => (
              <ProjectCategory key={type} type={type} projects={projects} />
            ))}
          </motion.main>
        </div>
      </div>
    </div>
  );
}
