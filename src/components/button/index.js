
import React, {Component, PropTypes} from 'react';
import styles from './button.css'; // обьект с классами(их названия)


class Button extends Component {
    static propTypes = {};

    render() {
        return <button className={styles.button}>{this.props.children}</button>
    }
}

export default Button;
