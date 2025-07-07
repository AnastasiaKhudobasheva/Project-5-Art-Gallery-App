import useSWR from "swr";
import Spotlight from "../components/Spotlight";
import { getRandomIndex } from "../lib/random";

export default function SpotlightPage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (isLoading) return <div>Loading spotlight...</div>;
  if (error) return <div>Failed to load spotlight</div>;

  const randomIndex = getRandomIndex(data.length);
  const piece = data[randomIndex];

  return (
    <div>
      <Spotlight
        image={piece.imageSource}
        title={piece.name}
        artist={piece.artist}
      />
    </div>
  );
}
