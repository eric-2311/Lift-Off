import fetch from 'isomorphic-unfetch';

export default function Home({ launch }) {
  console.log(launch)

  return (
    <h1>This is the home page</h1>
  );
};

Home.getInitialProps = async function() {
  const res = await fetch('https://api.spacexdata.com/v4/launches/latest');
  const launch = await res.json();

  return { launch }
}
