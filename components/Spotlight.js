import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import { getRandomIndex } from "@/lib/random";
import { useState, useEffect } from "react";

//Data Source: Spotlight comp	receives full artPieces array as a prop from index.js
//Random Logic:	Using getRandomIndex() from lib/random.js
//Reusability:	High, thanks to separation of data fetching

export default function Spotlight({ onToggleFavorite, artPieces, favorites }) {
  const [randomPiece, setRandomPiece] = useState(null);

  useEffect(() => {
    if (artPieces && artPieces.length > 0) {
      const index = getRandomIndex(artPieces.length);
      setRandomPiece(artPieces[index]);
    }
  }, [artPieces]);

  if (!randomPiece) return null;

  const { imageSource, name, artist, slug } = randomPiece;

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>🎯 Spotlight</h2>
      <Image
        src={imageSource}
        alt={name}
        width={400}
        height={400}
        style={{ objectFit: "contain" }}
      />
      <h3>{name}</h3>
      <p>by {artist}</p>
      <FavoriteButton
        isLiked={favorites.includes(slug)} // pass liked status
        onToggleFavorite={() => onToggleFavorite(slug)} // toggle handler
      />
    </div>
  );
}
