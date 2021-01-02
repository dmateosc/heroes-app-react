import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroList } from '../heroes/HeroList';

export const MarvelScreen = () => {
    

  return (
    <div>
        <h1>Marvel Heroes</h1>
      <HeroList publisher="Marvel Comics"></HeroList>
    </div>
  );
}
