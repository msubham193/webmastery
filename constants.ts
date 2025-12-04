import { 
  Code, 
  Layout, 
  Smartphone, 
  BarChart, 
  Layers, 
  Globe, 
  PenTool 
} from 'lucide-react';
import { Project, Service, Testimonial, ProcessStep, Package } from './types';

export const NAV_LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#portfolio' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Full Stack Development',
    description: 'Scalable, performant web applications built with React, Node.js, and modern cloud architecture.',
    icon: Code,
    popular: true,
  },
  {
    id: '2',
    title: 'UI/UX Design',
    description: 'User-centric interfaces that are intuitive, accessible, and visually stunning.',
    icon: Layout,
  },
  {
    id: '3',
    title: 'Mobile App Dev',
    description: 'Native and cross-platform mobile solutions for iOS and Android using React Native.',
    icon: Smartphone,
  },
  {
    id: '4',
    title: 'SEO & Performance',
    description: 'Optimizing sites for search engines and lightning-fast load times to boost conversions.',
    icon: BarChart,
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'FinTech Dashboard',
    category: 'Web',
    client: 'Nova Finance',
    image: 'https://picsum.photos/800/600?random=1',
    description: 'A real-time financial analytics dashboard for enterprise clients.',
    tags: ['React', 'TypeScript', 'D3.js', 'SaaS'],
  },
  {
    id: '2',
    title: 'E-Commerce Redesign',
    category: 'Design',
    client: 'Lumina Fashion',
    image: 'https://picsum.photos/800/600?random=2',
    description: 'Complete UX overhaul increasing conversion rate by 45%.',
    tags: ['Figma', 'UI/UX', 'Shopify'],
  },
  {
    id: '3',
    title: 'HealthTrack App',
    category: 'Mobile',
    client: 'Vitality',
    image: 'https://picsum.photos/800/600?random=3',
    description: 'Cross-platform wellness tracking application with wearable integration.',
    tags: ['React Native', 'Firebase', 'iOS', 'Android'],
  },
  {
    id: '4',
    title: 'Agency Brand Identity',
    category: 'Branding',
    client: 'Starlight Creative',
    image: 'https://picsum.photos/800/600?random=4',
    description: 'Modern brand identity package including logo, typography, and guidelines.',
    tags: ['Branding', 'Illustrator', 'Identity'],
  },
  {
    id: '5',
    title: 'Corporate Portal',
    category: 'Web',
    client: 'Global Tech',
    image: 'https://picsum.photos/800/600?random=5',
    description: 'Secure internal employee portal for document management and HR.',
    tags: ['Next.js', 'PostgreSQL', 'Auth0'],
  },
  {
    id: '6',
    title: 'Restaurant Booking',
    category: 'Mobile',
    client: 'Bistro 55',
    image: 'https://picsum.photos/800/600?random=6',
    description: 'Table reservation system with real-time availability.',
    tags: ['Flutter', 'Node.js', 'API'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CTO',
    company: 'TechFlow',
    avatar: 'https://picsum.photos/100/100?random=10',
    content: 'Webmastery delivered our MVP in record time. The code quality is exceptional, and the attention to design detail made our investors extremely happy.',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Founder',
    company: 'StartUp Inc',
    avatar: 'https://picsum.photos/100/100?random=11',
    content: 'Working with Webmastery was a breath of fresh air. They understood our business goals and translated them into a beautiful, functional product.',
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    role: 'Product Manager',
    company: 'Creative Solutions',
    avatar: 'https://picsum.photos/100/100?random=12',
    content: 'The best talent I have hired in years. Professional, communicative, and incredibly talented.',
  },
];

export const PROCESS: ProcessStep[] = [
  {
    id: 1,
    title: 'Discovery & Strategy',
    description: 'We start by deep-diving into your goals, audience, and challenges to build a solid roadmap.',
  },
  {
    id: 2,
    title: 'Design & Prototype',
    description: 'I create low-fidelity wireframes followed by high-fidelity mockups to visualize the solution.',
  },
  {
    id: 3,
    title: 'Development',
    description: 'Clean, efficient code is written using the latest tech stack, ensuring scalability and speed.',
  },
  {
    id: 4,
    title: 'Launch & Support',
    description: 'We deploy your project to the world, followed by ongoing support and optimization.',
  },
];

export const PACKAGES: Package[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₹15k+',
    features: ['Landing Page Design', 'React Development', 'SEO Basics', '2 Rounds of Revisions', '1 Month Support'],
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '₹35k+',
    features: ['Multi-page Website', 'CMS Integration', 'Advanced SEO', 'Animation & Interactions', '3 Months Support'],
    recommended: true,
  },
  {
    id: 'premium',
    name: 'Custom App',
    price: '₹60k+',
    features: ['Full Web Application', 'Database Design', 'User Authentication', 'Admin Dashboard', '6 Months Support'],
  },
];

export const TECH_STACK = [
  { name: 'React', icon: Code },
  { name: 'TypeScript', icon: Code },
  { name: 'Node.js', icon: Layers },
  { name: 'Tailwind CSS', icon: PenTool },
  { name: 'Next.js', icon: Globe },
  { name: 'Figma', icon: Layout },
];