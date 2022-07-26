import Footer from 'src/layouts/footer/index.js';
import Header from "src/layouts/header/index.js";
//always import from src folder, not "./", "../", "../../",...
export default function Home() {
  return ( 
      <>
          <Header />
          <Footer />
      </>
  );
}  

