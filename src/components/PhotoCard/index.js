import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Article, ImgWrapper, Img } from './styles'

import { useNearScreen } from '../../hooks/useNearScreen'

import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToogleLikeMutation'
import { Link } from '@reach/router'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()

  return (
    <Article ref={element}>
      {
        show && <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>

          <ToggleLikeMutation>
            {
              (toogleLike) => {
                const handleFavClick = () => {
                  toogleLike({
                    variables: {
                      input: { id }
                    }
                  })
                }
                return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
              }
            }
          </ToggleLikeMutation>

        </>
      }
    </Article>
  )
}
