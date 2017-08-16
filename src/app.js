/**
 * Created by Charlotte on 4/2/2017.
 */
import React, { Component } from 'react'
import {render} from 'react-dom'


const AddNewPoll = (props) => {
    return (
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
            Add New Poll
        </button>
    )
}

const Poll = (props) => {
    return (<li key={props.name} className="poll mdl-list__item">{props.name}</li>)
}


const Polls = (props) => {
    let p = []
    props.pollnames.forEach((x) => {
            console.log(x);
            p.push(<Poll key={x} name={x}/>)
        }
    )
    console.log(p)

    return (

        <div className='polls'>
            <h4>Polls</h4>

            <ul className="mdl-list">
                {p}
            </ul>
        </div>
    )
}

class SFPoll extends Component {

    render() {
        let polls= ['ABC', 'DEF', 'GHI', 'LLL']
        return (<div>
            Hello Charlotte
            <Polls pollnames={polls}></Polls>
            <AddNewPoll />
        </div>)
    }
}



render (
    <SFPoll />,
    document.getElementById('sfvote')
)
