import React, { Component } from 'react';
import { ProgressBar, Table } from 'react-bootstrap';
import { Check2, Trash, Wrench } from 'react-bootstrap-icons';
import { toast } from 'react-toastify';
import AddItem from './AddItem';
import auth from '../services/authService';
import { getFood, addFood, deleteFood } from '../services/foodService';

class Today extends Component {
	state = {
		data: {
			items: [],
		},
		edit: false,
		errors: {},
	};

	componentDidMount = async () => {
		const user = auth.getCurrentUser();

		if (user) {
			const { items } = this.state.data;
			const { data } = await getFood(user);
			data.forEach((e) =>
				items.push({
					id: e.time,
					food: e.food,
					sugarAmount: e.sugarAmount,
				})
			);
			this.setState({ items });
		} else {
			toast.dark('Not Logged in. Food will not be saved.');
		}
	};

	handleAddItem = async ({ food, sugarAmount }) => {
		const now = new Date();
		const date = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
		const time = now.getTime();
		// add to db
		if (auth.getCurrentUser()) {
			await addFood(this.props.user, food, sugarAmount, date, time);
		}
		// update frontend
		const { items } = this.state.data;
		const id = time;
		items.push({ id, food, sugarAmount });
		this.setState({ items, edit: false });
	};

	handleDelete = async (item) => {
		// delete from db
		if (auth.getCurrentUser()) {
			await deleteFood(this.props.user.email, item.id);
		}
		// update frontend
		const originalItems = this.state.data.items;
		const items = originalItems.filter((i) => i.id !== item.id);
		this.setState({ data: { items } });
	};

	handleEdit() {
		let { edit } = this.state;
		edit = !edit;
		this.setState({ edit });
	}

	getGrams = (items) => {
		let grams = 0;
		for (let i = 0; i < items.length; i++) {
			grams += parseInt(items[i].sugarAmount);
		}
		return grams;
	};

	getProgress = (grams) => {
		return (grams / 50) * 100;
	};

	render() {
		const { items } = this.state.data;
		const grams = this.getGrams(items);
		const progress = this.getProgress(grams);
		const greenBar = 100 - progress;

		const { edit } = this.state;

		return (
			<div className="container">
				<h1>Monster Tracker</h1>
				<ProgressBar className="progressBar">
					<ProgressBar
						now={progress}
						animated={true}
						variant="danger"
						label={`${grams} g`}
					/>
					<ProgressBar
						now={greenBar > 0 ? greenBar : 0}
						animated={true}
						variant="success"
					/>
				</ProgressBar>
				<AddItem
					className="addItem"
					handlleAddItem={this.handleAddItem}
				/>
				<div className="foodTable">
					<Table striped variant="dark">
						<thead>
							<tr>
								<th>Food</th>
								<th>Grams of Sugar</th>
								{!edit && (
									<th>
										<button
											type="button"
											onClick={() => {
												this.handleEdit();
											}}
											className="btn btn-primary btn-sm"
										>
											<Wrench />
										</button>
									</th>
								)}
								{edit && (
									<th>
										<button
											type="button"
											onClick={() => {
												this.handleEdit();
											}}
											className="btn btn-primary btn-sm"
										>
											<Check2 />
										</button>
									</th>
								)}
							</tr>
						</thead>
						<tbody>
							{items.map((item) => (
								<tr key={item.id}>
									<td>{item.food}</td>
									<td>{item.sugarAmount}</td>
									{!edit && <td></td>}
									{edit && (
										<td>
											<button
												type="button"
												onClick={() => {
													this.handleDelete(
														item
													);
												}}
												className="btn btn-danger btn-sm "
											>
												<Trash />
											</button>
										</td>
									)}
								</tr>
							))}
						</tbody>
					</Table>
				</div>
			</div>
		);
	}
}

export default Today;
