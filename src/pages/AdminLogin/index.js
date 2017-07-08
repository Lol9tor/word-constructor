import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import styles from './adminLogin.css';
import Input from '../../components/input';
import Button from '../../components/button';
import validator from '../../utils/validator';
import facebook from '../../assets/images/facebook2.png';
import google from '../../assets/images/google2.png';


const rules = {
    password: ['required', {type: 'length', args: [2, 20]}],
    email: ['required'],
};
class AdminLogin extends Component {
    static propTypes = {};
    state = {
        user: {
            email: "",
            password: ""

        }
    };

    handleChange = (value, name, e)=> {
        this.setState({
            ...this.state.user,
            [name]: value
        });
        console.log(this.state.user);
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
                        />
                    </label>
                    <h2 className={styles.inputNames}>Password:</h2>
                    <Input onChange={this.handleChange}
                           id="password"
                           name="password"
                           type="password"
                    />
                    <div className={styles.submitBtn}>
                        <Button type="submit"
                                id="submit"
                                value="enter">
                            Login
                        </Button>
                        <div className={styles.socialNetwork}>
                            <img src={facebook} className={styles.socialImg}/>
                            <img src={google} className={styles.socialImg}/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    }
}

export default AdminLogin;