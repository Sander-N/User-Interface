import React from 'react';
import OptionImage from './components/OptionImage';
import './style.css';
import cat from './cat.png';
import dog from './dog.png';

const firstOption = "Cats";
const secondOption = "Dogs";
const firstOptionImage = <OptionImage src={cat} alt={"First option"}/>;
const secondOptionImage = <OptionImage src={dog} alt={"Second option"}/>;
const options = <div id="options">
		{firstOptionImage}
		{secondOptionImage}
</div>

function App() {
	return (
		<div className="vote-container">
			<h1 className="vote-subject">{firstOption} vs. {secondOption}</h1>
			<h1 className="">Pick Your Favourite</h1>
			{options}
			<button className="vote-button">Submit Your Vote</button>
		</div>
	);
}

export default App;
