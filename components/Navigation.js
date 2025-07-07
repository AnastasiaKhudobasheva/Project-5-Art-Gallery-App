import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed; //nav bar sticks to the bottom
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  background-color: #f8f8f8;
  border-top: 1px solid #ddd;
  box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.05);
  z-index: 1000; //keeps it layered above other elements
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #e63946;
  }
`;

export default function Navigation() {
  return (
    <Nav>
      <NavLink href="/">SPOTLIGHT.</NavLink>
      <NavLink href="/gallery">GALLERY.</NavLink>
      <NavLink href="/favorites">FAVORITES.</NavLink>
    </Nav>
  );
}
