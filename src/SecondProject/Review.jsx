import React from 'react'
import { useState } from 'react'
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa'
import people from './data'


function Review() {
    const [index, setIndex] = useState(0)
    const {name,image,job,text} = people[index]

      const checkNumber = (number) =>{
        if(number >people.length -1){
            return 0
        }
        if(number < 0){
            return people.length -1
        }
        return number;

    }

    const nextReview = () =>{
        setIndex((index)=>{
            return checkNumber(index+1 )// it will give us an error when array length over so for that we have created the allow function
        })
        
    }

    const prevReview = () =>{
       setIndex((index)=>{
        return checkNumber(index-1)

        // it will give us an error when array length -negative so for that we have created the allow function
       })
    }

    const surprise = () =>{
        // setIndex(Math.floor(Math.random() * people.length))
        // console.log(Math.floor(Math.random() * people.length))
        // these will generate a random number we are doing some different we can do it like this also

        let randomNumber = Math.floor(Math.random() * people.length )

        if(randomNumber === index){
            randomNumber = index +1

            // sometimes we get 1 will be 2 to avoid any index repetition we are doing this if clause
        }
        setIndex(checkNumber(randomNumber))  // index +1 is going to increase over the length of the array so to avoid it again we are passing the randomNumber as a parameter to checkNumber
    }

  return (
    <div className='container'>


        <img src={image} alt={name} className='image'/>
        <h1>{name}</h1>
        <h2>{job}</h2>
        <p>{text}</p>

        <div className="button-container">
            <button className='left' onClick={prevReview}><FaChevronLeft/></button>
            <button className='right' onClick={nextReview}><FaChevronRight/></button>
        </div>

        <div className='button'>
            <button onClick={surprise}>Surprise Me</button>

            
        </div>
    </div>
  )
}

export default Review
