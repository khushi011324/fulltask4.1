import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="">
      <div className="footer">
        <div className="footer-column">
          <h3>Explore</h3>
          <ul>
            <li>Home</li>
            <li>Questions</li>
            <li>Articles</li>
            <li>Tutorials</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li>FAQs</li>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Stay Connected</h3>
          <div className = "footer-icons">
           <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd-msrJZKEWyAUwOMTNSdSOUPYH22y1lyzTw&usqp=CAU" style={{ width: '100px' , height: '100px'}}/>
           <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbu6wZQhG8zbKA2gO8l0QL_KyRYBI5YSIwcQ&usqp=CAU"style={{ width: '100px' , height: '100px'}}/>
           <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGLJf_5SogFd7jaoSzWmtEh2pRT9__OAf92g&usqp=CAU"style={{ width: '100px' , height: '100px'}}/>
        </div>
        </div>
      </div>
      <div className="footer-center">
        <h2>Dev@Deakin 2022</h2>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms</li>
          <li>Code of Conduct</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
