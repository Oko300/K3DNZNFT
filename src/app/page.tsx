import Hero from "../components/Hero";
import Story from "../components/Story";
import Gallery from "../components/Gallery";
import Tasks from "../components/Tasks";
import TickerBanner from "../components/TickerBanner";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <TickerBanner />
      <Story />
      <Gallery />
      <TickerBanner />
      <Tasks />
      <Footer />
    </main>
  );
}
