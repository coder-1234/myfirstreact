import React from 'react';

function Searchbox({searchfield,searchchange}){
	return (
	<div className='pa2'>
	<input className='pa3 ba bw3 b--yellow bg-lightest-blue' type='search' placeholder='Search robots' onChange={searchchange}/>
	</div>
	);
}
export default Searchbox;