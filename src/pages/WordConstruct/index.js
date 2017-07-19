import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import styles from './wordConstruct.css';
import Button from '../../components/button';
import {getWordsForUser, getWord, getWords, checkWord}  from '../../api/api';
import {Line} from 'rc-progress';
import Counter from '../../components/counter';
import WordWrapper from '../../components/wordWrapper';
import {arrayMove} from 'react-sortable-hoc';


const colorMap = ['#3FC7FA', '#85D262', '#FE8C6A'];

class WordConstruct extends Component {
    static propTypes = {};
    state = {
        color: '#3FC7FA',
        count: 0,
        words: [],
        word: null
    };

    componentWillMount() {
        getWordsForUser().then((words)=> {
            this.setState({
                words: words,
                word: words[this.state.count] || ""
            })
        });
    }

    shake = ()=> {
        console.log(this.state.word.text);
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

        checkWord(this.state.word).then((result)=> {
            if (this.state.count < this.state.words.length - 1) {
                if (result.isCorrect) {
                    this.setState({
                        count: this.state.count + 1,
                        word: this.state.words[this.state.count + 1],
                    });
                } else {

                }
            }
        });


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

    onSortEnd = ({oldIndex, newIndex}) => {
        const wordArray = this.state.word.text.split(""),
            text = arrayMove(wordArray, oldIndex, newIndex).join("");
        this.setState({
            word: Object.assign({}, this.state.word, {text: text}),
        });
    };

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
            {this.state.word && <div>
                <Counter>
                    {`Answered: ${this.state.count} of ${this.state.words.length}`}
                </Counter>
                <div className={styles.progressLineWrapper}>
                    <Line className={styles.progressLine}
                          percent={100/this.state.words.length*this.state.count}
                          strokeWidth="1"
                          strokeColor={'#3FC7FA'}/>
                </div>
            </div>}
            {this.state.word ?
                <div className={styles.wrapper}>
                    <WordWrapper
                        word={this.state.word}
                        axis='x'
                        onSortEnd={this.onSortEnd}
                    />
                    <Button onClick={this.previousWord}>Previous word</Button>
                    <Button onClick={this.nextWord}>
                        {this.state.count < this.state.words.length - 1 ?
                            "Next word" :
                            <Link to={'/succesPage'}>
                                DONE
                            </Link>} </Button>
                    <Button onClick={this.shake}>Shake</Button>
                </div>
                : this.state.word === '' ?
                <div className={styles.greeting}><h2>The word collection is empty, please add words</h2></div> :
                <div className={styles.wrapper}>Loading...</div>}
        </div>
    }
}

export default WordConstruct;