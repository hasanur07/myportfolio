import { useLayoutEffect, useRef, useState } from "react";
import clsx from "clsx";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { Link } from "react-router-dom";
import { Link as HeroLink } from "@heroui/link";
gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1 ");

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  // useLayoutEffect(() => {
  //   const nav = navRef.current;
  //   if (!nav) return;
  //   const handleScroll = () => {
  //     if (window.scrollY > 50) {
  //       nav.classList.add("bg-black/90", "backdrop-blur-sm", "border-b", "border-white/10");
  //     } else {
  //       nav.classList.remove("bg-black/90", "backdrop-blur-sm", "border-b", "border-white/10");
  //     }
  //   }
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   }
  // }, [navRef]);

  function openMenu() {
    const section = sectionRef.current;
    if (!section) return;
    setIsAnimating(true);
    gsap.fromTo(section, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
    },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "hop",
        onComplete: () => {
          setIsAnimating(false);
        }
      });
    const slideTexts = section.querySelectorAll(".slide-text");
    slideTexts.forEach((text, index) => {
      gsap.fromTo(text, {
        y: 20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power4.out",
        delay: 0.5 + index * 0.05
      },);
    });
    gsap.fromTo(section.querySelectorAll(".section-box"), {
      height: 0
    }, {
      height: "100%",
      duration: 1,
      ease: "power4.out",
      delay: 0.25
    });
    gsap.fromTo(section.querySelectorAll(".section-header span"), {
      rotateY: 90,
      y: "100%",
      x: 100,
    }, {
      rotateY: 0,
      y: 0,
      x: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power4.out",
      delay: 0.5,
    });
  }

  function closeMenu() {
    const section = sectionRef.current;
    if (!section) return;
    setIsAnimating(true);
    gsap.fromTo(section, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
    },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 0.5,
        ease: "power4.inOut",
        onComplete: () => {
          setIsAnimating(false);
        }
      });
  }

  const MyLink = ({ to, className, children }: { to: string, className?: string, children: React.ReactNode }) => {
    return (
      <Link to={to} className={className} onClick={() => {
        setIsOpen(false);
        closeMenu();
      }}>
        {children}
      </Link>
    );
  }

  return (
    <nav
      ref={navRef}
      className="w-full h-[58px] px-6 sm:px-16 py-4 flex justify-between fixed top-0 left-0 right-0 z-50">
      <Link to="/" className="flex items-center gap-0.5 text-white">
        <p className="text-xl">
          Hasanur Mondal
        </p>
        <span className="text-red-600 font-bold">.</span>
      </Link>

      <div className="flex items-center z-10">
        {/* MENU BUTTON */}
        <div
          onMouseEnter={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
          onClick={() => {
            if (isAnimating) return;
            setIsAnimating(true);
            setIsOpen((prev) => !prev);
            if (!isOpen) {
              openMenu();
            } else {
              closeMenu();
            }
          }}
          ref={buttonRef}
          className={clsx(
            "flex relative items-center rounded-full bg-white text-black text-[12px] h-10 cursor-pointer group transition-all duration-300 ease-in-out",
            isOpen ? "w-10" : "w-24"
          )}
        >
          {/* TEXT */}
          <p
            className={clsx(
              "transition-all duration-300 ease-in-out",
              isOpen ? "ml-0 opacity-0" : isMouseOver ? "ml-3 opacity-100" : "ml-6 opacity-100"
            )}
          >
            MENU
          </p>

          {/* ICON */}
          <div
            className={clsx(
              "absolute flex flex-col gap-1 justify-center items-center rounded-full bg-amber-600 overflow-hidden transition-all duration-300 ease-in-out",
              isOpen
                ? "right-0 w-10 h-10"
                : isMouseOver ? "right-1 w-8 h-8" : "right-5 w-2 h-2",
              isOpen && isMouseOver && "scale-120"
            )}
          >
            {/* LINE 1 */}
            <div
              className={clsx(
                "w-[18px] h-[2px] bg-black origin-center transition-all duration-300 ease-in-out",
                isOpen
                  ? "rotate-45 translate-y-[3px]"
                  : isMouseOver ? "opacity-100" : "opacity-0"
              )}
            />
            {/* LINE 2 */}
            <div
              className={clsx(
                "w-[18px] h-[2px] bg-black origin-center transition-all duration-300 ease-in-out",
                isOpen
                  ? "-rotate-45 -translate-y-[3px]"
                  : isMouseOver ? "opacity-100" : "opacity-0"
              )}
            />
          </div>
        </div>
      </div>
      <section
        ref={sectionRef}
        className="flex flex-col justify-between px-6 sm:px-16 fixed top-0 left-0 right-0 w-full h-[100dvh] bg-white transform-3d perspective-[1000px]"
        style={{
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
        }}
      >
        <div>
          <div className="w-full h-[58px] py-4 flex justify-between">
            <MyLink className="flex items-center gap-0.5 text-black" to="/">
              <p className="text-xl">
                Hasanur Mondal
              </p>
              <span className="text-red-600 font-bold">.</span>
            </MyLink>
          </div>
          <div className="flex mt-4 justify-between">
            <div className="flex flex-col w-[50%] sm:w-[40%] text-black items-start sm:items-end">
              <MyLink className="slide-text flex px-0 sm:px-8 py-2 sm:w-52 text-xl font-medium text-black gap-2 transition-colors" to="/about">
                <HugeiconsIcon icon={ArrowUpRight01Icon} className="hidden sm:flex" />
                About Me
              </MyLink>
              <MyLink className="slide-text flex px-0 sm:px-8 py-2 sm:w-52 text-xl font-medium text-black gap-2 transition-colors" to="/projects">
                <HugeiconsIcon icon={ArrowUpRight01Icon} className="hidden sm:flex" />
                Projects
              </MyLink>
              <MyLink className="slide-text flex px-0 sm:px-8 py-2 sm:w-52 text-xl font-medium text-black gap-2 transition-colors" to="/blog">
                <HugeiconsIcon icon={ArrowUpRight01Icon} className="hidden sm:flex" />
                Blog
              </MyLink>
              <MyLink className="slide-text flex px-0 sm:px-8 py-2 sm:w-52 text-xl font-medium text-black gap-2 transition-colors" to="/contact">
                <HugeiconsIcon icon={ArrowUpRight01Icon} className="hidden sm:flex" />
                Contact Me
              </MyLink>
            </div>
            <div className="flex flex-col sm:flex-row w-[50%] sm:w-[35%] mt-2 gap-10 text-black pb-2 text-sm">
              <div className="flex flex-col sm:w-1/2 justify-between gap-4 h-full">
                <div>
                  <p className="slide-text font-bold text-black">BARASAT</p>
                  <p className="slide-text font-bold text-black">NORTH 24 PARGANAS</p>
                  <p className="slide-text font-bold text-black">WEST BENGAL</p>
                  <p className="slide-text font-bold text-black">INDIA</p>
                </div>
                <a href="mailto:hasanur@doclet.app" className="slide-text font-bold text-black">
                  hasanur@doclet.app
                </a>
              </div>
              <div className="flex flex-col sm:w-1/2 gap-4 justify-between h-full">
                <div className="flex flex-col">
                  <HeroLink className="slide-text font-bold text-sm text-black">INSTAGRAM</HeroLink>
                  <HeroLink className="slide-text font-bold text-sm text-black">LINKEDIN</HeroLink>
                  <HeroLink className="slide-text font-bold text-sm text-black">GITHUB</HeroLink>
                </div>
                <div>
                  <p className="slide-text font-bold text-black">+91 9051713742</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full h-[26vh] sm:h-[50vh] pb-6 pt-16 justify-between items-end">
          <div className="section-box flex w-[40%] p-2 sm:p-6 bg-black/10">
            <img src="/689c61f22aa5f873796412.png" alt="Illustration" className="w-full h-full object-cover" />
          </div>
          <div className="text-black flex items-end justify-end">
            <h1 className="section-header -mb-2 sm:-mb-6"
            >
              <span className="inline-block font-anton font-extrabold text-9xl sm:text-[310px]">H</span>
              <span className="inline-block font-anton font-extrabold text-9xl sm:text-[310px]">M</span>
            </h1>
          </div>
        </div>
      </section>
    </nav>
  );
};
