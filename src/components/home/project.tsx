import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

function Projects() {
    const mainRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement>(null);
    const detailsRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const main = mainRef.current;
        if (!main) return;
        gsap.matchMedia().add("(min-width: 640px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: main,
                    start: "top bottom",
                    end: "top top",
                    scrub: true,
                }
            });
            tl.fromTo(main, { y: 0 }, { y: -200, ease: "none", duration: 1 });
            const project = projectRef.current;
            tl.fromTo(project, {
                width: "70vw",
            }, {
                width: "30vw",
                ease: "none",
                duration: 1,
            }, 0);
            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: project,
                    start: "top top",
                    end: "top+=90% top",
                    scrub: true,
                }
            });
            const hight = ((window.innerWidth * 0.3) * (2.5 / 4)) * (project?.children.length || 0) - window.innerHeight - 280;
            tl2.fromTo(project, {
                y: 0,
            }, {
                y: -(hight),
                ease: "none",
            });
            const tl3 = gsap.timeline({
                scrollTrigger: {
                    trigger: project,
                    start: "top+=170% top",
                    end: "top+=190% top",
                    scrub: true,
                }
            });
            tl3.fromTo(project, {
                xPercent: 0,
            }, {
                xPercent: -100,
                ease: "none",
                duration: 1,
            });
        });
        const details = detailsRef.current;
        const detailsHeder = details?.querySelector("h5");
        if (!details || !detailsHeder) return;
        ScrollTrigger.create({
            trigger: details,
            start: "top-=10% top",
            end: "bottom top",
            scrub: true,
            onEnter: () => {
                gsap.to(detailsHeder, { y: 0, duration: 0.5 });
            },
            onLeaveBack: () => {
                gsap.to(detailsHeder, { y: 100, duration: 0.5 });
            }
        });
        const detailsParagraph = details.querySelector("p");
        document.fonts.ready.then(() => {
            if (!detailsParagraph) return;
            const split = new SplitText(detailsParagraph, { type: "lines,words" });
            gsap.set(split.words, { y: 100, opacity: 0 });
            gsap.set(split.lines, { overflow: "hidden", display: "inline-block" });
            ScrollTrigger.create({
                trigger: details,
                start: "top-=10% top",
                end: "bottom top",
                scrub: true,
                onEnter: () => {
                    gsap.fromTo(split.words, {
                        y: 100,
                        opacity: 0,
                    }, {
                        y: 0,
                        opacity: 1,
                        stagger: 0.03,
                        duration: 0.6,
                    });
                },
                onLeaveBack: () => {
                    gsap.to(split.words, {
                        y: 100,
                        opacity: 0,
                        duration: 0.6,
                    });
                }
            });
        });
    }, []);
    return (
        <div ref={mainRef} className="flex relative w-screen h-[300vh] sm:h-[400vh]">
            <div className="flex flex-col sm:flex-row sm:sticky top-0 overflow-hidden sm:h-[calc(100vh+200px)]">
                <div ref={projectRef} className="flex flex-col p-6 sm:p-0 gap-4 sm:gap-0 shrink-0">
                    <ProjectBox img="projects/project-1.jpeg" />
                    <ProjectBox img="projects/project-2.jpeg" />
                    <ProjectBox img="projects/project-3.jpeg" />
                    <ProjectBox img="projects/project-4.jpeg" />
                    <ProjectBox img="projects/project-5.jpeg" />
                    <ProjectBox img="projects/project-6.jpeg" />
                    <ProjectBox img="projects/project-7.jpeg" />
                    <div className="flex shrink-0 w-full aspect-[4/2.5] bg-[#171625] justify-center items-center">
                        <div className="flex p-4 border-white border-1 rounded-full gap-2 cursor-pointer text-white font-medium hover:gap-4 transition-all duration-300">
                            SEE ALL PROJECTS
                            <HugeiconsIcon icon={ArrowRight01Icon} className="w-6 h-6" />
                        </div>
                    </div>
                </div>
                <div ref={detailsRef} className="flex shrink-0 w-screen h-screen p-6 py-16 pt-24 sm:p-16 sm:w-auto sm:pt-[280px] sm:h-[calc(100vh+216px)] z-10 text-white flex-col justify-between gap-4">
                    <div className="flex overflow-hidden">
                        <h5 className="text-2xl sm:text-5xl translate-y-[100%]">Projects</h5>
                    </div>
                    <div>
                        <p className="text-md sm:text-3xl w-full sm:w-[60vw]">Creativity and innovation drive our process,
                            fueled by a commitment to uniqueness and tailor‑made
                            solutions. We joyfully reject the ordinary, the familiar, and the
                            commonplace, always striving to chart new territories in our
                            work.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProjectBox({ img }: { img: string }) {
    const boxRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const topRef = useRef<HTMLDivElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const box = boxRef.current;
        const imgEl = imgRef.current;
        const overlay = overlayRef.current;
        const top = topRef.current;
        const bottom = bottomRef.current;

        if (!box || !imgEl || !overlay || !top || !bottom) return;

        const ctx = gsap.context(() => {
            /* -----------------------------
               SCROLL PARALLAX (image)
            ----------------------------- */
            gsap.matchMedia().add("(min-width: 640px)", () => {
                gsap.fromTo(
                    imgEl,
                    { yPercent: -20 },
                    {
                        yPercent: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: box,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true,
                        },
                    }
                );
            })

            /* -----------------------------
               INITIAL STATES
            ----------------------------- */
            gsap.set(overlay, { backgroundColor: "rgba(0,0,0,0)" });
            gsap.set(top, { yPercent: -200 });
            gsap.set(bottom, { yPercent: 200 });

            /* -----------------------------
               HOVER TIMELINE
            ----------------------------- */
            const hoverTl = gsap.timeline({ paused: true });

            hoverTl
                // overlay bg fade
                .to(overlay, {
                    backgroundColor: "rgba(0,0,0,0.2)", // 20%
                    duration: 0.25,
                    ease: "none",
                }, 0)

                // top content slides down
                .to(top, {
                    yPercent: 0,
                    duration: 0.35,
                    ease: "power3.out",
                }, 0)

                // bottom content slides up
                .to(bottom, {
                    yPercent: 0,
                    duration: 0.35,
                    ease: "power3.out",
                }, 0);

            /* -----------------------------
               HOVER EVENTS
            ----------------------------- */
            box.addEventListener("mouseenter", () => hoverTl.play());
            box.addEventListener("mouseleave", () => hoverTl.reverse());
        }, box);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={boxRef}
            className="relative shrink-0 w-full aspect-[4/2.5] overflow-hidden"
        >
            {/* Image */}
            <img
                ref={imgRef}
                src={img}
                alt=""
                className="w-full h-[150%] object-cover"
            />

            {/* Overlay */}
            <div
                ref={overlayRef}
                className="absolute inset-0 flex flex-col justify-between p-4 text-white"
            >
                {/* TOP */}
                <div ref={topRef} className="overflow-hidden">
                    <div className="flex justify-between text-sm">
                        <p>WEB DEVELOPMENT</p>
                        <p>2025</p>
                    </div>
                </div>

                {/* BOTTOM */}
                <div ref={bottomRef} className="overflow-hidden">
                    <div className="flex justify-between items-center">
                        <h4 className="text-xl font-medium">doclet.app</h4>

                        <div className="flex items-center gap-1 cursor-pointer text-[12px] px-3 py-1 rounded-full bg-white text-black">
                            <span>VIEW</span>
                            <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;