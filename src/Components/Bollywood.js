import * as React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Inside from "./Inside";
import { CategoryContext } from "./Matter";

const Bollywood = () => {
  const [category] = useContext(CategoryContext);


  return (
    <div>
      <h1 className="bollyh"> movie magic</h1><hr className="okati"/>
      {category.filter((render)=>render.id<5).map((wood) => (
        <div key={category.id} className="bolly">
          <Link to={`/bollywood/${wood.id}`}className="bolly">
            <div className="bollyi"><img src={wood.img} alt="" /></div>
            <h3 className="bollyt">{wood.det}</h3>
          </Link>
          <h5 className="bollyd">{wood.date}</h5>
          <hr/>
        </div>
      ))}
      <div className="new"><img src="https://www.bollymoviereviewz.com/wp-content/uploads/2011/12/Gangubai_Kathiawadi_film_poster-1.jpg" className="new" alt="" /></div><br/>
      <button className="refresh">LoadMore</button>
      <Inside/>
    </div>
  );
};

export default Bollywood;