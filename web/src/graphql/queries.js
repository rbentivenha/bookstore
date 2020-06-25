import gql from 'graphql-tag'

export const getUsers = gql`
  {
    users {
      user_id
      fname
      lname
      cpf
      email
      creation_date
      bdate
      phone
      user_type
    }
  }
`
export const getEmployee = gql`
  query Employee($id: ID!) {
    employee(id: $id) {
      user_id
      employee_id
      salary
      pis
      extra_hours {
        extra_hours_id
        date
        amount
      }
      registred_products {
        product_id
        price
        title
        descrip
        status
      }
      sells {
        price
        title
        descrip
        fname
        lname
        cpf
        phone
      }
    }
  }
`

export const getEmployees = gql`
  {
    employees {
      user_id
      employee_id
      salary
      pis
      extra_hours {
        extra_hours_id
        date
        amount
      }
      registred_products {
        product_id
        price
        title
        descrip
        status
      }
      sells {
        price
        title
        descrip
        fname
        lname
        cpf
        email
        phone
      }
      user {
        user_id
        fname
        lname
        cpf
        email
        creation_date
        bdate
        phone
        user_type
        user_address {
          street_name
          street_num
          city
          postal_code
        }
      }
    }
  }
`

export const getProducts = gql`
  {
    products {
      product_id
      employee_id
      price
      title
      descrip
      status
      product_type {
        product_id
        author
        isbn
        edition
        editor
        cdd
      }
    }
  }
`
export const getClients = gql`
  {
    customers {
      user_id
      fname
      lname
      cpf
      email
      creation_date
      bdate
      phone
      user_type
      user_address {
        street_name
        street_num
        city
        postal_code
      }
      order {
        price
        title
        descrip
        fname
        lname
        cpf
        email
        phone
      }
    }
  }
`
export const getStock = gql`
  {
    stocks {
      product_id
      employee_id
      price
      title
      descrip
      sell_id
    }
  }
`
