import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

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
      <Spring
        from={{ opacity: 0.75, marginTop: -100 }}
        to={{ opacity: 1, marginTop: 0 }}
        config={{ duration: 1000 }}
      >
        {spring => (
          <section className="product-category" style={spring}>
            <button
              onClick={e => this.handleClick(e)}
              className="product-button"
            >
              {this.props.product}
            </button>
            {this.state.buttonClicked
              ? this.props.menuItems.map((item, index) => (
                  <section className="category-container">
                    <li key={index} className="category-items">
                      {item}
                    </li>
                    <br></br>
                  </section>
                ))
              : null}
          </section>
        )}
      </Spring>
    );
  }
}

export default Button;
