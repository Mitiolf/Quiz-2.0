import React from "react"

export default function Question(props){

var anwsers = props.question.anwsers

    return(
       <fieldset  className="question--container">
        <legend><h2>{props.question.question}</h2></legend>
        <input 
            type="radio" 
            id={`anwser0${props.question.key}`}
            name={props.question.key}
            value={anwsers[0]}
            onChange={props.choseAnwser}/>            
        <label htmlFor={`anwser0${props.question.key}`} id="question--answer">{anwsers[0]}</label>
        <input 
            type="radio" 
            id={`anwser1${props.question.key}`} 
            name={props.question.key}
            value={anwsers[1]}
            onChange={props.choseAnwser}/>                        
        <label htmlFor={`anwser1${props.question.key}`} id="question--answer">{anwsers[1]}</label>
        <input 
            type="radio" 
            id={`anwser2${props.question.key}`}
            name={props.question.key}
            value={anwsers[2]}
            onChange={props.choseAnwser}/>                        
        <label htmlFor={`anwser2${props.question.key}`} id="question--answer">{anwsers[2]}</label>
        <input 
            type="radio" 
            id={`anwser3${props.question.key}`}
            name={props.question.key}
            value={anwsers[3]}
            onChange={props.choseAnwser}/>            
        <label htmlFor={`anwser3${props.question.key}`} id="question--answer">{anwsers[3]}</label>
        </fieldset>
    )
}