import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import styles from './adminPanel.css';
import Input from '../../components/input';
import Button from '../../components/button';
import {setItem, getItem, deleteItem} from '../../utils/storage'
import removeIcon from '../../assets/images/close.png';

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

class AdminPanel extends Component {
    static propTypes = {};
    state = {
        moderationWords: getItem("moderationWords") || [],
        words: ["алиса", "денди", "рубик"],
        currentWord: "",
        count: 0
    };

    handleClick = ()=> {
        let arr = this.state.moderationWords;
        if (this.state.currentWord === "") {
            return false;
        }
        let newArray = arr.concat(this.state.currentWord);
        setItem("moderationWords", newArray);
        let input = document.querySelector("input");
        input.value = "";
        this.setState({
            currentWord: "",
            moderationWords: newArray
        });

      /*console.log(this.state.currentWord);
        console.log(this.state.moderationWords);
        console.log(newArray);*/

    };

    handleKeyPress = (event) => {
        if (event.charCode === 13) {
            this.handleClick();
        }
    };

    wordChange = (text)=> {
        this.setState({currentWord: text});
    };

    checkDisabled = ()=> {
        let arr = this.state.currentWord.split("");
        return arr.some(isNumeric);
    };

    showDeleteBtn = (e)=> {
        console.log(delBtn);
    };

    deleteWord = (e)=>{
        const currWord = e.currentTarget.parentNode.parentNode.childNodes[0].innerText;
        let arr = this.state.moderationWords;
        let newArr = arr.filter(el=>{
            if(el!==currWord){
                return el;
            }

        });
        console.log(newArr);
        setItem("moderationWords", newArr);
        this.setState({
            moderationWords: newArr
        });
        console.log(this.state.moderationWords);


    };

    render() {
        let admin = 'Alex';
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

            <h2 className={styles.wordCollectionHeader}>
                Word for moderation:
            </h2>
            <div className={styles.flexContainer}>
                <div className={styles.wordCollectionWrap}>
                    {
                        this.state.moderationWords.map((el, index)=> {
                            return <div
                                className={styles.wordWrapper}
                                key={index}
                            >
                                <div
                                     className={styles.word}>
                                    {el.toLowerCase()}
                                </div>
                                <div>
                                    <img src={removeIcon}
                                         className={styles.closeImg}
                                         onClick={this.deleteWord}/>
                                </div>

                            </div>
                        })
                    }
                </div>

                <div className={styles.inputWrapper}>
                    <h2 className={styles.wordCollectionHeader}>
                        Add new word to collection:
                    </h2>
                    <Input type="text"
                           name="word"
                           className={styles.input}
                           onBlur={this.wordChange}
                           onChange={this.wordChange}
                           onKeyPress={this.handleKeyPress}
                           maxLenght="27"
                    />
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