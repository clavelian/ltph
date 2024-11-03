import Footer from "@/app/components/footer/footer";
import Navbar from "@/app/components/navbar/navbar";
export default function Home() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main className="h-[100vh]"></main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
