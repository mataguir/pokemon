import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { pokemons } from "../utils/arrays";
import GameOverDialog from "./GameOverDialog";
import BattleAnimation from "./battleAnimation";
import PokemonCard from "./pokemonCard";

function FightContent({ user, restart }) {
  const [round, setRound] = useState(1);
  const [rival, setRival] = useState(
    pokemons[Math.floor(Math.random() * pokemons.length)]
  );
  const [rivalEnergy, setRivalEnergy] = useState(rival.energy * rival.defense);
  const [userEnergy, setUserEnergy] = useState();
  const [percentRivalEnergy, setPercentRivalEnergy] = useState(100);
  const [percentUserEnergy, setPercentUserEnergy] = useState(100);
  const [rivalAttackName, setRivalAttackName] = useState("");
  const [userAttackName, setUserAttackName] = useState("");

  const [showEffect, setShowEffect] = useState(false);
  const [pokeType, setPokeType] = useState("");

  const [open, setOpen] = useState(false);
  const [overMsg, setOverMsg] = useState("");

  useEffect(() => {
    if (user) {
      setUserEnergy(user.energy * user.defense);
    }
  }, [user]);

  const findAttackObj = (attackName) => {
    let attackObj;
    user.attacks.map((attack) => {
      if (attack.name.toLowerCase() === attackName) {
        attackObj = {
          name: attack.name,
          power: attack.power,
          type: attack.type,
        };
      }
    });
    return attackObj;
  };

  const handleAttack = (e) => {
    setPokeType(user.type);
    setRound(round + 1);
    const totalRivalEnergy = rival.energy * rival.defense;
    let attackObj = findAttackObj(e.target.innerText.toLowerCase());
    setUserAttackName(attackObj.name);
    const newEnergy = attackAction(user, rivalEnergy, attackObj);
    setPercentRivalEnergy((newEnergy * 100) / totalRivalEnergy);
    setRivalEnergy(newEnergy);
    rivalAttack();
    showAnimation();
  };

  const attackAction = (attUser, defUserEnergy, attackObj) => {
    const energy = defUserEnergy - attUser.attack * attackObj.power;
    if (energy <= 0) {
      setOpen(true);
      return 0;
    }
    return energy;
  };

  const rivalAttack = () => {
    const totalUserEnergy = user?.energy * user?.defense;
    let attackObj =
      rival.attacks[Math.floor(Math.random() * rival.attacks.length)];
    setRivalAttackName(attackObj.name);
    const newEnergy = attackAction(rival, userEnergy, attackObj);
    setPercentUserEnergy((newEnergy * 100) / totalUserEnergy);
    setUserEnergy(newEnergy);
  };

  const showAnimation = () => {
    setShowEffect(true);
    setTimeout(() => {
      setShowEffect(false);
    }, 1000); // Match the duration of the animation
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (rivalEnergy <= 0) {
      setOverMsg("Won!!");
    } else if (userEnergy <= 0) {
      setOverMsg("Lost :(");
    }
  }, [open]);

  const resetHanlder = () => {
    console.log("reset");
    setOpen(false);
    restart();
    user = undefined;
  };

  return (
    <>
      {user && (
        <div className="max-w-3xl m-auto mt-16">
          <PokemonCard
            reverse={false}
            pokemon={rival}
            percentEnergy={percentRivalEnergy}
            attackName={userAttackName}
          />
          <h1 className="text-4xl font-bold my-8">Round {round}</h1>
          <PokemonCard
            reverse={true}
            pokemon={user}
            percentEnergy={percentUserEnergy}
            attackName={rivalAttackName}
          />
          {user &&
            !showEffect &&
            user.attacks.map((attack, i) => (
              <Button
                sx={{ margin: "2rem" }}
                key={i}
                variant="contained"
                onClick={(e) => handleAttack(e)}
              >
                {attack?.name}
              </Button>
            ))}
        </div>
      )}
      {showEffect && <BattleAnimation pokeType={pokeType} />}
      <GameOverDialog
        open={open}
        onClose={handleClose}
        msg={overMsg}
        reset={resetHanlder}
      />
    </>
  );
}

export default FightContent;
