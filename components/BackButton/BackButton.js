import { useRouter } from "next/router";
import styled from "styled-components";
import { ArrowLeft } from "lucide-react";

//STYLING:

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #003366;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0055aa;
  }

  &:active {
    background-color: #002244;
  }

  svg {
    stroke-width: 2.5;
  }
`;

//FUNCTION:

export default function BackButton() {
  const router = useRouter();
  return (
    <ButtonWrapper>
      <Button
        onClick={() => router.push("/gallery")}
        aria-label="Back to Gallery"
      >
        <ArrowLeft size={20} />
        Back to Gallery
      </Button>
    </ButtonWrapper>
    //Go back to Gallery page with .push
  );
}
