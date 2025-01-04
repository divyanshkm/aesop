import Carousel from "@/components/Carousels/Carousel";
import NavBar from "@/components/NavBar";
import TopBanner from "@/components/TopBanner";

export default function Home() {
  return (
    <>
      <main>
        <TopBanner />
        <NavBar />
        <Carousel />
      </main>
    </>
  );
}
