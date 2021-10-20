import React from 'react';
import './maincard.css';


  function Maincard(props) {
    return (
      <div className="card">
        <img src={props.img} className="card__img" alt=""/>

        <div className="card__body">
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>  

          <select name="selectlist" id="selectlist" className="selectlist" onchange="location = this.value;">
              <option value="amazon.com" >amazon - {props.amazon}</option>
              <option value="flipkart.com">flipkart - {props.flipkart}</option>
              <option value="snapdeal">snapdeal - {props.snapdeal}</option>

          </select>
        </div>
      </div>
    );
  } 
export default Maincard;