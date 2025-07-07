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

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        style={{ objectFit: "contain" }}
      />
      <h2>{title}</h2>
      <p>by {artist}</p>
    </div>
  );
}
