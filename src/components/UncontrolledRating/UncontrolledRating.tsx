import React, {useState} from 'react';

type RatingPropsType = {}

export function UncontrolledRating(props: RatingPropsType) {

    let [value, setValue] = useState(4);

    return (
        <div>
            <Star selected={value > 0} setValue={() => {setValue(1)}} value={1}/>
            <Star selected={value > 1} setValue={() => {setValue(2)}} value={2}/>
            <Star selected={value > 2} setValue={() => {setValue(3)}} value={3}/>
            <Star selected={value > 3} setValue={() => {setValue(4)}} value={4}/>
            <Star selected={value > 4} setValue={() => {setValue(5)}} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
}

function Star(props: StarPropsType) {
    return (
        <span onClick={ () => { props.setValue(props.value)}}>
            {props.selected ? <b>star </b> : 'star '}
        </span>
    )
}


