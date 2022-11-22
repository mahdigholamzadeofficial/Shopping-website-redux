import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
const Stars = ({ rate }) => {
  if(rate === 1){
    return(<ul className="flex ">
      <li><AiFillStar/></li>
      <li><AiOutlineStar/></li>
      <li><AiOutlineStar/></li>
      <li><AiOutlineStar/></li>
      <li><AiOutlineStar/></li>
    </ul>)
  }else if (rate ===2){
    return(<ul className="flex ">
      <li><AiFillStar/></li>
      <li><AiFillStar/></li>
      <li><AiOutlineStar/></li>
      <li><AiOutlineStar/></li>
      <li><AiOutlineStar/></li>
    </ul>)
  }
  else if (rate ===3){
    return(<ul className="flex ">
      <li><AiFillStar/></li>
      <li><AiFillStar/></li>
      <li><AiFillStar/></li>
      <li><AiOutlineStar/></li>
      <li><AiOutlineStar/></li>
    </ul>)
  }
  else if (rate ===4){
    return(<ul className="flex ">
      <li><AiFillStar/></li>
      <li><AiFillStar/></li>
      <li><AiFillStar/></li>
      <li><AiFillStar/></li>
      <li><AiOutlineStar/></li>
    </ul>)
  }
  else if (rate ===5){
    return(<ul className="flex ">
      <li><AiFillStar/></li>
      <li><AiFillStar/></li>
      <li><AiFillStar/></li>
      <li><AiFillStar/></li>
      <li><AiFillStar/></li>
    </ul>)
  }
};

export default Stars;
