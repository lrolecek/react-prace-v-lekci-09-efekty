import React, {useState, useEffect} from 'react';
import './style.css';

const People = () => {

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
			<h3>People</h3>
		</div>
	)
}

export default People;
