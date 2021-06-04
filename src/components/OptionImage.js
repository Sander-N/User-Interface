import React from 'react';

export default class OptionImage extends React.Component {
	render() {
		return <div className="option-images-container">
				<img className="image" src={this.props.src} alt={this.props.alt}/>
			</div>
	}
}
