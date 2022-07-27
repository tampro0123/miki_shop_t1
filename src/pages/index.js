import Page from 'src/components/Page';
import Footer from 'src/layouts/Footer';
import AboutSection from 'src/sections/body/AboutSection.js';
import BestSeller from 'src/sections/body/BestSeller.js';
import HeroSection from 'src/sections/body/HeroSection.js';
import LatestAlbum from 'src/sections/body/LatestAlbum.js';
import Products from 'src/sections/body/Products.js';
import Header from 'src/layouts/Header';
import CircleBgr from 'src/components/circles';

//always import from src folder, not "./", "../", "../../",...
export default function Home() {
  return (
    <Page title="Home">
      <div className="app">
      <Header />
      <HeroSection />
      <AboutSection />
      <BestSeller />
      <LatestAlbum />
      <Products />
      <Footer />
      <CircleBgr 
      CFull1={'w-[1041px] top-[655px] left-[1078px]'}
      CFull2={'w-[551px] h-[551px] translate-x-[-929px] translate-y-[-1138px]'}
      CFull3={'w-[551px] h-[551px] top-[3774px] right-[-344px]'}
      CDash3={'w-[551px] h-[551px] top-[1160px] left-[-462px]'}
      />
      </div>
    </Page>
  );
}
