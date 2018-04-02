import React, { Component } from 'react';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';
import FaFloppyO from 'react-icons/lib/fa/floppy-o';

class Resource extends Component {
	constructor(props) {
		super(props)
		this.state = {
			editing: false
		}
		this.edit = this.edit.bind(this);
		this.add = this.add.bind(this);
		this.remove = this.remove.bind(this);
		this.save = this.save.bind(this);
		this.renderForm = this.renderForm.bind(this);
		this.renderDisplay = this.renderDisplay.bind(this);
	}
	edit() {
		this.setState ({
			editing: true
		});
	}
	add() {
		this.props.onClick(console.log('adding resource'));
	}
	remove() {
		this.props.onRemove(this.props.index);
	}

	save(e) {
		e.preventDefault();
		this.props.onChange(this._newText.value, this.props.index);
		this.setState({
			editing: false
		})
	}

	renderForm() {
		return (
				<div className="resource">
					<form onSubmit={this.save}>
						<textarea rows="8" ref={input => this._newText = input} name="name" defaultValue="Employee Name              Employee Skills" />
						<button id ="save"> <FaFloppyO /></button>
					</form>
				</div>
			);
	}

	renderDisplay() {
		return (
				<div className="resource">
					<p>{this.props.children} </p>
					<span>
						<button onClick={this.edit} id="edit"><FaPencil /></button>
						<button id onClick={this.remove} id="remove"><FaTrash /></button>
					</span>
				</div>
			);
	}

	render() {
		if(this.state.editing) {
			return this.renderForm()
		} else {
			return this.renderDisplay()
		}
		
	}
};

export default Resource;