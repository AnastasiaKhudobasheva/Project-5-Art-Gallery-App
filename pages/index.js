import useSWR from "swr";
import Spotlight from "../components/Spotlight";
import styled from "styled-components";

const PageWrapper = styled.div`
  padding: 2rem;
  padding-bottom: 5rem; // space for sticky bottom nav
  text-align: center;
`;

export default function SpotlightPage({ favorites, onToggleFavorite }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (isLoading) return <div>Loading spotlight...</div>;
  if (error) return <div>Failed to load spotlight</div>;

  //at every render Spotlight Page picks a new random art piece bc of this code:
  //but: we want to pick a random piece only once when the data is first loaded,
  // then keep showing that same piece until user navigates away

  // const randomIndex = getRandomIndex(data.length);
  // const piece = data[randomIndex];

  return (
    <PageWrapper>
      <Spotlight
        artPieces={data}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
    </PageWrapper>
  );
}
