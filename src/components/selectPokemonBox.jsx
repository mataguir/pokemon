import { pokemons } from "../utils/arrays";

function SelectPokemonBox(props) {
  return (
    <>
      {props.name === undefined && (
        <div>
          <h1 className="text-4xl font-bold mt-16 mb-10">Select your pokemon!</h1>
          <div className="flex justify-center">
            {pokemons &&
              pokemons.map((img, i) => (
                <img
                  className="m-4 p-4 cursor-pointer border-2 border-gray-400 rounded-lg opacity-60 hover:opacity-100 hover:bg-blue-200"
                  width={200}
                  src={img.image}
                  key={i}
                  alt={img.name}
                  onClick={props.selectPokemon}
                />
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default SelectPokemonBox;
