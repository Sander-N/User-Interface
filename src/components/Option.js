import React from 'react';

export default class Option extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggled: false,
			option: props.option
		};

		this.handleClick = this.handleClick.bind(this);
	}


	handleClick() {
		this.setState({toggled: !this.state.toggled});
		console.log(this.state.option + " " + this.state.toggled);
	}

	render() {
		return <button option={this.props.option} className="option-button" onClick={this.handleClick}>
				<img className={`image ${this.state.toggled ? "toggled" : ""}`} src={this.props.src} alt={this.props.alt}/>
			</button>
	}
}
