import React from 'react';
import styles from './SocialCard.css';

const SocialCard = () => (
    <div className={styles.container}>
    <div>
      <div id={styles.dev}><span id={styles.devs}>DEV</span></div>
    </div>
    <div>
      <span>The Practical Dev @ThePractical Dev Sep 10
        <br/>Leanrning React? Start Small. <br/>
         author: <a>@dceddia</a>  
      </span>
    </div>
    </div>
)


export default SocialCard