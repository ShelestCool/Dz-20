// Core
import React from "react";
import ReactDOM from "react-DOM";

// Components
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
