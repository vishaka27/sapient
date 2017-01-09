import React,{Component} from 'react';

//Button Tag
class Button extends Component {
	render() {
		return (
			<button type={this.props.type} className={this.props.class}>{this.props.children} </button>
		)
	}
}


export default Button;
