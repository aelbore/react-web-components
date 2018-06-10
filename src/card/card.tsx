import * as React from "react";

const defaultStyles = {
	width: "100%",
	display: "block",
	position: "relative",
	borderRadius: "4px",
	marginBottom: "10px",
	border: "1px solid #ccc"
};

type CardProps = {
	children: any,
	bgColor?: string,
	fontColor?: string,
	style?: any,
	className?: string
};

export class Card extends React.Component<CardProps, any> {
  render() {
    return ( 
      <div className={`card ${this.props.className}`} 
        style={ Object.assign({}, 
          defaultStyles, { 
            backgroundColor: this. props.bgColor,
            color: this.props.fontColor,
          }, this.props.style) }>
      { this.props.children }
      </div> 
    );
  }
}