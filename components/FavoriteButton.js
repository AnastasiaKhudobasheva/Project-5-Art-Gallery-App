import { Heart } from "lucide-react";

export default function FavoriteButton({ isLiked, onToggleFavorite }) {
  return (
    <button
      onClick={onToggleFavorite}
      aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        color: isLiked ? "red" : "gray",
      }}
    >
      <Heart color={isLiked ? "red" : "grey"} fill={isLiked ? "red" : "none"} />
    </button>
  );
}
