import Header from "@/components/Header";
import HomeAbout from "@/components/Home/HomeAbout";
import HomeClients from "@/components/Home/HomeClients";
import Homepage from "@/components/Home/Homepage";
import HomeServices from "@/components/Home/HomeServices";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header/>
      <Homepage/>
      <HomeAbout/>
      <HomeServices/>
      <HomeClients/>
      <Testimonials/>
    </>
  );
}
