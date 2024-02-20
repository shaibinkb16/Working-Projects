'use client'
import Link from "next/link"
import { Button } from "./button"


const Cta = () => {
  return (
    <section className="py-24 bg-teritary dark:bg-secondary/40">
        <div className="container mx-auto">
            <div className="flex flex-col items-center">
                <h2 className="h2 max-w-xl text-center mb-8">
                    Prepared to turn your ideas into reality? I am here to help
                </h2>
                <Link href='/conatct'>
                    <Button>Contact me</Button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Cta