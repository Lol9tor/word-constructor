import React, {Component, PropTypes} from 'react';
import styles from './errorMessage.css';



class ErrorMessage extends Component{
    render(){
        return <span
        className={styles.errorMessage}>
            {this.props.children}
        </span>
    }

}

export default ErrorMessage;