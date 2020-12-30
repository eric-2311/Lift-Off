import '../styles/global_styles.css'
import Link from 'next/link';
import styles from '../styles/index.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className={styles.nav}>
        <Link href={'/'}>
          <h1 className={styles.logo}><i>SpaceX Mission Log</i></h1>
        </Link>
      </nav>
      <Component {...pageProps}/>
    </div>
  )
}

export default MyApp
