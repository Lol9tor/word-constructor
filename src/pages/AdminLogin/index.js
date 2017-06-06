import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import styles from './adminLogin.css'; // обьект с классами(их названия)
import Input from '../../components/input'
import Button from '../../components/button'

class AdminLogin extends Component {
    static propTypes = {};
    state = {
        user: {
            email: "",
            password: ""

        }
    };

    handleChange = (text)=> {

    };

    render() {


        return <div className={styles.adminLogin}>
            <Link to={'/'}>
                <Button>Go to main</Button>
            </Link>
            <Link to={'/admin'}>
                <Button>Go to admin</Button>
            </Link>
            <Link to={'/registration'}>
                <Button>Go to Registration</Button>
            </Link>

            <form id="login">
                <h1>Login</h1>
                <input id="username" name="email" className={styles.inputStyle} type="text" placeholder="Enter your login" required/>
                <br/>
                <input id="password" name="password" className={styles.inputStyle} type="password" placeholder="Enter your password"
                       required/>
                <br/>
                <Button type="submit" id="submit" value="ВОЙТИ"> Enter</Button>
            </form>
        </div>
    }
}

export default AdminLogin;