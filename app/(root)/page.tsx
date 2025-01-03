import NavBar from "@/components/NavBar";
import TopBanner from "@/components/TopBanner";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <TopBanner />
        <NavBar />
      </main>
    </>
  );
}
