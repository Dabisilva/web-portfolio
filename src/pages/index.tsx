import { Card } from "@/components/card";
import { BasicText } from "@/components/basicText";
import { WebsiteCard } from "@/components/websiteCard";
import ToolTip from "@/components/toolTip";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { Title } from "@/components/title";

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
    } else {
      setPhoneTooltip({ content: "Copied", showIcon: true });
    }
  }

  return (
    <div
      className={`${roboto.className}`}
    >
      <header className="flex justify-between items-center bg-slate-900 w-full py-4 px-4 md:px-8 shadow-md fixed z-50">
        <div className="flex items-center gap-3">
          <div className="flex gap-4 md:gap-8">
            <button onClick={() => scrollToClick('about')}>
              <BasicText>About</BasicText>
            </button>
            <button onClick={() => scrollToClick('projects')}>
              <BasicText>Projects</BasicText>
            </button>
            <button onClick={() => scrollToClick('info')}>
              <BasicText>Info</BasicText>
            </button>
          </div>
        </div>

        <div className="flex gap-3">
          <a href="https://github.com/Dabisilva" target="_blank">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/davi-barbosa-da-silva/" target="_blank" >
            <FaLinkedin size={24} />
          </a>
        </div>
      </header>
      <div className="bg-gradient-to-b from-gray-800 to-gray-600 items-center justify-items-center px-4 py-24 md:py-32 lg:py-48 min-h-screen">
        <div className="flex flex-col gap-6 lg:gap-12 max-w-7xl mx-auto">
          <Card>
            <div id="about" className="flex flex-col md:flex-row items-center w-full gap-8">
              <Image
                src="https://avatars.githubusercontent.com/u/57877449?v=4"
                alt="My image"
                width={360}
                height={360}
                className="rounded-full w-64 h-64 md:w-auto md:h-auto mx-auto md:mx-0"
              />

              <div className="items-start justify-between gap-8 md:gap-0">
                <Title as="h1" className="text-4xl md:text-6xl lg:text-8xl m-0 font-bold">
                  Welcome. <br />
                  I'm Davi Silva
                </Title>
                <div className="items-center text-lg md:text-xl lg:text-2xl font-medium mt-6">
                  <p className="mb-2">I'm a web and mobile developer with a passion for technology and problem-solving. I enjoy all aspects of my job and excel at completing tasks quickly and with high quality.</p>
                  <p>I'm committed to delivering exceptional results and continuously improving my skills to stay ahead in the ever-evolving tech industry.</p>
                </div>
              </div>

            </div>
          </Card>

          <div id="projects" className="flex items-start flex-col w-full">
            <Title as="h2" className="text-blue-400">My projects</Title>

            <div className="flex flex-col md:flex-row md:flex-wrap mt-10 md:mt-20 gap-4">
              <WebsiteCard
                title="Dt money"
                description="A crontroler of money the you can set what you earn and spend. You can also see a list e a summary of all of them."
                url="https://dt-money-2-0-brown.vercel.app/"
              />

              <WebsiteCard
                title="DS Storybook"
                description="Design System made with Storybook"
                url="https://dabisilva.github.io/test-storybook/?path=/docs/home--docs"
              />
            </div>
          </div>

          <div id="info" className="flex items-start flex-col w-full">
            <Title as="h2" className="text-blue-400">Connect with me</Title>

            <div className="flex flex-col md:flex-row md:flex-wrap mt-10 md:mt-20 gap-4">
              <ToolTip content={emailTooltip.content} position="top" showIcon={emailTooltip.showIcon}>
                <span className="flex items-center gap-2 text-lg md:text-base cursor-pointer hover:text-blue-400 transition-colors" onClick={() => handleCopyToClipboard('dabisilva@gmail.com', 'email')}>
                  <FaEnvelope size={24} />
                  dabisilva@gmail.com
                </span>
              </ToolTip>
              <ToolTip content={phoneTooltip.content} position="top" showIcon={phoneTooltip.showIcon}>
                <span className="flex items-center gap-2 text-lg md:text-base cursor-pointer hover:text-blue-400 transition-colors" onClick={() => handleCopyToClipboard('+55 61 998828280', 'phone')}>
                  <FaWhatsapp size={24} />
                  +55 61 998828280
                </span>
              </ToolTip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
