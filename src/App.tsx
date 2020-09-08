import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

function App() {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4);

    return (

        <div className={"App"}>
            {/*<OnOff/>*/}

            <UncontrolledRating />
            {/*<UncontrolledAccordion title={"Menu"}/>*/}
            {/*<Accordion title={"Menu"} collapsed={false} />*/}

            {/*<Rating  value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<Rating value={3} />*/}

            {/*Article #1
        <Rating value = {1}/>
        Article #2
        <Rating value = {2}/>
        Article #3
        <Rating value = {3}/>
        Article #4
        <Rating value = {4}/>
        Article #5
        <Rating value = {5}/>*/}

            {/*<Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}


        </div>
    )
}


export default App;

