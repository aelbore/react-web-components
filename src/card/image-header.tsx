import * as React from "react";

type ImageHeaderProps = {
	imageSrc: string,
	style?: any,
	alt?: string
};

export class ImageHeader extends React.Component<ImageHeaderProps, any> {
  render() {
    return (
      <div className="card__header--image"  
        style={ Object.assign({}, { position: "relative" }, this.props.style) }>
        <img src={this.props.imageSrc} 
          style={ {
            display: "block",
            width: "100%",
            borderRadius: "2px 2px 0 0",
            position: "relative",
            left: "0",
            right: "0",
            top: "0",
            bottom: "0"
          } } 
          alt={this.props.alt} />
		  </div>
    )
  }
}