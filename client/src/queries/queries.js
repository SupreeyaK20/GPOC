import { gql } from "@apollo/client";

// Start User Queries
export const REGESTER_MUTATION = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
    $role: String!
  ) {
    register(
      username: $username
      email: $email
      password: $password
      confirmPassword: $confirmPassword
      role: $role
    ) {
      username
      email
      role
      createdAt
    }
  }
`;

export const LOGIN_USER = gql`
  query Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      username
      email
      token
      role
      isActive
      createdAt
    }
  }
`;

export const GET_ROLES = gql`
  {
    getRoles {
      name
      slug
      status
    }
  }
`;

export const getUsersQuery = gql`
  {
    getAllUsers {
      id
      username
      email
      role
      isActive
      token
      createdAt
    }
  }
`;

export const DELETE_MUTATION = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      message
    }
  }
`;

export const USER_PROFILE = gql`
  {
    getUserProfile {
      username
      email
      role
      imageUrl
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload) {
    uploadFile(file: $file) {
      imageUrl
      imageType
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation ($username: String, $oldPassword: String, $password: String) {
    updatePassword(
      username: $username
      oldPassword: $oldPassword
      password: $password
    ) {
      message
    }
  }
`;

// End User Queries

// Start Category Queries
export const GET_CATEGORIES = gql`
  {
    getAllCategories {
      id
      name
    }
  }
`;

export const ADD_CATEGORY = gql`
  mutation addCategory($name: String!) {
    addCategory(name: $name) {
      name
    }
  }
`;

export const DELETE_CATEGORY = gql`
  mutation deleteCategory($id: ID!) {
    deleteCategory(id: $id) {
      message
    }
  }
`;

export const UPDATE_CATEGORY = gql`
  mutation ($name: String, $id: ID) {
    updateCategory(name: $name, id: $id) {
      message
    }
  }
`;
// End Category Queries

// Start Insurance Queries
export const GET_INSURANCE = gql`
  {
    getAllInsurance {
      name
      email
      address
      phone
      maritalStatus
      gender
      catId
    }
  }
`;

export const ADD_INSURANCE = gql`
  mutation addInsurance(
    $name: String
    $email: String
    $phone: String
    $address: String
    $gender: String
    $maritalStatus: String
    $catId: String
  ) {
    addInsurance(
      name: $name
      email: $email
      phone: $phone
      address: $address
      gender: $gender
      maritalStatus: $maritalStatus
      catId: $catId
    ) {
      email
      name
      phone
    }
  }
`;
// End Insurance Queries

// Download Excel
export const CATEGORY_EXCEL_DOWNLOAD = gql`
  {
    exportCategory {
      __typename
    }
  }
`;

//Server Pegination
export const SERVER_PEGINATION = gql`
  query peginationUser($limit: Int, $offset: Int) {
    peginationUser(limit: $limit, offset: $offset) {
      id
      username
      email
      role
      isActive
      token
      createdAt
    }
  }
`;
//End Server Pegination
