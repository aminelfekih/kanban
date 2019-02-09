import React, { Component } from 'react';
import './story.css';

class Story extends Component {

	render() {
        const story = this.props.story
        
		return (
            <div className='story'>
				<div><h4>{story.name}</h4></div>
			</div>
		);
	}
}
export default  Story