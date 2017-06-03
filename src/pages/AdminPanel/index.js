import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import styles from './adminPanel.css';
import Button from '../../components/button'


class AdminPanel extends Component {
    static propTypes = {};

    render() {
        let admin = 'Alex';
        let wordCollection = ["максимализация", "амортизатор", "рыба", "джек", "небо"];
        let moderation = ["алиса", "денди", "рубик"];

        return <div>
                <Link to={'/'}>
                    <Button>Go to main</Button>
                </Link>
                <Link to={'/admin/login'}>
                    <Button>Go to login</Button>
                </Link>

                <h1 className={styles.greeting}>Hello{admin}!</h1>
            <h2 className={styles.wordCollectionHeader}>Word-Collection:</h2>
            <div className={styles.wordCollectionWrap}>
                    {
                        wordCollection.map((el,index)=> {
                            return <div key={index} className={styles.word}>
                                {el.toLowerCase()}
                            </div>
                        })
                    }
                </div>

            <h2 className={styles.wordCollectionHeader}>Word for moderation:</h2>
            <div className={styles.wordCollectionWrap}>
                {
                    moderation.map((el,index)=> {
                        return <div key={index} className={styles.word}>
                            {el.toLowerCase()}
                        </div>
                    })
                }
            </div>
        </div>
    }
}

export default AdminPanel;