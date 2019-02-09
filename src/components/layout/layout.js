import React, { Component } from 'react';
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
          stories: [
            {
              name: 'Project 1',
              progression: "Story"
            },
            {
              name: 'Project 2',
              progression: "Done"
            },
            {
              name: 'Project 3',
              progression: "In Progress"
            },
            {
              name: 'Project 4',
              progression: "Story"
            },
            {
              name: 'Project 5',
              progression: "In Progress"
            },
            {
              name: 'Project 6',
              progression: "Not Started"
            },
            {
              name: 'Project 7',
              progression: "Story"
            },
          ]
        };
      }


    render() {
    return (
      <div className="board">
        <div className="lists">
				{lists.map((list) => {
					return (
						<List
                            name={ list.name }
                            key={ list.key }
                            stories={this.state.stories.filter((story) => story.progression === list.name)}
						/>
					);
				})}
        </div>
      </div>
    );
  }
}

export default Layout;