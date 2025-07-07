import Image from "next/image";

export default function ArtPieceDetail({ piece }) {
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
