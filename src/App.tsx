import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';

function App() {
    console.log("App rendering")
    return (

        <div className={"App"}>
            <OnOff/>

            <UncontrolledAccordion title={'Menu'}/>
            <UncontrolledAccordion title={'Users'}/>

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

