import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "./Matter";

const Inside = () => {

  const [category]=useContext(CategoryContext);
  
  return (
    <div className="sir">
      <div>
        <div className="hima" style={{margin:"2% 2% 2% 0%",color:"red"}}>You May Also Like</div><hr className="okati" style={{marginLeft:"15px"}}/>
        <div className="ban2">
            <div className="gps">
            {category.filter(data=>data.id==="3").map((latest)=>(
            <Link to={`/bollywood/${latest.id}`} key={category.id} className="gpso">
              <div className="simg"><img src={latest.img} alt="" /></div>
              <div className="gpa"><h3>{latest.det}</h3></div>
              <div className="gpb"><h5>{latest.date}</h5></div>
              <div className="gpc"><h4>Category: {latest.category}</h4></div>
            </Link>
          ))}
          </div>
          <div className="gps">
          {category.filter(data=>data.id==="6").map((latest)=>(
          <Link to={`/growth/${latest.id}`} key={category.id} className="gpso">
            <div className="simg"><img src={latest.img} alt="" /></div>
            <div className="gpa"><h3>{latest.det}</h3></div>
            <div className="gpb"><h5>{latest.date}</h5></div>
            <div className="gpc"><h4>Category: {latest.category}</h4></div>
          </Link>
          ))}
            </div>
            <div className="gps">
            {category.filter(data=>data.id==="10").map((latest)=>(
            <Link to={`/Jobs/${latest.id}`} key={category.id} className="gpso">
              <div className="simg"><img src={latest.img} alt="" /></div>
              <div className="gpa"><h3>{latest.det}</h3></div>
              <div className="gpb"><h5>{latest.date}</h5></div>
              <div className="gpc"><h4>Category: {latest.category}</h4></div>
            </Link>
          ))}
          </div><br/>
        </div>
      </div>
    </div>
  );
};

export default Inside;