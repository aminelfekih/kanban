import React, { Component } from 'react';
import './addStory.css';

class AddStory extends Component {
    constructor(props) {
        super(props);
        this.state= {
            newStoryName: '',
        };
        this.onSubmit = this.onSubmit.bind(this);
    }
    updateTitle = (e) => {
        this.setState({newStoryName: e.target.value});
    }
    onSubmit() {
        const name = this.state.newStoryName;
        const story = {
            name,
            progression: "Story",
          }
        if (name !== '') {
            this.props.onAddStory(story)
            this.setState({
                newStoryName: '',
            })
        }
    }
    render() {
      const newStoryName = this.state.newStoryName;
        return (
            <div className="addStory">
                <div className="title">
                Create New Story
                </div>
                <input
                type="text"
                placeholder="type story title"
                className="storyInput"
                onChange={this.updateTitle}
                value={newStoryName}
                />
                <button type="submit" className="submitStory" onClick={this.onSubmit}>
                Submit
                </button>
            </div>
        );
    }
}

export default AddStory;