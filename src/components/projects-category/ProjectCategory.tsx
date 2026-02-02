'use client';
import { motion } from 'framer-motion';
import styles from './ProjectCategory.module.css';
import { Project } from '@/data/projectsData';
import { ProjectDescription } from '../project-description/ProjectDescription';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { SliderBtns } from '../slider-btns/SliderBtns';
import { SectionTitle } from '../section-title/SectionTitle';

interface ProjectCategoryProps {
  type: string;
  projects: Project[];
}

export const ProjectCategory = ({ type, projects }: ProjectCategoryProps) => {
  const [project, setProject] = useState(projects[0]);
  const [index, setIndex] = useState(1);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSliderChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setIndex(currentIndex + 1);
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: 'easeIn' },
      }}
      className={styles.category}
    >
      <SectionTitle className={styles.titel}>{type} projects</SectionTitle>
      <div className={styles.content}>
        <ProjectDescription index={index} project={project} />
        <div className={styles.slider}>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            onSlideChange={handleSliderChange}
            className={styles.swiper}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className={styles.photo}>
                  <div className={styles.overlay}></div>
                  <div className={styles.img}>
                    <Image src={project.img} alt={project.title} fill />
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <SliderBtns />
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
};
