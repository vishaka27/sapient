import React,{Component} from 'react';

//Option Tag
class OptionTag extends Component {
	render() {
		return (
			<option>
			{this.props.children}
			</option>
		)
	}
}

export default OptionTag;