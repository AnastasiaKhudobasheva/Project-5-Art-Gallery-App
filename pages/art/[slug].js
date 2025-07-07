import { useRouter } from "next/router";
import useSWR from "swr";
import Image from "next/image";

export default function ArtPieceDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (isLoading) return <div>Loading detail...</div>;
  if (error) return <div>Failed to load detail</div>;

  const piece = data.find((p) => p.slug === slug);

  if (!piece) return <div>Art piece not found.</div>;

  return (
    <div>
      <Image
        src={piece.imageSource}
        alt={piece.name}
        width={400}
        height={400}
        style={{ objectFit: "contain" }}
      />
      <h1>{piece.name}</h1>
      <p>Artist: {piece.artist}</p>
      <p>Year: {piece.year}</p>
      <p>Genre: {piece.genre}</p>
    </div>
  );
}
