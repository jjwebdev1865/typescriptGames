import React from "react";
import { Player } from "../types/models";

interface GraveyardProps {
  player: Player
  width?: string
}

export const Graveyard = ({player, width = '10%'}: GraveyardProps) => {
  const { playerName, graveyard } = player
  return (
    <div style={{ width }}>
      <h2>{playerName}</h2>
      {graveyard.length > 0 ? (
        <ul>
          {graveyard.map(piece => (
            <li key={`graveyard-piece-${piece}`}>{piece}</li>
          ))}
        </ul>
      ) : (
        <p>Graveyard Empty</p>
      )}
    </div>
  )
}