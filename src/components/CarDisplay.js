import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';


const CarDisplay = (props) => {
    console.log(props.service)
  return (
      <Card inverse>
        <CardImg width="100%" src={props.service.img} alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle>{props.service.title}</CardTitle>
          <CardText>{props.service.text}</CardText>
        </CardImgOverlay>
      </Card>
  );
};

export default CarDisplay