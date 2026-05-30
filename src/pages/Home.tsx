import React from 'react';
import { Button } from '../components/Button';
import { PlaceholderImage } from '../components/PlaceholderImage';
import { ArrowRight, BookOpen, GraduationCap, Heart, Image as ImageIcon, Award, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative min-h-[100vh] flex items-center bg-dark-section text-white pt-[90px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-primary z-10"></div>
        <img src={`${import.meta.env.BASE_URL}images/home/hero-bg.jpg`} alt="Hero Background" className="absolute inset-0 h-full w-full object-cover opacity-50 z-0" />
        
        <div className="max-w-[1200px] mx-auto px-6 w-full relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-90px)] py-20">
          <div className="order-1 lg:order-1 flex justify-center lg:justify-start">
             <div className="w-full max-w-sm mb-8 lg:mb-0">
               <PlaceholderImage srcBase="/images/home/hero-portrait" aspectRatio="aspect-[3/4]" label="Main Portrait" className="rounded-2xl border-4 border-white/10" />
             </div>
          </div>
          <div className="order-2 lg:order-2 text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-[80px] font-playfair font-bold leading-tight mb-4 text-white"
            >
              Dr. S. G. Biju
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-secondary font-sans font-semibold tracking-widest uppercase text-sm md:text-base mb-6"
            >
              BHMS, MD (Hom)
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl font-playfair mb-6 text-gray-300"
            >
              Physician. Educator. Author. Humanitarian.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-300 mb-10 leading-relaxed font-sans max-w-xl mx-auto lg:mx-0"
            >
              Internationally respected Homoeopathic physician, educator, author, and humanitarian whose professional journey spans clinical excellence, academic leadership, and human transformation.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button to="/contact" variant="primary" className="w-full sm:w-auto bg-secondary text-primary hover:bg-white text-lg">
                Book Consultation
              </Button>
              <Button to="/contact" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 text-lg animate-pop">
                Invite for Seminar
              </Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8"
            >
              <Link to="/achievements" className="inline-flex items-center text-secondary hover:text-white transition-colors font-medium">
                View Achievements <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Trust Stats Strip */}
      <section className="bg-secondary text-primary py-12 relative z-30">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 text-center divide-x-0 lg:divide-x divide-primary/20">
            {[
              { num: "30+", label: "Years Experience" },
              { num: "1100+", label: "Training Programs" },
              { num: "700+", label: "Lectures Delivered" },
              { num: "Global", label: "International Speaker" },
              { num: "Author", label: "Best-Selling Book" },
              { num: "Leader", label: "Humanitarian" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-4">
                <span className="text-3xl font-playfair font-bold mb-2">{stat.num}</span>
                <span className="text-sm font-sans font-medium uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Preview */}
      <section className="py-24 lg:py-32 bg-bg-primary">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-bg-secondary rounded-full -z-10"></div>
              <PlaceholderImage srcBase="/images/home/about-portrait" aspectRatio="aspect-[4/5] rounded-3xl" label="Secondary Portrait" />
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-sm font-sans font-bold tracking-widest text-secondary uppercase mb-4">About</h2>
              <h3 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-8 leading-tight">
                A Legacy of Healing, Teaching, and Service
              </h3>
              <div className="prose prose-lg text-gray-600 font-sans mb-10 leading-relaxed">
                <p>
                  Dr. S. G. Biju is widely recognized as one of the leading voices in Classical Homoeopathy, combining clinical expertise with education, leadership, research, and humanitarian service.
                </p>
                <p>
                  Known for his practical teaching methods and result-oriented approach, Dr. Biju has mentored countless practitioners and delivered educational programs that have shaped careers across multiple countries.
                </p>
              </div>
              <Button to="/about" variant="primary" className="bg-primary text-white">
                Read Full Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Current Roles */}
      <section className="py-24 bg-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-sans font-bold tracking-widest text-secondary uppercase mb-4">Leadership</h2>
            <h3 className="text-4xl font-playfair font-bold text-primary">Current Roles & Responsibilities</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Chief Medical Officer",
                org: "The Homeopathic Multi Specialty Hospital Pvt. Ltd.",
                icon: <Building className="w-8 h-8 text-secondary mb-6" />
              },
              {
                title: "Managing Director",
                org: "Integrated Company for Homoeopathy Pvt. Ltd.",
                icon: <Building className="w-8 h-8 text-secondary mb-6" />
              },
              {
                title: "Director",
                org: "SAHYA – School of Artistic Homoeopathy",
                icon: <GraduationCap className="w-8 h-8 text-secondary mb-6" />
              },
              {
                title: "Chief Editor",
                org: "Homoeopathic Publications and Educational Initiatives",
                icon: <BookOpen className="w-8 h-8 text-secondary mb-6" />
              },
              {
                title: "Member, Institutional Ethics Committee",
                org: "National Homoeopathic Research Institute for Mental Health",
                icon: <Award className="w-8 h-8 text-secondary mb-6" />
              }
            ].map((role, i) => (
              <div key={i} className="bg-white p-10 rounded-[24px] shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                {role.icon}
                <h4 className="text-xl font-playfair font-bold text-primary mb-3">{role.title}</h4>
                <p className="text-gray-600 font-sans">{role.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Areas of Expertise */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-sm font-sans font-bold tracking-widest text-secondary uppercase mb-4">Clinical Practice</h2>
              <h3 className="text-4xl md:text-5xl font-playfair font-bold text-primary leading-tight">Areas of Expertise</h3>
            </div>
            <Button to="/about" variant="outline" className="hidden lg:inline-flex mt-6 lg:mt-0">View All Focus Areas</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Hepatitis Management",
                desc: "Pioneering work in evidence-oriented homoeopathic management."
              },
              {
                title: "Autoimmune Disorders",
                desc: "Managing chronic conditions through individualized care."
              },
              {
                title: "Infertility & Women's Health",
                desc: "Comprehensive support for holistic treatment solutions."
              },
              {
                title: "Genetic Disorders",
                desc: "Special interest in managing complex hereditary conditions."
              }
            ].map((area, i) => (
              <div key={i} className="bg-bg-secondary p-8 rounded-[24px] group hover:bg-primary transition-colors duration-300">
                <h4 className="text-xl font-playfair font-bold text-primary mb-3 group-hover:text-secondary">{area.title}</h4>
                <p className="text-gray-600 font-sans text-sm leading-relaxed group-hover:text-gray-300">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Featured Achievements */}
      <section className="py-24 bg-dark-section text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-sans font-bold tracking-widest text-secondary uppercase mb-4">Excellence</h2>
            <h3 className="text-4xl font-playfair font-bold mb-6">Featured Achievements</h3>
            <p className="text-gray-400">Decades of awards, academic contributions, and leadership roles.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Awards & Honors", link: "/achievements", label: "Award Image", srcBase: "/images/home/feat-awards" },
              { title: "Publications", link: "/achievements", label: "Publication Cover", srcBase: "/images/home/feat-publication" },
              { title: "Organizational Leadership", link: "/achievements", label: "Leadership Photo", srcBase: "/images/home/feat-leadership" }
            ].map((item, i) => (
              <Link key={i} to={item.link} className="group block">
                <PlaceholderImage srcBase={item.srcBase} aspectRatio="aspect-[4/3] rounded-t-[24px]" label={item.label} className="border-white/10 bg-white/5" />
                <div className="bg-white/5 border border-t-0 border-white/10 p-8 rounded-b-[24px] group-hover:bg-white/10 transition-colors">
                  <h4 className="text-2xl font-playfair font-bold text-white mb-2">{item.title}</h4>
                  <span className="text-secondary font-sans text-sm font-medium flex items-center">Explore <ArrowRight className="ml-2 w-4 h-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Featured Book */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-sans font-bold tracking-widest text-secondary uppercase mb-4">Author</h2>
              <h3 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6 leading-tight">
                The Symphony of Homoeopathy
              </h3>
              <p className="text-lg text-gray-600 font-sans mb-8 leading-relaxed">
                One of Dr. Biju's most recognized contributions to homoeopathic literature. A best-selling book that reflects his practical understanding of Classical Homoeopathy, inspiring practitioners and students worldwide.
              </p>
              <Button to="/books" variant="primary" className="bg-primary text-white">
                View Publication
              </Button>
            </div>
            <div className="relative">
              <PlaceholderImage srcBase="/images/home/book-symphony" aspectRatio="aspect-[3/4] rounded-xl shadow-2xl max-w-sm mx-auto" label="Book Cover" />
            </div>
          </div>
        </div>
      </section>
      
      {/* 8. Seminar/Speaker */}
      <section className="py-24 bg-bg-secondary">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="bg-primary rounded-[32px] overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
              <h2 className="text-sm font-sans font-bold tracking-widest text-secondary uppercase mb-4">Speaker & Trainer</h2>
              <h3 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6 leading-tight">
                Inspiring the Next Generation
              </h3>
              <p className="text-gray-300 font-sans mb-10 text-lg leading-relaxed">
                A sought-after speaker known for his ability to connect medical knowledge with practical wisdom and personal development. Delivered across India, UAE, Sri Lanka, and Malaysia.
              </p>
              <div>
                <Button to="/contact" className="bg-secondary text-primary hover:bg-white border-0">
                  Invite Dr. Biju
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 min-h-[400px] flex">
              <PlaceholderImage srcBase="/images/home/seminar-speaker" aspectRatio="w-full h-full min-h-[400px]" label="Seminar Image" className="border-0 bg-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* 9. Humanitarian Impact */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <Heart className="w-12 h-12 text-secondary mx-auto mb-8" />
          <h2 className="text-sm font-sans font-bold tracking-widest text-secondary uppercase mb-4">Humanitarian Service</h2>
          <h3 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-12 max-w-3xl mx-auto leading-tight">
            Healthcare extends beyond clinics and hospitals into communities and everyday lives.
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
            {["HIV Children Support", "Dialysis Initiatives", "Anti-drug Campaigns", "Health Education"].map((item, i) => (
              <div key={i} className="py-4 border-b border-gray-200">
                <p className="font-playfair font-bold text-xl text-primary">{item}</p>
              </div>
            ))}
          </div>

          <div className="relative max-w-5xl mx-auto rounded-[24px] overflow-hidden">
            <PlaceholderImage srcBase="/images/home/humanitarian-impact" aspectRatio="aspect-[21/9]" label="Humanitarian Impact" className="bg-bg-secondary w-full border-0" />
          </div>
        </div>
      </section>

      {/* 10. Gallery Preview */}
      <section className="py-24 bg-dark-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-sm font-sans font-bold tracking-widest text-secondary uppercase mb-4">Visual Archive</h2>
              <h3 className="text-4xl font-playfair font-bold text-white">Moments & Milestones</h3>
            </div>
            <Button to="/gallery" variant="outline" className="text-white border-white hover:bg-white/10">
              View Full Gallery
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <PlaceholderImage key={i} srcBase={`/images/home/gallery-${i}`} aspectRatio="aspect-square rounded-2xl" label={`Gallery Asset ${i}`} className="bg-white/5 border-white/10 text-white/50" />
            ))}
          </div>
        </div>
      </section>

      {/* 11. Contact CTA */}
      <section className="py-24 bg-secondary">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-8">
            Ready to Connect?
          </h2>
          <p className="text-lg text-primary/80 font-sans mb-10 leading-relaxed max-w-2xl mx-auto">
            Dr. Biju is available for medical consultations, keynote lectures, workshops, and professional collaborations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 text-lg">
              Contact & Bookings
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
