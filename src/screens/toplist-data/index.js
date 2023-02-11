import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_TOPLIST_DATA } from '../../GraphQL/Queries';
import {
  TopListDataContainer,
  HeaderContainer,
  Heading,
  PokemonListContainer,
  PokemonItemRow,
  PokemonItemText,
} from './styles';

const TopListDataScreen = () => {
  const { error, loading, data } = useQuery(GET_TOPLIST_DATA);

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error: {error.message}</p>;

  const renderPokemonList = () => {
    return data.getTopCards.map(({ name, age, _id }) => (
      <PokemonItemRow>
        <PokemonItemText>{name}</PokemonItemText>
        <PokemonItemText>{`age: ${age}`}</PokemonItemText>
        <PokemonItemText>{`id: ${_id}`}</PokemonItemText>
      </PokemonItemRow>
    ));
  };

  return (
    <TopListDataContainer>
      <HeaderContainer>
        <Heading>My Pokemon Data</Heading>{' '}
      </HeaderContainer>
      <PokemonListContainer>{renderPokemonList()}</PokemonListContainer>
    </TopListDataContainer>
  );
};

export default TopListDataScreen;
