import { FloatingDockDemo } from "@/components/navbar/floatingDock";

import Terra from "@/public/terrarium.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-[url('terrarium.jpg)]"></div>
      <nav>
        <FloatingDockDemo />
      </nav>
    </>
  );
}
