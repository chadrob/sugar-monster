import React, { Component } from 'react';

class HowToPlay extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<h1>Tame your Sugar Monster!</h1>
				<p>
					The rules of the game are simple: if you eat food with
					added sugar then add the eaten amount of sugar to the
					food list.
				</p>
				<p>
					Careful though. As you eat sugar your monster will
					grow. Your monster will be strongest if you eat more
					than 50 grams of sugar for the day, so it is best to
					stay under this limit.
				</p>
				<p>Click on 'My Profile' to view your stats.</p>
				<br />
				<h2>Counting Sugar</h2>
				<h4>
					<u>Foods with labels</u>
				</h4>
				<p>
					You can estimate the amount of sugar in your food by
					looking at the ingredients list and nutritition label.
					If you spot sugar in the ingedients list then this food
					has added sugar. Next, locate the sugar entry in the
					nutrition label and use this amount to estimate what
					you have consumed for your meal.
				</p>
				<h4>
					<u>Foods without labels</u>
				</h4>
				<p>
					A simple Google search will work here. Ask Google, "How
					much sugar is in a Big Mac". Then look for the first
					reasonable answer. These foods require investigative
					work, however by doing so you will become more aware of
					how much sugar is in the foods you eat.
				</p>
			</React.Fragment>
		);
	}
}

export default HowToPlay;
