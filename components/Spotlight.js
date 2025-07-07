import FavoriteButton from "./FavoriteButton";
import { getRandomIndex } from "@/lib/random";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

//COMPONENT LOGIC:

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
  background-color: #f7f7f7;
  margin: 2rem auto;
  max-width: 500px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.01);
  }
`;

const Heading = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
`;

const Title = styled.h3`
  text-decoration: underline;
  color: #003366;
  margin-top: 1rem;
  cursor: pointer;
`;

const Artist = styled.p`
  margin-top: 0.5rem;
  font-weight: 500;
  color: #444;
`;

const FavoriteWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
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

      <Artist>
        <strong>By:</strong> {artist}
      </Artist>

      <FavoriteWrapper>
        <FavoriteButton
          isLiked={favorites.includes(slug)} // pass liked status
          onToggleFavorite={() => onToggleFavorite(slug)} // toggle handler
        />
      </FavoriteWrapper>
    </SpotlightWrapper>
  );
}
