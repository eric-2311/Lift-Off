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
  console.log(launches)
  return (
    <div>
      <h1>SpaceX Launches</h1>
      <ul className={styles.list}>
        {launches.map(launch => (
          <li key={launch.sys.id} className={styles.listItem}>
            <Card 
            className={styles.card}
            onClick={() => {
              // <Link href={'/launches/' + launch.fields.slug}/>
            }}>
            <p className={styles.title}>{launch.fields.name}</p>
            <p className={styles.details}>{launch.fields.launchDetails}</p>
          </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Home.getInitialProps = async function() {
//   const res = await fetch('https://api.spacexdata.com/v4/launches/');
//   const launch = await res.json();

//   return { launch }
// }
