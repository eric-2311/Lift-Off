import { Card } from '@contentful/forma-36-react-components';
import Link from 'next/link';
import '@contentful/forma-36-react-components/dist/styles.css';
import styles from '../styles/index.module.css';

let client = require("contentful").createClient({
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
  console.log(Date.now())
  return (
    <div>
      <h1>SpaceX Launches</h1>
      <ul className={styles.list}>
        {launches.map(launch => (
          <Link href={'/launches/' + launch.sys.id} key={launch.sys.id}>
          <li className={styles.listItem}>
              <Card className={styles.card}>
                <p className={styles.title}>{launch.fields.name}</p>
                {/* <p className={styles.details}>{launch.fields.launchDetails}</p> */}
                  <Card className={styles.cardOpen}>
                    <p className={styles.title}>{launch.fields.name}</p>
                    <p className={styles.details}>{launch.fields.launchDetails}</p>
                  </Card>
              </Card>
          </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
