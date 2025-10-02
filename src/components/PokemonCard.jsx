import { Link } from 'react-router-dom'

export default function PokemonCard({ pokemon }) {
  return (
    <Link to={`/pokemon/${pokemon.id}`} >
      <img 
        src={`https://picsum.photos/192/192?random=${pokemon.id}`} 
        alt={pokemon.name}
      />
      <p>{pokemon.name}</p>
      <p>#{pokemon.id}</p>
    </Link>
  )
}