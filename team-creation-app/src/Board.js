import React, { Component } from 'react';
import Resource from './Resource';

class Board extends Component {
	constructor(props) {
		super(props)
		this.state = {
			resources: [
				{
					id: 1,
					resource: "Jane Doe: ",
					skills: " Javascript, React, PHP"
				},
				{
					id: 2,
					resource: "John Don: ",
					skills: " Wordpress, React, C#"
				},
				{
					id: 3,
					resource: "Julie Smith: ",
					skills: " Node.js, SQL, C++, C#, Hive, Unity, Unreal"
				}

			]
		}
		this.eachResource = this.eachResource.bind(this);
	}

	eachResource(resource, i) {
		return (
				<Resource key={i}
						index={i}>
						{resource.resource}
						{resource.skills}
				</Resource>
			)
	}
	

	render() {
		return (
				<div className="board">
					{this.state.resources.map(this.eachResource)}
				</div>
			);
	};
}

export default Board;