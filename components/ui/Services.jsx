import { GanttChartSquare,Blocks, Gem } from "lucide-react";
import { Card,CardContent,CardDescription,CardHeader,CardTitle } from "./card";
import { Caesar_Dressing } from "next/font/google";


const ServicesData=[
    {
        icon:<GanttChartSquare size={72} strokeWidth={0.8} />,
        title:'Web Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in velit nec lorem tempus commodo quis sed augue.'
    },
    {
        icon:<Blocks size={72} strokeWidth={0.8} />,
        title:'Web Devolpment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in velit nec lorem tempus commodo quis sed augue.'
    },
    {
        icon:<Gem size={72} strokeWidth={0.8} />,
        title:'App Devolpment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in velit nec lorem tempus commodo quis sed augue.'
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