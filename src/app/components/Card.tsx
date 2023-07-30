import React, { ReactElement } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage
} from 'mdb-react-ui-kit';

interface CardProps {
  pokemon: any
}

export default function Card({ pokemon }: CardProps): ReactElement {
  return (
    <MDBCard className='custom-card'>
      <MDBCardImage src={pokemon.sprites.front_default} position='top' alt='Card Image' />
      <MDBCardBody>
        <MDBCardTitle style={{fontFamily: 'comic-sans'}}>{pokemon.name}</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>
  );
}

