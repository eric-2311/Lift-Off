const client = require("contentful").createClient({
    space: process.env.NEXT_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN
})

export async function getStaticPaths() {
    let data = await client.getEntries({
        content_type: 'launch'
    })
    
    return {
        // paths: data.items.map((launch) => ({
        //     params: { id: launch.sys.id.toString() }  
        // })),
        // fallback: false
        paths : [],
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    let data = await client.getEntries({
        content_type: 'launch'
    })

    return {
        props: {
            launch: data.items[0]
        }
    }
}

export default function Launch({ launch }) {
    console.log(launch)
    return <div>Launch</div>
}