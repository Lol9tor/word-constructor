import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import styles from './registration.css'
import Input from '../../components/input';
import Button from '../../components/button';
import Select from '../../components/select';
import RadioGroup from '../../components/radiogroup';
import validator from '../../utils/validator';

const options = [
    {
        label: "Choose your country",
        value: false
    },
    {
        label: "Ukraine",
        value: "UA"
    },
    {
        label: "Germany",
        value: "GER"
    },
    {
        label: "United States of America",
        value: "USA"
    },
    {
        label: "Russian Federation",
        value: "RU"
    },
    {
        label: "France",
        value: "FR"
    },
    {
        label: "Latvia",
        value: "LT"
    }
];
const rules = {
    firstName: ['required', {type: 'length', args: [2, 20]}],
    lastName: ['required', {type: 'length', args: [2, 20]}],
    password: ['required', {type: 'length', args: [2, 20]}],
    confirmPassword: ['required', 'same'],
    country: ['selected'],
    email: ['required'],
    sex: ['required'],
};


class Registration extends Component {
    static propTypes = {};
    state = {
        user: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            country: "",
            sex: "male"
        }
    };

    submitForm = (e)=> {
        e.preventDefault();

        let inputNames = Object.keys(this.state.user);
        inputNames.forEach((name, i, arr)=> {
            e.target[name].classList.remove(styles.invalid);

            rules[name].forEach((rule, i, arr)=> {
                let type = rule.type || rule;
                let args = [].concat(this.state.user[name], rule.args);
                if (name === 'confirmPassword') {
                    args = [].concat(this.state.user.password,this.state.user[name])
                }
                let check = validator[type].apply(null, args);
                console.log(name, check);

                if (!check) {
                    e.target[name].classList.add(styles.invalid);
                }
            });
        });
        console.log(this.state.user);
    };

    handleFormChange = (value, name, e)=> {
        const user = {
            ...this.state.user,
            [name]: value
        };

        this.setState({
            user: user
        })
    };

    handleSelect = (e)=> {
        console.log(e.currentTarget.value);
        console.log(e.currentTarget.name);
        this.handleFormChange(e.currentTarget.value, e.currentTarget.name)
    };


    render() {
        return <div>
            <Link to={'/'}>
                <Button>Go to main</Button>
            </Link>
            <Link to={'/admin'}>
                <Button>Go to admin</Button>
            </Link>
            <Link to={'/admin/login'}>
                <Button>Go to login</Button>
            </Link>

            <div className={styles.wrapper}>
                <div>
                    <h1>Hello at registration page!</h1>
                </div>
                <br/>
                <form onSubmit={this.submitForm}
                      className={styles.form}
                >
                    <label>
                        <h2 className={styles.inputNames}>Name</h2>
                        <Input type="text" name="firstName" onChange={this.handleFormChange}/>
                    </label>
                    <label>
                        <h2 className={styles.inputNames}>Last Name</h2>
                        <Input type="text" name="lastName" onChange={this.handleFormChange}/>
                    </label>
                    <label>
                        <h2 className={styles.inputNames}>Email</h2>
                        <Input type="email" name="email" onChange={this.handleFormChange}/>
                    </label>
                    <label>
                        <h2 className={`${styles.inputNames} ${styles.inputWrapper}`}>
                            Password</h2> {/*few styles add (example)*/}
                        <Input type="password" name="password" onChange={this.handleFormChange}/>
                    </label>
                    <label>
                        <h2 className={styles.inputNames}>Confirm password</h2>
                        <Input type="password" name="confirmPassword" onChange={this.handleFormChange}/>
                    </label>
                    <div className={styles.countrySelect}>
                        <h2 className={styles.inputNames}>Country:</h2>
                        <Select className={styles.countrySelect}
                                name="country"
                                selectChange={this.handleSelect}
                                options={options}/>
                    </div>
                    <div className={styles.sex}>
                        <h2 > Sex:</h2>
                        <div className={styles.gender}>
                            <h3 className={styles.genderItems}>Male</h3>
                            <RadioGroup name="sex"
                                        value="male"
                                        checked ={true}
                                        onChange={this.handleSelect}
                            />
                        </div>
                        <div className={styles.gender}>
                            <h3 className={styles.genderItems}>Female</h3>
                            <RadioGroup name="sex"
                                        value="female"
                                        onChange={this.handleSelect}
                            />
                        </div>
                    </div>
                    <br/>
                    <div className={styles.submitBtn}>
                        <Button type="submit"
                                value='Save'>
                            Save
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    };
}

export default Registration;
