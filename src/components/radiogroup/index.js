import React, {propTypes, Component} from "react";
import styles from "./radiogroup.css";


class RadioGroup extends Component {
    static propTypes = {};

    render() {

        return <div>
            <input type="radio"
                   name={this.props.name}
                   value={this.props.value}
                   onChange={this.props.onChange}>
                {this.props.children}
            </input>

        </div>


    };


}

export default RadioGroup;