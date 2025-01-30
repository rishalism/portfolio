"use client";

import React from "react";
import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedin, } from "react-icons/fa";
import { MailIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <motion.div className="w-full flex z-[20] h-full bg-transparent text-gray-200 shadow-lg px-12 p-[15px] ">
            <div className='flex gap-3 ' >
                <Link href={'https://www.linkedin.com/in/rishal-mohammed-up/'}> <FaLinkedin className="hover:scale-105 transition-transform duration-200 cursor-pointer" /></Link>
                <FaInstagram />
                <FaGithub />
                <MailIcon size={17} />
            </div>
            <div className="mb-[20px] text-[15px] mx-auto text-center">
                &copy; Rishal Mohammed up . All rights reserved
            </div>
        </motion.div>
    )
}

export default Footer