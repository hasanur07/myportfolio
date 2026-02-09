import { projects } from "@/config/project";
import "@/styles/project/style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSection() {
    const mainRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const main = mainRef.current;
        if (!main) return;
        const index = main.querySelector(".project-index h5") as HTMLElement | null;
        const imageContainer = main.querySelector(".project-images") as HTMLElement | null;
        const images = main.querySelectorAll(".project-img img");
        const nameContainer = main.querySelector(".project-names") as HTMLElement | null;
        const names = main.querySelectorAll(".project-names p");
        if (!index || !imageContainer || !nameContainer) return;
        const totalProjects = images.length;
        const sectionHeight = main.offsetHeight;
        const sectionPadding = parseFloat(getComputedStyle(main).padding);
        const indexHeight = index.offsetHeight;
        const nameContainerHeight = nameContainer.offsetHeight;
        const imageContainerHeight = imageContainer.offsetHeight;

        const moveDistanceIndex = sectionHeight - sectionPadding * 2 - indexHeight;
        const moveDistanceNames = sectionHeight - sectionPadding * 2 - nameContainerHeight;
        const moveDistanceImages = window.innerHeight - imageContainerHeight;

        const imgActivationThreshold = window.innerHeight / 2;

        ScrollTrigger.create({
            trigger: main,
            start: "top top",
            end: `+=${window.innerHeight * 5}px`,
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                const currentImageIndex = Math.min(
                    Math.floor(progress * totalProjects) + 1,
                    totalProjects
                );
                index.textContent = `${String(currentImageIndex).padStart(2, "0")}/${String(totalProjects).padStart(2, "0")}`;

                gsap.set(index, {
                    y: progress * moveDistanceIndex,
                });
                gsap.set(imageContainer, {
                    y: progress * moveDistanceImages,
                });

                images.forEach((img) => {
                    const imgRect = img.getBoundingClientRect();
                    const imgTop = imgRect.top;
                    const imgBottom = imgRect.bottom;
                    if (imgTop <= imgActivationThreshold && imgBottom >= imgActivationThreshold) {
                        gsap.set(img, {
                            opacity: 1,
                        });
                    } else {
                        gsap.set(img, {
                            opacity: 0.5,
                        });
                    }
                });

                names.forEach((name, index) => {
                    const startProgress = index / totalProjects;
                    const endProgress = (index + 1) / totalProjects;
                    const projectProgress = Math.max(
                        0,
                        Math.min(1, (progress - startProgress) / (endProgress - startProgress))
                    );
                    gsap.set(name, {
                        y: -projectProgress * moveDistanceNames,
                    });

                    if (projectProgress > 0 && projectProgress < 1) {
                        gsap.set(name, {
                            color: "#fff",
                        });
                    } else {
                        gsap.set(name, {
                            color: "#4a4a4a",
                        });
                    }
                });
            },
        });
        const imageList = main.querySelectorAll(".project-img");
        const handleClick = (e: MouseEvent) => {
            const target = e.currentTarget as HTMLElement;
            const url = target.getAttribute("data-url");
            if (url) {
                window.open(url, "_blank");
            }
        };
        imageList.forEach((img) => {
            img.addEventListener("click", handleClick as EventListener);
        });
        return () => {
            imageList.forEach((img) => {
                img.removeEventListener("click", handleClick as EventListener);
            });
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, [mainRef]);
    return (
        <div className="relative w-screen h-[600vh] bg-black">
            <div ref={mainRef} className="top-0 sticky w-screen h-[100dvh] p-6 pt-16 sm:p-16 overflow-hidden">
                <div className="project-index">
                    <h5>01/{String(projects.length).padStart(2, "0")}</h5>
                </div>
                <div className="project-images">
                    {
                        projects.map((project, index) => (
                            <div key={index} className="project-img" data-url={project.projectUrl}>
                                <img src={project.imageUrl} alt={project.title} />
                            </div>
                        ))
                    }
                </div>
                <div className="project-names">
                    {
                        projects.map((project, index) => (
                            <p key={index}>{project.title}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}