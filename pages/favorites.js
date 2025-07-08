import useSWR from "swr";
import ArtPieceList from "../components/ArtPieceList";
import styled from "styled-components";

const PageWrapper = styled.div`
  padding: 2rem;
  text-align: center;
  padding-bottom: 5rem; // extra space so content doesn't go under nav
`;

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
`;

export default function FavoritesPage({ favorites, onToggleFavorite }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (isLoading) return <div>Loading favorites...</div>;
  if (error) return <div>Failed to load favorites</div>;

  // Filter only favorites from all art:
  const favoritePieces = data.filter((piece) => favorites.includes(piece.slug));

  return (
    <PageWrapper>
      <h1>FAVORITES //</h1>
      {favoritePieces.length === 0 ? (
        <p>No favorite art pieces yet</p>
      ) : (
        <GalleryWrapper>
          <ArtPieceList
            artPieces={favoritePieces}
            favorites={favorites}
            onToggleFavorite={onToggleFavorite}
          />
        </GalleryWrapper>
      )}
    </PageWrapper>
  );
}
