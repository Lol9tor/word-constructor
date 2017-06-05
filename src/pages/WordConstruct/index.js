import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import styles from './wordConstruct.css';
import Button from '../../components/button'

class WordConstruct extends Component {
    static propTypes = {};
    state = {
      word: "FRUSTRATION"
    };

    goToAdmin = () => {

    };


    render() {
        return <div>
            <Link to={'/admin/login'}>
                <Button>Go to login</Button>
            </Link>
            <Link to={'/admin'}>
                <Button>Go to admin</Button>
            </Link>

            <h1 className={styles.greeting}>Welcome to Word - Constructor!</h1>
            <div className={styles.wrapper}>
                <div className = {styles.block}>
                {this.state.word.split("").map(function (el, index) {
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