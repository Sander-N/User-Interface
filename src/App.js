import React from 'react';
import Option from './components/Option';
import './style.css'
import './buttons.css'
import './options.css'
import './dialog.css'
import './animations.css'
import optionOne from './cat.png';
import optionTwo from './dog.png';

const firstOption = "Cats";
const secondOption = "Dogs";
const firstOptionElement = <Option option={firstOption} src={optionOne} alt={"First option"}/>;
const secondOptionElement = <Option option={secondOption} src={optionTwo} alt={"Second option"}/>;
const options = <div className="options">
		{firstOptionElement}
		{secondOptionElement}
</div>

function App() {
	return (
		<div className="vote-container">
			<h1 className="vote-subject">{firstOption} vs. {secondOption}</h1>
			<h1 className="">Pick Your Favourite</h1>
			{options}
		</div>
	);
}

export default App;
