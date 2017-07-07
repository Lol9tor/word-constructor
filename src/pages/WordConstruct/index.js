import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import styles from './wordConstruct.css';
import Button from '../../components/button';
import {getWordsForUser, getWord}  from '../../api/api';

class WordConstruct extends Component {
    static propTypes = {};
    state = {
        count: 0,
        words: [],
        word: null
    };

    shake = ()=> {
        let shakeWord = this.state.word.text.split("");
        shakeWord = shakeWord.sort(function () {
            return .5 - Math.random();
        }).join("");
        let newWord = this.state.word;
        newWord.text = shakeWord;

        this.setState({
            word: newWord
        });
    };


    nextWord = ()=> {
        console.log(this.state.words);
        console.log(this.state.word.text);
        console.log(this.state.count);

        if(this.state.count<this.state.words.length-1){
            this.setState({
                count: this.state.count + 1,
                word: this.state.words[this.state.count + 1],
            });
        }else{

        }
    };

    previousWord = ()=> {
        if (this.state.count) {
            this.setState({
                count: this.state.count - 1,
                word: this.state.words[this.state.count - 1]
            })
        }
        console.log(this.state.count);
    };


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
     };*/


    componentWillMount() {
        getWordsForUser().then((words)=> {
            this.setState({
                words: words,
                word: words[this.state.count]
            })
        });
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
            {this.state.word ?
                <div className={styles.wrapper}>
                    <div className={styles.block}>
                        {this.state.word.text.split("").map(function (el, index) {
                            return <div key={index}
                                        className={styles.letter}>
                                {el}
                            </div>
                        })}
                    </div>
                    <Button onClick={this.previousWord}>Previous word</Button>
                    <Button onClick={this.nextWord}> {this.state.count<this.state.words.length-1? "Next word":<Link to={'/succesPage'}>
                        DONE
                    </Link>} </Button>
                    <Button onClick={this.shake}>Shake</Button>
                </div>
                : <div className={styles.wrapper}>Loading...</div>}

        </div>
    }
}

export default WordConstruct;