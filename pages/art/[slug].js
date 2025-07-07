import { useRouter } from "next/router";
import useSWR from "swr";
import ArtPieceDetail from "@/components/ArtPieceDetail";

import BackButton from "@/components/BackButton";

export default function ArtPieceDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (isLoading) return <div>Loading detail...</div>;
  if (error) return <div>Failed to load detail</div>;

  // Find the art piece by slug
  const piece = data.find((p) => p.slug === slug);

  if (!piece) return <div>Art piece not found</div>;

  return (
    <div>
      <ArtPieceDetail piece={piece} />
      <BackButton />
    </div>
  );
}
