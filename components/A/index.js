import React,{Component} from 'react';

//Anchor Tag
class A extends Component {
	render() {
		return (
			<a href={this.props.href}>{this.props.children}</a>
		)
	}
}
export default A;
