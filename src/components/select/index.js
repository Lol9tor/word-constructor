import React, {propTypes, Component} from 'react';
import styles from './select.css'


class Select extends Component {
    static propTypes = {};

    render() {

        return <div>
            <select name={this.props.name} onChange={this.props.selectChange} className={styles.select}>
                {this.props.options.map((element, i)=> {
                    return <option key = {i} value={element.value}>{element.label}</option>
                })}
            </select>

        </div>
    }

}

export default Select;