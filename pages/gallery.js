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
  flex-direction: column; /* stack children vertically */
  align-items: center; /* center the column horizontally */
  /* flex-wrap: wrap; */
  gap: 2rem; /* space between items */
  padding: 2rem;
`;

export default function GalleryPage({ favorites, onToggleFavorite }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load art pieces</div>;

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
