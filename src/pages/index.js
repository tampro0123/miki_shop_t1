import Page from 'src/components/Page';
import AboutSection from 'src/sections/body/AboutSection.js';
import BestSeller from 'src/sections/body/BestSeller.js';
import HeroSection from 'src/sections/body/HeroSection.js';
import LatestAlbum from 'src/sections/body/LatestAlbum.js';
import Products from 'src/sections/body/Products.js';
import CircleBgr from 'src/components/circles';

//always import from src folder, not "./", "../", "../../",...
export default function Home() {
  return (
    <Page title="Home">
      <div className="app -z-10">
        <HeroSection />
        <AboutSection />
        <BestSeller />
        <LatestAlbum />
        <Products />
        <CircleBgr
          CFull1={'top-[655px] left-[1078px]'}
          CFull2={'translate-x-[-929px] translate-y-[-1138px]'}
          CFull3={'scale-50 top-[3662px] right-[-672px]'}
          CDash3={'top-[1160px] left-[-462px]'}
        />
      </div>
    </Page>
  );
}
