import * as React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Inside from "./Inside";
import { CategoryContext } from "./Matter";

const Growth = () => {
  const [category] = useContext(CategoryContext);


  return (
    <div>
      <h1 className="bollyh">new gadgets</h1><hr className="okati"/>
      {category.filter((render)=>render.id>4 && render.id<9).map((tec) => (
        <div key={category.id} className="bolly">
          <Link to={`/growth/${tec.id}`} className="bolly">
          <div className="bollyi"><img src={tec.img} alt="" /></div>
          <h3 className="bollyt">{tec.det}</h3>
          </Link>
          <h5 className="bollyd">{tec.date}</h5>
          <hr/>
        </div>
      ))}
      <div className="new"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoZhYk99SXtXLiW0gnEXwFAIAyKN6RgtzcbQ&usqp=CAU" className="new" alt="" /></div><br/>
      <button className="refresh">LoadMore</button>
      <Inside/>
    </div>
  );
};

export default Growth;