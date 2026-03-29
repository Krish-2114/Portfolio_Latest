import type { ComponentType, CSSProperties } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SocialLink {
  id: number;
  platform: string;
  username: string;
  url: string;
  icon: ComponentType<{
    className?: string;
    style?: CSSProperties;
  }>;
  color: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}
