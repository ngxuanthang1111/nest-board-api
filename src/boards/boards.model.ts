import { BoardStatus } from './board-status.enum';
import { User } from '../auth/user.entity';

export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
  user: User;
}
