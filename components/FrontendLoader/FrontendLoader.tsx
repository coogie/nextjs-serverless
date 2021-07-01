import Head from "next/head";

const FrontendLoader = ({ id }) => {
  if (!id) return;

  const map = {
    "global-task-management": "https://master.d1sr8sxlfuakfb.amplifyapp.com/static/js/main.81a02625.js",
    "internal-frontend-app": "https://master.d2p2yv0qbqpabq.amplifyapp.com/static/js/main.25a82b1e.js",
  }
  const url = map[id];

  // Obviously, now, the above wouldn't exist in real life since we build and
  // deploy MFEs to Artifact Service with known bundle names. I just didn't want
  // to do the hassle of it myself.

  return (
    <>
      <Head>
        <script async src={url} key={id}></script>
      </Head>
      <div id={id} />
    </>
  )
}

export default FrontendLoader;
