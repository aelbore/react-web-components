import * as React from "react";

type CardBodyProps = {
	children: any,
	style?: any,
	className?: string
};

export class CardBody extends React.Component<CardBodyProps, any> {
  render() {
    return (
      <div className={`card__body ${this.props.className}`}
       style={ Object.assign({}, { padding: "18px" }, this.props.style) }>
       {this.props.children}
      </div>
    );
  }
}