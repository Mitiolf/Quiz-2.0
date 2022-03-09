import React from "react"

export default function Question(props){

var anwsers = props.question.anwsers

const styles0 = {
        opacity: props.question.correct === anwsers[0] ? 1 : '0.5',
        backgroundColor: (props.question.correct === anwsers[0] ? "#59E391" : 0 || props.userAnwser === anwsers[0] ? "#F8BCBC" : "#F5F7FB"),
        
    }
const styles1 = {
        opacity: props.question.correct === anwsers[1] ? 1 : '0.5',
        backgroundColor: props.question.correct === anwsers[1] ? "#59E391" : 0 || props.userAnwser === anwsers[1] ? "#F8BCBC" : "#F5F7FB",
        
    }
const styles2 = {
        opacity: props.question.correct === anwsers[2] ? 1 : '0.5',
        backgroundColor: props.question.correct === anwsers[2] ? "#59E391" : 0 || props.userAnwser === anwsers[2] ? "#F8BCBC" : "#F5F7FB",
    }
const styles3 = {
        opacity: props.question.correct === anwsers[3] ? 1 : '0.5',
        backgroundColor: props.question.correct === anwsers[3] ? "#59E391" : 0 || props.userAnwser === anwsers[3] ? "#F8BCBC" : "#F5F7FB",        
    }

    return(
       <fieldset  className="question--container">
        <legend><h2>{props.question.question}</h2></legend>
        <input 
            type="radio" 
            id={`anwser0${props.question.key}`}
            name={props.question.key}
            value={anwsers[0]}
            disabled/>            
        <label htmlFor={`anwser0${props.question.key}`} id="question--answer" style={styles0}>{anwsers[0]}</label>
        <input 
            type="radio" 
            id={`anwser1${props.question.key}`} 
            name={props.question.key}
            value={anwsers[1]}
            disabled/>                        
        <label htmlFor={`anwser1${props.question.key}`} id="question--answer" style={styles1}>{anwsers[1]}</label>
        <input 
            type="radio" 
            id={`anwser2${props.question.key}`}
            name={props.question.key}
            value={anwsers[2]}
            disabled/>                        
        <label htmlFor={`anwser2${props.question.key}`} id="question--answer" style={styles2}>{anwsers[2]}</label>
        <input 
            type="radio" 
            id={`anwser3${props.question.key}`}
            name={props.question.key}
            value={anwsers[3]}
            disabled/>            
        <label htmlFor={`anwser3${props.question.key}`} id="question--answer" style={styles3}>{anwsers[3]}</label>
        </fieldset>
    )
}