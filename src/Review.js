import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name,job,image,text} = people[index];

  const nextPerson = () => {
    setIndex((index)=>{
      let newIndex = index + 1;
      if(newIndex >= people.length){
        newIndex = 0;
      }
      return newIndex
    })
  }

  const prevPerson = () => {
    setIndex((index)=>{
      let newIndex = index - 1;
      if(newIndex < 0){
        newIndex = people.length-1;
      }
      return newIndex
    })
  }

  const surpriseMe = () => {
    let randomNumber = Math.floor(Math.random()*(people.length))
    if(randomNumber === index){
      randomNumber++;
    }
    if(randomNumber >= people.length){
      randomNumber = 0;
    }
    setIndex(randomNumber);
  }

  return (
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className='prev-btn'>
          <FaChevronLeft onClick={prevPerson}/>
        </button>
        <button className='next-btn'>
          <FaChevronRight onClick={nextPerson}/>
        </button> 
      </div>
        <button onClick={surpriseMe} className='random-btn'>
          suprise me
        </button>
    </article>
  );
};

export default Review;
