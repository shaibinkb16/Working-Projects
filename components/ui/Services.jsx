import { GanttChartSquare,Blocks, Gem ,Edit,Image,Paperclip} from "lucide-react";
import { Card,CardContent,CardDescription,CardHeader,CardTitle } from "./card";
import { Caesar_Dressing } from "next/font/google";


const ServicesData=[
    {
        icon:<GanttChartSquare size={72} strokeWidth={0.8} />,
        title:'Poster Designing',
        description: 'Elevate your message with our expert poster design service. Striking visuals, impactful messaging - we bring your ideas to life.'
    },
    {
        icon:<Image size={72} strokeWidth={0.8} />,
        title:'Photo Editing',
        description: 'Transforming images with precision and creativity. Photo editing services to enhance, retouch, and bring out the best in your visuals.'
    },
    {
        icon:<Edit size={72} strokeWidth={0.8} />,
        title:'Logo Designing',
        description: 'Crafting distinctive logos that resonate. Elevate your brand with our creative logo design services – unique, memorable, and tailored to your vision.'
    },
]


const Services = () => {
  return <section className="mb-12 xl:mb-36">
    <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">My Services</h2>
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
            {ServicesData.map((item,index)=>
            {
                return(
                    <Card className=' w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative 'key={index}>
                        <CardHeader className='text-primary absolute -top-[60px]'>
                            <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">{item.icon}</div>
                        </CardHeader>
                        <CardContent className='text-center'>
                            <CardTitle className='mb-4'>{item.title}</CardTitle>
                            <CardDescription className='text-lg'>{item.description}</CardDescription>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    </div>
  </section>
}

export default Services