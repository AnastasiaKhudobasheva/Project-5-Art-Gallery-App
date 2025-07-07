// import { useEffect, useState } from "react";
import ArtPieceList from "../components/ArtPieceList";
import useSWR from "swr";

export default function GalleryPage({ favorites, onToggleFavorite }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load art pieces</div>;

  //   const [artPieces, setArtPieces] = useState([]);

  //   useEffect(() => {
  //     async function fetchArt() {
  //       const response = await fetch("https://example-apis.vercel.app/api/art");
  //       const data = await response.json();
  //       setArtPieces(data);
  //     }
  //     fetchArt();
  //   }, []);

  return (
    <div>
      <h1>Gallery</h1>
      <ArtPieceList
        artPieces={data}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}
