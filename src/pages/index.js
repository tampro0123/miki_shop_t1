import Page from 'src/components/Page';
import Footer from 'src/layouts/Footer';
import AboutSection from 'src/sections/body/AboutSection.js';
import BestSeller from 'src/sections/body/BestSeller.js';
import HeroSection from 'src/sections/body/HeroSection.js';
import LatestAlbum from 'src/sections/body/LatestAlbum.js';
import Products from 'src/sections/body/Products.js';
import Header from 'src/layouts/Header';


//always import from src folder, not "./", "../", "../../",...
export default function Home() {
  return (
    <Page title="Home">
      <Header />
      <HeroSection />
      <AboutSection />
      <BestSeller />
      <LatestAlbum />
      <Products />
      <Footer />
    </Page>
  );
}

