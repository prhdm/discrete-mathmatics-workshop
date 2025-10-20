export interface Instructor {
  id: string;
  name: string;
  affiliation: string;
  color: 'green' | 'blue' | 'pink' | 'purple';
}

export interface TimelineEvent {
  title: string;
  date: string;
  description: string;
}

export interface TypewriterProps {
  text: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

