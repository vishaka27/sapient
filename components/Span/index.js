import React,{Component} from 'react';


//Span Tag
class Span extends Component {
	render() {
		return (
			<span className={this.props.class}>{this.props.children}</span>
		)
	}
}

export default Span;