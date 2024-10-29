// pages/stream.js

import React from 'react';
import styles from '../styles/Stream.module.css'; // Import CSS module

const Stream = () => {
    return (
        <div className={styles.container}>
            <iframe 
                src='https://koora.vip/share.php?ch=daznit_1' 
                allowFullScreen 
                frameBorder='0' 
                className={styles.iframe} 
            ></iframe>
        </div>
    );
};

export default Stream;
