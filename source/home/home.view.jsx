import React from 'react';

export default class HomeView extends React.Component {

	constructor(properties) {

		super(properties);

		this.state = {
			items: [
				{
					label: 'Lorem',
					id: (new Date).getTime()
				}
			],
			counter: 1
		};

		this.handleClickPush = this.handleClickPush.bind(this);

	}

	render() {

		return (
			<div>
				<h2>Home</h2>

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorem necessitatibus ab et quos reiciendis iste, impedit eligendi expedita enim incidunt saepe quam cumque tenetur beatae quibusdam magni quo obcaecati?</p>

				<button type="button" onClick={this.handleClickPush}>Lorem ipsum</button>

				<p>{this.state.counter} items</p>

				<ul>
					{this.state.items.map(item => (
						<li key={item.id}>{item.label}</li>
					))}
				</ul>
			</div>
		);

	}

	handleClickPush() {

		console.log('It works');

		this.setState(prevState => ({
			items: prevState.items.concat(
				{
					label: 'Lorem',
					id: (new Date).getTime()
				}
			),
			counter: prevState.counter + 1
		}));

	}

}
