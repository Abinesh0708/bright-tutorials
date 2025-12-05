export interface NavItem {
  label: string;
  path: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface Course {
  level: string;
  subjects: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}