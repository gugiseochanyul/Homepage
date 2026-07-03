import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AboutSola from "@/components/AboutSola";
import Hobbies from "@/components/Hobbies";
import LikesList from "@/components/LikesList";
import Gallery from "@/components/Gallery";
import Dream from "@/components/Dream";
import TopBreeds from "@/components/TopBreeds";
import MessageToOwners from "@/components/MessageToOwners";
import Guestbook from "@/components/Guestbook";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <SectionDivider />
      <AboutSola />
      <SectionDivider />
      <Hobbies />
      <SectionDivider />
      <LikesList />
      <SectionDivider />
      <Gallery />
      <SectionDivider />
      <Dream />
      <SectionDivider />
      <TopBreeds />
      <SectionDivider />
      <MessageToOwners />
      <SectionDivider />
      <Guestbook />
      <Footer />
    </main>
  );
}
