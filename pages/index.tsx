import { Card } from '@contentful/forma-36-react-components';
import Link from 'next/link';
import '@contentful/forma-36-react-components/dist/styles.css';
import styles from '../styles/index.module.css';

const client = require("contentful").createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN
})

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'launch'
  })

  return {
    props: {
      launches: data.items
    }
  }
}

export default function Home({ launches }) {
  // console.log(launches)
  return (
    <div>
      
      <div className={styles.pageContainer}>
        <ul className={styles.list}>
          {launches.map(launch => (
            // console.log(launch)
            <Link href={'/launches/' + launch.sys.id} key={launch.sys.id}>
              <li className={styles.listItem}>
                  <Card className={styles.card}>
                    <p className={styles.title}>{launch.fields.name}</p>
                      <Card className={styles.cardOpen}>
                        <p className={styles.title}>{launch.fields.name}</p>
                        <p className={styles.details}>
                          {launch.fields.launchDetails ? 
                            launch.fields.launchDetails : <i>Unknown</i>}
                        </p>
                      </Card>
                  </Card>
              </li>
            </Link>
          ))}
        </ul>
        <section className={styles.section}>
          <h1 className={styles.logo}>SpaceX Launches</h1>
          Discover more Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip e
          x ea commodo consequat. Duis aute irure dolor in reprehenderit 
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa 
          qui officia deserunt mollit anim id est laborum.
        </section>
      </div>
    </div>
  );
};
