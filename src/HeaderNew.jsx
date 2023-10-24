import React from "react";
import './HeaderNew.css';
import ButtonNew from './ButtonNew'; 
import InputNew from './InputNew'; 

function HeaderNew(props) {
   return (
      <div className="header-new">
         <h1 className="header-new">{props.text}</h1>
         <div className="input-bar-new">
            <InputNew type="text" placeholder="Enter your email.............................................................." />
            <div className="button-bar-new">
               <ButtonNew type="button" title="Subscribe" />
              
            </div>
         </div>
      </div>
   );
}

export default HeaderNew;