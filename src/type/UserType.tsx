export type UserType = {
  id: number;
  fullname: string;
  username: string;
  profile_picture: string;
  profile_description: string;
};

export type UserRegisterType = {
  fullname: string;
  username: string;
  email: string;
  password: string;
};

export type UserLoginType = {
  email: string;
  password: string;
};
