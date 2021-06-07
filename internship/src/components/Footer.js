import React from "react";
import "./Footer.css";

function Footer() {
    return ( 
        <div className = "main-footer" >
        <div className = "mcontainer" >
        
        <div className = "row" > { /* Column1 */ } 
        <div className = "col" id= "col" >
        <img src="https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/fyevta3hmgp7g87phn6b" alt=""/>
        <h6> Smart Controls Indian.ltd @2021 </h6>
   
        </div> { /* Column2 */ } 
        <div className = "col" >
        <ui className = "list-unstyled" >
        <a href=""><li > Our Solutions </li> </a>

        <a href=""><li > Contact Us </li> </a>
        </ui> 
        </div> 
        { /* Column3 */ } 
        <div className = "col" >
        <ui className = "list-unstyled" >
        <a href=""><li > Company </li></a>
        <a href=""><li > Careers </li></a>

        </ui> 
        </div> 
        { /* Column4 */ } 
        < div className = "col" >

        <ui className = "list-unstyled" >
        <a href=""><li >  Our Products </li></a> 
        <a href=""><li > Excelity </li></a>

        </ui> 
        </div>
        { /* Column5 */ } 
        <div className = "col" >

        <ui className = "list-unstyled" >
        <a href=""><li > Industries </li></a> 
       

        </ui> 
        </div> 
        < div className = "col" >

        <p className = "col">
       
       <a href="" target="_blank" rel="noopener noreferrer"><i className="icon-twitter" /></a>
       <a href="" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a>
       <a href="" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin" /></a>
       <a href="https://github.com/dugguhacks" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a>
       
       
       
       </p>
       
       </div>     
        </div>
        
        </div>
       
        <div className="mrow">
           <div className="col-lg">
           <div className = "row" style={{textAlign:"right", marginRight:"10px"}}>
       
       
        <p className = "col" >
        
        
        { new Date().getFullYear() }
        SMART CONTROLS | Support | Disclaimer | Private Policy </p> </div> </div>
           </div>
       </div>
       
      
         

    );
}

export default Footer;