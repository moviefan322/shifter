interface LogoutResponse {
  message: string;
}

interface UserInfo {
  _id: number;
  username: string;
  email: string;
}

interface RegisterInfo {
  email: string;
  password: string;
  name: string;
}

interface UpdateInfo {
  _id: string;
  email?: string;
  password?: string;
  name?: string;
}

export type { LogoutResponse, UserInfo, RegisterInfo, UpdateInfo };
