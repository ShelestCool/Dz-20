import React from "react";

//Styles
import "./photo.scss";

// const photoNode = document.querySelector("#photoNode");
// const btnShowPhoto = document.querySelector("#btnShowPhoto");

export class Photo extends React.Component {
  render() {
    return (
      <div className="divPhoto d-none" id="photoNode">
        <img src="../../img/spider.jpg" />
      </div>
    );
  }
}

// export function showPhoto(event) {
//   event.preventDefault();
//   photoNode.classList.toggle("d-none");
// }
