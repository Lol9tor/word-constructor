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
        let user = this.state.user;
        for (let key in user) {
            for (var i = 0; i < rules[key].length; i++) {
                let type = rules[key][i].type || rules[key][i];
                let args = [].concat(user[key], rules[key][i].args);
                if (key === "confirmPassword") {
                    args = [].concat(e.target["password"].value, e.target["confirmPassword"].value);
                }
                let check = validator[type].apply(null, args);
                if (!check) {
                    e.target[key].classList.add(styles.invalid);
                } else {
                    this.setState({
                        ...this.state.user,
                        [name]: value
                    });
                }
            }
        }


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