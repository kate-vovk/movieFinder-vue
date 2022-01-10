import { CLIENT_PATHS } from '@/constants/constants';

export interface IUserMenuLinks {
  link: string;
  name: string;
}
export const userMenuLinks: IUserMenuLinks[] = [
  {
    link: CLIENT_PATHS.userChat,
    name: 'User Chat',
  },
];
