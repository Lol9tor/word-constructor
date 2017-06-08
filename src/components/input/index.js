import React, {Component, PropTypes} from 'react';
import styles from './input.css'; // обьект с классами(их названия)

class Input extends Component {
    static propTypes = {
        /*type: PropTypes.string, // озн что еомпон инп приним промпс назыв
         state: PropTypes.bool, //в общем чсто бы знать какой тип данных надо передавать в атрибут иначе будет ошщибка в консоль
         */

    }; // все свойства котор может принимать компонент(класс) упрощает понимагние и взаимодействие с компонентами)

    handleChange = (e)=> {
        const {value,name} = e.currentTarget; // это === value =  e.currentTarget.value
        if(typeof this.props.onChange === "function"){
            this.props.onChange(value, name, e);
        }
    };

    blurChange = (e)=> {
        const {value} = e.currentTarget;
        if(typeof this.props.onBlur === "function"){
            this.props.onBlur(value);
        }
    };

    keyPress = (e)=>{
        if(typeof this.props.onKeyPress === "function"){
            this.props.onKeyPress(e);
        }
    };

    render() {
        return <div>

            <input
                type={this.props.type || "text"}
                className={styles.inputStyle}
                onChange={this.handleChange}
                onBlur={this.blurChange}
                onKeyPress={this.keyPress}
                name={this.props.name}
                />

        </div>
    }
}

export default Input;
