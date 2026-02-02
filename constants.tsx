
import React from 'react';
import { PageId } from './types';

export const Icons = {
  Menu: <path d="M3 12h18M3 6h18M3 18h18" />,
  X: <path d="M18 6L6 18M6 6l12 12" />,
  Phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.12 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.81.57A2 2 0 0 1 22 16.92z" />,
  MapPin: <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />,
  Mail: <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />,
  Calendar: <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" />,
  ArrowRight: <path d="M5 12h14M12 5l7 7-7 7" />,
  Flag: <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />,
  Utensils: <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />,
  Users: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />,
  Check: <path d="M20 6L9 17l-5-5" />,
  Facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  Instagram: <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />,
  Bot: <path d="M12 8V4m0 0H8m4 0h4M4 13v-3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3m-2 0a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2m2-5h.01M16 8h.01M9 16h6" />,
  Send: <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />,
  Trophy: <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55.47.98.97 1.21C11.59 18.47 12 19 12 19.5s.41 1.03 1.03 1.29c.5.23.97-.2 1.22-1.29l-.25-4.84M12 5a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z" />,
  Bike: <path d="M5.5 17.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM18.5 17.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM15 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM8 17h5l1-6-3-2H8l2 2-2 6z" />,
  Target: <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />,
  Plus: <path d="M12 5v14M5 12h14" />,
  Activity: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
};

export const MCC_NAV_LINKS: { name: string, id: PageId }[] = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Facilities', id: 'facilities' },
  { name: 'Membership', id: 'membership' },
  { name: 'Leaderboards', id: 'leaderboards' },
  { name: 'Events', id: 'events' },
  { name: 'Contact', id: 'contact' },
];

export const CLUB_CONTEXT = `
Mtunzini Country Club (MCC) is a social and sporting hub in Mtunzini, Zululand, South Africa.
Address: 1 Hely Hutchinson St, Mtunzini, 3867.
Phone: 035 340 1779.
Email: manager@mtunzinicc.co.za.
Key 2026 Events:
- Jan 3: Monthly Mug, Jan 31: Ryder Cup.
- Feb 7: Monthly Mug, Feb 14: Valentines Dinner.
- Mar 7: Monthly Mug, Mar 28: Sugar Tots Golf Day.
- Jun 20: Monthly Mug, Jun 26: Night Golf, Jun 27-28: Club Championships.
- Aug 1: Monthly Mug, Aug 29: Pentathlon.
- Oct 10: Monthly Mug, Oct 24: Beerfest.
- Dec 5: Greenkeepers Challenge, Dec 19: Christmas Cheer.
Sporting Traditions: Monthly Mug (Golf) is every first Saturday. Sponsor Day (East Toyota) is usually a Wednesday each month.
`;
