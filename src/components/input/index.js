import React, {Component, PropTypes} from 'react';
import styles from './input.css'; // обьект с классами(их названия)

class InputText extends Component {
	static propTypes = {};

	render() {
		return <div>
			<input
				type="text"
				className={styles.inputStyle}/>
		</div>
	}
}

export default InputText;
