import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import styles from './wordConstruct.css';
import Button from '../../components/button'

class WordConstruct extends Component {
    static propTypes = {};

    goToAdmin = () => {

    };


    render() {
        const word = "Колобординация";
        return <div>
            <Link to={'/admin'}>
                <button className={styles.button}> Go to AdminPanel</button>
            </Link>
            <h1 className={styles.greeting}>Welcome to Word - Constructor!</h1>
            <div className={styles.wrapper}>
                <div className = {styles.block}>
                {word.split("").map(function (el, index) {
                    return <div key={index} className={styles.letter}>
                        {el}
                    </div>
                })}
                </div>
                <Button>Check word</Button>
                <Button>Shake letter</Button>
            </div>

        </div>
    }
}

export default WordConstruct;