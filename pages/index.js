import useSWR from "swr";
import Spotlight from "../components/Spotlight";

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
    <div>
      <Spotlight
        artPieces={data}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  );
}
