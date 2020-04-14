import React from 'react';
import Card from './Card';

const CardList=({robots})=>{
	return(
		<div>
		{
		robots.map((users,i)=>
			{ 
				return (<Card key={i} name={robots[i].name} power={robots[i].power} level={robots[i].level} />);
			} 
		)
		} 
		</div>
		);
}

export default CardList;