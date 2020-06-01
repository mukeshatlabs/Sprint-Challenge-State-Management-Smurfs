import React from "react";
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const SmurfCard = props => {   
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.smurf.name}</CardTitle>
          <CardText>Age: {props.smurf.age}</CardText>
          <CardText>Height: {props.smurf.height}</CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default SmurfCard;
