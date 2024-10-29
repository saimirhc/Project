// pages/index.js

import Link from 'next/link';
import styles from '../styles/Home.module.css'; // Import CSS for home

const Home = () => {
    return (
        <div className={styles.container}>
            <h1>Welcome to FUTBOLLIM</h1>
            <Link href="/stream">
                <a className={styles.link}>Watch Live Games</a>
            </Link>
        </div>
    );
};

export default Home;
