import React, { ReactElement, useState, ChangeEvent } from 'react';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

interface SearchProps {
  filteredPokemon: (searchTerm: string) => void;
}

export default function Search({ filteredPokemon }: SearchProps): ReactElement {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = event.target.value;
    setSearchTerm(inputValue);
    filteredPokemon(inputValue);
  };

  return (
    <MDBInputGroup style={{ width: '80%', margin: '30px 10px' }}>
      <MDBInput label='Search' value={searchTerm} onChange={handleInputChange} style={{backgroundColor: 'white'}} />
      <MDBBtn rippleColor='dark'>
        <MDBIcon icon='search' />
      </MDBBtn>
    </MDBInputGroup>
  );
}

