import Sidebar from '../components/Sidebar';

import styles from "../styles/App.module.css";
import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <header className={styles.header}>
          Company Name
        </header>
        <main className={styles.main}>
          <Component {...pageProps} />
        </main>
        <footer className={styles.footer}>
          Powered by AWS Lambdas
        </footer>
      </div>
    </div>
  );
}

export default MyApp
