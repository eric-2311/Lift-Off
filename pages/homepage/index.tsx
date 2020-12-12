import fetch from 'isomorphic-unfetch';

export default function Home({ launch }) {
  // console.log(launch)
  return (
    <div>
      <h1>SpaceX Launches</h1>
      {launch.map((data, i) => {
        return (
          <div key={i}>{data.name}</div>
        )
      })}
    </div>
  );
};

Home.getInitialProps = async function() {
  const res = await fetch('https://api.spacexdata.com/v4/launches/');
  const launch = await res.json();

  return { launch }
}
