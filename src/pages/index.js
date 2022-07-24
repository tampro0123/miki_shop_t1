import Head from 'next/head';
import Image from 'next/image';
import {Button} from "../components/Button";
//always import from src folder, not "./", "../", "../../",...
export default function Home() {
  return (
      <>
          <Button content='Tìm hiểu thêm'/>
      </>
  );
}
