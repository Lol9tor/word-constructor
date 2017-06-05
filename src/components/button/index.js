import React, {Component, PropTypes} from 'react';
import styles from './button.css'; // обьект с классами(их названия)


class Button extends Component {
    static propTypes = {};

    render() {
        return <button
            className={styles.button}
            onClick={this.props.onClick} //  || error here
            disabled={this.props.isDisabled}>
            {this.props.children}
        </button>
    }
}

export default Button;
