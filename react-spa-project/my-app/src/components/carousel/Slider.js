import React  from 'react';
import Carousel from 'react-elastic-carousel';
import Card from '../carousel/Card'
import './Card.css'

const Slider = () => {

const breakPoints = [
    {width: 500, itemsToShow: 1},
    {width: 768, itemsToShow: 2},
    {width: 960, itemsToShow: 3}
]

    return (
        <Carousel breakPoints={breakPoints}>
            <Card number="Grand View" />
            <Card number="Netflix" />
            <Card number="Chucky" />
            <Card number="Spiderman" />
            <Card number="Mad Max" />
            <Card number="Netflix" />
        </Carousel>
    )
}

export default Slider