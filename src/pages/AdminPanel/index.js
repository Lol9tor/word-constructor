import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import {createWord, getWords, deleteWord} from '../../api/api';
import validator from '../../utils/validator';
import styles from './adminPanel.css';
import removeIcon from '../../assets/images/close.png';
import Input from '../../components/input';
import Button from '../../components/button';
import ErrorMessage from '../../components/errorMessage';


const rules = ['required',
    'isLatinLetter',
    {type: 'length', args: [5, 12]}];
const messages = {
    required: 'Please enter word',
    length: `Length of word must be from ${rules[rules.length - 1].args[0]} to ${rules[rules.length - 1].args[1]} symbols`,
    isLatinLetter: 'Word must consist only of Latin letters'
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

class AdminPanel extends Component {
    static propTypes = {};
    state = {
        moderationWords: [],
        currentWord: "",
        count: 0,
        error: false,
        errorMessage: null
    };

    componentWillMount() {
        getWords().then((words) => {
            this.setState({
                moderationWords: words
            });
        })
    }

    handleClick = ()=> {
        let arr = this.state.moderationWords,
            input = document.getElementsByName('word');
        console.log(input.value);


        if (this.state.currentWord === "") {
            this.setState({
                error: true,
                errorMessage: messages['required']
            });
            return false;
        }
        let currWord = this.state.currentWord.toLowerCase().trim();
        let unique = arr.every((el)=> {
            return (el.text !== currWord);
        });

        let errorMessages="";
        let check = rules.every((rule, i, arr)=> {
            let type = rule.type || rule,
            args = [].concat(currWord, rule.args);
            let isValid = validator[type].apply(null, args);
            if(!isValid){
                errorMessages = messages[type];
            }
            return isValid;
        });

        if (!check) {
            this.setState({
                error: true,
                errorMessage: errorMessages
            });
        }

        if (unique && check) {
            this.setState({
                currentWord: ""
            });
            createWord({text: currWord}).then((word)=> {
                this.setState({
                    moderationWords: this.state.moderationWords.concat(word)
                })
            });
        } else {
            return false;
        }
    };

    deleteWord = (currWord)=> {
        console.log(currWord._id);
        deleteWord(currWord._id).then(()=> {
            let newArr = this.state.moderationWords.filter(el=> {
                if (el._id !== currWord._id) {
                    return el;
                }
            });
            this.setState({
                moderationWords: newArr
            })
        });
    };

    handleKeyPress = (event) => {
        if (event.charCode === 13) {
            this.handleClick();
        }
    };

    wordChange = (text)=> {
        this.setState({
            currentWord: text,
            error: false
        });
    };

    checkDisabled = ()=> {
        let arr = this.state.currentWord.split("");
        return arr.some(isNumeric);
    };


    /*deleteWord = (currWord)=> {
     //const currWord = e.currentTarget.parentNode.parentNode.childNodes[0].innerText;
     let arr = this.state.moderationWords;
     let newArr = arr.filter(el=> {
     if (el !== currWord) {
     return el;
     }
     });
     console.log(newArr);
     setItem("moderationWords", newArr);
     this.setState({
     moderationWords: newArr
     });
     console.log(this.state.moderationWords);
     };*/


    render() {
        const admin = 'Alex';
        return <div>
            <Link to={'/'}>
                <Button>Go to main</Button>
            </Link>
            <Link to={'/admin/login'}>
                <Button>Go to login</Button>
            </Link>
            <Link to={'/registration'}>
                <Button>Go to Registration</Button>
            </Link>

            <h1 className={styles.greeting}>
                Hello {admin}!
            </h1>
            <div className={styles.flexContainer}>
                <div className={styles.WordCollectionMainWrapper}>
                    <div>
                        <h2>Word for moderation:</h2>
                    </div>
                    <div className={styles.wordCollectionWrap}>
                        {this.state.moderationWords.map((el, index)=> {
                            return <div
                                className={styles.wordWrapper}
                                key={index}>
                                <div className={styles.word}>
                                    {el.text}
                                </div>
                                <div>
                                    <img src={removeIcon}
                                         className={styles.closeImg}
                                         onClick={this.deleteWord.bind(this, el)}/>
                                </div>
                            </div>
                        })
                        }
                    </div>
                </div>

                <div className={styles.inputWrapper}>
                    <h2 className={styles.wordCollectionHeader}>
                        Add new word to collection:
                    </h2>
                    <div className={styles.input}>
                        <Input type="text"
                               name="word"
                               onBlur={this.wordChange}
                               onChange={this.wordChange}
                               value={this.state.currentWord}
                               onKeyPress={this.handleKeyPress}
                               maxLenght="20"
                               className={this.state.error&& styles.invalid}
                        />
                        { this.state.error && <ErrorMessage>
                            {this.state.errorMessage}
                        </ErrorMessage>}

                    </div>

                    <Button onClick={this.handleClick}
                            isDisabled={this.checkDisabled()}>
                        Add
                    </Button>
                </div>
            </div>
        </div>
    }
}

export default AdminPanel;