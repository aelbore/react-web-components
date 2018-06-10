import * as React from "react";
import { register } from 'web-react-components';

import { Card } from './card';
import { CardBody } from './card-body';
import { CardFooter } from './card-footer';
import { ImageHeader } from './image-header';

export class InfoCard extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <ImageHeader
             alt="testAlt" 
             imageSrc="https://avatars0.githubusercontent.com/u/18069807?v=4" 
          />
          <CardBody>
            <p>
              Phasellus eleifend orci sed neque ultricies viverra. Nulla orci nunc,
              hendrerit sed malesuada a, pharetra sed sem. Vivamus et vestibulum
              nulla. Curabitur gravida maximus dolor at scelerisque. In dignissim,
              diam nec vehicula scelerisque, metus purus vulputate ante, ac faucibus
              dui orci dignissim ipsum. Nullam euismod turpis id scelerisque congue.
            </p>
          </CardBody>
          <CardFooter>
            <p>
              <a href="#123">Nullam vel</a>
            </p>
          </CardFooter>
        </Card>
      </div>
    );
  }
}