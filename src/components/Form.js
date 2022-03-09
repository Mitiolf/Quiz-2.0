import React from "react"
import Question from "./Question"
import QuestionChecked from "./QuestionChecked"
export default function Form(props){
    
    const [FormData, setFormData] = React.useState({Q0:"",Q1:"",Q2:"",Q3:"",Q4:""})
    const correctAnwsers = props.questions.map(question => question.correct)
    const [correctAmount, setCorrectAmount] = React.useState([0, false])
    
    function choseAnwser(event){
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    
    function checkAnwsers(event){
        event.preventDefault()
        var correctCounter = 0
        if(FormData.Q0 === correctAnwsers[0]){correctCounter++}
        if(FormData.Q1 === correctAnwsers[1]){correctCounter++}
        if(FormData.Q2 === correctAnwsers[2]){correctCounter++}
        if(FormData.Q3 === correctAnwsers[3]){correctCounter++}
        if(FormData.Q4 === correctAnwsers[4]){correctCounter++}
        setCorrectAmount([correctCounter, true])
    }   


    
    function newGame(){
        window.location.reload(false);
    }
    const questions = props.questions.map(question => <Question key={question.key} question={question} choseAnwser={choseAnwser}/> )
    
    const questionsChecked = props.questions.map(question => {
        const userAnwsersTable = [FormData.Q0, FormData.Q1, FormData.Q2, FormData.Q3, FormData.Q4]
    return <QuestionChecked key={question.key} question={question} choseAnwser={choseAnwser} userAnwsers={FormData} userAnwser={userAnwsersTable[question.key[1]]}/>} )
    
    return(
        <form>
        {correctAmount[1] ?  <div>{questionsChecked}<div className="playAgain"><p><b>{`You scored ${correctAmount[0]}/5 correct answers`}</b></p>
        <button onClick={newGame}>Play again</button></div></div> :
        <div>{questions}<button onClick={checkAnwsers}>Check answers</button></div>}
        
        </form>
    )
}
