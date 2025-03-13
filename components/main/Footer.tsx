"use client";

import React from "react";
import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedin, } from "react-icons/fa";
import { MailIcon } from "lucide-react";

const Footer = () => {
    return (
        <motion.div className="w-full flex z-[20] h-full bg-transparent text-gray-200 shadow-lg px-12 p-[15px] ">
            <div className='flex gap-3 items-center ' >
                <a href="https://www.linkedin.com/in/rishal-mohammed-up//" target="_blank" rel="noopener noreferrer"> <FaLinkedin className="hover:scale-105 transition-transform duration-200 cursor-pointer" /></a>
                <a href="https://www.instagram.com/rishalism/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://www.github.com/rishalism/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <div className="flex items-center">
                    <MailIcon size={17} /> <span className="text-sm">rishalmuhammedup@gmail.com</span>
                </div>
            </div>
            <div className="mb-[20px] text-[15px] mx-auto text-center">
                &copy; Rishal Mohammed up . All rights reserved
            </div>
        </motion.div>
    )
}

export default Footer