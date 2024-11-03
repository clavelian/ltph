import Footer from "@/app/components/footer";
import Toggle from "@/app/components/modeToggle";
export default function Home() {
  return (
    <>
      <main>
        <nav>
          <Toggle />
        </nav>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
