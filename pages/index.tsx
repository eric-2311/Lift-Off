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
      launches: data.items,
      revalidate: 1
    }
  }
}

export default function Home({ launches }) {
  return (
    <div>
      <div className={styles.pageContainer}>
        <ul className={styles.list}>
          {launches.map(launch => (
            <Link href={'/launches/' + launch.sys.id} key={launch.sys.id}>
              <li className={styles.listItem}>
                  <Card className={styles.card}>
                    <p className={styles.title}><i>{launch.fields.name}</i></p>
                      <Card className={styles.cardOpen}>
                        <p className={styles.title}>{launch.fields.name}</p>
                        <p className={styles.details}>
                          {launch.fields.launchDetails ? 
                            launch.fields.launchDetails.slice(0, 300) + '...' : <i>Unknown</i>}
                        </p>
                      </Card>
                  </Card>
              </li>
            </Link>
          ))}
        </ul>
        <section className={styles.section}>
          <p className={styles.text}>
            <i>
              "In order for us to have a future that's exciting and inspiring, it has to be 
              one where we're a space-bearing civilization"
              <br/> 
              - Elon Musk
            </i>
          </p>
          <p className={styles.text}>
            <i>
              “I know the sky is not the limit because there are footprints on the Moon — and I 
              made some of them!”
              <br/> 
              - Buzz Aldrin
            </i>
          </p>
          <p className={styles.text}>
            <i>
              "That's one small step for a man, one giant leap for man-kind"
              <br/> 
              - Louis Armstrong
            </i>
          </p>
          <p className={styles.text}>
            <i>
              “We choose to go to the moon in this decade and do the other things, not because 
              they are easy, but because they are hard, because that goal will serve to organize 
              and measure the best of our energies and skills, because that challenge is one that 
              we are willing to accept, one we are unwilling to postpone, and one which we intend 
              to win.”
              <br/> 
              - John F. Kennedy
            </i>
          </p>
        </section>
      </div>
    </div>
  );
};
