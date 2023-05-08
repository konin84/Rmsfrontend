import React from "react";

export default function About(props) {
  return (
   

    
    <div id="about">
      <div className="about-imge mr-5">
        <img src={props.image} alt=""  />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <div className='mt-8 text-justify'>

          <p > We work from 08:30 A.M. - 4:30 P.M. from Monday to Friday, except public holidays.</p>
          <br/>
          <p > This Web App is mainly for Realtors or Agents who want to take their business to a higher level. It allows them to list the managed houses, their tenants and house owners.
            Trace all payments made by tenants at any time of the day.
          </p>
          <br/>
          <p>Tired of carrying a receipt book that can easily be lost of distroy by water or fire? No more worry, with us all your transactions are stored in the cloud and accessible timelessly everywhere!</p>
        </div>
        {/* <button 
        >{props.button}</button> */}

      </div>
    </div>
  );
}
