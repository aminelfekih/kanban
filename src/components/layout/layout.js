import React, { Component } from 'react';
import AddStory from '../addStory/addStory';
import List from '../list/list';
import './layout.css';

const lists = [
    {
      name: "Story",
      key: 0,
    },
    {
      name: "Not Started",
      key: 1,
    },
    {
      name: "In Progress",
      key: 2,
    },
    {
      name: "Done",
      key: 3,
    }
  ]

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
          stories: [],
          dragged: 0,
        };
        this.handleOnDragBegin = this.handleOnDragBegin.bind(this);
        this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
        this.onAddStory = this.onAddStory.bind(this);
      }
    handleOnDragBegin(e,value) {
        this.setState({ dragged: value });
    }
    handleOnDragEnd(e,value) {
        let storiesToUpdate = this.state.stories
        storiesToUpdate.find((story) => story.name === value.name).progression = this.state.dragged
        this.setState({ stories: storiesToUpdate });
    }
    onAddStory(newStory) {
      const updateStories = this.state.stories;
      updateStories.push(newStory);
      this.setState({ stories: updateStories });
    }
    componentDidMount() {
      fetch('/api/stories')
      .then(response => response.json())
      .then(stories => this.setState({ stories }));
    }
    render() {
    const stories = this.state.stories
    return (
      <div className="board">
        <AddStory onAddStory={this.onAddStory}/>
        <div className="lists">
				{lists.map((list) => {
					return (
						<List
                            name={ list.name }
                            key={ list.key }
                            stories={stories.filter((story) => story.progression === list.name)}
                            alignFlex={list.name === 'Story' ? false : true}
                            onDragBegin={ this.handleOnDragBegin }
							onDragEnd={ this.handleOnDragEnd }
						/>
					);
				})}
        </div>
      </div>
    );
  }
}

export default Layout;