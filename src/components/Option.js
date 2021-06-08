import React from 'react';

export default class Option extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			option: props.option,
			overlayVisible: false
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleClick() {
		this.setState({overlayVisible: true});
	}

	handleCancel() {
		this.setState({overlayVisible: false});
	}

	handleSubmit() {
		this.setState({overlayVisible: false});
		console.log("Sent:" + JSON.stringify({vote: this.state.option}));
		const request = {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({vote: this.state.option})
		};
		fetch('http://localhost:8080', request)
			.then(response => response.json());
	}

	render() {
		return <div>
				<button option={this.props.option} className="option-button" onClick={this.handleClick}>
				<img className="image" src={this.props.src} alt={this.props.alt}/>
				</button>
				<div className={`overlay ${this.state.overlayVisible ? "" : "hidden"}`}>
					<div className="dialog">
						<h2>Are you sure you want to vote for {this.state.option}?</h2>
						<div className="dialog-buttons">
							<button className="button button--submit" onClick={this.handleSubmit}>Submit</button>
							<button className="button" onClick={this.handleCancel}>Cancel</button>
						</div>
					</div>
				</div>
			</div>
	}
}
