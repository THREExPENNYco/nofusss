import React, { Component } from "react";
import css from "./App.css";
import Navbar from "./components/navbar.jsx";
import Form from "./components/form.jsx";
import Snippet from "./components/snippet.jsx";
import snippets from "./nofussprods/snippets.js";
import Button from "./components/button.jsx";
import prodInv from "./nofussprods/productinfo.js";
import Splash from "./components/splash.jsx"; 
import Header from "./components/header.jsx"; 
import Text from "./components/text.jsx"
import headerText from "./nofussprods/text.js"
import Footer from "./components/footer.jsx"; 

class App extends Component {
  state = {
    productCategory: {},
    snippets: {}, 
    headerText: {}
  };

  componentDidMount = () => {
    var productsInv = prodInv;
    var snipObjs = snippets;
    var headerObj = headerText; 
    this.setState({ headerText: headerObj }); 
    this.setState({ productCategory: productsInv });
    this.setState({ snippets: snipObjs });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Splash /> 
        <div className="main-container"> 
        <Header text={this.state.headerText.top} />
        <Text text={this.state.headerText.customization} />
        <section className="article-main">
          {Object.keys(this.state.snippets).map((snippet, index) => (
            <Snippet
              image={this.state.snippets[snippet].image}
              key={index}
              snippet={this.state.snippets[snippet].snippet}
              snippetHead={this.state.snippets[snippet].snippetHead}
            />
          ))}
        </section>
        <Header text={this.state.headerText.middle} /> 
        <Text text={this.state.headerText.servicesPro} />
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
        <Footer /> 
        </div>
      </div>
    );
  }
}

export default App;
