/* eslint-disable @next/next/no-img-element */
import React, { ReactElement } from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";


interface CardProps {
    pokemon: any;
}

export default function PokemonCard({ pokemon }: CardProps): ReactElement {
  return (
    <Card className="custom-card" style={{ height: '310px', display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
      <img src={pokemon.sprites.front_default} alt="Card Image" height={'200px'} />
      <CardBody>
        <CardTitle style={{ fontFamily: "comic-sans", fontSize: '20px' }}>{pokemon.name}</CardTitle>
      </CardBody>
    </Card>
  );
}
