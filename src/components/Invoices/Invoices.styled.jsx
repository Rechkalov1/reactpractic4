import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const NavItem = styled(NavLink)`
  padding: ${p => p.theme.space[3]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
    border-radius: 8px;
  }
  :hover:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`;
