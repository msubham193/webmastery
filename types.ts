import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  popular?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: 'Web' | 'Mobile' | 'Branding' | 'Design';
  image: string;
  client: string;
  description: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export interface Package {
  id: string;
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}