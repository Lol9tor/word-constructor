import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import styles from './adminLogin.css';
import Input from '../../components/input';
import Button from '../../components/button';

class AdminLogin extends Component {
    static propTypes = {};
    state = {
        user: {
            email: "",
            password: ""

        }
    };

    handleChange = (value, name)=> {
        this.setState({
            ...this.state.user,
            [name]: value
        });
        let valid = new Validator;
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
                        <Input onChange={this.handleChange}
                               id="username"
                               name="email"
                               type="email"
                               maxLength="25"
                               minLength="5"/>
                    </label>
                    <h2 className={styles.inputNames}>Password:</h2>
                    <Input onChange={this.handleChange}
                           id="password"
                           name="password"
                           type="password"
                           maxLength="15"
                           minLength="3"/>
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