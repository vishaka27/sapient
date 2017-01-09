import React,{Component} from 'react';


//Li Tag
class Li extends Component {
	render() {
		return (
			<li>{this.props.children}</li>
		)
	}
}

export default Li;