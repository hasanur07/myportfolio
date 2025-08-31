import { HeartFilledIcon, Logo, MainIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Add01Icon, Agreement01Icon, Agreement02FreeIcons, AiEditingIcon, AiIdeaIcon, ArrowRight02FreeIcons, ArrowUpRight01Icon, CodeCircleIcon, CodeFolderIcon, CodeIcon, LineFreeIcons, SmileDizzyFreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function IndexPage() {
  const AboutTextContainer = useRef<HTMLDivElement>(null);
  const text =
    "I’m Hasanur Mondal, and I design experiences that people love to use. I focus on making digital products that feel intuitive and easy, while also solving real problems. My goal is to create clean, thoughtful designs that make a difference for both users and businesses!";
  useLayoutEffect(() => {
    if (!AboutTextContainer.current) return;

    const words = AboutTextContainer.current.querySelectorAll(".fade-word");

    gsap.fromTo(
      words,
      { opacity: 0.25 },
      {
        opacity: 1,
        ease: "power1.inOut",
        duration: 2,
        stagger: 0.2,
        scrollTrigger: {
          trigger: AboutTextContainer.current,
          start: "top 50%",
          end: "bottom 55%",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <DefaultLayout>
      <section className="flex relative flex-col w-full h-[100dvh] items-center justify-center">
        <span className="flex flex-col text-3xl font-medium justify-center items-center w-[120%] sm:w-full scale-80 sm:scale-100">
          <span className="flex gap-2 items-center">
            <p>I am</p>
            <div className="bg-[rgb(255,0,0)] rounded-full flex justify-center items-center w-14 h-7">
              <HeartFilledIcon
                width={16}
                color="black"
              />
            </div>
            <p>Hasanur.</p>
          </span>
          <span className="flex gap-2 items-center">
            <p>Where lines of</p>
            <div className="bg-[rgb(26,255,0)] rounded-full flex justify-center items-center w-14 h-7">
              <HugeiconsIcon
                icon={CodeFolderIcon}
                size={28}
                color="black"
              />
            </div>
            <p>code</p>
          </span>
          <span className="flex gap-2 items-center">
            <p>meet with</p>
            <div className="bg-[rgb(255,165,21)] rounded-full flex justify-center items-center w-14 h-7">
              <HugeiconsIcon
                icon={Agreement02FreeIcons}
                size={28}
                color="black"
              />
            </div>
            <p>pixels of design</p>
          </span>
        </span>
        <div className="font-dm flex absolute bottom-10 p-2 gap-1 border border-white/20 rounded-full h-12 justify-center items-center">
          <p>❤️</p>
          <HugeiconsIcon
            icon={Add01Icon}
            size={16}
          />
          <p>Hasanur M</p>
          <HugeiconsIcon
            icon={ArrowRight02FreeIcons}
            size={16}
          />
          <p>🔥</p>
        </div>
      </section>
      <section className="flex relative w-full h-auto sm:h-[100dvh] items-center justify-center">
        <p ref={AboutTextContainer} className="flex h-[150vh] sm:h-auto flex-wrap text-[42px] max-w-[75rem] justify-center leading-8 sm:leading-14 gap-2 my-6 sm:my-0">
          {text.split(" ").map((word, i) => (
            <span key={i} className="fade-word inline-block opacity-50">
              {word}
            </span>
          ))}
        </p>
      </section>
      <section className="flex relative w-full h-[250vh] px-0 sm:px-4 sm:h-[100dvh] items-center justify-center">
        <div className="font-dm flex absolute top-10 p-2 gap-1 border border-white/20 rounded-full h-12 justify-center items-center">
          <p>🤖</p>
          <HugeiconsIcon
            icon={ArrowRight02FreeIcons}
            size={16}
          />
          <p>Project Showcase</p>
          <HugeiconsIcon
            icon={ArrowRight02FreeIcons}
            size={16}
          />
          <p>🥰</p>
        </div>
        <Link to="#" className="font-dm flex absolute bottom-10 p-2 pl-4 hover:bg-foreground-100 border border-white/20 rounded-full h-12 justify-center items-center gap-2">
          <p>Explore All</p>
          <div className="bg-white rounded-full flex justify-center items-center w-14 h-7">
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              size={18}
              color="black"
            />
          </div>
        </Link>
        <div className="max-w-[75rem] grid grid-cols-1 grid-rows-3 sm:grid-rows-1 sm:grid-cols-2 md:grid-rows-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-4 relative rounded-3xl p-4 hover:bg-green-300/20 transition cursor-pointer">
            <img className="flex rounded-2xl" src="https://cdn.dribbble.com/userupload/4383191/file/original-1192996cc6f4172597ad5617d87d4079.jpg?resize=752x&vertical=center" alt="" />
            <h5 className="text-3xl text-center">Unnathi - Kerala Empowerment Society</h5>
            <p className="text-sm opacity-50 text-center">Unnathi (Kerala Empowerment Society) is an initiative by the Government of Kerala, registered under the Travancore-Cochin Literary, Scientific and Charitable Societies Registration Act.</p>
          </div>
          <div className="flex flex-col gap-4 relative rounded-3xl p-4 hover:bg-red-300/20 transition cursor-pointer">
            <img className="flex rounded-2xl" src="/689ba54e5b61d189139448.png" alt="" />
            <h5 className="text-3xl text-center">OpenGrad - Entrance Exam Solution</h5>
            <p className="text-sm opacity-50 text-center">Unnathi (Kerala Empowerment Society) is an initiative by the Government of Kerala, registered under the Travancore-Cochin Literary, Scientific and Charitable Societies Registration Act.</p>
          </div>
          <div className="flex flex-col sm:hidden md:flex gap-4 relative rounded-3xl p-4 hover:bg-amber-500/20 transition cursor-pointer">
            <img className="flex rounded-2xl" src="/689c61f22aa5f873796412.png" alt="" />
            <h5 className="text-3xl text-center">Urban Trash - Waste management system</h5>
            <p className="text-sm opacity-50 text-center">Unnathi (Kerala Empowerment Society) is an initiative by the Government of Kerala, registered under the Travancore-Cochin Literary, Scientific and Charitable Societies Registration Act.</p>
          </div>
        </div>
      </section>
    </DefaultLayout >
  );
}
