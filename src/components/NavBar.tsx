'use client'
import React,{useState} from "react"
import {HoveredLink, Menu, MenuItem, ProductItem} from "./ui/navbar-menu"
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import {cn} from "../utils/utils"
import Link from "next/link"
export default function NavBar({ className }: { className?: string }){
     const [active, setActive] = useState<string | null>(null);
    return(
       <div 
       className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}
       >
        <Menu setActive={setActive}>
            
            <MenuItem setActive = {setActive} active={active} item="Services">
                <HoveredLink href="/web-dev">
                Web Development
                </HoveredLink><br />
                <HoveredLink href="/interface-design">
                Interface Design
                </HoveredLink><br />
                <HoveredLink href="/seo">
                Search Engine Optimization
                </HoveredLink><br />
                <HoveredLink href="/branding">
                Branding
                </HoveredLink>
            </MenuItem>
           
           
            <MenuItem setActive = {setActive} active={active} item="Our Courses">
             <HoveredLink href="/our-courses">
                Computer Science
             </HoveredLink><br />
             <HoveredLink href="/our-courses">
                Data Science
             </HoveredLink><br/>
                <HoveredLink href="/our-courses">
                Blockchain
             </HoveredLink><br/>
            <HoveredLink href="/our-courses">
                Machine Learning
             </HoveredLink>

            </MenuItem>
            <MenuItem setActive = {setActive} active={active} item="Pricing">
                <HoveredLink href="/pricing">
                Individual
                </HoveredLink><br />
                <HoveredLink href="/pricing">
                Business
                </HoveredLink><br />
                <HoveredLink href="/pricing">
                Enterprise
                </HoveredLink>
            </MenuItem>
         
            
            <MenuItem setActive = {setActive} active={active} item="Contact">
                <HoveredLink href="/contact">
                Email
                </HoveredLink><br />
                <HoveredLink href="/contact">
                LinkedIn
                </HoveredLink><br />
                <HoveredLink href="/contact">
                Twitter
                </HoveredLink><br />
                <HoveredLink href="/contact">
                Github
                </HoveredLink>
            </MenuItem>
            
        </Menu>
       </div>
    )
}