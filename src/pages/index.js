
import Page from 'src/components/Page';
import Footer from 'src/layouts/footer/index.js';
import Header from "src/layouts/header/index.js";
//always import from src folder, not "./", "../", "../../",...
export default function Home() {
  return (
    <Page title="Home">
      <Header />
      <HeroSection/>
      <AboutSection/>
      <BestSeller/>
      <LatestAlbum/>
      <Products/>
      <Footer />
    </Page>
  );
}
