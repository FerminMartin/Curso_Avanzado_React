import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Article, ImgWrapper, Img } from './styles'

import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToogleLikeMutation'
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id} `
  const [liked, setLiked] = useLocalStorage(key, false)

  return (
    <Article ref={element}>
      {
        show && <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <ToggleLikeMutation>
            {
              (toogleLike) => {
                const handleFavClick = () => {
                  !liked && toogleLike({
                    variables: {
                      input: { id }
                    }
                  })
                  setLiked(!liked)
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
