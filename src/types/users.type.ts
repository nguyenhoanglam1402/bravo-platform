export type TUserInforData = {
  uid: string
  firstName: string
  lastName: string
  age: string
  address: string
  bussinessUnit: string
}

export enum EUserRole {
  ROOT_ADMIN = 'ROOT_ADMIN',
  SUP_ADMIN = 'SUP_ANDMIN',
  USER = 'USER'
}

export enum EUserPermissionCase {
  READ = 'R',
  WRITE = 'W',
  DELETE = 'D',
  SHARING = 'S'
}

export type TUserRoleData = {
  role: EUserRole
  specialPermissionCase: EUserPermissionCase
}

export type TAuthenticationInforData = TUserInforData &
  TUserRoleData & {
    access_token: string
    secret_code: string
  }
