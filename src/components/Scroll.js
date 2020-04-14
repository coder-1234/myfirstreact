import React from 'react';
import './Scroll.css';

function Scroll(props){
	return (<div id='style-7' style={{overflow : 'scroll', border:'1px black',height: '800px'}}>
				{props.children}
			</div>	);
}

export default Scroll;