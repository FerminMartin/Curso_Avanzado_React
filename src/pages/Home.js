import React from 'react'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { ListOfCategories } from '../components/ListOfCategories'
import { Layout } from '../components/Layout'

export const Home = ({ id }) => {
  return (
    <Layout title='Tu app de fotos de mascotas' subtitle='En Petgram puedes encontrar fotos de animales domésticos muy bonicos'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  )
}
