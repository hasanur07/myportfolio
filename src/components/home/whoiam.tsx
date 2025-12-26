import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "M0,0 C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1 ");

function WhoIAm() {
    const headerRef = useRef<HTMLDivElement>(null);
    const mainRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.matchMedia().add("(min-width: 640px)", () => {
                document.fonts.ready.then(() => {
                    const header = headerRef.current;
                    if (!header) return;
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: mainRef.current,
                            start: "-100% top",
                            end: "top+=200% top",
                            scrub: true,
                        }
                    });
                    tl.fromTo(header.children[0], {
                        x: "-220%"
                    }, {
                        x: 0,
                        ease: "none",
                        duration: 2
                    }, 0);
                    tl.fromTo(header.children[1], {
                        x: "220%"
                    }, {
                        x: 0,
                        ease: "none",
                        duration: 2
                    }, 0);
                    tl.fromTo(header.children[2], {
                        x: "-220%"
                    }, {
                        x: 0,
                        ease: "none",
                        duration: 2
                    }, 0);
                    tl.fromTo(header.children[0], {
                        y: 0,
                    }, {
                        y: "100%",
                        ease: "none",
                        duration: 2
                    }, 2);
                    tl.fromTo(header.children[2], {
                        y: 0,
                    }, {
                        y: "-100%",
                        ease: "none",
                        duration: 2
                    }, 2);
                    tl.fromTo(header, {
                        width: "100vw",
                    },
                        {
                            width: "65vw",
                            ease: "hop",
                            duration: 2,
                        }, 4);

                    const tl2 = gsap.timeline({
                        scrollTrigger: {
                            trigger: mainRef.current,
                            start: "top+=200% top",
                            end: "top+=600% top",
                            scrub: true,
                        }
                    });
                    tl2.fromTo(mainRef.current, {
                        x: 0,
                    }, {
                        x: "-275vw",
                        ease: "none",
                        duration: 4,
                    }, 0);
                    const containers = mainRef.current!.querySelectorAll(".container");
                    containers.forEach((container, index) => {
                        tl2.fromTo(container, {
                            width: index == 0 ? "20vw" : "10vw"
                        }, {
                            width: "70vw",
                            ease: "none",
                            duration: index == 0 ? 1 : index == 1 ? 2 : index == 2 ? 3 : 4,
                        }, 0);
                    });
                    const imgs = mainRef.current!.querySelectorAll("img");
                    imgs.forEach((img, index) => {
                        tl2.fromTo(img, {
                            height: 40 / (index + 1) + "vh",
                            y: index == 0 ? "20vh" : 40 + (20 * (index)) + "vh",
                        }, {
                            height: "80vh",
                            y: "0vh",
                            ease: "none",
                            duration: 4 * (index + 1) / 4,
                        }, 0);
                    });
                    containers.forEach((container) => {
                        const slideEls = container.querySelectorAll(".slide");

                        gsap.fromTo(
                            slideEls,
                            {
                                y: 40,
                                opacity: 0,
                            },
                            {
                                y: 0,
                                opacity: 1,
                                duration: 0.8,
                                ease: "power3.out",
                                stagger: 0.15,
                                scrollTrigger: {
                                    trigger: container,
                                    containerAnimation: tl2,
                                    start: "left center",
                                    toggleActions: "play none none reverse",
                                },
                            }
                        );
                    });
                    containers.forEach((container) => {
                        const splitEls = container.querySelectorAll(".split-slide");

                        splitEls.forEach((el) => {
                            const split = new SplitText(el, {
                                type: "lines,words,chars",
                                linesClass: "line",
                                wordsClass: "word",
                                charsClass: "char",
                            });

                            gsap.fromTo(
                                split.chars,
                                {
                                    yPercent: 100,
                                    opacity: 0,
                                },
                                {
                                    yPercent: 0,
                                    opacity: 1,
                                    duration: 0.8,
                                    ease: "power4.out",
                                    stagger: 0.04,
                                    scrollTrigger: {
                                        trigger: container,
                                        containerAnimation: tl2,
                                        start: "left center",
                                        toggleActions: "play none none reverse",
                                    },
                                }
                            );
                        });
                    });

                    const tl3 = gsap.timeline({
                        scrollTrigger: {
                            trigger: mainRef.current,
                            start: "top+=600% top",
                            end: "top+=700% top",
                            scrub: true,
                        }
                    });
                    tl3.fromTo(containers[3], {
                        width: "70vw",
                    }, {
                        width: "30vw",
                        ease: "none",
                        duration: 1,
                    })
                    return () => {
                        tl.kill();
                        tl2.kill();
                        ScrollTrigger.getAll().forEach(st => st.kill());
                    };
                });
                return () => {
                    ScrollTrigger.getAll().forEach(st => st.kill());
                };
            }).add("(max-width: 639px)", () => {
                document.fonts.ready.then(() => {
                    const header = headerRef.current;
                    if (!header) return;
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: mainRef.current,
                            start: "top-=50% top",
                            end: "top+=100% top",
                            scrub: true,
                        }
                    });
                    tl.fromTo(header.children[0], {
                        x: "-220%"
                    }, {
                        x: 0,
                        ease: "none",
                        duration: 2
                    }, 0);
                    tl.fromTo(header.children[1], {
                        x: "220%"
                    }, {
                        x: 0,
                        ease: "none",
                        duration: 2
                    }, 0);
                    tl.fromTo(header.children[2], {
                        x: "-220%"
                    }, {
                        x: 0,
                        ease: "none",
                        duration: 2
                    }, 0);
                    tl.fromTo(header.children[0], {
                        y: 0,
                    }, {
                        y: "100%",
                        ease: "none",
                        duration: 2
                    }, 2);
                    tl.fromTo(header.children[2], {
                        y: 0,
                    }, {
                        y: "-100%",
                        ease: "none",
                        duration: 2
                    }, 2);

                    const tl2 = gsap.timeline({
                        scrollTrigger: {
                            trigger: mainRef.current,
                            start: "top+=100% top",
                            end: "top+=400% top",
                            scrub: true,
                        }
                    });
                    tl2.fromTo(mainRef.current, {
                        y: 0,
                    }, {
                        y: "-100vh",
                        ease: "none",
                        duration: 0.2,
                    }, 0);
                    const containers = mainRef.current!.querySelectorAll(".container");
                    containers.forEach((container, index) => {
                        tl2.fromTo(container, {
                            y: "100vh",
                        }, {
                            y: 0,
                            ease: "none",
                            duration: 0.5,
                            delay: index * 0.5,
                        }, 0);
                    });
                })
            })
            return () => {
                ScrollTrigger.getAll().forEach(st => st.kill());
            };
        }, mainRef);

        return () => ctx.revert();
    }, []);
    return (
        <div className="flex h-[2200vh] sm:h-[700vh] relative w-full">
            <div className="h-screen sticky top-0 overflow-hidden">
                <div ref={mainRef} className="flex flex-col sm:flex-row w-screen sm:w-[460vw] sm:h-screen">
                    <div ref={headerRef} className="flex flex-col w-screen h-[100vh] justify-center items-center pt-[58px] overflow-hidden">
                        <h5 className="text-1 font-anton text-7xl sm:text-[200px] transition-none">WHO I AM</h5>
                        <h5 className="text-2 font-anton text-7xl sm:text-[200px] bg-black z-2 transition-none">WHO I AM</h5>
                        <h5 className="text-3 font-anton text-7xl sm:text-[200px] transition-none">WHO I AM</h5>
                    </div>
                    <div className="flex relative flex-col sm:flex-row h-[400vh] sm:h-[100vh] w-screen sm:w-[360vw]">
                        <div className="container absolute sm:relative flex flex-col w-screen sm:w-[90vw] h-[100vh] bg-amber-400 overflow-hidden">
                            <div className="flex w-full p-6 sm:p-0 h-[60%] sm:h-[80%]">
                                <img src="/cover/cover-1.avif" alt="" className="flex w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col justify-between text-black h-[40%] sm:h-[20%] p-6 sm:p-4 w-full sm:w-[70vw]">
                                <div className="flex justify-between text-sm sm:text-base">
                                    <p className="slide px-4 py-1 border-1 border-black rounded-full">2022 - 2026</p>
                                    <p className="split-slide">A FULL STACK DEVELOPER</p>
                                </div>
                                <h5 className="split-slide text-3xl text-center">Developer</h5>
                                <p>001</p>
                            </div>
                        </div>
                        <div className="container absolute sm:relative flex flex-col w-screen sm:w-[90vw] h-[100vh] bg-blue-400">
                            <div className="flex w-full p-6 sm:p-0 h-[60%] sm:h-[80%]">
                                <img src="/cover/cover-2.avif" alt="" className="flex w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col justify-between text-black h-[40%] sm:h-[20%] p-6 sm:p-4 w-full sm:w-[70vw]">
                                <div className="flex justify-between text-sm sm:text-base">
                                    <p className="slide px-4 py-1 border-1 border-black rounded-full">2022 - 2026</p>
                                    <p className="split-slide">I DESIGN WHICH YOU THINK</p>
                                </div>
                                <h5 className="split-slide text-3xl text-center">Designer</h5>
                                <p>002</p>
                            </div>
                        </div>
                        <div className="container absolute sm:relative flex flex-col w-screen sm:w-[90vw] h-[100vh] bg-emerald-400">
                            <div className="flex w-full p-6 sm:p-0 h-[60%] sm:h-[80%]">
                                <img src="/cover/cover-3.avif" alt="" className="flex w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col justify-between text-black h-[40%] sm:h-[20%] p-6 sm:p-4 w-full sm:w-[70vw]">
                                <div className="flex justify-between text-sm sm:text-base">
                                    <p className="slide px-4 py-1 border-1 border-black rounded-full">2026</p>
                                    <p className="split-slide">I BUILD WHICH PEOPLE WANT</p>
                                </div>
                                <h5 className="split-slide text-3xl text-center">Entereponer</h5>
                                <p>003</p>
                            </div>
                        </div>
                        <div className="container absolute sm:relative flex flex-col w-screen sm:w-[90vw] h-[100vh] bg-purple-400">
                            <div className="flex w-full p-6 sm:p-0 h-[60%] sm:h-[80%]">
                                <img src="/cover/cover-4.avif" alt="" className="flex w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col justify-between text-black h-[40%] sm:h-[20%] p-6 sm:p-4 w-full sm:w-[70vw]">
                                <div className="flex justify-between text-sm sm:text-base">
                                    <p className="slide px-4 py-1 border-1 border-black rounded-full">2026</p>
                                    <p className="split-slide">WANT TO SEE THE WORLD</p>
                                </div>
                                <h5 className="split-slide text-3xl text-center">Traveler</h5>
                                <p>004</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhoIAm;