import { AppProps } from 'next/app'
import { GlobalStyle } from '../../styles/global';
import { Header } from '../components/Header/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      <GlobalStyle/>
    </>
  );
}

export default MyApp
