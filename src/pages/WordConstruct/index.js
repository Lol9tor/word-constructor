import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import styles from './wordConstruct.css';
import Button from '../../components/button';
import {setItem, getItem, getRdmItem} from '../../utils/storage'


class WordConstruct extends Component {
    static propTypes = {};
    state = {
        count:0,
        wordCollection: getItem('moderationWords'),
        word: /*this.state.wordCollection[this.state.count]*/  "one"
    };

    shake = ()=> {
        let shakeWord = this.state.word.split("");
        shakeWord = shakeWord.sort(function () {
            return .5 - Math.random();
        }).join("");
        this.setState({
            word: shakeWord
        });
    };

    nextWord = ()=> {
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
    };

    componentWillMount() {
        this.shake();
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
            <div className={styles.wrapper}>
                <div className={styles.block}>
                    {this.state.word.split("").map(function (el, index) {
                        return <div key={index}
                                    className={styles.letter}>
                            {el}
                        </div>
                    })}
                </div>
                <Button onClick={this.nextWord}>Next word</Button>
                <Button onClick={this.shake}>Shake letter</Button>
            </div>

        </div>
    }
}

export default WordConstruct;