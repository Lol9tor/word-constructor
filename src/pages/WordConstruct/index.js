import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import styles from './wordConstruct.css';
import Button from '../../components/button';
import {getWordsForUser}  from '../../api/api'

class WordConstruct extends Component {
    static propTypes = {};
    state = {
        count:0,
        words:[],
        word: null
    };

    /*shake = ()=> {
        let shakeWord = this.state.word.split("");
        shakeWord = shakeWord.sort(function () {
            return .5 - Math.random();
        }).join("");
        this.setState({
            word: shakeWord
        });
    };*/ // shakeFnc

    /*nextWord = ()=> {
        let check = getItem('moderationWords').some((el)=> {
            return (el === this.state.word);
        });

        if (check === true) {
            console.log(this.state.count);
            this.setState({
               count: this.state.count+=1
            });
            console.log(this.state.count);

        } else {
            console.error("wrongWord");
        }
    };*/ // nextWord Fnc

    componentWillMount() {
        getWordsForUser().then( (words)=> {
            this.setState({
                words: words,
                word: words[this.state.count]
            })
        })
    }

    render() {
        return <div>
            <Link to={'/admin/login'}>
                <Button>Go to login</Button>
            </Link>
            <Link to={'/admin'}>
                <Button>Go to admin</Button>
            </Link>
            <Link to={'/registration'}>
                <Button>Go to Registration</Button>
            </Link>

            <h1 className={styles.greeting}>Welcome to Word - Constructor!</h1>
            {this.state.word?
                <div className={styles.wrapper}>
                    <div className={styles.block}>
                        {this.state.word.text.split("").map(function (el, index) {
                            return <div key={index}
                                        className={styles.letter}>
                                {el}
                            </div>
                        })}
                    </div>
                    <Button onClick={this.nextWord}>Next word</Button>
                    <Button onClick={this.shake}>Shake letter</Button>
                </div>
                : <div className={styles.wrapper}>Loading...</div>}

        </div>
    }
}

export default WordConstruct;