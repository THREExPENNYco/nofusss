import React, { Component } from "react";
import css from "./App.css";
import Navbar from "./components/navbar.jsx";
import Form from "./components/form.jsx";
import Snippet from "./components/snippet.jsx";
import snippets from "./nofussprods/snippets.js";
import Button from "./components/button.jsx";
import prodInv from "./nofussprods/productinfo.js";

class App extends Component {
  state = {
    productCategory: {},
    snippets: {}
  };

  componentDidMount = () => {
    var productsInv = prodInv;
    var snipObjs = snippets;
    this.setState({ productCategory: productsInv });
    this.setState({ snippets: snipObjs });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <section className="article-main">
          {Object.keys(this.state.snippets).map((snippet, index) => (
            <Snippet
              id={index}
              snippet={this.state.snippets[snippet].snippet}
              snippetHead={this.state.snippets[snippet].snippetHead}
            />
          ))}
        </section>
        <section className="button-section">
          {Object.keys(this.state.productCategory).map((category, index) => (
            <Button
              key={index}
              product={category}
              menuItems={this.state.productCategory[category]}
            />
          ))}
        </section>
        <Form />
      </div>
    );
  }
}

export default App;
