import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import styles from './adminPanel.css';
import Input from '../../components/input';
import Button from '../../components/button';

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

class AdminPanel extends Component {
    static propTypes = {};
    state = {
        moderationWords: JSON.parse(localStorage.getItem("moderationWords")) || [],
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
        localStorage.setItem("moderationWords", JSON.stringify(newArray));
        let input = document.querySelector("input");
        input.value = "";
        this.setState({
            currentWord: "",
            moderationWords: newArray
        });
    };

    wordChange = (text)=> {
        this.setState({currentWord: text});
    };

    checkDisabled = ()=> {
        let arr = this.state.currentWord.split("");
        return arr.some(isNumeric);
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
                            return <div key={index}
                                        className={styles.word}>
                                {el.toLowerCase()}
                            </div>
                        })
                    }
                </div>

                <div className={styles.inputWrapper}>
                    <h2 className={styles.wordCollectionHeader}>
                        Add new word to collection:
                    </h2>
                    <Input type="text"
                           className={styles.input}
                           onBlur={this.wordChange}
                    />
                    <div>{this.state.currentWord}</div>
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