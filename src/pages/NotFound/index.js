import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import Button from '../../components/button';

class NotFound extends Component {
    static propTypes = {};

    render() {
        return <div><h1>404 Not Found!</h1>
            <br/>
            <Link to={'/'}>
                <Button>Go to main</Button>
            </Link>
            <Link to={'/admin/login'}>
                <Button>Go to login</Button>
            </Link>
            <Link to={'/admin'}>
                <Button>Go to admin</Button>
            </Link>
        </div>
    }
}

export default NotFound;