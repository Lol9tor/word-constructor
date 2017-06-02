
import React, {Component, PropTypes} from 'react';
import styles from './input.css'; // обьект с классами(их названия)

class InputText extends Component {
    static propTypes = {};

    render() {
        let textInput = null;
       return  <div>
           <input
               type="text"
               ref={(input) => { this.textInput = input; }}
           className={styles.inputStyle}/>

       </div>
    }
}

export default InputText;
