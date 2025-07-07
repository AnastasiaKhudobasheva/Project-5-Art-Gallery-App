export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <img src={image} alt={title} style={{ maxWidth: "300px" }} />
      <h2>{title}</h2>
      <p>by {artist}</p>
    </div>
  );
}
