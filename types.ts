
export type PageId = 'home' | 'about' | 'facilities' | 'membership' | 'events' | 'contact' | 'leaderboards' | 'course';

export interface NavLink {
  name: string;
  id: PageId;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface EventItem {
  date: string;
  month: string;
  day: string;
  title: string;
  description: string;
  category: string;
  color: string;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  score: string | number;
  trend?: 'up' | 'down' | 'stable';
}

export interface TennisPlayoff {
  playerA: string;
  playerB: string;
  score: string;
  status: 'upcoming' | 'completed';
  date?: string; // e.g. "2026-10-15 14:00"
}

export interface Hole {
  number: number;
  par: number;
  strokeIndex: number;
  distanceMeter: number;
  description: string;
  videoUrl?: string; // URL for the hole flyover/guide
  thumbnailUrl?: string; // Optional thumbnail for the video
}
