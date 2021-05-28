import React from 'react'
import Slider from '../carousel/Slider'
import PageTitle from '../pagetitle/PageTitle'


const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <PageTitle title="Home" />
                <Slider />
            </div>
            
        </div>
        
    )
}

export default Home;