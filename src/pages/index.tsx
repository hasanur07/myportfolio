import { HeartFilledIcon, } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Add01Icon, Agreement02FreeIcons, ArrowRight02FreeIcons, CodeFolderIcon, WhatsappIcon, } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from "react-router-dom";
import { Button } from "@heroui/button";
import WhoIAm from "@/components/home/whoiam";
import ProjectSection from "@/components/home/project_section";

gsap.registerPlugin(ScrollTrigger);

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex relative flex-col w-[100vw] p-0 h-[100svh] items-center justify-center">
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
      <section className="flex relative w-full">
        <WhoIAm />
      </section>
      <section className="flex relative w-full">
        <ProjectSection />
      </section>
      <section className="flex relative w-full">
        <Futter />
      </section>
    </DefaultLayout >
  );
}


function Futter() {
  // const divRef = useRef<HTMLDivElement>(null);
  // useLayoutEffect(() => {
  //   gsap.matchMedia().add("(min-width: 640px)", () => {
  //     const div = divRef.current;
  //     if (!div) return;
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: div,
  //         start: "top top",
  //         end: "+=100%",
  //         scrub: true,
  //       }
  //     });
  //     tl.fromTo(div, {
  //       xPercent: 100
  //     }, {
  //       xPercent: 0,
  //     });
  //     return () => {
  //       tl.scrollTrigger?.kill();
  //     };
  //   });
  // }, []);
  return (
    <div className="flex flex-col h-[100dvh] w-screen relative">
      <div className="flex sm:sticky top-0 overflow-hidden h-screen justify-center items-center">
        <section className="flex flex-col gap-6 w-full h-screen justify-center items-center bg-black">
          {/* <img src="/avatar-2.png" className="w-[100px]" /> */}
          <h5 className="text-3xl sm:text-[50px] sm:leading-16 text-center">Are you looking for the<br />perfect one?</h5>
          <p className="text-center text-lg font-light px-2 sm:px-0">Then you’re in the right place. Get the best designs you’re looking for.<br />Just reach out and let me know!</p>
          <div className="flex gap-4">
            <Button color="default" size="lg" radius="full" className="bg-white text-black" onPress={() => window.location.href = "mailto:hasanur@graphixel.in"} title="hasanur@doclet.app">Email Me</Button>
            <Button color="primary" size="lg" radius="full" startContent={<HugeiconsIcon icon={WhatsappIcon} />} className="px-4 bg-green-500 text-black" onPress={() => window.location.href = "https://wa.me/9051713742"}>Chat On Whatsapp</Button>
          </div>
          <div className="flex flex-wrap px-4 gap-2 sm:gap-6 text-[18px] w-full sm:w-[45rem] justify-center sm:justify-between items-center font-light pt-4">
            <Link to="https://github.com/hasanur07" target="_blank">GitHub</Link>
            <Link to="https://www.linkedin.com/in/mrhasanur/" target="_blank">LinkedIn</Link>
            <Link to="#" target="_blank">Behance</Link>
            <Link to="#" target="_blank">Dribbble</Link>
            <Link to="https://instagram.com/hasanur.12" target="_blank">Instagram</Link>
          </div>
          <span className="flex gap-2"><p>With 💕 By</p><p className="text-blue-400 cursor-pointer">hasanur.io</p></span>
        </section>
      </div>
    </div>);
}