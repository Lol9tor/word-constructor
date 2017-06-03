
import React, {Component, PropTypes} from 'react';
import styles from './adminLogin.css'; // обьект с классами(их названия)
import Input from '../../components/input'
import Button from '../../components/button'

class AdminLogin extends Component {
    static propTypes = {};

    render() {
        let email = null;
        let password = null;

        return <div className={styles.adminLogin}>Admin Login
            <form id="login">
                <h1>Форма входа</h1>
                <fieldset id="inputs">
                    <input id="username" className = {styles.inputStyle} type="text" placeholder="Логин" required/>
                    <input id="password" className = {styles.inputStyle} type="password" placeholder="Пароль" required/>
                </fieldset>
                <fieldset id="actions">
                    <Button type="submit" id="submit" value="ВОЙТИ"/>
                        <a href="">Забыли пароль?</a><a href="">Регистрация</a>
                </fieldset>
            </form>
        </div>
    }
}

export default AdminLogin;