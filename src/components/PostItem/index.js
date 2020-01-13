import React from 'react'

import * as S from './styled'

const PostItem = () => (
  <S.PostItemLink to="/slug/">
    <S.PostItemWrapper>
      <S.PostItemTag background="#47652b">Misc</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>13 de Janeiro de 2020 - 4 min de leitura</S.PostItemDate>
        <S.PostItemTitle>
          Estudos sobre GatsbyJS
        </S.PostItemTitle>
        <S.PostItemDescription>
          Aprendendo a utilizar o GatsbyJS com Willian Justen
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem;
