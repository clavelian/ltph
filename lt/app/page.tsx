import ResponsiveNavbar from "./components/navbar/navbar";
import ResponsiveFooter from "./components/footer/footer";

export default function Home() {
  return (
    <>
      <nav>
        <ResponsiveNavbar />
      </nav>

      <footer>
        <ResponsiveFooter />
      </footer>
    </>
  );
}
