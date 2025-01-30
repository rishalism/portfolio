"use client";
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link";

interface Props {
  src: string
  title: string
  description: string
  href: any
}

const ProjectCard = ({ src, title, description, href }: Props) => {
  const [learnmore, SetLearnmore] = useState(false)
  return (
    <Card className="overflow-hidden  bg-black border border-[#2A0E61] transition-all w-[400px] duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={src || "/placeholder.svg"}
          alt={title}
          fill
          className="object-fill transition-all duration-300 hover:scale-110"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2 line-clamp-1">{title}</h3>
        <p className={`text-sm text-gray-400 ${learnmore ? 'line-clamp-none' : 'line-clamp-4'}`}>{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={href} legacyBehavior>
          <a className="w-full">
            <Button variant="ghost" className="w-full  text-purple-500 hover:text-purple-400 hover:border-2 hover:border-white hover:bg-black">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard

