import { SessionProvider, useSession } from 'next-auth/react';
import { AppProps } from 'next/app';
import '@/styles/globals.css';
import Context from '@/components/Context';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';

import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Layout from '../components/Layout';


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>  {/* Wrap with the Redux Provider */}
      {/* <Layout> */}
        <Component {...pageProps} />
      {/* </Layout> */}
    </Provider>
  );
}

export default MyApp;

