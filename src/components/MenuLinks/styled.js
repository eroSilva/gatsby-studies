import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuLinksWrapper = styled.nav``

export const MenuLinksList = styled.ul`
  list-style: none;
  font-size: 1.2rem;
  font-weight: 300;
`
export const MenuLinksItem = styled.li`
  padding: .5rem 0;

  .active {
    color: #1fa1f2;
  }
`
export const MenuLinksLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #8899a6;
  transition: color .2s;

  &:hover,
  &:focus {
    color: #1fa1f2;
  }
`
