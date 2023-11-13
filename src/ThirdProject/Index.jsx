
import React from 'react'
import questions from './data'
import SingleQuestion from './SingleQuestion'
import './Third.css'

function Index_1() {
  return (
    <article className='article-class'>
      <h2>Third Project</h2>
      <h5>Accordion Section</h5>
        {questions.map((question)=>{
           return <SingleQuestion key={question.id} {...question} />
        })}
        <hr />
    </article>
  )
}

export default Index_1
