import React from 'react';
import { PlaceholderImage } from '../components/PlaceholderImage';
import { Network, Users, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';

export default function Seminars() {
  return (
    <div className="w-full pt-[90px]">
      {/* 1. Training Overview */}
      <section className="bg-dark-section text-white py-24 text-center">
        <div className="max-w-[1000px] mx-auto px-6">
          <Users className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-playfair font-bold leading-tight mb-6">
            Seminars & Training
          </h1>
          <p className="text-xl text-gray-300 font-sans tracking-wide leading-relaxed max-w-3xl mx-auto">
            A sought-after speaker known for his ability to connect medical knowledge with practical wisdom and personal development.
          </p>
        </div>
      </section>

      {/* 2. Topics Delivered */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-sans font-bold tracking-widest text-secondary uppercase mb-4">Speaking</h2>
            <h3 className="text-4xl font-playfair font-bold text-primary">Core Topics</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Classical Homoeopathy",
              "Clinical Practice Development",
              "Leadership & Administration",
              "Motivation & Excellence",
              "Entrepreneurship in Medicine",
              "Personal Growth & Impact"
            ].map((topic, i) => (
              <div key={i} className="group bg-white border border-gray-100 shadow-sm hover:shadow-md p-8 rounded-2xl transition-all hover:-translate-y-1">
                <Network className="w-8 h-8 text-secondary mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-playfair font-bold text-primary">{topic}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Seminar Photos */}
      <section className="py-24 bg-bg-secondary">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
             <div>
               <h2 className="text-sm font-sans font-bold tracking-widest text-secondary uppercase mb-4">Gallery</h2>
               <h3 className="text-4xl font-playfair font-bold text-primary">Keynote Sessions</h3>
             </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <PlaceholderImage aspectRatio="aspect-[16/9] rounded-2xl" label="Seminar Stage Wide" />
             <div className="grid grid-cols-2 gap-4">
                <PlaceholderImage aspectRatio="aspect-square rounded-2xl" label="Audience View" />
                <PlaceholderImage aspectRatio="aspect-square rounded-2xl" label="Candid Speaking" />
             </div>
          </div>
        </div>
      </section>

      {/* 5. Invite CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-4xl font-playfair font-bold mb-6">Invite Dr. S. G. Biju</h2>
          <p className="text-lg text-gray-300 font-sans mb-10 leading-relaxed">
            Available for keynote lectures, academic sessions, workshops, professional conferences, and institutional events globally.
          </p>
          <Button to="/contact" className="bg-secondary text-primary hover:bg-white border-0 text-lg">
            Request to Speak
          </Button>
        </div>
      </section>
    </div>
  );
}
