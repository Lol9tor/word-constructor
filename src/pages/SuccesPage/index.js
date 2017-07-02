import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import Button from '../../components/button';
import styles from './succesPage.css'

class SuccesPage extends Component {
    static propTypes = {};

    render() {
        return <div>
            <Link to={'/'}>
                <Button>Go to main</Button>
            </Link>
            <Link to={'/admin/login'}>
                <Button>Go to login</Button>
            </Link>
            <Link to={'/admin'}>
                <Button>Go to admin</Button>
            </Link>
            <Link to={'/registration'}>
                <Button>Go to Registration</Button>
            </Link>
            <br/>
            <h1 className={styles.message}>Congratulations!</h1>

        </div>
    }
}

export default SuccesPage;