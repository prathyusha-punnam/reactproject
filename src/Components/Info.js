import * as React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Inside from "./Inside";
import { CategoryContext } from "./Matter";

const Info = () => {
    const [category] = useContext(CategoryContext);
  
    return (
      <div>
        <h1 className="bollyh">Jobs</h1><hr className="okati"/>
        {category.filter((render)=>render.id>8 && render.id<13).map((wood) => (
          <div key={category.imgt} className="bolly">
            <Link to={`/info/${wood.id}`} className="bolly">
              <div className="bollyi"><img src={wood.img} alt="" /></div>
              <h3 className="bollyt">{wood.det}</h3>
            </Link>
            <h5 className="bollyd">{wood.date}</h5>
            <hr/>
          </div>
        ))}
        <div className="new"><img src="https://image.shutterstock.com/image-photo/globalization-technology-human-260nw-373042285.jpg" className="new" alt="" /></div><br/>
        <button className="refresh">LoadMore</button>
        <Inside/>
      </div>
    );
  };
  
  export default Info;