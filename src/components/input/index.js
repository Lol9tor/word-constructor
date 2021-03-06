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
        return <div className={styles.wrapper}>

            <input
                type={this.props.type || "text"}
                className={`${styles.inputStyle} ${this.props.className}`}
                onChange={this.handleChange}
                onBlur={this.blurChange}
                onKeyPress={this.keyPress}
                value={this.props.value}
                name={this.props.name}
                placeholder={`Write your ${this.props.name}...`}
                maxLength={this.props.maxLength}
                minLength={this.props.minLength}/>
        </div>
    }
}

export default Input;
