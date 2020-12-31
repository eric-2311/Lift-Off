import ReactPlayer from 'react-player';
import { useState } from 'react'
import styles from '../../styles/launch.module.css'

const client = require("contentful").createClient({
    space: process.env.NEXT_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN
})

export async function getStaticPaths() {
    let data = await client.getEntries({
        content_type: 'launch'
    })

    return {
        paths: data.items.map(launch => ({
            params: { launch: launch.sys.id }  
        })),
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    let data = await client.getEntries({
        content_type: 'launch',
        'sys.id': params.launch
    })

    return {
        props: {
            launch: data.items[0]
        },
        revalidate: 60
    }
}

export default function Launch({ launch }) {
    const [isPlaying, setPlaying] = useState(true)

    if (!launch) return <div>404</div>

    function getLocalDate(date) {
        let local = new Date(date);
        return local.toString()
    }

    return (
        <div>
            <h1 className={styles.title}>{launch.fields.name}</h1>
            <div className={styles.content}>
                <ReactPlayer
                    className={styles.player} 
                    url={launch.fields.webcastVideoUrl} 
                    playing={isPlaying}/>
                <div className={styles.details}>
                    <div className={styles.context}>
                        <section className={styles.info}>
                            <p>Flight Number: {launch.fields.flightNumber}</p>
                            <p>{getLocalDate(launch.fields.launchDate)}</p>
                            <p>
                                {launch.fields.missionSuccess ? 
                                'Mission: Success' : 
                                'Mission: Failed'}
                            </p>
                            <p>Rocket Type: {launch.fields.rocketType[0].toUpperCase() +
                                launch.fields.rocketType.slice(1, launch.fields.rocketType.length)}
                            </p>
                            <p>
                                Rocket Name : {launch.fields.rocketName}
                            </p>
                        </section>
                        <div className={styles.patch}>
                            <img src={launch.fields.missionPatchUrl} />
                        </div>
                        
                    </div>
                    <p className={styles.launchDetails}>
                        {launch.fields.launchDetails ? 
                        launch.fields.launchDetails : 
                        "Mission details unknown."}
                    </p>
                </div>
            </div>
        </div>
    )
}