import React from "react";

//Styles
import "./footer.scss";

export class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="icons d-flex justify-content-between">
          <i class="fas fa-envelope fa-lg"></i>
          <i class="fab fa-twitter fa-lg"></i>
          <i class="fab fa-facebook-square fa-lg"></i>
        </div>
        <div className="d-flex justify-content-between pl-3 pr-3">
          <p>Почта: spider@gmail.com</p>
          <p>Twitter: Spider-man</p>
          <p>Facebook: Spider-man</p>
        </div>
      </footer>
    );
  }
}
