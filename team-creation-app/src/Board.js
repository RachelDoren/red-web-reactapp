import React, { Component } from 'react';
import Resource from './Resource';
import FaPlus from 'react-icons/lib/fa/plus';

class Board extends Component {
	constructor(props) {
		super(props)
		this.state = {
			resources: []
		}
		this.add = this.add.bind(this);
		this.eachResource = this.eachResource.bind(this);
		this.update = this.update.bind(this);
		this.delete = this.delete.bind(this);
		this.nextId = this.nextId.bind(this);

	}

	componentWillMount() { //only lifecycle hook called on server rndering
		var self = this;
		if(this.props.count) {
			fetch(`https://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`)
				.then(response => response.json())
				.then(json => json[0].split('. ').forEach(sentence => self.add(sentence.substring(0,25))))
		}
	}

	add(text) {
		this.setState(prevState => ({
			resources: [
				...prevState.resources,
				{
					id: this.nextId(),
					resource: text
				}
			]
		}));

	}

	nextId() {
		this.uniqueId = this.uniqueId || 0
		return this.uniqueId++
	}


	conponentWillMount() {
		var self = this
		if(this.props.count) {
			fetch(`https://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`).then(response => response.json()).then(json => json[0].split(". ").forEach(sentence => self.add(sentence.substring(0,25))))
		}
	}

	update(newText, i) {
		this.setState(prevState => ({ //callback function to change state
			resources: prevState.resources.map( 
					resource => (resource.id !== i) ? resource : {...resource, resource: newText}
				)
		}));

	}

	delete(id) {
		this.setState(prevState => ({
			resources: prevState.resources.filter(resource => resource.id !== id)
		}));
	}

	nextId() {
		this.uniqueId = this.uniqueId || 0
		return this.uniqueId++; 
	}

	eachResource(resource, i) {
		return (
				<Resource key={i}
						index={i}
						onChange={this.update}
						onRemove={this.delete}
						onAdd={this.add}>
						{resource.resource}
				</Resource>
			);
	}
	

	render() {
		return (
				<div className="board">
					{this.state.resources.map(this.eachResource)}
					<button onClick={this.add.bind(null, "Employee Name,   Skills")}
						id="add">  <FaPlus /> </button>

				</div>
			);
	};
}

export default Board;