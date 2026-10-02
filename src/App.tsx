import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import { About, Stats, HearingTest, Products, HearingFinder } from "./components/Sections";
import { Comparison, Technology, Batteries, Maintenance, Brands, Offers } from "./components/Sections2";
import { Articles, ReviewsCallback, Faq, Contact } from "./components/Sections3";

export default function App() {
  return (
    <div className="min-h-screen bg-page">
      <div className="mx-auto max-w-[1370px] bg-white shadow-[0_0_40px_rgba(31,45,61,0.10)]">
        <Header />
        <main>
          <Hero />
          <About />
          <Stats />
          <div className="pt-16 lg:pt-24">
            <HearingTest />
          </div>
          <Products />
          <HearingFinder />
          <Comparison />
          <Technology />
          <Batteries />
          <Maintenance />
          <Brands />
          <Offers />
          <Articles />
          <ReviewsCallback />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
      <FloatingActions />
    </div>
  );
}
