import { Card } from "@/components/card";
import { BasicText } from "@/components/basicText";
import { WebsiteCard } from "@/components/websiteCard";
import ToolTip from "@/components/toolTip";
import { Title } from "@/components/title";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp, FaDownload, FaReact } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiVite, SiPostgresql } from "react-icons/si";
import { useState } from "react";


const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
});

export default function Home() {
  const [emailTooltip, setEmailTooltip] = useState({ content: "Copy", showIcon: false });
  const [phoneTooltip, setPhoneTooltip] = useState({ content: "Copy", showIcon: false });

  function scrollToClick(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  function handleCopyToClipboard(text: string, type: 'email' | 'phone') {
    navigator.clipboard.writeText(text);

    if (type === 'email') {
      setEmailTooltip({ content: "Copied", showIcon: true });
      setTimeout(() => setEmailTooltip({ content: "Copy", showIcon: false }), 2000);
    } else {
      setPhoneTooltip({ content: "Copied", showIcon: true });
      setTimeout(() => setPhoneTooltip({ content: "Copy", showIcon: false }), 2000);
    }
  }

  function downloadResume() {
    window.open('/Davi-Barbosa-resume.pdf', '_blank');
  }

  const skills = [
    { name: "React", icon: FaReact, color: "text-blue-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-gray-800" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-500" },
    { name: "Vite", icon: SiVite, color: "text-purple-500" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
  ];

  return (
    <div className={`${roboto.className} bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 min-h-screen`}>
      <header className="flex justify-between items-center bg-slate-800/80 backdrop-blur-sm w-full py-4 px-4 md:px-8 shadow-lg fixed z-50 border-b border-blue-500/20">
        <div className="flex items-center gap-3">
          <div className="flex gap-4 md:gap-8">
            <button onClick={() => scrollToClick('about')} className="text-blue-300 hover:text-blue-100 transition-colors">
              <BasicText>About</BasicText>
            </button>
            <button onClick={() => scrollToClick('projects')} className="text-blue-300 hover:text-blue-100 transition-colors">
              <BasicText>Projects</BasicText>
            </button>
            <button onClick={() => scrollToClick('skills')} className="text-blue-300 hover:text-blue-100 transition-colors">
              <BasicText>Skills</BasicText>
            </button>
            <button onClick={() => scrollToClick('contact')} className="text-blue-300 hover:text-blue-100 transition-colors">
              <BasicText>Contact</BasicText>
            </button>
          </div>
        </div>

        <div className="flex gap-3">
          <ToolTip content="View GitHub Profile" position="bottom">
            <a href="https://github.com/Dabisilva" target="_blank" className="text-blue-300 hover:text-blue-100 transition-colors">
              <FaGithub size={24} />
            </a>
          </ToolTip>
          <ToolTip content="View LinkedIn Profile" position="bottom">
            <a href="https://www.linkedin.com/in/davi-barbosa-da-silva/" target="_blank" className="text-blue-300 hover:text-blue-100 transition-colors">
              <FaLinkedin size={24} />
            </a>
          </ToolTip>
        </div>
      </header>


      <div className="px-4 py-24 md:py-32 lg:py-48">
        <div className="flex flex-col gap-8 lg:gap-16 max-w-7xl mx-auto">


          <Card className="bg-gradient-to-r from-slate-800/50 to-blue-800/50 border-blue-500/30">
            <div id="about" className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="relative">
                <Image
                  src="https://avatars.githubusercontent.com/u/57877449?v=4"
                  alt="Davi Silva"
                  width={300}
                  height={300}
                  className="rounded-full w-48 h-48 lg:w-64 lg:h-64 border-4 border-blue-500/50 shadow-2xl"
                />

              </div>

              <div className="text-center lg:text-left flex-1">
                <Title as="h1" className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                  Davi Silva
                </Title>
                <p className="text-xl md:text-2xl text-blue-200 mb-6 font-medium">
                  Web Developer
                </p>
                <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                  Passionate web and mobile developer with expertise in React, TypeScript, and modern web technologies.
                  Committed to creating exceptional user experiences and delivering high-quality solutions.
                </p>
                <ToolTip content="Download Resume" position="top">
                  <button
                    onClick={downloadResume}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto lg:mx-0"
                  >
                    <FaDownload size={18} />
                    Download Resume
                  </button>
                </ToolTip>
              </div>
            </div>
          </Card>

          <div id="projects" className="space-y-6">
            <Title as="h2" className="text-3xl md:text-4xl font-bold text-blue-300 text-center">
              Featured Projects
            </Title>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <WebsiteCard
                title="Dt Money"
                description="A comprehensive financial management application for tracking income and expenses with detailed summaries and analytics."
                url="https://dt-money-2-0-brown.vercel.app/"
              />
              <WebsiteCard
                title="Design System"
                description="A complete design system built with Storybook, featuring reusable components and comprehensive documentation."
                url="https://dabisilva.github.io/test-storybook/?path=/docs/home--docs"
              />
            </div>
          </div>

          <div id="skills" className="space-y-6">
            <Title as="h2" className="text-3xl md:text-4xl font-bold text-blue-300 text-center">
              Technical Skills
            </Title>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <Card key={index} className="bg-slate-800/50 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex flex-col items-center gap-3 p-6">
                    <skill.icon className={`text-3xl ${skill.color}`} />
                    <span className="text-blue-100 font-medium">{skill.name}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>



          <Card className="bg-gradient-to-r from-slate-800/50 to-blue-800/50 border-blue-500/30">
            <div id="contact" className="space-y-6">
              <Title as="h2" className="text-3xl md:text-4xl font-bold text-blue-300 text-center">
                Get In Touch
              </Title>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <ToolTip content={emailTooltip.content} position="top" showIcon={emailTooltip.showIcon}>
                  <button
                    onClick={() => handleCopyToClipboard('dabisilva@gmail.com', 'email')}
                    className="flex items-center gap-3 bg-slate-700/50 hover:bg-slate-600/50 border border-blue-500/30 hover:border-blue-400/50 px-6 py-4 rounded-lg transition-all duration-300 text-blue-100 hover:text-blue-50"
                  >
                    <FaEnvelope size={20} />
                    <span className="font-medium">dabisilva@gmail.com</span>
                  </button>
                </ToolTip>

                <ToolTip content={phoneTooltip.content} position="top" showIcon={phoneTooltip.showIcon}>
                  <button
                    onClick={() => handleCopyToClipboard('+55 61 998828280', 'phone')}
                    className="flex items-center gap-3 bg-slate-700/50 hover:bg-slate-600/50 border border-blue-500/30 hover:border-blue-400/50 px-6 py-4 rounded-lg transition-all duration-300 text-blue-100 hover:text-blue-50"
                  >
                    <FaWhatsapp size={20} />
                    <span className="font-medium">+55 61 998828280</span>
                  </button>
                </ToolTip>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
