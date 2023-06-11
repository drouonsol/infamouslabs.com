import React from 'react';
import { Helmet } from 'react-helmet';
import Musicplayer from '../components/musicplayer';

const Roadmap = () => {
return (
	<section style={{color:"#", height:"75vh",justifyContent:"center",textAlign:"center",top:"50",bottom:"50",alignItems:"center",display:"flex" }}>
		<Helmet>
			<title>Roadmap</title>
			</Helmet>

<Musicplayer/>
	</section>
);
};

export default Roadmap;
