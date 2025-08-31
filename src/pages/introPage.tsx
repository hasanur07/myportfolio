import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function IntroPage() {
    const divRef = useRef(null);
    const columnsRef = useRef<HTMLDivElement[]>([]);

    const word = "HASANUR";
    const duplicates = 50; // number of times each letter repeats
    const letterHeight = 115; // taller font height
    useEffect(() => {
        gsap.to(divRef.current, {
            height: 0,
            duration: 1.5,
            ease: "power2.out",
            delay: 2.5
        });
    }, [])
    useLayoutEffect(() => {
        if (!columnsRef.current.length) return;

        columnsRef.current.forEach((col, i) => {
            const distance = (duplicates - 1) * letterHeight;

            if (i % 2 === 0) {
                // even -> roll upward
                gsap.fromTo(
                    col,
                    { y: 0 },
                    {
                        y: -distance,
                        duration: 3,
                        ease: "power4.out",
                    }
                );
            } else {
                // odd -> roll downward (start at -distance, go to 0)
                gsap.fromTo(
                    col,
                    { y: -distance },
                    {
                        y: 0,
                        duration: 3,
                        ease: "power4.out",
                    }
                );
            }
        });
    }, []);
    return (
        <div ref={divRef} className="w-full h-[100dvh] flex fixed top-0 left-0 z-50 bg-white justify-center items-center overflow-hidden">
            <div className="flex overflow-hidden scale-85 sm:scale-100">
                {word.split("").map((char, i) => (
                    <div
                        key={i}
                        className="relative h-[115px] w-[50px] overflow-hidden text-center"
                    >
                        <div
                            ref={(el) => {
                                if (el) columnsRef.current[i] = el;
                            }}
                            className="flex flex-col"
                        >
                            {Array.from({ length: duplicates }).map((_, j) => (
                                <span
                                    key={j}
                                    className="block text-8xl font-anton text-black font-extrabold tracking-tight leading-[140px]"
                                    style={{ height: `${letterHeight}px` }}
                                >
                                    {char}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
