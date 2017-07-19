import React, {Component, PropTypes} from 'react';
import styles from './letter.css'; // обьект с классами(их названия)
import {SortableElement} from 'react-sortable-hoc';

class Letter extends Component {
    static propTypes = {};

    render() {
        return <div className={styles.letter}>
            {this.props.letter}
        </div>
    }
}

export default SortableElement(Letter);

