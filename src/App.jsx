import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ThemeSection from './components/ThemeSection';
import SpeakersSection from './components/SpeakersSection';
import RedBanner from './components/RedBanner';

import ScheduleSection from './components/ScheduleSection';
import SponsorsSection from './components/SponsorsSection';

import VenueSection from './components/VenueSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Placeholder components for shadcn/ui
const Button = ({ className, children, ...props }) => (
  <button className={`px-4 py-2 rounded ${className}`} {...props}>{children}</button>
);
const Dialog = ({ children }) => <>{children}</>;
const DialogContent = ({ children }) => <div className="bg-black border-gray-800 p-4">{children}</div>;
const DialogDescription = ({ children }) => <p className="text-gray-400">{children}</p>;
const DialogHeader = ({ children }) => <div>{children}</div>;
const DialogTitle = ({ children }) => <h3 className="text-lg font-bold">{children}</h3>;
const DialogTrigger = ({ children, ...props }) => <span {...props}>{children}</span>;
const Tabs = ({ defaultValue, children, className }) => <div className={className}>{children}</div>;
const TabsContent = ({ value, children }) => <div>{children}</div>;
const TabsList = ({ children, className }) => <div className={className}>{children}</div>;
const TabsTrigger = ({ value, children, className }) => (
  <button className={`px-4 py-2 ${className}`} data-state={value === 'active' ? 'active' : 'inactive'}>{children}</button>
);

// Placeholder for Next.js Image
const Image = ({ src, alt, width, height, className, fill }) => (
  <img src={src} alt={alt} width={width} height={height} className={className} style={fill ? { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' } : {}} />
);
// Placeholder for Next.js Link
const Link = ({ href, children, className }) => <a href={href} className={className}>{children}</a>;

const App = () => {
  const speakers = [
    {
      name: 'Dr. Aisha Patel',
      role: 'Quantum Computing Researcher',
      image: 'https://images.unsplash.com/photo-1592009309602-1dde752490ae?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9',
      topic: 'Quantum Computing: The Next Frontier',
    },
    {
      name: 'Rajiv Mehta',
      role: 'Social Entrepreneur',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9',
      topic: 'Solving Rural Education Crisis',
    },
    {
      name: 'Priya Sharma',
      role: 'Climate Scientist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9',
      topic: 'Climate Action: Local Solutions',
    },
    
  ];
  

  
  const schedule = [
    {
      time: '09:00 AM - 09:30 AM',
      title: 'Registration & Welcome Kit',
      speaker: '',
      description: 'Check-in and collect your TEDxIITRAM welcome package',
    },
    {
      time: '09:30 AM - 10:00 AM',
      title: 'Opening Ceremony',
      speaker: 'TEDxIITRAM Organizers',
      description: 'Welcome address and introduction to this year\'s theme',
    },
    {
      time: '10:00 AM - 10:30 AM',
      title: 'Quantum Computing: The Next Frontier',
      speaker: 'Dr. Aisha Patel',
      description: 'Exploring how quantum computing will revolutionize technology',
    },
    {
      time: '10:30 AM - 11:00 AM',
      title: 'Solving Rural Education Crisis',
      speaker: 'Rajiv Mehta',
      description: 'Innovative approaches to education in underserved communities',
    },
    {
      time: '11:00 AM - 11:30 AM',
      title: 'Networking Break',
      speaker: '',
      description: 'Refreshments and interactive exhibits',
    },
    {
      time: '11:30 AM - 12:00 PM',
      title: 'Climate Action: Local Solutions',
      speaker: 'Priya Sharma',
      description: 'How local initiatives can create global climate impact',
    },
    {
      time: '12:00 PM - 12:30 PM',
      title: 'Ethical AI Development',
      speaker: 'Arjun Kapoor',
      description: 'Ensuring artificial intelligence serves humanity ethically',
    },
    {
      time: '12:30 PM - 01:30 PM',
      title: 'Lunch Break',
      speaker: '',
      description: 'Networking lunch with speakers and attendees',
    },
    {
      time: '01:30 PM - 02:00 PM',
      title: 'The Future of Brain-Computer Interfaces',
      speaker: 'Dr. Maya Singh',
      description: 'How neural interfaces will transform human-computer interaction',
    },
    {
      time: '02:00 PM - 02:30 PM',
      title: 'Democratizing Space Exploration',
      speaker: 'Vikram Desai',
      description: 'Making space accessible to everyone',
    },
    {
      time: '02:30 PM - 03:00 PM',
      title: 'Interactive Session',
      speaker: '',
      description: 'Q&A with morning speakers',
    },
    {
      time: '03:00 PM - 03:30 PM',
      title: 'Closing Remarks & Certificate Distribution',
      speaker: 'TEDxIITRAM Team',
      description: 'Concluding the event with key takeaways',
    },
  ];
  
  const sponsors = [
    {
      name: 'TechInnovate',
      tier: 'Platinum',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png',
    },
    {
      name: 'GreenFuture',
      tier: 'Gold',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png',
    },
    {
      name: 'NextGen Labs',
      tier: 'Gold',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png',
    },
    {
      name: 'Digital Dynamics',
      tier: 'Silver',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Intel_logo_%282006%29.svg/1200px-Intel_logo_%282006%29.svg.png',
    },
    {
      name: 'EcoSolutions',
      tier: 'Silver',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1200px-LEGO_logo.svg.png',
    },
    {
      name: 'Innovate AI',
      tier: 'Silver',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png',
    },
  ];
 

  return (
    <div className="bg-black text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ThemeSection />
      <SpeakersSection speakers={speakers} />
      <RedBanner />
      
      <ScheduleSection schedule={schedule} />
      <SponsorsSection sponsors={sponsors} />
      
      <VenueSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;

// Custom Animations


export { Button, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, Tabs, TabsContent, TabsList, TabsTrigger, Image, Link };