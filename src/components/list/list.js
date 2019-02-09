import React, { Component } from 'react';
import './list.css';
import Story from '../story/story';

class List extends Component {

  render() {
    return (
      <div className="list">
        <h4 className="border"> {this.props.name} </h4>
        <div>
          {this.props.stories.map((story) => {
            return  (
            <Story
              story={story}
              key={story.name}
            />           
           )
            }
            )}
        </div>
      </div>
    );
  }
}

export default List;