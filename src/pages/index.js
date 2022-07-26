import Page from 'src/components/Page';
import Footer from 'src/layouts/Footer';
import Header from '../layouts/header/Header.js';

//always import from src folder, not "./", "../", "../../",...
export default function Home() {
  return (
    <Page title="Home">
      <Header />

      <Footer />
    </Page>
  );
}
