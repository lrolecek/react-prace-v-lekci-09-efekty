import React, {useState, useEffect} from 'react';
import './style.css';

const People = () => {

	const [people, setPeople] = useState([]);

	const loadData = () => {
		fetch('https://swapi.dev/api/people/')
		.then(response => response.json())
		.then(data => {
			console.log(data);
			setPeople(data.results);
		})
	}

	useEffect(
		() => {
			loadData();
		},
		[]
	);

	return (
		<div className="komponenta">
			<h3>Starwars People</h3>
			<ul>
			{ people.map(person => <li key={person.name}>{person.name}</li> ) }
			</ul>
			<h3>Úůůůůůúúú, jupíí</h3>
		</div>
	)
}

export default People;
