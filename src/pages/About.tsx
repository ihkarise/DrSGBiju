import React from 'react';
import { PlaceholderImage } from '../components/PlaceholderImage';

export default function About() {
  return (
    <div className="w-full pt-[90px]">
      {/* 1. Banner */}
      <section className="bg-dark-section text-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold leading-tight mb-6">
              About Dr. S. G. Biju
            </h1>
            <p className="text-xl text-secondary font-sans tracking-wide">
              A Life Dedicated to Medicine, Education & Mankind.
            </p>
          </div>
          <div className="hidden md:block">
            <PlaceholderImage aspectRatio="aspect-[21/9] rounded-2xl" label="Banner Portrait" className="border-0 bg-white/10" />
          </div>
        </div>
      </section>

      {/* 2. Biography */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="prose prose-lg prose-headings:font-playfair prose-headings:text-primary max-w-none text-gray-700 font-sans leading-relaxed">
            <p className="text-2xl font-playfair font-medium text-primary mb-8 leading-snug">
              Dr. S. G. Biju is widely recognized as one of the leading voices in Classical Homoeopathy, combining clinical expertise with education, leadership, research, and humanitarian service.
            </p>
            <p className="mb-6">
              His professional journey reflects a commitment not only to patient care but also to the advancement of homoeopathic education, leadership development, and social responsibility. Through decades of practice, teaching, writing, and public engagement, he has inspired students, practitioners, professionals, and communities alike.
            </p>
            <p className="mb-12">
              Known for his practical teaching methods and result-oriented approach, Dr. Biju has mentored countless practitioners and delivered educational programs that have shaped careers across multiple countries. His work continues to bridge medicine, education, leadership, and social impact.
            </p>
          </div>
          
          <PlaceholderImage aspectRatio="aspect-[21/9] rounded-[24px]" label="Clinical Life / Practice" />
        </div>
      </section>

      {/* 3. Timeline of Career */}
      <section className="py-24 bg-bg-secondary">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="text-sm font-sans font-bold tracking-widest text-secondary uppercase mb-4 text-center">Journey</h2>
          <h3 className="text-4xl font-playfair font-bold text-primary mb-16 text-center">Professional Timeline</h3>
          
          <div className="space-y-12">
            {[
              { year: "1990s", title: "Early Clinical Practice", desc: "Started the journey emphasizing pure Classical Homoeopathy, establishing a strong foundation in patient care." },
              { year: "2000s", title: "Expansion & Education", desc: "Began widespread training programs for junior doctors, leading to the creation of rigorous structured seminars." },
              { year: "2010s", title: "Leadership & Authorship", desc: "Took up major roles in professional associations and authored 'The Symphony of Homoeopathy'." },
              { year: "Present", title: "Global Impact", desc: "Serving as Chief Medical Officer and mentoring thousands globally through SAHYA." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 relative">
                <div className="md:w-1/4 md:text-right">
                  <span className="text-3xl font-playfair font-bold text-secondary">{item.year}</span>
                </div>
                <div className="hidden md:block w-px bg-gray-200 relative">
                  <div className="absolute top-2 -left-[5px] w-3 h-3 rounded-full bg-secondary"></div>
                </div>
                <div className="md:w-3/4 pb-8">
                  <h4 className="text-2xl font-playfair font-bold text-primary mb-3">{item.title}</h4>
                  <p className="text-gray-600 font-sans leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 4. Philosophy / Approach */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
           <h2 className="text-sm font-sans font-bold tracking-widest text-secondary uppercase mb-4">Philosophy</h2>
           <h3 className="text-4xl font-playfair font-bold mb-12 max-w-3xl mx-auto leading-tight text-white">
             "Healing is an art supported by science, and shared through education."
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
                 <h4 className="text-xl font-playfair font-bold text-secondary mb-4">Clinical Rigor</h4>
                 <p className="text-gray-300 font-sans">Emphasis on evidence-oriented prescribing and deep study of materia medica.</p>
              </div>
              <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
                 <h4 className="text-xl font-playfair font-bold text-secondary mb-4">Knowledge Sharing</h4>
                 <p className="text-gray-300 font-sans">True legacy is built by elevating the next generation of practitioners.</p>
              </div>
              <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
                 <h4 className="text-xl font-playfair font-bold text-secondary mb-4">Human Compassion</h4>
                 <p className="text-gray-300 font-sans">Medicine must extend out of the clinic and into the community.</p>
              </div>
           </div>
        </div>
      </section>

      {/* 5. Professional Associations */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-sm font-sans font-bold tracking-widest text-secondary uppercase mb-4">Affiliations</h2>
          <h3 className="text-4xl font-playfair font-bold text-primary mb-12">Professional Associations</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-bg-secondary rounded-2xl text-left">
              <h4 className="text-2xl font-playfair font-bold text-primary mb-4">IHK</h4>
              <p className="text-sm text-gray-500 font-sans font-bold uppercase mb-4">Institution of Homoeopaths Kerala</p>
              <ul className="space-y-2 text-gray-700 font-sans">
                <li>• State President</li>
                <li>• General Secretary</li>
                <li>• State Treasurer</li>
                <li>• Chief Editor</li>
              </ul>
            </div>
            
            <div className="p-8 bg-bg-secondary rounded-2xl text-left">
              <h4 className="text-2xl font-playfair font-bold text-primary mb-4">JCI</h4>
              <p className="text-sm text-gray-500 font-sans font-bold uppercase mb-4">Junior Chamber International</p>
              <ul className="space-y-2 text-gray-700 font-sans">
                <li>• Chapter President</li>
                <li>• Zone Director</li>
                <li>• Zone Editor</li>
                <li>• International Trainer</li>
              </ul>
            </div>

            <div className="p-8 bg-bg-secondary rounded-2xl text-left">
              <h4 className="text-2xl font-playfair font-bold text-primary mb-4">Rotary International</h4>
              <p className="text-sm text-gray-500 font-sans font-bold uppercase mb-4">Rotary Club</p>
              <ul className="space-y-2 text-gray-700 font-sans">
                <li>• Secretary</li>
                <li>• District Co-Chairman</li>
                <li>• Leadership Trainer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
