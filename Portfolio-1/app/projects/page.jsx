'use client';
import React,{useState} from 'react';
import { Tabs,TabsList,TabsContent,TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ui/ProjectCard";


const projectData=[
  {
    image:'/work/3.png',
    category:'react js',
    name:'Nexa website',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. .',
    link:'/',
    github:'/',
  },
  {
    image:'/work/2.png',
    category:'next js',
    name:'solstic website',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. .',
    link:'/',
    github:'/',
  },
  {
    image:'/work/1.png',
    category:'next js',
    name:'Lumina website',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. .',
    link:'/',
    github:'/',
  },
  {
    image:'/work/3.png',
    category:'next js',
    name:'Evolve website',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. .',
    link:'/',
    github:'/',
  },
  {
    image:'/work/4.png',
    category:'next js',
    name:'Ignite website',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. .',
    link:'/',
    github:'/',
  },
  {
    image:'/work/1.png',
    category:'fullstack',
    name:'Envision website',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. .',
    link:'/',
    github:'/',
  },
  {
    image:'/work/3.png',
    category:'fullstack',
    name:'Serenity website',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. .',
    link:'/',
    github:'/',
  },
  {
    image:'/work/2.png',
    category:'fullstack',
    name:'Nova website',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. .',
    link:'/',
    github:'/',
  },
  {
    image:'/work/4.png',
    category:'fullstack',
    name:'Zenith website',
    description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. .',
    link:'/',
    github:'/',
  },
];
const uniqueCategories = ['all projects', ...new Set(projectData.map(items => items.category))];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects=projectData.filter(project=>{

    return category==='all projects' ?project:project.category===category;
  });

  return (
    <section className='min-h-screen pt-12'>
      <div className="container mx-auto">
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>My Projects</h2>
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => (
              <TabsTrigger onClick={()=>setCategory(category)} key={index} value={category} className='capitalize w-[162px] md:w-auto'>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
              <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {filteredProjects.map((project,index)=>
                {
                  return(
                    <TabsContent value={category} key={index}>
                      <ProjectCard project={project} />
                    </TabsContent>
                  )
                })}
              </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;