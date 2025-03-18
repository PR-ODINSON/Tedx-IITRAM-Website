import React, { useState, useEffect, useRef } from 'react';
import './App.css'; // Ensure Tailwind is included in CSS

// Import Lucide React icons
import { Play, Menu, X, MapPin, Calendar, Clock, ExternalLink, ArrowRight, Mail, Phone, Instagram, Twitter, Facebook, Linkedin, Youtube } from 'lucide-react';

// Placeholder components for shadcn/ui (replace with actual components or custom HTML if not using shadcn/ui)
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

// Placeholder for Next.js Image (replace with regular <img> or a custom Image component)
const Image = ({ src, alt, width, height, className, fill }) => (
  <img src={src} alt={alt} width={width} height={height} className={className} style={fill ? { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' } : {}} />
);
// Placeholder for Next.js Link (replace with <a> or a custom Link component)
const Link = ({ href, children, className }) => <a href={href} className={className}>{children}</a>;

const  page = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const videoRef = useRef(null);

  // Handle scroll for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date('October 15, 2024').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const speakers = [
    {
      name: 'Dr. Aisha Patel',
      role: 'Quantum Computing Researcher',
      image: '/placeholder.svg?height=400&width=400&text=AP',
      topic: 'Quantum Computing: The Next Frontier',
    },
    {
      name: 'Rajiv Mehta',
      role: 'Social Entrepreneur',
      image: '/placeholder.svg?height=400&width=400&text=RM',
      topic: 'Solving Rural Education Crisis',
    },
    {
      name: 'Priya Sharma',
      role: 'Climate Scientist',
      image: '/placeholder.svg?height=400&width=400&text=PS',
      topic: 'Climate Action: Local Solutions',
    },
    {
      name: 'Arjun Kapoor',
      role: 'AI Ethics Advocate',
      image: '/placeholder.svg?height=400&width=400&text=AK',
      topic: 'Ethical AI Development',
    },
    {
      name: 'Dr. Maya Singh',
      role: 'Neuroscientist',
      image: '/placeholder.svg?height=400&width=400&text=MS',
      topic: 'The Future of Brain-Computer Interfaces',
    },
    {
      name: 'Vikram Desai',
      role: 'Space Technology Expert',
      image: '/placeholder.svg?height=400&width=400&text=VD',
      topic: 'Democratizing Space Exploration',
    },
    {
      name: 'Neha Gupta',
      role: 'Digital Privacy Advocate',
      image: '/placeholder.svg?height=400&width=400&text=NG',
      topic: 'Reclaiming Your Digital Identity',
    },
    {
      name: 'Sanjay Verma',
      role: 'Sustainable Architecture Pioneer',
      image: '/placeholder.svg?height=400&width=400&text=SV',
      topic: 'Buildings That Breathe',
    },
  ];

  const pastTalks = [
    {
      title: 'The Hidden Power of Emotional Intelligence',
      speaker: 'Dr. Ananya Reddy',
      views: '1.8M',
      duration: '12:45',
      image: '/placeholder.svg?height=300&width=500&text=TEDx+Talk+1',
    },
    {
      title: 'Reimagining Education for the AI Era',
      speaker: 'Prof. Karan Malhotra',
      views: '2.3M',
      duration: '15:20',
      image: '/placeholder.svg?height=300&width=500&text=TEDx+Talk+2',
    },
    {
      title: 'Sustainable Cities: The Blueprint for Tomorrow',
      speaker: 'Architect Zara Khan',
      views: '1.5M',
      duration: '18:10',
      image: '/placeholder.svg?height=300&width=500&text=TEDx+Talk+3',
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
    { name: 'TechInnovate', tier: 'Platinum', logo: '/placeholder.svg?height=150&width=250&text=TechInnovate' },
    { name: 'GreenFuture', tier: 'Gold', logo: '/placeholder.svg?height=150&width=250&text=GreenFuture' },
    { name: 'NextGen Labs', tier: 'Gold', logo: '/placeholder.svg?height=150&width=250&text=NextGen+Labs' },
    { name: 'Digital Dynamics', tier: 'Silver', logo: '/placeholder.svg?height=150&width=250&text=Digital+Dynamics' },
    { name: 'EcoSolutions', tier: 'Silver', logo: '/placeholder.svg?height=150&width=250&text=EcoSolutions' },
    { name: 'Innovate AI', tier: 'Silver', logo: '/placeholder.svg?height=150&width=250&text=Innovate+AI' },
  ];

  const faqs = [
    {
      question: 'What is TEDxIITRAM?',
      answer:
        'TEDxIITRAM is an independently organized TED event hosted by the Indian Institute of Technology, Rajasthan Ahmedabad Campus. It brings together thought leaders, innovators, and changemakers to share ideas worth spreading.',
    },
    {
      question: 'How can I register for the event?',
      answer:
        'Registration is available through our website. Click on the \'Register\' button at the top of the page to secure your spot. Early bird tickets are available until September 15, 2024.',
    },
    {
      question: 'Is the event open to the public or only for IIT students?',
      answer:
        'TEDxIITRAM is open to everyone! While it\'s hosted at IIT Rajasthan Ahmedabad Campus, we welcome attendees from all backgrounds, professions, and age groups.',
    },
    {
      question: 'Will the talks be recorded and available online?',
      answer:
        'Yes, all talks will be professionally recorded and uploaded to the TEDx YouTube channel within 2-3 weeks after the event. Attendees will receive early access to the videos.',
    },
    {
      question: 'How can I become a speaker at TEDxIITRAM?',
      answer:
        'Speaker applications for this year\'s event are closed. For future events, you can submit your idea through our website when applications open. We typically announce the call for speakers 6 months before the event.',
    },
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="#" className="flex items-center space-x-2">
            <div className="text-xl md:text-2xl font-bold">
              <span className="text-red-600">TEDx</span>
              <span className="text-white">IITRAM</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-white hover:text-red-600 transition-colors">
              About
            </Link>
            <Link href="#speakers" className="text-white hover:text-red-600 transition-colors">
              Speakers
            </Link>
            <Link href="#schedule" className="text-white hover:text-red-600 transition-colors">
              Schedule
            </Link>
            <Link href="#talks" className="text-white hover:text-red-600 transition-colors">
              Past Talks
            </Link>
            <Link href="#sponsors" className="text-white hover:text-red-600 transition-colors">
              Sponsors
            </Link>
            <Link href="#contact" className="text-white hover:text-red-600 transition-colors">
              Contact
            </Link>
            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-sm">Register</Button>
          </nav>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute w-full bg-black/95 backdrop-blur-md transition-all duration-300 ${isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'}`}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link
              href="#about"
              className="text-white hover:text-red-600 py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#speakers"
              className="text-white hover:text-red-600 py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Speakers
            </Link>
            <Link
              href="#schedule"
              className="text-white hover:text-red-600 py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Schedule
            </Link>
            <Link
              href="#talks"
              className="text-white hover:text-red-600 py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Past Talks
            </Link>
            <Link
              href="#sponsors"
              className="text-white hover:text-red-600 py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Sponsors
            </Link>
            <Link
              href="#contact"
              className="text-white hover:text-red-600 py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-red-600 hover:bg-red-700 text-white w-full rounded-sm">Register</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Image and Effects */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=TEDx+Stage"
          alt="TEDxIITRAM Background"
          fill
          className="object-cover opacity-30 transition-opacity duration-500 hover:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>

        {/* Animated Geometric Patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-red-600/15 rounded-full animate-pulse-slow blur-md"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-600/15 rounded-full animate-pulse-slow"
            style={{ animationDelay: '1.5s' }}
          ></div>
          <div className="absolute top-1/3 right-1/3 w-60 h-60 border-2 border-red-600/30 rounded-full animate-spin-slow opacity-50"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 z-10 relative text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Title */}
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-fade-in">
            <span>IDEAS</span> <span className="text-red-600">WORTH</span> <span>SPREADING</span>
          </h1>

          {/* Subtitle and Description */}
          <p className="text-2xl md:text-3xl font-medium text-gray-200 mb-6 animate-slide-up">
            TEDxIITRAM 2024: Mosaic of Minds
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto animate-slide-up delay-100">
            Immerse yourself in a transformative day of inspiring talks, profound connections, and groundbreaking ideas
            that will reshape your worldview.
          </p>

          {/* Event Details */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-300 animate-fade-in delay-200">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-red-600" />
              <span className="text-lg">October 15, 2024</span>
            </div>
            <div className="hidden md:block w-2 h-2 rounded-full bg-red-600"></div>
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-red-600" />
              <span className="text-lg">9:00 AM - 3:30 PM</span>
            </div>
            <div className="hidden md:block w-2 h-2 rounded-full bg-red-600"></div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-red-600" />
              <span className="text-lg">IIT Rajasthan Ahmedabad Campus</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-6 animate-fade-in delay-300">
            <Button className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              Register Now
            </Button>
            <Dialog>
              <DialogTrigger>
                <Button
                  variant="outline"
                  className="border-2 border-red-600 text-white hover:bg-red-600/20 text-lg font-semibold px-8 py-4 rounded-lg shadow-md transition-all duration-300"
                >
                  Watch Teaser
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px]">
                <DialogHeader>
                  <DialogTitle>TEDxIITRAM 2024 Teaser</DialogTitle>
                  <DialogDescription>Get a glimpse of the inspiring event awaiting you!</DialogDescription>
                </DialogHeader>
                <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                  <video
                    ref={videoRef}
                    controls
                    className="w-full h-full object-cover"
                    poster="/placeholder.svg?height=450&width=800&text=TEDx+Teaser"
                  >
                    <source src="#" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-4xl mx-auto py-8 bg-gray-900/50 rounded-xl shadow-lg animate-fade-in delay-400">
            {Object.entries(countdown).map(([key, value]) => (
              <div key={key} className="flex flex-col items-center text-center">
                <div className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-md">{value}</div>
                <div className="text-sm uppercase text-gray-400 tracking-wider">{key}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-600"></div>
                <Image
                  src="/placeholder.svg?height=600&width=800&text=TEDx+Event"
                  alt="About TEDxIITRAM"
                  width={600}
                  height={400}
                  className="relative z-10 w-full"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-600"></div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-red-600">TEDxIITRAM</span>
              </h2>

              <p className="text-gray-300 mb-6">
                TEDxIITRAM is an independently organized TED event that brings together innovators, thinkers, and doers
                from diverse fields to share ideas that matter. Hosted at the Indian Institute of Technology, Rajasthan
                Ahmedabad Campus, our event creates a platform for meaningful conversations and connections.
              </p>

              <p className="text-gray-300 mb-6">
                This year\'s theme, "Mosaic of Minds," celebrates the beautiful complexity that emerges when diverse
                perspectives come together. Like pieces of a mosaic, each speaker brings their unique expertise and
                viewpoint, creating a vibrant picture of innovation and inspiration.
              </p>

              <p className="text-gray-300 mb-8">
                Join us for a day of thought-provoking talks, interactive sessions, and networking opportunities that
                will challenge your thinking and inspire action.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                <div className="p-4 border border-gray-800 bg-gray-900/50">
                  <div className="text-3xl font-bold text-red-600 mb-2">12+</div>
                  <div className="text-sm text-gray-400">Inspiring Speakers</div>
                </div>
                <div className="p-4 border border-gray-800 bg-gray-900/50">
                  <div className="text-3xl font-bold text-red-600 mb-2">300+</div>
                  <div className="text-sm text-gray-400">Attendees</div>
                </div>
                <div className="p-4 border border-gray-800 bg-gray-900/50">
                  <div className="text-3xl font-bold text-red-600 mb-2">8</div>
                  <div className="text-sm text-gray-400">Hours of Ideas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Theme Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            This Year\'s <span className="text-red-600">Theme</span>
          </h2>

          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            <span className="text-red-600">MOSAIC OF MINDS</span>
          </h3>

          <p className="text-gray-300 max-w-3xl mx-auto mb-12">
            A mosaic is beautiful not because each piece is identical, but because each piece is different. Similarly,
            our event celebrates the diversity of thought, experience, and perspective that makes human innovation
            possible. When different minds come together, they create something greater than the sum of their parts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-sm group hover:border-red-600 transition-colors">
              <div className="w-16 h-16 bg-red-600/20 flex items-center justify-center rounded-full mx-auto mb-6 group-hover:bg-red-600/30 transition-colors">
                <div className="text-2xl font-bold text-red-600">01</div>
              </div>
              <h4 className="text-xl font-bold mb-4">Diverse Perspectives</h4>
              <p className="text-gray-400">
                We bring together speakers from various disciplines, backgrounds, and experiences to create a rich
                tapestry of ideas.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-sm group hover:border-red-600 transition-colors">
              <div className="w-16 h-16 bg-red-600/20 flex items-center justify-center rounded-full mx-auto mb-6 group-hover:bg-red-600/30 transition-colors">
                <div className="text-2xl font-bold text-red-600">02</div>
              </div>
              <h4 className="text-xl font-bold mb-4">Interconnected Ideas</h4>
              <p className="text-gray-400">
                Like pieces of a mosaic, individual ideas connect to form patterns and insights that wouldn\'t be visible
                in isolation.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-sm group hover:border-red-600 transition-colors">
              <div className="w-16 h-16 bg-red-600/20 flex items-center justify-center rounded-full mx-auto mb-6 group-hover:bg-red-600/30 transition-colors">
                <div className="text-2xl font-bold text-red-600">03</div>
              </div>
              <h4 className="text-xl font-bold mb-4">Collective Impact</h4>
              <p className="text-gray-400">
                When diverse minds collaborate, they create solutions and innovations that have the power to transform
                our world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-red-600">Speakers</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Meet the thought leaders, innovators, and changemakers who will share their ideas and insights at
              TEDxIITRAM 2024.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-gray-900 transition-transform hover:-translate-y-2 duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full transition-transform group-hover:scale-110 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h4 className="text-xl font-bold">{speaker.name}</h4>
                    <p className="text-gray-400">{speaker.role}</p>
                    <div className="mt-2 pt-2 border-t border-red-600/30">
                      <p className="text-sm text-gray-300">{speaker.topic}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg">{speaker.name}</h4>
                  <p className="text-gray-400 text-sm">{speaker.role}</p>
                </div>
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[50px] border-l-[50px] border-t-red-600 border-l-transparent border-r-transparent rotate-90"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-transparent border border-red-600 text-white hover:bg-red-600/10 px-6 py-3 rounded-sm">
              View All Speakers
            </Button>
          </div>
        </div>
      </section>

      {/* Red Banner */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold max-w-4xl mx-auto leading-tight">
            JOIN US AS WE WEAVE TOGETHER DIVERSE IDEAS TO CREATE SOMETHING EXTRAORDINARY AT TEDxIITRAM 2024
          </h2>

          <div className="mt-8">
            <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-sm">Register Now</Button>
          </div>
        </div>
      </section>

      {/* Past Talks Section */}
      <section id="talks" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Past <span className="text-red-600">TEDx</span> Talks
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore some of the most impactful talks from previous TEDxIITRAM events that continue to inspire and
              challenge our thinking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastTalks.map((talk, index) => (
              <div key={index} className="group relative">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={talk.image}
                    alt={talk.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 bg-red-600 text-white px-3 py-1">{talk.duration}</div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold group-hover:text-red-600 transition-colors">{talk.title}</h3>
                  <p className="text-gray-400">{talk.speaker}</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <span>{talk.views} views</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-transparent border border-red-600 text-white hover:bg-red-600/10 px-6 py-3 rounded-sm">
              View All Talks <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Event <span className="text-red-600">Schedule</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Plan your day at TEDxIITRAM 2024 with our comprehensive schedule of talks, breaks, and activities.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-red-600 transform md:translate-x-px"></div>

            {/* Timeline Items */}
            {schedule.map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:mr-1/2' : 'md:pl-12 md:ml-1/2'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-5 h-5 rounded-full bg-red-600 transform -translate-x-1/2 z-10"></div>

                {/* Content */}
                <div
                  className={`bg-gray-900 border border-gray-800 p-6 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  } hover:border-red-600 transition-colors`}
                >
                  <div className="text-sm text-red-600 mb-2">{item.time}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  {item.speaker && <p className="text-gray-400 mb-2">{item.speaker}</p>}
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-sm">
              Download Full Schedule
            </Button>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-red-600">Sponsors</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              TEDxIITRAM is made possible by the generous support of our sponsors who believe in the power of ideas.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-xl font-bold mb-8 text-center">Platinum Sponsors</h3>
            <div className="flex justify-center">
              {sponsors
                .filter((s) => s.tier === 'Platinum')
                .map((sponsor, index) => (
                  <div key={index} className="px-8">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={250}
                      height={150}
                      className="h-24 object-contain filter grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-xl font-bold mb-8 text-center">Gold Sponsors</h3>
            <div className="flex justify-center flex-wrap gap-12">
              {sponsors
                .filter((s) => s.tier === 'Gold')
                .map((sponsor, index) => (
                  <div key={index}>
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={200}
                      height={120}
                      className="h-20 object-contain filter grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-8 text-center">Silver Sponsors</h3>
            <div className="flex justify-center flex-wrap gap-8">
              {sponsors
                .filter((s) => s.tier === 'Silver')
                .map((sponsor, index) => (
                  <div key={index}>
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={150}
                      height={90}
                      className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">Interested in sponsoring TEDxIITRAM?</p>
            <Button className="bg-transparent border border-red-600 text-white hover:bg-red-600/10 px-6 py-3 rounded-sm">
              Become a Sponsor
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked <span className="text-red-600">Questions</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Find answers to common questions about TEDxIITRAM 2024.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="general" className="data-[state=active]:bg-red-600">
                  General
                </TabsTrigger>
                <TabsTrigger value="registration" className="data-[state=active]:bg-red-600">
                  Registration
                </TabsTrigger>
                <TabsTrigger value="venue" className="data-[state=active]:bg-red-600">
                  Venue & Logistics
                </TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="space-y-4">
                {faqs.slice(0, 3).map((faq, index) => (
                  <div key={index} className="bg-gray-900 border border-gray-800 p-6 rounded-sm">
                    <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="registration" className="space-y-4">
                {faqs.slice(1, 4).map((faq, index) => (
                  <div key={index} className="bg-gray-900 border border-gray-800 p-6 rounded-sm">
                    <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="venue" className="space-y-4">
                {faqs.slice(2, 5).map((faq, index) => (
                  <div key={index} className="bg-gray-900 border border-gray-800 p-6 rounded-sm">
                    <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                ))}
              </TabsContent>
            </Tabs>

            <div className="text-center mt-12">
              <p className="text-gray-400 mb-4">Still have questions?</p>
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-sm">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Event <span className="text-red-600">Venue</span>
              </h2>

              <p className="text-gray-300 mb-6">
                TEDxIITRAM 2024 will be held at the state-of-the-art auditorium at IIT Rajasthan Ahmedabad Campus. The
                venue is equipped with modern facilities to ensure a comfortable and engaging experience for all
                attendees.
              </p>

              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-5 h-5 text-red-600 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">IIT Rajasthan Ahmedabad Campus</h4>
                  <p className="text-gray-400">
                    Palaj, Gandhinagar
                    <br />
                    Gujarat 382355, India
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-600"></div>
                  <span className="text-gray-400">Free Parking</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-600"></div>
                  <span className="text-gray-400">Wi-Fi Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-600"></div>
                  <span className="text-gray-400">Wheelchair Accessible</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-600"></div>
                  <span className="text-gray-400">Food Court</span>
                </div>
              </div>

              <Button className="bg-transparent border border-red-600 text-white hover:bg-red-600/10 px-6 py-3 rounded-sm">
                Get Directions <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative h-80 md:h-96 w-full overflow-hidden rounded-sm">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=IIT+Campus+Map"
                  alt="IIT Rajasthan Ahmedabad Campus"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get in <span className="text-red-600">Touch</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have questions about TEDxIITRAM? We\'re here to help. Reach out to us through any of the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-900 border border-gray-800 p-8 text-center rounded-sm hover:border-red-600 transition-colors">
              <Mail className="w-8 h-8 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Email Us</h3>
              <p className="text-gray-400 mb-4">For general inquiries and information</p>
              <a href="mailto:info@tedxiitram.org" className="text-red-600 hover:underline">
                info@tedxiitram.org
              </a>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-8 text-center rounded-sm hover:border-red-600 transition-colors">
              <Phone className="w-8 h-8 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Call Us</h3>
              <p className="text-gray-400 mb-4">Monday to Friday, 9am - 5pm</p>
              <a href="tel:+919876543210" className="text-red-600 hover:underline">
                +91 98765 43210
              </a>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-8 text-center rounded-sm hover:border-red-600 transition-colors">
              <div className="flex justify-center space-x-4 mb-4">
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
              <h3 className="text-lg font-bold mb-2">Follow Us</h3>
              <p className="text-gray-400 mb-4">Stay updated with the latest news</p>
              <a href="#" className="text-red-600 hover:underline">
                @tedxiitram
              </a>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-sm">
              Register for TEDxIITRAM 2024
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="text-2xl font-bold">
                <span className="text-red-600">TEDx</span>
                <span className="text-white">IITRAM</span>
              </div>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">© 2024 TEDxIITRAM. All rights reserved.</div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <a href="#" className="text-sm text-gray-400 hover:text-red-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-red-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-red-600 transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-red-600 transition-colors">
                Contact Us
              </a>
            </div>
          </div>

          <div className="text-xs text-gray-600 text-center mt-8">
            This independent TEDx event is operated under license from TED.
          </div>
        </div>
      </footer>
    </div>
  );
}


export default page;