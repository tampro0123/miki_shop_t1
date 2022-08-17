import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function Page404() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(5);
  useEffect(() => {
    const countdown =setInterval(() => {
      if(seconds >0) {
        setSeconds(seconds -1);
      } else {
        router.push("/");
      }
    }, 1000);
    return () => {
      clearInterval(countdown);
    }
  })
  
  return (
    <div className="bg-[#ffeaa7] relative h-screen">
      <div className='text-center pt-48'>
        <p className='text-4xl mb-4'>Oops !!!</p>
        <h1 className='text-6xl font-semibold tracking-widest font-plf'>PAGE NOT FOUND</h1>
        <p className='text-[16px] my-4'>The page you are looking for was moved, removed, renamed or might never existed.</p>
        <p>
          <span>
            Go back to 
          </span>
          <Link href="/">
            <a className='underline'> HomePage </a> 
          </Link>
          <span>
             is {seconds} seconds...!
          </span>
        </p>
      </div>
    </div>
  );
}
