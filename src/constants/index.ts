import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: 1000
    }
  }
})

export const THEME_CODES = {
  PRIMARY: '#2D3748',
  PRIMARY_HOVER: '#4F6181',
  ORANGE: '#D45B13',
  GREEN: '#2F903F',
  FOREGROUND: '#EDF2F7',
  UNACTIVE: '#65748C'
}

export const dateFormatList = ['YYYY-MM-DD', 'DD-MM-YYYY']

export const AUTHORITIES = {
  ADMIN: 'ADMIN',
  CUSTOMER: 'CUSTOMER'
}

export const ERROR_MESSAGES = {
  EM01: 'This field is required',
  EM02: 'The username or password is incorrect',
  EM03: 'The email or password is incorrect',
  EM04: 'Add watch successfully',
  EM05: 'Update watch successfully',
  EM06: 'Delete watch successfully',
  EM07: 'Add watch failed',
  EM08: 'Update watch failed',
  EM09: 'Delete watch failed'
}

export const POPUP_TITLE = {
  FILTER: 'Filter',
  ADD_PRODUCT: 'Add new product',
  UPDATE_PRODUCT: 'Update product',
  DELETE_PRODUCT: 'Delete product',

  ADD_ACCOUNT: 'Add new account',
  UPDATE_ACCOUNT: 'Update account',
  DISABLE_ACCOUNT: 'Disable account',

  ADD_BRAND: 'Add new brand',
  UPDATE_BRAND: 'Update brand',
  DELETE_BRAND: 'Delete brand'
}
