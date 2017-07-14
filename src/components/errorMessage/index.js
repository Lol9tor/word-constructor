import React, {Component, PropTypes} from 'react';
import styles from './errorMessage.css';



class Error extends Component{
    render(){
        return <span
        name={this.props.name}
        className={this.props.className}
        onClick={this.props.onClick}
        >
            {
                `Please check your ${this.props.name}`
            }
        </span>
    }

}

export default Error;