import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';

class AddItem extends Form {
	state = {
		data: {
			food: '',
			sugarAmount: '',
		},
		errors: {},
	};

	schema = {
		food: Joi.string().required().label('Food'),
		sugarAmount: Joi.number().required().label('Grams'),
	};

	doSubmit = () => {
		const { food, sugarAmount } = this.state.data;
		this.props.handlleAddItem({ food, sugarAmount });
		this.setState({ data: { food: '', sugarAmount: '' } });
	};

	render() {
		return (
			<div className="container">
				<form
					onSubmit={this.handleSubmit}
					className="row"
					id="addItemForm"
				>
					<div className="col-7">
						{this.renderInput('food', 'Food')}
					</div>
					<div className="col-5">
						{this.renderInput('sugarAmount', 'Sugar (g)')}
					</div>
					<div className="addItemButton">
						{this.renderButton('Add')}
					</div>
				</form>
			</div>
		);
	}
}

export default AddItem;
