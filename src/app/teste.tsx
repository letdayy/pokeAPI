import React, { useState, useEffect } from 'react';

interface PokemonData {
  /* Defina a tipagem dos dados do Pokemon conforme necessário */
  id: number;
  name: string;
  /* Outras propriedades que você deseja usar */
}

export default function MyComponent(): JSX.Element {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);

  const getAPIData = async () => {
    const endpoints: string[] = [];

    try {
      for (let i = 1; i <= 50; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
      }

      const responses = await Promise.all(endpoints.map((endpoint) => fetch(endpoint)));
      const pokemonsData = await Promise.all(responses.map(async (r) => await r.json()));

      setPokemons(pokemonsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <div>
      {/* Renderize os dados dos Pokemons, por exemplo: */}
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            {pokemon.name} - ID: {pokemon.id}
          </li>
        ))}
      </ul>
    </div>
  );
}