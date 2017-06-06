import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import styles from './registration.css'
import Input from '../../components/input';
import Button from '../../components/button';


class Registration extends Component {
    static propTypes = {};
    state: {};


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

        </div>
    };
}

export default Registration;
