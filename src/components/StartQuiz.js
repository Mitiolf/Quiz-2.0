import React from "react"

export default function StartQuiz(props){
    return <div className="startQuiz">
        <h1>Quizzical</h1>
        <p>Some description if needed</p>
        <button className="startQuizButton" onClick={() => props.setQuiz(true)}>Start quiz</button></div>
}