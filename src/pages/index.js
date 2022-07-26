import Head from 'next/head';
import Image from 'next/image';
import AboutSection from 'src/sections/body/AboutSection';
import BestSeller from 'src/sections/body/BestSeller';
import LatestAlbum from 'src/sections/body/LatestAlbum';
import Products from 'src/sections/body/Products';
import Button from 'src/components/Button';
import HeroSection from 'src/sections/body/HeroSection';
//always import from src folder, not "./", "../", "../../",...
export default function Home() {
  return (
    <>
    <HeroSection/>
    <AboutSection/>
    <BestSeller/>
    <LatestAlbum/>
    <Products/>
    </>
  );
}
