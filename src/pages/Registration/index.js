import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import styles from './registration.css'
import Input from '../../components/input';
import Button from '../../components/button';
import submitStyle from '../../components/button/button.css';
import Select from '../../components/select'

const options = [
    {
        label: "",
        value: ""
    },
    {
        label: "Ukraine",
        value: "UA"
    },
    {
        label: "Germany",
        value: "GER"
    }
];

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

    show = (e)=> {
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
            <h1 className={styles.header}>Hello at registration page!</h1>
            <br/>
            <form onSubmit={this.show}>
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
                    <h2 className={`${styles.inputNames} ${styles.inputWrapper}`}>Password</h2>
                    <Input type="password" name="password" onChange={this.handleFormChange}/>
                </label>
                <label>
                    <h2 className={styles.inputNames}>Confirm password</h2>
                    <Input type="password" name="confirmPassword" onChange={this.handleFormChange}/>
                </label>

                <div className={styles.flexContainer}>
                    <div>
                        Country:
                        <Select name="country" selectChange={this.handleSelect} options={options}/>

                    </div>
                    <div className={styles.sex}>
                        Sex:
                        Male
                        <input type="radio"
                               name="sex"
                               value="male"
                               onChange={this.handleSelect}
                        />
                        Female
                        <input type="radio"
                               name="sex"
                               value="female"
                               onChange={this.handleSelect}/>
                    </div>
                    <br/>
                </div>


                <input type="submit" value='Save' className={submitStyle.button}/>
            </form>
        </div>
    };
}

export default Registration;
