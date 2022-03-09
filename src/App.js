import React from "react"
import Form from "./components/Form"
import StartQuiz from "./components/StartQuiz"
import Decorations from "./components/Decorations"

import "./style.css"

export default function App(){
    
    const [questions, setQuestions] = React.useState([])
    const [quiz, setQuiz] = React.useState(false)
    
// getting questions from API
    React.useEffect(
        () => {
        fetch("https://opentdb.com/api.php?amount=5&category=20&type=multiple")
            .then(res => res.json())
            .then(data => 
                setQuestions(function(){
                    // var to change this '&amp;' to this '&' and then replace lower
                    var map =
    {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#039;': "'"
    };
                    const quest = []
                    for(var i = 0; i < 5; i++){
                quest.push({question:( data.results[i].question).replace(/&amp;|&lt;|&gt;|&quot;|&#039;/g, function(m) {return map[m];}),
                anwsers: shuffle([...data.results[i].incorrect_answers, data.results[i].correct_answer]),
                correct: data.results[i].correct_answer,
                key: `Q${i}`})}
                    return quest}))
    },[])

// Array shuffling function
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}



    return (<div><main>
    {quiz ? <Form questions={questions}/> : <StartQuiz setQuiz={setQuiz}/>}
    </main>
    <Decorations /></div>)
}
