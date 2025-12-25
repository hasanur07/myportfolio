import { useEffect , useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function WhoIAm() {
    const mainRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const main = mainRef.current;
        if (!main) return;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: main,
                start: "-10% top",
                end: "bottom top",
                scrub: true,
            }
        });
        tl.fromTo(main.children[0], {
            x: "-220%"
        }, {
            x: 0,
            ease: "none"
        }, 0);
        tl.fromTo(main.children[1], {
            x: "220%"
        }, {
            x: 0,
            ease: "none"
        }, 0);
        tl.fromTo(main.children[2], {
            x: "-220%"
        }, {
            x: 0,
            ease: "none"
        }, 0);
        tl.fromTo(main.children[0], {
            y: 0,
        }, {
            y: "100%",
            ease: "none"
        }, 1);
        tl.fromTo(main.children[2], {
            y: 0,
        }, {
            y: "-100%",
            ease: "none"
        }, 1);
        tl.fromTo(main.children[0], {
            scale: 1,
        }, {
            scale: 0.5,
            ease: "none"
        }, 2);
        tl.fromTo(main.children[1], {
            scale: 1,
        }, {
            scale: 0.5,
            ease: "none"
        }, 2);
        tl.fromTo(main.children[2], {
            scale: 1,
        }, {
            scale: 0.5,
            ease: "none"
        }, 2);
    }, []);
    return (
        <div className="flex h-[300vh] relative w-full">
            <div ref={mainRef} className="flex flex-col w-full h-[100vh] sticky top-0 left-0 right-0 justify-center items-center pt-[58px] overflow-hidden">
                <h5 className="text-1 font-anton text-9xl transition-none">WHO I AM</h5>
                <h5 className="text-2 font-anton text-9xl bg-black z-2 transition-none">WHO I AM</h5>
                <h5 className="text-3 font-anton text-9xl transition-none">WHO I AM</h5>
            </div>
        </div>
    );
}

export default WhoIAm;