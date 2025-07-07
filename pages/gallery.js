// import { useEffect, useState } from "react";
import ArtPieceList from "../components/ArtPieceList";
import useSWR from "swr";
import styled from "styled-components";

const PageWrapper = styled.div`
  padding: 2rem;
  text-align: center; // centers the heading
  padding-bottom: 5rem; // extra space so content doesn't go under nav
`;

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* centers children horizontally */
  gap: 2rem; /* space between items */
  padding: 2rem;
`;

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
    <PageWrapper>
      <h1>GALLERY //</h1>
      <GalleryWrapper>
        <ArtPieceList
          artPieces={data}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
      </GalleryWrapper>
    </PageWrapper>
  );
}
