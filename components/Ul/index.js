import React,{Component} from 'react';

//Ul Tag
class Ul extends Component {
	render() {
		return (
			<ul className={this.props.class}>{this.props.children}</ul>
		)
	}
}

export default Ul;