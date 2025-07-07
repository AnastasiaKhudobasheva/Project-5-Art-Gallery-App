import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieceList({ artPieces }) {
  return (
    <div>
      {artPieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          image={piece.imageSource}
          title={piece.name}
          artist={piece.artist}
        />
      ))}
    </div>
  );
}
