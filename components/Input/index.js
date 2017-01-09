import React,{Component} from 'react';

//Input Tag
class Input extends Component {
	render() {
		return (
			<input type={this.props.type} className={this.props.class}/>
		)
	}
}
export default Input;
