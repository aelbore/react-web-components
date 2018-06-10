import { register } from 'web-react-components';
import * as React from 'react';

class HelloComponent extends React.Component<any, any> {
  render() {
    return <div>Hello World! { this.props.name } </div>;
  }
}

register(HelloComponent, 'my-component', [ 'name' ]);