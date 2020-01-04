import styled from 'styled-components'


export const SocialLinksWrapper = styled.nav`
  width: 100%;
  padding: 1rem;
`
export const SocialLinksList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -.5rem;
  margin-right: -.5rem;
  list-style: none;
`
export const SocialLinksItem = styled.li`
  margin: 0 .5rem;
`

export const SocialLinksLink = styled.a`
  display: block;
  text-decoration: none;
  color: #8899a6;
  transition: color .2s;

  &:hover,
  &:focus {
    color: #1fa1f2;
  }
`

export const IconWrapper = styled.div`
  fill: #8899a6;
  width: 30px;
  height: 30px;
`
