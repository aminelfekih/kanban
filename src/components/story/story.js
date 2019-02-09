import React, { Component } from 'react';
import './story.css';

class Story extends Component {

	render() {
        const story = this.props.story
        let styleStory = story.progression === 'Story'
        ? {backgroundColor: '#95DAEB', width: '50%', height: '70px', margin: '10% 0 10% 25%'}
        : {backgroundColor: '#F9EEB2', width: '90px', height: '90px'}
        
		return (
            <div className='story'
                style={styleStory}
                draggable={true}
                onDragEnd={(e) => {this.props.onDragEnd(e, this.props.story);}}
            >
				<div><h4>{story.name}</h4></div>
			</div>
		);
	}
}
export default  Story