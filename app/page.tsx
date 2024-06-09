import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CodeIcon, MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ContactForm from '@/components/contact-form'
import Essays from '@/components/essays'
import Projects from '@/components/projects'
import AboutMe from '@/components/about'
import Hero from '@/components/hero'

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutMe />
        <Projects />
        <Essays />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}