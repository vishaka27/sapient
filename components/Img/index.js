import React, {Component} from 'react';


//Image Tag
class Img extends Component {
	render() {
		return (
			<img src={this.props.src} alt={this.props.alt} className={this.props.class} />
		)
	}
}

export default Img;