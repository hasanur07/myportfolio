import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
    const ctaRef = useRef<HTMLDivElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const lastWidth = useRef<number>(0);

    const matchPosition = (el: HTMLElement, ref: HTMLElement) => {
        const e = el.getBoundingClientRect();
        const r = ref.getBoundingClientRect();

        gsap.set(el, {
            x: r.left - e.left,
            y: r.top - e.top,
        });
    };

    const buildTimeline = (targetFontSize: string) => {
        const cta = ctaRef.current;
        if (!cta) return;

        const pragraph = cta.querySelector(".pragraph") as HTMLElement;
        const topLayer = cta.querySelector(".top-layer") as HTMLElement;

        const you = topLayer.querySelector(".you") as HTMLElement;
        const think = topLayer.querySelector(".think") as HTMLElement;
        const it1 = topLayer.querySelector(".it-1") as HTMLElement;
        const I = topLayer.querySelector(".I") as HTMLElement;
        const build = topLayer.querySelector(".build") as HTMLElement;
        const it2 = topLayer.querySelector(".it-2") as HTMLElement;
        const comma = topLayer.querySelector(".comma") as HTMLElement;
        const period = topLayer.querySelector(".period") as HTMLElement;

        const pYou = pragraph.querySelector(".you") as HTMLElement;
        const pThink = pragraph.querySelector(".think") as HTMLElement;
        const pIt1 = pragraph.querySelector(".it-1") as HTMLElement;
        const pI = pragraph.querySelector(".I") as HTMLElement;
        const pBuild = pragraph.querySelector(".build") as HTMLElement;
        const pIt2 = pragraph.querySelector(".it-2") as HTMLElement;

        gsap.set([you, think, it1, I, build, it2, comma, period], {
            clearProps: "all",
        });
        gsap.set(pragraph.querySelectorAll("strong"), { opacity: 0 });

        matchPosition(you, pYou);
        matchPosition(think, pThink);
        matchPosition(it1, pIt1);
        matchPosition(I, pI);
        matchPosition(build, pBuild);
        matchPosition(it2, pIt2);

        tlRef.current = gsap.timeline({
            scrollTrigger: {
                trigger: cta,
                start: "top top",
                end: "top+=200% top",
                scrub: true,
                invalidateOnRefresh: true,
            },
        });

        tlRef.current
            .fromTo(pragraph, { opacity: 1 }, { opacity: 0 }, 0)
            .to([you, think, it1, I, build, it2], { x: 0 }, 1)
            .to(
                [you, think, it1, I, build, it2],
                { y: 0, fontSize: targetFontSize},
                2
            )
            .to([comma, period], { opacity: 1, fontSize: targetFontSize, stagger: 0.1 }, 3);
    };

    useEffect(() => {
        lastWidth.current = window.innerWidth;

        const mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => buildTimeline("3rem"));
        mm.add("(max-width: 767px)", () => buildTimeline("2rem"));

        const handleResize = () => {
            const w = window.innerWidth;
            if (w === lastWidth.current) return;

            lastWidth.current = w;

            tlRef.current?.scrollTrigger?.kill();
            tlRef.current?.kill();
            tlRef.current = null;

            ScrollTrigger.refresh(true);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            mm.kill();
            tlRef.current?.scrollTrigger?.kill();
            tlRef.current?.kill();
        };
    }, []);

    return (
        <section className="relative w-screen h-[300vh]">
            <div
                ref={ctaRef}
                className="flex sticky top-0 w-screen h-screen justify-center items-center"
            >
                <div className="pragraph flex items-center justify-center p-6 sm:p-16 w-screen h-screen">
                    <p className="text-[1.5rem] md:text-3xl font-medium text-center max-w-4xl">
                        Everything starts with{" "}
                        <strong className="text-[red] you">You</strong> and how you{" "}
                        <strong className="text-[red] think">think</strong>. The problem is shaped
                        until <strong className="text-[red] it-1">it</strong> becomes clear and
                        focused. <strong className="text-[red] I">I</strong> design,{" "}
                        <strong className="text-[red] build">build</strong>, and deliver{" "}
                        <strong className="text-[red] it-2">it</strong> with purpose.
                    </p>
                </div>

                <div className="top-layer absolute flex flex-wrap gap-1 sm:gap-2 w-screen h-screen justify-center items-center content-center font-bold text-[1.5rem] md:text-3xl">
                    <h5 className="text-[red] you">You</h5>
                    <h5 className="text-[red] think">think</h5>
                    <h5 className="text-[red] it-1">it</h5>
                    <h5 className="text-[red] comma text-[0px]">,</h5>
                    <p className="flex w-full h-2 -mt-2 -mb-2 sm:hidden"></p>
                    <h5 className="text-[red] I">I</h5>
                    <h5 className="text-[red] build">build</h5>
                    <h5 className="text-[red] it-2">it</h5>
                    <h5 className="text-[red] period text-[0px]">.</h5>
                </div>
            </div>
        </section>
    );
}
