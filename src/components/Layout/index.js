import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

import GlobalStyles from "../../styles/global"
import Profile from "../Profile"

const LayoutWrapper = styled.section`
  display: flex;
`;

const LayoutMain = styled.main`
  background-color: #16202c;
  min-height: 100vh;
  width: 100%;
  padding: .5rem;
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <aside>
        <Profile />
      </aside>
      <LayoutMain>
        {children}
      </LayoutMain>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
