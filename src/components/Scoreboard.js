import React from 'react';
import PlacarContainer from './PlacarContainer';

const dados = {
	partida: {
		estadio: "Stadium/County",
		data: "DD/MM/YYYY",
		horario: "HH:MM",
	},
	casa: {
		nome: "Team1",
	},
	visitante: {
		nome: "Team2",
	}
}

export default class App extends React.Component {
	render() {
		return (
			<PlacarContainer {...dados} />
		);
	}
}
