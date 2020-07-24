import React from 'react';

import BodyInfo from '../components/Bodyinfo'
import {Link} from 'react-router-dom'

export default function Home () {
    return (
    <>
    <BodyInfo  title="Our Featured Products">
        <Link  to= "/products" className="main-link" style={{ margin: "2rem" }}> Our Products</Link>

    </BodyInfo>
    </>
    );
}




  