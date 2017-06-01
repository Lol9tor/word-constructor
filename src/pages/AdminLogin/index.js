/**
 * Created by Vetal_Haman on 01.06.2017.
 */

import React, {Component, PropTypes} from 'react';
import styles from './adminLogin.css'; // обьект с классами(их названия)

class AdminLogin extends Component {
    static propTypes = {};

    render() {
        return <div className={styles.adminLogin}>Admin Login</div>
    }
}

export default AdminLogin;