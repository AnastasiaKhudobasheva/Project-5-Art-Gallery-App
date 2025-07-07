// export default function ArtPiecePreview({ image, title, artist }) {
//   return (
//     <div style={{ marginBottom: "2rem" }}>
//       <img src={image} alt={title} style={{ maxWidth: "300px" }} />
//       <h2>{title}</h2>
//       <p>by {artist}</p>
//     </div>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function ArtPiecePreview({
  slug,
  image,
  title,
  artist,
  isLiked,
  onToggleFavorite,
}) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <Link href={`/art/${slug}`}>
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          style={{ objectFit: "contain" }}
        />
        <h2>{title}</h2>
      </Link>
      <p>by {artist}</p>
      <FavoriteButton isLiked={isLiked} onToggleFavorite={onToggleFavorite} />
    </div>
  );
}
