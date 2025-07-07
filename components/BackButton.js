import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/gallery")} //Go back to Gallery page
      style={{
        padding: "0.5rem 1rem",
        backgroundColor: "hotpink",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "1rem",
        marginBottom: "1rem",
      }}
      aria-label="Back to Gallery"
    >
      ← Back to Gallery
    </button>
  );
}
