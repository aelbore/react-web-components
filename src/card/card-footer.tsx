import * as React from "react";
import { register } from 'web-react-components';

type CardFooterProps = {
	children: any,
	style?: any
};

const defaultStyles = {
	display: "flex",
	alignItems: "center",
	padding: "10px 18px",
	borderTop: "1px solid #ccc",
	marginTop: "0"
};

export class CardFooter extends React.Component<CardFooterProps, any> {
  render() {
		return (
      <div className="card__footer" style={ Object.assign({}, defaultStyles, this.props.style) }>
        {this.props.children}
      </div>
    );
  }
}