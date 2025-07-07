import Image from "next/image";

export default function Spotlight({ image, artist, title }) {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>🎯 Spotlight</h2>
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        style={{ objectFit: "contain" }}
      />
      <h3>{title}</h3>
      <p>by {artist}</p>
    </div>
  );
}
