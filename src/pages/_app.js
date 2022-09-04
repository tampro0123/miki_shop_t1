import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';

import { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router';
import Progress from 'src/components/progress/Progress';

function MyApp({ Component, pageProps }) {
  const [isAnimating, setIsAnimating] = useState(false)
  const router = useRouter();
  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true);
    };
    const handleStop = () => {
      setIsAnimating(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);
  return (
    <RecoilRoot>
      <Progress isAnimating={isAnimating} />
      <Component {...pageProps} />
      <ToastContainer
        bodyClassName="toast"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={3}
      />
    </RecoilRoot>
  );
}

export default MyApp;
