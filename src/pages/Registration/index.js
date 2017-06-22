import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import styles from './registration.css'
import Input from '../../components/input';
import Button from '../../components/button';
import Select from '../../components/select';
import RadioGroup from '../../components/radiogroup';

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
    age: ['required', 'isNumber', {type: 'isBetween', args: [5, 80]}],
    phone: ['required', 'isNumber'],
    hobbies: ['required', {type: 'length', args: [1, 200]}],
    country: ['required'],
    email: ['required'],
    gender: [],
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
            sex: ""
        }
    };

    submitForm = (e)=> {
        e.preventDefault();
        console.log(this.state.user);
    };

    handleFormChange = (value, name)=> {
        const user = {
            ...this.state.user, // === firstName:" что-то", lastName:" что-то" из state.user (называется деструктуризация)
            [name]: value //  При изменении LastName перезаписывается свйство LastName в user
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
                            <h2 className={`${styles.inputNames} ${styles.inputWrapper}`}>Password</h2> {/*few styles add (example)*/}
                            <Input type="password" name="password" onChange={this.handleFormChange}/>
                        </label>
                        <label>
                            <h2 className={styles.inputNames}>Confirm password</h2>
                            <Input type="password" name="confirmPassword" onChange={this.handleFormChange}/>
                        </label>
                        <div className={styles.countrySelect}>
                            <h2 className={styles.inputNames}>Country:</h2>
                            <Select className={styles.countrySelect}
                                    placeholder={"dcdcdcd"}
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
