import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  MapPin, 
  Users, 
  Globe, 
  Mail, 
  Phone, 
  Facebook, 
  CircleArrowRight, 
  Menu, 
  X,
  Stethoscope,
  BookOpen,
  Wheat,
  Eye,
  TreePine
} from 'lucide-react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

// API Key Logic as per google-maps-platform skill
const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Service', href: '#service' },
  { name: 'Impact', href: '#impact' },
  { name: 'Contact', href: '#contact' },
];

const SERVICE_PILLARS = [
  { icon: <Eye className="w-8 h-8" />, title: 'Vision', desc: 'Working to eradicate blindness and provide eye care for all.' },
  { icon: <Stethoscope className="w-8 h-8" />, title: 'Diabetes', desc: 'Raising awareness and helping those affected by diabetes.' },
  { icon: <Wheat className="w-8 h-8" />, title: 'Hunger', desc: 'Committing to food security and ending hunger in our communities.' },
  { icon: <TreePine className="w-8 h-8" />, title: 'Environment', desc: 'Protecting our planet for future generations through action.' },
  { icon: <BookOpen className="w-8 h-8" />, title: 'Youth', desc: 'Empowering future leaders through education and sports.' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-lion-blue">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-lion-gold p-2 rounded-lg">
              <span className="font-serif font-bold text-lion-blue text-xl leading-none">L</span>
            </div>
            <span className={`font-serif font-bold text-lg tracking-tight ${scrolled ? 'text-lion-blue' : 'text-white'}`}>
              APEXROAR <span className="text-lion-gold">KURUNEGALA</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium uppercase tracking-widest hover:text-lion-gold transition-colors ${scrolled ? 'text-lion-blue' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-lion-gold text-lion-blue px-6 py-2 rounded-full font-bold text-sm tracking-widest hover:bg-lion-gold-dark hover:text-white transition-all transform hover:scale-105"
            >
              JOIN US
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-lion-gold" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center gap-4 md:hidden border-t"
            >
              {NAV_LINKS.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-bold uppercase tracking-widest text-lion-blue hover:text-lion-gold"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 bg-lion-blue text-white px-8 py-3 rounded-full font-bold text-sm tracking-widest"
              >
                MEMBERSHIP
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden bg-lion-blue">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1546190255-451a91afc548?q=80&w=2670&auto=format&fit=crop" 
            alt="Majestic Lion" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-lion-blue via-lion-blue/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-lion-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
              Lions Club of Kurunegala Apexroar
            </span>
            <h1 className="font-['Times_New_Roman'] bg-[#003460] text-6xl md:text-8xl text-white font-bold leading-[0.9] mb-8 text-left italic-none">
              We Serve <br />
              With <span className="text-lion-gold italic">Purpose.</span>
            </h1>
            <p className="text-lg text-white/80 mb-10 leading-relaxed font-light">
              Dedicated to serving the community of Kurunegala and beyond. 
              Our mission is to empower volunteers to serve their communities and meet 
              humanitarian needs through local and global service.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#about" className="bg-lion-gold text-lion-blue px-10 py-4 rounded-full font-bold tracking-widest hover:bg-lion-gold-dark hover:text-white transition-all">
                OUR STORY
              </a>
              <a href="https://www.facebook.com/lionsclubofkurunegalaapexroar" target="_blank" rel="noreferrer" className="flex items-center gap-3 border border-white/30 text-white px-8 py-4 rounded-full font-bold tracking-widest hover:bg-white/10 transition-all">
                <Facebook size={20} /> FACEBOOK
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-12 right-6 md:right-12 z-10 hidden sm:block">
          <div className="flex gap-8">
            <div className="text-right">
              <span className="block text-lion-gold text-4xl font-serif font-bold">50+</span>
              <span className="text-white/60 text-xs uppercase tracking-widest">Active Members</span>
            </div>
            <div className="text-right border-l border-white/20 pl-8">
              <span className="block text-lion-gold text-4xl font-serif font-bold">200+</span>
              <span className="text-white/60 text-xs uppercase tracking-widest">Projects Completed</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-template-columns:1fr_1.2fr gap-16 items-center">
            <div className="relative">
              <div className="rounded-[40px] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2670&auto=format&fit=crop" 
                  alt="Community Service" 
                  className="w-full aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-lion-gold/10 rounded-full blur-3xl z-0"></div>
              <div className="absolute top-12 -left-12 bg-lion-blue p-8 rounded-2xl shadow-xl z-20 hidden md:block">
                <Users className="text-lion-gold w-10 h-10 mb-4" />
                <p className="text-white font-serif text-2xl">United in <br /> Service</p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-5xl font-bold mb-8 text-lion-blue">
                Serving Kurunegala <br />Since 2012
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                The Lions Club of Kurunegala Apexroar is a vibrant community of service-minded individuals. 
                We are part of Lions Clubs International, the world's largest service club organization.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-lion-gold/20 p-2 rounded-full"><Globe className="text-lion-gold-dark w-5 h-5" /></div>
                    <span className="font-bold text-lion-blue">Vision</span>
                  </div>
                  <p className="text-sm text-gray-500">To be the global leader in community and humanitarian service.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-lion-gold/20 p-2 rounded-full"><Heart className="text-lion-gold-dark w-5 h-5" /></div>
                    <span className="font-bold text-lion-blue">Mission</span>
                  </div>
                  <p className="text-sm text-gray-500">To empower volunteers to serve their communities and meet humanitarian needs.</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 border-l-4 border-lion-gold bg-white shadow-sm">
                <blockquote className="italic text-gray-700 italic">
                  "Generosity consists not the sum given, but the manner in which it is bestowed. 
                  We believe in impactful change through dedicated action."
                  <footer className="mt-2 text-sm font-bold text-lion-blue">— Club President</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Pillars */}
      <section id="service" className="py-24 bg-lion-blue text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-lion-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Our Focus</span>
            <h2 className="font-serif text-5xl font-bold mb-6 italic">Where There is a Need, There is a Lion.</h2>
            <p className="text-white/60">We focus our service programs on five global causes where we can make the greatest impact.</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {SERVICE_PILLARS.map((pillar, idx) => (
              <motion.div 
                key={pillar.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group"
              >
                <div className="text-lion-gold mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Gallery */}
      <section id="impact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-lion-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Recent Works</span>
              <h2 className="font-serif text-5xl font-bold text-lion-blue italic">Our Impact in Action</h2>
            </div>
            <a href="https://www.facebook.com/lionsclubofkurunegalaapexroar" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-lion-blue font-bold tracking-widest text-xs border-b-2 border-lion-gold pb-1 hover:text-lion-gold transition-colors">
              VIEW ALL ACTIVITIES <CircleArrowRight size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Blood Donation Camp', category: 'Health', img: 'https://images.unsplash.com/photo-1615461066870-40c1440ad746?q=80&w=2670&auto=format&fit=crop' },
              { title: 'School Supplies Donation', category: 'Youth', img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2670&auto=format&fit=crop' },
              { title: 'Elderly Care Visit', category: 'Community', img: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=2670&auto=format&fit=crop' },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[2rem] aspect-square"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lion-blue via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="text-lion-gold text-xs font-bold uppercase tracking-widest">{item.category}</span>
                  <h4 className="text-white font-serif text-2xl font-bold mt-2">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-lion-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Get Involved</span>
              <h2 className="font-serif text-5xl font-bold text-lion-blue mb-8">Let's Make a <br /> Difference Together.</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex gap-6 items-start">
                  <div className="bg-lion-blue text-white p-3 rounded-2xl"><MapPin /></div>
                  <div>
                    <h5 className="font-bold text-lion-blue mb-1">Our Location</h5>
                    <p className="text-gray-500">No 45, Kurunegala Road, Kurunegala, Sri Lanka</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-lion-blue text-white p-3 rounded-2xl"><Phone /></div>
                  <div>
                    <h5 className="font-bold text-lion-blue mb-1">Call Us</h5>
                    <p className="text-gray-500">+94 37 123 4567</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-lion-blue text-white p-3 rounded-2xl"><Mail /></div>
                  <div>
                    <h5 className="font-bold text-lion-blue mb-1">Email</h5>
                    <p className="text-gray-500">hello@lionskurunegala.org</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Full Name" className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-lion-gold transition-colors" />
                  <input type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-lion-gold transition-colors" />
                </div>
                <textarea rows={4} placeholder="Your Message" className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-lion-gold transition-colors"></textarea>
                <button className="bg-lion-blue text-white px-10 py-4 rounded-full font-bold tracking-widest hover:bg-lion-gold hover:text-lion-blue transition-all w-full md:w-auto overflow-hidden">
                  SEND MESSAGE
                </button>
              </form>
            </div>

            <div className="h-[600px] rounded-[3rem] overflow-hidden shadow-xl border-8 border-white group relative">
              <div className="absolute inset-x-0 bottom-0 p-4 bg-white/80 backdrop-blur-md z-10 mx-8 mb-8 rounded-2xl border border-white flex items-center justify-between">
                <span className="font-bold text-lion-blue text-sm">Visit our HQ in Kurunegala</span>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-xs bg-lion-gold px-3 py-1 rounded-full font-bold">DIRECTIONS</a>
              </div>
              
              {/* Map Integration */}
              {hasValidKey ? (
                <APIProvider apiKey={API_KEY} version="weekly">
                  <Map
                    defaultCenter={{lat: 7.4818, lng: 80.3609}} // Kurunegala Center
                    defaultZoom={13}
                    mapId="LIONS_CLUB_MAP"
                    internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                    style={{width: '100%', height: '100%'}}
                    disableDefaultUI={true}
                  >
                    <AdvancedMarker position={{lat: 7.4818, lng: 80.3609}}>
                      <Pin background="#003366" glyphColor="#FFD700" borderColor="#FFD700" />
                    </AdvancedMarker>
                  </Map>
                </APIProvider>
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center p-8 text-center">
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-2">Google Maps Placeholder</h3>
                    <p className="text-sm text-gray-500 max-w-[280px]">
                      Add <code>GOOGLE_MAPS_PLATFORM_KEY</code> to Secrets to see the live map of our location in Kurunegala.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-lion-blue pt-24 pb-12 text-white border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-lion-gold p-2 rounded-lg">
                  <span className="font-serif font-bold text-lion-blue text-xl leading-none">L</span>
                </div>
                <span className="font-serif font-bold text-2xl tracking-tight text-white uppercase italic">
                   Apexroar Kurunegala
                </span>
              </div>
              <p className="text-white/50 max-w-sm leading-relaxed mb-8">
                Official Charter Member 306-B2. Committed to excellence in service through unity and compassion.
              </p>
              <div className="flex gap-4">
                {[Facebook, Globe, Mail].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-lion-gold hover:text-lion-gold transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h6 className="font-bold text-lion-gold tracking-widest uppercase text-xs mb-8">Quick Links</h6>
              <ul className="space-y-4 text-sm text-white/60">
                {NAV_LINKS.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-lion-gold transition-colors">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 className="font-bold text-lion-gold tracking-widest uppercase text-xs mb-8">Lions International</h6>
              <p className="text-sm text-white/50 leading-relaxed italic">
                "Small acts, when multiplied by millions of people, can transform the world."
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/30 text-xs tracking-widest">
              © 2024 LIONS CLUB KURUNEGALA APEXROAR. ALL RIGHTS RESERVED.
            </p>
            <p className="text-white/30 text-xs tracking-widest">
              DESIGNED WITH PURPOSE.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
