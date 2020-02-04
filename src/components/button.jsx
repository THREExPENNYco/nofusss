import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { buttonClicked: false };
  }

  handleClick = e => {
    this.state.buttonClicked
      ? this.setState({ buttonClicked: false })
      : this.setState({ buttonClicked: true });
  };

  render() {
    return (
      <section className="product-category">
        <button onClick={e => this.handleClick(e)} className="product-button">
          {this.props.product}
        </button>
          {this.state.buttonClicked
            ? this.props.menuItems.map((item, index) => (
              <section className="category-container"> 
                <li key={index} className="category-items">
                  {item}
                </li>
                <hr className="category-hr"></hr>
              </section>
              ))
            : null }
      </section>
    );
  }
}

export default Button;
