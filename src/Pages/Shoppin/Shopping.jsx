import React from "react";
import Header from "../../Componenets/Header/Header";
import CompList from "../../Componenets/CompsList/CompList";
import Category from "../../Componenets/LeftSide/Category";
import './shopping.css'
export default function Shopping() {
  return (
    <div>
      <Header />
      <hr />
      <div className="content">
        <Category />

        <CompList />
      </div>
    </div>
  );
}
