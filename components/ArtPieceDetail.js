import Image from "next/image";
import styled from "styled-components";

const DetailWrapper = styled.section`
  padding: 1rem;
  padding-top: 2rem; // More space on top
  max-width: 500px;
  margin: 2rem auto;
  background-color: #f7f7f7;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 100%;
`;

const StyledImage = styled(Image)`
  width: 100% !important; //responsive tweak: makes the image scale down with the container
  height: auto !important; //responsive tweak: keeps the aspect ratio intact
  border-radius: 8px;
  object-fit: contain;
`;
//!important needed bc Next.js <Image> injects inline styles that would otherwise override our CSS

const Title = styled.h1`
  margin-top: 1rem;
  font-size: 1.8rem;
  color: #003366;
  word-break: break-word; //responsive tweak
`;

const Meta = styled.p`
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #444;
  word-break: break-word; //responsive tweak
`;

export default function ArtPieceDetail({ piece }) {
  return (
    <DetailWrapper>
      <ImageWrapper>
        <StyledImage
          src={piece.imageSource}
          alt={piece.name}
          width={400}
          height={400}
        />
      </ImageWrapper>

      <Title>{piece.name}</Title>
      <Meta>
        <strong>Artist:</strong> {piece.artist}
      </Meta>
      <Meta>
        <strong>Year:</strong> {piece.year}
      </Meta>
      <Meta>
        <strong>Genre:</strong> {piece.genre}
      </Meta>
    </DetailWrapper>
  );
}
