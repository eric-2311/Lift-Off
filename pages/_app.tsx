import '../styles/global_styles.css'
import Link from 'next/link';
import styles from '../styles/index.module.css'
// import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className={styles.nav}>
        {/* <Head>
          <title>SpaceX Logs</title>
        </Head> */}
        <Link href={'/'}>
          <h1 className={styles.logo}><i>SpaceX Mission Log</i></h1>
        </Link>
      </nav>
      <Component {...pageProps}/>
    </div>
  )
}

export default MyApp
