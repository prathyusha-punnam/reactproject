import React, { useContext,useState } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "./Matter";

const Leg = () => {

  const [category]=useContext(CategoryContext);
  const [load, setload] = useState(false)

  const loadMore=()=>{
      setload(true)
  }
  const loadLess=()=>{
      setload(false)
  }
  return (
    <div className="sir">
      <div>
        {load ?
        <> 
            <div className="ban2">
            <div className="gps">
                {category.filter(data=>data.id==="7").map((latest)=>(
                <Link to={`/growth/${latest.id}`} key={category.id} className="gpso">
                    <div className="simg"><img src={latest.img} alt="" /></div>
                    <div className="gpa"><h3>{latest.det}</h3></div>
                    <div className="gpb"><h5>{latest.date}</h5></div>
                    <div className="gpc"><h4>Category: {latest.category}</h4></div>
                </Link>
                ))}
            </div>
            <div className="gps">
                {category.filter(data=>data.id==="4").map((latest)=>(
                    <Link to={`/bollywood/${latest.id}`} key={category.id} className="gpso">
                    <div className="simg"><img src={latest.img} alt="" /></div>
                    <div className="gpa"><h3>{latest.det}</h3></div>
                    <div className="gpb"><h5>{latest.date}</h5></div>
                    <div className="gpc"><h4>Category: {latest.category}</h4></div>
                    </Link>
                ))}
            </div>
            <div className="gps">
                {category.filter(data=>data.id==="11").map((latest)=>(
                    <Link to={`/info/${latest.id}`} key={category.id} className="gpso">
                    <div className="simg"><img src={latest.img} alt="" /></div>
                    <div className="gpa"><h3>{latest.det}</h3></div>
                    <div className="gpb"><h5>{latest.date}</h5></div>
                    <div className="gpc"><h4>Category: {latest.category}</h4></div>
                    </Link>
                ))}
            </div><br/>
            </div>
            <button className="refresh" style={{marginLeft:"80px"}} onClick={loadLess}>LoadLess</button>
        </>
        :
        <button className="refresh" style={{marginLeft:"70px"}} onClick={loadMore}>LoadMore</button>
        }
      </div>
    </div>
  );
};

export default Leg;