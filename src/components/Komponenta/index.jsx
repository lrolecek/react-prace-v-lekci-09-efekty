import React, {useState, useEffect} from 'react';
import './style.css';

const Komponenta = () => {

	const [person, setPerson] = useState({});

	useEffect(
		() => {
			fetch('https://swapi.dev/api/people/1/')
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setPerson(data);
			})
		},
		[]
	);

	return (
		<div className="komponenta">
			<h3>Komponenta</h3>
			<p>Jméno: {person.name}</p>
			<p>Barva očí: {person.eye_color}</p>
			<p>Barva vlasů: {person.hair_color}</p>
		</div>
	)
}

export default Komponenta;
