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
import styled from "styled-components";

//STYLING

// Wrapper for the entire preview block
const PreviewWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
  width: 320px;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

// Floating button wrapper (top-right corner)
const FloatingButtonWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  padding: 1rem;
  text-align: center;
`;

const Title = styled.h2`
  margin: 0.5rem 0 0.2rem;
`;

const Artist = styled.p`
  color: #666;
  font-size: 1rem;
  text-align: center;
`;

export default function ArtPiecePreview({
  slug,
  image,
  title,
  artist,
  isLiked,
  onToggleFavorite,
}) {
  return (
    <PreviewWrapper>
      <FloatingButtonWrapper>
        <FavoriteButton isLiked={isLiked} onToggleFavorite={onToggleFavorite} />
      </FloatingButtonWrapper>

      <Link href={`/art/${slug}`}>
        <Image
          src={image}
          alt={title}
          width={320}
          height={320}
          style={{ objectFit: "cover", display: "block" }}
        />
        <ContentWrapper>
          <Title>{title}</Title>
        </ContentWrapper>
      </Link>
      <Artist>by {artist}</Artist>
    </PreviewWrapper>
  );
}
