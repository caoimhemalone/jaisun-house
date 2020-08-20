import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";

class BrandCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle"
    };
  }

  static get CARD_STYLE() {
    return {
      height: "90vh",
      width: "80vw",
      paddingTop: "80px",
      textAlign: "center",
      //background: "#52C0F5",
      color: "#FFF",
      fontFamily: "sans-serif",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "10px",
      boxSizing: "border-box"
    };
  }

  render() {
    return (
      <div style={BrandCarousel.CONTAINER_STYLE}>
        <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
          <div style={BrandCarousel.CARD_STYLE}>{this.props.img1}</div>
          <div style={BrandCarousel.CARD_STYLE}>{this.props.img2}</div>
          <div style={BrandCarousel.CARD_STYLE}>{this.props.img3}</div>
          <div style={BrandCarousel.CARD_STYLE}>Fourth Card</div>
          <div style={BrandCarousel.CARD_STYLE}>Fifth Card</div>
        </ReactCardCarousel>
      </div>
    );
  }
}

export default BrandCarousel;
