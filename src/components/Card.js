import React from 'react';

const Card=({name, power, level})=>{
	return(
		<div className='bg-light-blue dib ma2 br3 shadow-5 grow b--red bw6 pa3'>
			<img src={`https://robohash.org/${name}?size=200x200`} alt='robots'/>
			<div className='tc'>
				<p className='b red'>{name}</p>
				<p>{power}</p>
				<p>Level:{level}</p>
			</div>
		</div>		
	);
}

export default Card; 