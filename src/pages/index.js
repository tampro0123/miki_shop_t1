import Head from 'next/head';
import Image from 'next/image';
import Button from 'src/components/Button';
//always import from src folder, not "./", "../", "../../",...
export default function Home() {
  return <Button secondary>Tìm hiểu thêm</Button>;
}
