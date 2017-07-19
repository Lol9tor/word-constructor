import React, {Component, PropTypes} from 'react';
import styles from './wordWrapper.css'; // обьект с классами(их названия)
import {SortableContainer} from 'react-sortable-hoc';
import Letter from '../../components/letter';

class WordWrapper extends Component {
    static propTypes = {};

    render() {
        return <div className={styles.block}>
            {this.props.word.text.split("").map(function (letter, index) {
                return <Letter
                    letter={letter}
                    key={index}
                    index={index}
                />
            })}
        </div>
    }
}

export default SortableContainer(WordWrapper);

