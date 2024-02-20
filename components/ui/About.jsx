import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js
import { User2, Mail as MailIcon, Home as HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DevImg from "./DevImg";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Alamkritha Siju'
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+91 9744038613'
  },
  {
    icon: <MailIcon size={20} />,
    text: 'alamkritha.siju1055@gmail.com'
  },
  {
    icon: <Calendar size={20} />,
    text: 'Born on 25 Oct, 2002'
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'B.Sc in Computer Science'
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Palakulam House, Kattapana'
  },
];

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'Pixeltoonz Academy of Film & Media',
        qualification: "Graphic Design & 3D Design",
        years: '2020 - 2023'
      },
      {
        university: 'Mahathma Gandhi University',
        qualification: "Bachelor of Science in Computer Science",
        years: '2020 - 2023'
      },
      {
        university: 'MES HSS Amayar',
        qualification: '+2 Computer Science',
        years: '2018 - 2020'
      },
     
    ],
  },
  {
    title: 'experience',
    data: [
      {
        company: 'Fresher',
        role: "Eager freelancer in Graphics Designing, dedicated to delivering excellence. Seeking new projects for impactful collaboration.",
      },
    ],
  },
];

const skillData = [
  {
    title: 'Skills',
    data: [
      { name: 'Adobe Photoshop' },
      { name: 'Adobe Illustrator' },
      { name: 'Adobe InDesign' },
      { name: 'Blender' },
    ],
  },
  {
    title: 'tools',
    data: [
      { imgPath: 'about/Adobe Photoshop CC.svg' },
      { imgPath: 'about/Adobe_Illustrator CC.svg' },
      { imgPath: 'about/Adobe Indesign CC.svg' },
      { imgPath: 'about/blender-icon.svg' },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About Me</h2>
        <div className='flex flex-col xl:flex-row'>
          <div className='hidden xl:flex flex-1 relative'>
            <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[500px] bg-no-repeat relative' imgSrc='/about/developer.png' />
          </div>
          <div className='flex-1'>
            <Tabs defaultValue='personal'>
              <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='qualification'>Qualifications</TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
              </TabsList>
              <div className='text-lg mt-12 xl:mt-8'>
                <TabsContent value='personal'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4'>Unmatched Service Quality for Over 10 Years</h3>
                    <p className='subtitle max-w-xl max-auto xl:mx-0'>I specialize in crafting intuitive websites with cutting-edge technology, delivering dynamic and engaging user experiences.</p>
                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                      {infoData.map((item, index) => (
                        <div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                          <div className='text-primary'>{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      ))}
                    </div>
                    <div className='flex flex-col gap-y-2'>
                      <div className='text-primary'>Language Skills</div>
                      <div className="border-b border-border"></div>
                      <div>English, Malayalam, Tamil, Hindi</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value='qualification'>
                  <div>
                    <h3 className='h3 mb-8 text-center xl:text-left'>My Awesome Journey</h3>
                    <div className='grid md:grid-cols-2 gap-y-8'>
                      <div className='flex  flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <Briefcase />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationData, 'experience').title}
                          </h4>
                        </div>
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'experience').data.map((item, index) => {
                            const { company, role, years } = item;
                            return (
                              <div className='flex gap-x-8 group' key={index}>
                                <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                  <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                </div>
                                <div>
                                  <div className='font-semibold text-xl leading-none mb-2'>{company}</div>
                                  <div className='text-lg leading-none text-muted-foreground mb-4'>{role}</div>
                                  <div className='text-base font-medium'>{years}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className='flex  flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <GraduationCap size={28}/>
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationData, 'education').title}
                          </h4>
                        </div>
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'education').data.map((item, index) => {
                            const { university, qualification, years } = item;
                            return (
                              <div className='flex gap-x-8 group' key={index}>
                                <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                  <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                </div>
                                <div>
                                  <div className='font-semibold text-xl leading-none mb-2'>{university}</div>
                                  <div className='text-lg leading-none text-muted-foreground mb-4'>{qualification}</div>
                                  <div className='text-base font-medium'>{years}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value='skills'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-8 '>What I use Everyday</h3>
                    <div className='mb-16'>
                      <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                      <div className='border-b border-border mb-4'></div>

                      <div>
                        {getData(skillData, 'Skills').data.map((item, index) => {
                          const { name } = item;
                          return (
                            <div className='w-2/4 text-center xl:text-left mx-auto xl:mx-0' key={index}>
                              <div>{name}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <h4 className='text-xl font-semibold mb-2 xl:text-left'>Tools</h4>
                      <div className='border-b border-border mb-4'></div>
                      <div className='flex gap-x-8 justify-center xl:justify-start'>
                        {getData(skillData, 'tools').data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image src={imgPath} width={48} height={48} alt="" priority />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
