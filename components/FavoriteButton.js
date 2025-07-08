import { Heart } from "lucide-react";
import styled from "styled-components";

//React tries to pass props(isLiked) to the real HTMP component <button>
//we need to stop passing that prop to the DOM, otherwise gives warning
//wrap it in .withConfig so React knows isLiked is just for styling, not to pass it to the real <button> element

const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "isLiked",
})`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s ease, color 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    color: ${({ isLiked }) => (isLiked ? "#e63946" : "#ccc")};
    fill: ${({ isLiked }) => (isLiked ? "#e63946" : "transparent")};
    transition: color 0.2s ease, fill 0.2s ease;
  }
`;

export default function FavoriteButton({ isLiked, onToggleFavorite }) {
  return (
    <Button
      onClick={onToggleFavorite}
      isLiked={isLiked}
      aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
    >
      <Heart size={28} />
    </Button>

    // <button
    //   onClick={onToggleFavorite}
    //   aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
    //   style={{
    //     background: "none",
    //     border: "none",
    //     cursor: "pointer",
    //     color: isLiked ? "red" : "gray",
    //   }}
    // >
    //   <Heart color={isLiked ? "red" : "grey"} fill={isLiked ? "red" : "none"} />
    // </button>
  );
}
