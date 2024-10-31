import { FloatingDockDemo } from "@/components/navbar/floatingDock";

import Terra from "@/public/terrarium.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="absolute ">
        <Image src={Terra} alt="Terra BG" className="bg-cover bg-center" />
      </header>
      <nav>
        <FloatingDockDemo />
      </nav>
    </>
  );
}
