import React, { ReactElement } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

interface CardProps {
  pokemon: any
}

export default function Card({ pokemon }: CardProps): ReactElement {
  return (
    <MDBCard style={{ width: '15%', margin: '10px', alignItems: 'center', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)' }}>
      <MDBCardImage src={pokemon.sprites.front_default} position='top' alt='Card Image' />
      <MDBCardBody>
        <MDBCardTitle style={{fontFamily: 'comic-sans'}}>{pokemon.name}</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>
  );
}

