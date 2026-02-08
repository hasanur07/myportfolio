import WhoIAm, { AboutSection } from "@/components/home/whoiam";
import DefaultLayout from "@/layouts/default";
import { useRef } from "react";

export default function AboutPage() {
  const mainRef = useRef<HTMLDivElement>(null);
  return (
    <DefaultLayout>
      <div className="flex relative w-full h-[200vh]">
        <div ref={mainRef} className="w-screen h-screen sticky top-0">
          <AboutSection mainRef={mainRef} />
        </div>
      </div>
    </DefaultLayout>
  );
}
