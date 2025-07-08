import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column; /* stack vertically */
  align-items: center; /* center cards horizontally */
  gap: 2rem;
`;

export default function ArtPieceList({
  artPieces,
  favorites,
  onToggleFavorite,
}) {
  return (
    <ListWrapper>
      {artPieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          slug={piece.slug}
          image={piece.imageSource}
          title={piece.name}
          artist={piece.artist}
          isLiked={favorites.includes(piece.slug)}
          onToggleFavorite={() => onToggleFavorite(piece.slug)}
        />
      ))}
    </ListWrapper>
  );
}
