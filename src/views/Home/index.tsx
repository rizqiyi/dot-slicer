import Header from "./partials/Header";
import dynamic from "next/dynamic";
import HomeView from "./partials/HomeView";
import OtherDesign from "./partials/OtherDesign";
import Footer from "./partials/Footer";
const Carousel = dynamic(() => import("@/components/Carousel"), { ssr: false });

const Index = () => {
  return (
    <main>
      <Header />
      <div className="my-6">
        <Carousel />
      </div>
      <HomeView />
      <OtherDesign />
      <Footer />
    </main>
  );
};

export default Index;
