import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";

//STYLING

// Wrapper for the entire preview block
const PreviewWrapper = styled.div`
  margin-bottom: 2rem;
  position: relative;
  width: 320px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

// Floating heart icon (top-right corner)
const FloatingButtonWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
`;

// Text content container
const ContentWrapper = styled.div`
  padding: 1rem;
  text-align: center;
`;

// Title styling
const Title = styled.h2`
  font-size: 1.2rem;
  margin: 0.5rem 0 0.2rem;
  color: #003366;
  text-decoration: underline;
`;

// Artist styling
const Artist = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
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
