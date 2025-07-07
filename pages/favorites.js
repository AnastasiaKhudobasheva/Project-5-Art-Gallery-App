import useSWR from "swr";
import ArtPieceList from "../components/ArtPieceList";

export default function FavoritesPage({ favorites, onToggleFavorite }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (isLoading) return <div>Loading favorites...</div>;
  if (error) return <div>Failed to load favorites</div>;

  // Filter only favorites from all art:
  const favoritePieces = data.filter((piece) => favorites.includes(piece.slug));

  return (
    <div>
      <h1>FAVORITES //</h1>
      {favoritePieces.length === 0 ? (
        <p>No favorite art pieces yet //</p>
      ) : (
        <ArtPieceList
          artPieces={favoritePieces}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
      )}
    </div>
  );
}
