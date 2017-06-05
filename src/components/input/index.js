import React, {Component, PropTypes} from 'react';
import styles from './input.css'; // обьект с классами(их названия)

class Input extends Component {
    static propTypes = {
        /*type: PropTypes.string, // озн что еомпон инп приним промпс назыв
         state: PropTypes.bool, //в общем чсто бы знать какой тип данных надо передавать в атрибут иначе будет ошщибка в консоль
         */

    }; // все свойства котор может принимать компонент(класс) упрощает понимагние и взаимодействие с компонентами)

    handleChange = (e)=> {
        const {value} = e.currentTarget; // это === value =  e.currentTarget.value
        if(typeof this.props.onChange === "function"){
            this.props.onChange(value);
        }
    };

    blurChange = (e)=> {
        const {value} = e.currentTarget;
        this.props.onBlur(value)
    };

    render() {
        console.log(this.props.type);
        return <div>

            <input
                type={this.props.type || "text"}
                className={styles.inputStyle}
                onChange={this.handleChange}
                onBlur={this.blurChange}
                />

        </div>

    }
}

export default Input;
