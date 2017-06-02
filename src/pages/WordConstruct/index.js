import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import styles from './wordConstruct.css'

class WordConstruct extends Component {
    static propTypes = {};

    goToAdmin = () => {

    };


    render() {
        const word = "Колобординация";
        return <div><h1 className={styles.greeting}>Welcome to Word - Constructor!</h1>
            <Link to={'/admin'}>
                <button className={styles.button}> Go to AdminPanel</button>
            </Link>
            <div className={styles.wrapper}>
                <div className = {styles.block}>
                {word.split("").map(function (el, index) {
                    return <div key={index} className={styles.letter}>
                        {el}
                    </div>
                })}
                </div>
            </div>
            <button>Check word</button>
            <button>Shake letter</button>
        </div>
    }
}

export default WordConstruct;