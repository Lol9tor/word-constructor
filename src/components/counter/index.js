import React, {Component, PropTypes} from 'react';
import styles from './counter.css';


class Counter extends Component{

    render(){
        return <div
        name={this.props.name}
        className={`${styles.counter} ${this.props.className}`}>
            {this.props.children}
        </div>
    }

}


export default Counter;