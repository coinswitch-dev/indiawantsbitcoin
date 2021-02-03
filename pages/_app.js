import { useEffect } from 'react';
import { useRouter } from 'next/router'
import '../styles/globals.css'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const route = window.location.pathname
    if (route !== '/') {
      router.push(route)
    }
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
