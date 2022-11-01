import { gql } from '@apollo/client'

export const GET_ALL_ITEMS = gql`
query Query($name: Int) {
  getAllItems(name: $name) {
    id
    name
    description
    price
    imgUrl
    categoryId
  }
}
`

export const GET_ITEM_DETAIL = gql`
query GetItem($getItemId: ID!) {
  getItem(id: $getItemId) {
    id
    name
    description
    price
    imgUrl
    categoryId
    Category {
      id
      name
    }
    user {
      email
      username
    }
  }
}
`

export const GET_ALL_CATEGORIES = gql`
query GetAllCategories {
  getAllCategories {
    id
    name
  }
}
`

export const GET_ALL_INGREDIENTS = gql`
query GetAllIngredients {
  getAllIngredients {
    id
    name
  }
}
`
