import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import type { SocialLink } from '../types';

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    platform: 'GitHub',
    username: 'Krish-2114',
    url: 'https://github.com/Krish-2114',
    icon: FaGithub,
    color: '#ffffff',
  },
  {
    id: 2,
    platform: 'LinkedIn',
    username: 'Krish Shah',
    url: 'https://www.linkedin.com/in/krish-shah-bb6812292/',
    icon: FaLinkedin,
    color: '#0077B5',
  },
  {
    id: 3,
    platform: 'LeetCode',
    username: 'krishshah2004',
    url: 'https://leetcode.com/krishshah2004',
    icon: SiLeetcode,
    color: '#FFA116',
  },
];
