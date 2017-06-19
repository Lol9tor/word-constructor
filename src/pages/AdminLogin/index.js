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

        return <div>
            <Link to={'/'}>
                <Button>Go to main</Button>
            </Link>
            <Link to={'/admin'}>
                <Button>Go to admin</Button>
            </Link>
            <Link to={'/registration'}>
                <Button>Go to Registration</Button>
            </Link>
            <div className={styles.wrapper}>
                <form className={styles.form}>
                    <label>
                        <h2 className={styles.inputNames}>Login:</h2>
                        <Input id="username"
                               name="email"
                               type="email"
                               placeholder="Enter your"
                               required/>
                    </label>
                    <h2 className={styles.inputNames}>Password:</h2>
                    <Input id="password"
                           name="password"
                           type="password"
                           required/>
                    <div className={styles.submitBtn}>
                        <Button type="submit"
                                id="submit"
                                value="enter">
                            Enter
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    }
}

export default AdminLogin;