import React from 'react';
import Option from './components/Option';
import './style.css';
import cat from './cat.png';
import dog from './dog.png';

const firstOption = "Cats";
const secondOption = "Dogs";
const firstOptionElement = <Option option={firstOption} src={cat} alt={"First option"}/>;
const secondOptionElement = <Option option={secondOption} src={dog} alt={"Second option"}/>;
const options = <div id="options">
		{firstOptionElement}
		{secondOptionElement}
</div>

function App() {
	return (
		<div className="vote-container">
			<h1 className="vote-subject">{firstOption} vs. {secondOption}</h1>
			<h1 className="">Pick Your Favourite</h1>
			{options}
			<button type="submit" className="vote-button">Submit Your Vote</button>
		</div>
	);
}

export default App;
