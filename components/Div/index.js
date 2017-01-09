import React,{Component} from 'react';

//Div Tag
class Div extends Component {
	render() {
		return (
			<div className={this.props.class}>{this.props.children}</div>
		)
	}
}

export default Div;