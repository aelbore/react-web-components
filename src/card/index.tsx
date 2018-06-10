import { Card } from './card';
import { CardBody } from './card-body';
import { CardFooter } from './card-footer';
import { ImageHeader } from './image-header';
import { InfoCard } from './info-card';

import { register } from 'web-react-components';

register(CardFooter, 'card-footer', [ 'children', 'style' ]);
register(CardBody, 'card-body', [ 'className', 'style', 'children' ]);
register(ImageHeader, 'image-header', [ 'imageSrc', 'style', 'alt' ]);
register(Card, 'card-info', [ 'children', 'bgColor', 'fontColor', 'style', 'className' ]);
register(InfoCard, 'info-card');