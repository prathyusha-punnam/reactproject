import * as React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Inside from "./Inside";
import { CategoryContext } from "./Matter";

const Place = () => {
    const [category] = useContext(CategoryContext);
  
    return (
      <div>
        <h1 className="bollyh">Place</h1><hr className="okati"/>
        {category.filter((render)=>render.id>12&&render.id<17).map((wood) => (
          <div key={category.imgt} className="bolly">
            <Link to={`/flower/${wood.id}`} className="bolly">
              <div className="bollyi"><img src={wood.img} alt="" /></div>
              <h3 className="bollyt">{wood.det}</h3>
            </Link>
            <div className="bollyn"><h5>{wood.date}</h5></div>
            <hr/>
          </div>
        ))}
        <div className="new"><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className="new" alt="" /></div><br/>
        <button className="refresh">LoadMore</button>
        <Inside/>
      </div>
    );
  };
  
  export default Place;