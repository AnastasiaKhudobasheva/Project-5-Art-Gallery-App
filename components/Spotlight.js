import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import { getRandomIndex } from "@/lib/random";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

//COMP LOGIC:

//Data Source: Spotlight comp	receives full artPieces array as a prop from index.js
//Random Logic:	Using getRandomIndex() from lib/random.js
//Reusability:	High, thanks to separation of data fetching

//STYLING:

// 1. Wrap the entire preview in a position: relative container
// This allows absolutely positioning the button inside it
// 2. Wrap the FavoriteButton in a div and absolutely position it

const SpotlightWrapper = styled.section`
  padding: 2rem;
  text-align: center;
  background-color: rgb(231, 231, 231);
  margin: 1rem auto;
  max-width: 450px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  cursor: pointer;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.2rem;
`;

const Title = styled.h3`
  text-decoration: underline;
  color: #003366;
  cursor: pointer;
`;

const FavoriteWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
`;

//FUNCTION:

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
    <SpotlightWrapper>
      <Heading>SPOTLIGHT //</Heading>

      <Link href={`/art/${slug}`} passHref>
        <div>
          <StyledImage src={imageSource} alt={name} />
          <Title>{name}</Title>
        </div>
      </Link>

      <p>
        <strong>By:</strong> {artist}
      </p>

      <FavoriteWrapper>
        <FavoriteButton
          isLiked={favorites.includes(slug)} // pass liked status
          onToggleFavorite={() => onToggleFavorite(slug)} // toggle handler
        />
      </FavoriteWrapper>
    </SpotlightWrapper>
  );
}
