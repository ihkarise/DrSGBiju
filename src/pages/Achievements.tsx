import React from 'react';
import { PlaceholderImage } from '../components/PlaceholderImage';
import { Award, Globe, Users, BookOpen } from 'lucide-react';

export default function Achievements() {
  return (
    <div className="w-full pt-[90px]">
      {/* 1. Overview Hero */}
      <section className="bg-dark-section text-white py-24 text-center">
        <div className="max-w-[800px] mx-auto px-6">
          <Award className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-playfair font-bold leading-tight mb-6">
            Achievements & Honors
          </h1>
          <p className="text-xl text-gray-300 font-sans tracking-wide leading-relaxed">
            A record of excellence across leadership, clinical practice, academics, and humanitarian service over three decades.
          </p>
        </div>
      </section>

      {/* 2. Awards */}
      <section className="py-24 bg-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-sans font-bold tracking-widest text-secondary uppercase mb-4">Recognition</h2>
            <h3 className="text-4xl font-playfair font-bold text-primary">Major Awards</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Rajiv Gandhi Shiromani Award",
              "Dr. Samuel Hahnemann National Award",
              "CASH International Award",
              "Best Private Practitioner Award – Govt of Kerala",
              "Best Jaycee Award",
              "Outstanding Chapter President Award",
              "Rotary Best Secretary Award"
            ].map((award, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="bg-secondary/10 p-3 rounded-full text-secondary shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-playfair font-bold text-primary">{award}</h4>
                  <p className="text-sm text-gray-500 mt-2 font-sans font-medium">Recognized for Excellence</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Academic Contributions & International Exposure */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-sans font-bold tracking-widest text-secondary uppercase mb-4">Education & Reach</h2>
              <h3 className="text-4xl font-playfair font-bold text-primary mb-8 leading-tight">
                Academic Contributions & Global Impact
              </h3>
              <p className="text-lg text-gray-600 font-sans mb-8 leading-relaxed">
                Education has always been central to Dr. Biju's mission. His programs, lectures, and professional engagements have reached audiences across multiple countries, contributing to the global exchange of homoeopathic knowledge.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="border-l-2 border-secondary pl-4">
                  <span className="block text-3xl font-playfair font-bold text-primary mb-1">1100+</span>
                  <span className="text-sm font-sans font-bold text-gray-500 uppercase">Training Programs</span>
                </div>
                <div className="border-l-2 border-secondary pl-4">
                  <span className="block text-3xl font-playfair font-bold text-primary mb-1">700+</span>
                  <span className="text-sm font-sans font-bold text-gray-500 uppercase">Lectures Delivered</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {["India", "United Arab Emirates", "Sri Lanka", "Malaysia"].map(country => (
                  <span key={country} className="px-4 py-2 bg-bg-secondary rounded-full text-sm font-sans font-bold text-primary flex items-center">
                    <Globe className="w-4 h-4 mr-2 text-secondary" /> {country}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <PlaceholderImage aspectRatio="aspect-[4/5] rounded-tl-[40px] rounded-br-[40px]" label="Seminar Image India" />
              <PlaceholderImage aspectRatio="aspect-[4/5] rounded-tr-[40px] rounded-bl-[40px]" label="International Seminar" className="mt-12" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Social Service and Humanitarian Work */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-sans font-bold tracking-widest text-secondary uppercase mb-4">Public Service</h2>
            <h3 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">Humanitarian Leadership</h3>
            <p className="text-lg text-gray-300 font-sans max-w-3xl mx-auto leading-relaxed">
              Service to humanity remains one of the defining aspects of his life and work, reflecting a belief that healthcare extends beyond clinics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <Users className="w-8 h-8 text-secondary mb-4" />
              <h4 className="text-xl font-playfair font-bold text-white mb-3">Community Welfare</h4>
              <p className="text-gray-400 font-sans leading-relaxed">
                Spearheaded comprehensive support programs for HIV-affected children and organized community health initiatives.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <BookOpen className="w-8 h-8 text-secondary mb-4" />
              <h4 className="text-xl font-playfair font-bold text-white mb-3">Health Education</h4>
              <p className="text-gray-400 font-sans leading-relaxed">
                Led extensive anti-alcohol and anti-drug awareness campaigns to educate and protect vulnerable populations.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <Award className="w-8 h-8 text-secondary mb-4" />
              <h4 className="text-xl font-playfair font-bold text-white mb-3">Medical Support</h4>
              <p className="text-gray-400 font-sans leading-relaxed">
                Established and supported dialysis initiatives to provide critical care for patients in need.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
