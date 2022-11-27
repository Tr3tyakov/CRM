export interface IAuth {
  email: string;
  password: string;
}
export interface IRegistrt extends Omit<IAuth, 'username'> {
  username: string;
}
