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
        fallback: false
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
        }
    }
}

export default function Launch({ launch }) {
    console.log(launch)

    function getLocalDate(date) {

    }

    return (
        <div>
            <h1>{launch.fields.name}</h1>
            <p>{launch.fields.launchDate}</p>
            <section>{launch.fields.missionSuccess ? 
                'Mission Success' : 
                'Mission Failed'}</section>
            <p>
                {launch.fields.launchDetails ? 
                launch.fields.launchDetails : 
                "Mission details unknown."}
            </p>
        </div>
    )
}