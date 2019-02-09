import React, { Component } from 'react';
import './list.css';
import Story from '../story/story';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = ({ mouseIsHovering: false });
    }
    componentWillReceiveProps() {
        this.setState({ mouseIsHovering: false });
      }

    render() {
    const { stories, name, onDragEnd, alignFlex } = {...this.props}
    return (
        <div className="list"
            onDragEnter={(e) => {this.setState({ mouseIsHovering: true }); this.props.onDragBegin(e, name);}}
			onDragExit={(e) => {this.setState({ mouseIsHovering: false });}}
      >
        <h4 className="border"> {name} </h4>
        <div className={alignFlex ? "stories" : ""}>
          {stories.map((story) => {
            return  (
            <Story
              story={story}
              key={story.name}
              onDragEnd={onDragEnd}
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