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
`;

const StyledImage = styled(Image)`
  border-radius: 8px;
  object-fit: contain;
`;

const Title = styled.h1`
  margin-top: 1rem;
  font-size: 1.8rem;
  color: #003366;
`;

const Meta = styled.p`
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #444;
`;

export default function ArtPieceDetail({ piece }) {
  return (
    <DetailWrapper>
      <StyledImage
        src={piece.imageSource}
        alt={piece.name}
        width={400}
        height={400}
      />
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
