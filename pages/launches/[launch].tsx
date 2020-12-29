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
        revalidate: 1
    }
}

export default function Launch({ launch }) {
    if (!launch) return <div>404</div>

    function getLocalDate(date) {

    }

    return (
        <div>
            <h1>{launch.fields.name}</h1>
            <p>{launch.fields.launchDate}</p>
            <section>
                <p>{launch.fields.missionSuccess ? 
                'Mission Success' : 
                'Mission Failed'}</p>
            </section>
            <p>
                {launch.fields.launchDetails ? 
                launch.fields.launchDetails : 
                "Mission details unknown."}
            </p>
        </div>
    )
}