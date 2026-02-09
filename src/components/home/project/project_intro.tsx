import "./../../../styles/project/intro.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectIntro() {
    const mainRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const main = mainRef.current;
        if (!main) return;
        gsap.set(main.querySelectorAll(".text"), { opacity: 0 });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: main,
                start: "top top",
                end: "top+=200% top",
                scrub: true,
            },
        });
        tl.fromTo(main.querySelector(".text-1"),
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 0.1,
            }
            , 0)
            .fromTo(main.querySelector(".text-2"),
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.1,
                }
                , 0.5);
        tl.fromTo(main.querySelector(".text-3"),
            { opacity: 0 },
            {
                opacity: 1,
                duration: 0.1,
            }
            , 1)
            .fromTo(main.querySelector(".text-4"),
                { opacity: 0 },
                { opacity: 1, duration: 0.1 }
                , 1.5);
        tl.fromTo(main.querySelector(".text-5"),
            { opacity: 0 },
            { opacity: 1, duration: 0.1 }
            , 2)
            .fromTo(main.querySelector(".text-6"),
                { opacity: 0 },
                { opacity: 1, duration: 0.1 }
                , 2.5);
    }, []);
    return (
        <section className="relative w-screen h-[300vh]">
            <div ref={mainRef} className="project-intro sticky top-0 p-16 justify-center items-center flex flex-col gap-8 w-screen h-screen">
                <div className="flex flex-col items-center">
                    <div className="flex justify-center items-end gap-2">
                        <div className="flex flex-col items-end">
                            <h1 className="text text-1">I</h1>
                            <h1 className="text text-3 text-[red]">WHAT</h1>
                            <h5 className="text text-5">REALY</h5>
                        </div>
                        <div className="-mb-[2px]">
                            <h5 className="text text-2">BUILD</h5>
                            <h5 className="text text-4 mt-[4px]">PEOPLE</h5>
                            <h1 className="text text-6">NEED</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}