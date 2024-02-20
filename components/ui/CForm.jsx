'use client';
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import {User,MailIcon,ArrowRightIcon,MessageSquare, Mail} from 'lucide-react';

const CForm = () => {
  return (
    <form className="flex flex-col gap-y-2">
        <div className="relative flex items-center mt-5 xl:mt-0">
            <Input  type="name" id="name" placeholder="Name" />
            <User className="absolute right-6 " size={20}/>
        </div>
        <div className="relative flex items-center mt-5 xl:mt-0">
            <Input  type="email" id="email" placeholder="Email" />
            <MailIcon className="absolute right-6 " size={20}/>
        </div>
        <div className="relative flex items-center mt-5 xl:mt-0">
            <Textarea placeholder="Type your  message here..." rows={4} cols={10} id="message"/>
        </div>
        <Button className='flex items-center max-w-[166px] gap-x-1 '>Let's Talk
        <ArrowRightIcon size={20}/></Button>
    </form>
  )
}

export default CForm