import React, { useContext, } from "react";
import { Link, } from "react-router-dom";
import { CategoryContext } from "./Matter";
import Leg from "./Leg";

const Honey = () => {

  const [category]=useContext(CategoryContext);
  
  return (
    <div className="sir">
      <div className="mithin">
        <Link to="/Place/13" className="war"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ634CFs8rSXT2UCntcvX3eYuYpvkZXWsLs_A&usqp=CAU" alt="" /><div className="war1"> greenery is the best seeneary</div></Link>
        {category.filter((disp)=>disp.id==="10").map((job)=>(<Link to={`/Info/${job.id}`} className="mar"><img src={job.img} alt="" height={"250px"} width={"610px"}/><div className="mar1"> Hyderabad:<br />  Good news for job seekers </div></Link>))}
        {category.filter((disp)=>disp.id==="5").map((tec)=>(<Link to={`/Growth/${tec.id}`} className="jar"><img src={tec.img} alt="" /><div className="jar1"> iphone <br/> watches </div></Link>))}
      </div>
      
      <div>
        <div className="p">Recent News</div>
        <hr className="sirhr"/>
        <div className="ban2">
          <div className="gps">
            {category.filter(data=>data.id==="1").map((latest)=>(
            <Link to={`/Bollywood/${latest.id}`}  key={category.id} className="gpso">
              <div className="simg"><img src={latest.img} alt="" /></div>
              <div className="gpa"><h3>{latest.det}</h3></div>
              <div className="gpb"><h5>{latest.date}</h5></div>
              <div className="gpc"><h4>Category: {latest.category}</h4></div>
            </Link>
           ))}
          </div>
          <div className="gps">
           {category.filter(data=>data.id==="5").map((latest)=>(
             <Link to={`/Growth/${latest.id}`}  key={category.id} className="gpso">
                <div className="simg"><img src={latest.img} alt="" /></div>
                <div className="gpa"><h3>{latest.det}</h3></div>
                <div className="gpb"><h5>{latest.date}</h5></div>
                <div className="gpc"><h4>Category: {latest.category}</h4></div>
            </Link>
           ))}
          </div>
            <div className="gps">
              {category.filter(data=>data.id==="9").map((latest)=>(
                <Link to={`/info/${latest.id}`}  key={category.id} className="gpso">
                  <div className="simg"><img src={latest.img} alt="" /></div>
                  <div className="gpa"><h3>{latest.det}</h3></div>
                  <div className="gpb"><h5>{latest.date}</h5></div>
                  <div className="gpc"><h4>Category: {latest.category}</h4></div>
                </Link>
              ))}
           </div><br/>
          </div>
          <div style={{marginLeft:"-0%",marginTop:"2%"}}><Leg/></div>
        <div className="ban3" >
        <div className="news" ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUlx1N_fYvMyHs-z-wm9D2MrYrtPKgf-Mmgg&usqp=CAU"className="newr" alt="" /></div><br/>
            
            <div className="f">Latest Articles</div>
            <hr className="sirhr"/>
            <div className="gps2">
            {category.filter(data=>data.id==="2").map((latest)=>(
              <Link to={`/bollywood/${latest.id}`}  key={category.id} className="gpsp">
              <div className="bollyi"><img src={latest.img} alt="" /></div>
              <div className="bollyt"><h3>{latest.det}</h3></div>
              <div className="gpd"><h5>{latest.date}</h5></div>
            <div className="gpe"><h4>Category: {latest.category}</h4></div>
            </Link>
          ))}
          </div><hr className="rose"/>
          <div className="gps2">
          {category.filter(data=>data.id==="6").map((latest)=>(
          <Link to={`/growth/${latest.id}`}  key={category.id} className="gpsp">
            <div className="bollyi"><img src={latest.img} alt="" /></div>
            <div className="bollyt"><h3>{latest.det}</h3></div>
            <div className="gpd"><h5>{latest.date}</h5></div>
            <div className="gpe"><h4>Category: {latest.category}</h4></div>
          </Link>
          ))}
            </div><hr className="rose"/>
            <div className="gps2">
            {category.filter(data=>data.id==="12").map((latest)=>(
            <Link to={`/Place/${latest.id}`} key={category.id} className="gpsp">
              <div className="bollyi"><img src={latest.img} alt="" /></div>
              <div className="bollyt"><h3>{latest.det}</h3></div>
              <div className="gpd"><h5>{latest.date}</h5></div>
              <div className="gpe"><h4>Category: {latest.category}</h4></div>
            </Link>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Honey;
