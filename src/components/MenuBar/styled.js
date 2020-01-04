import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuBarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  right: 0;
  width: 3.75rem;
  height: 100vh;
  padding: .8rem 0;
  background-color: #192734;
  border-left: 1px solid #38444d;
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuBarLink = styled(Link)`
  display: block;
`

export const MenuBarItem = styled.span`
  display: block;
  width: 1.3rem;
  padding: 1rem 0;
  color: #8899a6;
  transition: color .2s;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #1fa1f2;
  }
`
