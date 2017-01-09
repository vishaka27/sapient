import React,{Component} from 'react';
import styled from 'styled-components';

//Select Tag
class SelectTag extends Component {
	render() {
		return (
			<select>
			{this.props.children}
			</select>
		)
	}
}

export default SelectTag;