export interface INotificationDocument {
  id?: string;
  userId: number;
  groupName: string;
  email: string;
  createdAt?: Date;
}

export interface IEmailLocals {
  sender?: string;
  appaLink: string;
  appIcon: string;
  appName: string;
  subject: string;
  username?: string;
}
