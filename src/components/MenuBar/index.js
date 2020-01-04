import React from 'react'

import { Home } from 'styled-icons/boxicons-solid/Home'
import { SearchAlt2 as Search } from 'styled-icons/boxicons-solid/SearchAlt2'
import { UpArrow } from 'styled-icons/boxicons-solid/UpArrow'
import { Lightbulb as Light } from 'styled-icons/remix-fill/Lightbulb'
import { GridAlt as Grid } from 'styled-icons/boxicons-solid/GridAlt'

import * as S from './styled'

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Voltar para a Home">
        <S.MenuBarItem>
          <Home />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to="/search/" title="Pesquisar">
        <S.MenuBarItem>
          <Search />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <S.MenuBarItem title="Mudar o tema">
        <Light />
      </S.MenuBarItem>
      <S.MenuBarItem title="Mudar visualização">
        <Grid />
      </S.MenuBarItem>
      <S.MenuBarItem title="Mudar ir para o topo">
        <UpArrow />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar
