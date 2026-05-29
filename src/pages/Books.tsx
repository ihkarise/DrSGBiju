import React from 'react';
import { PlaceholderImage } from '../components/PlaceholderImage';
import { BookOpen, FileText } from 'lucide-react';
import { Button } from '../components/Button';

export default function Books() {
  return (
    <div className="w-full pt-[90px]">
      {/* 1 & 2. Featured Book Hero & Summary */}
      <section className="bg-bg-primary py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-secondary/10 transform -rotate-3 rounded-2xl"></div>
              <PlaceholderImage aspectRatio="aspect-[3/4] rounded-xl shadow-2xl relative z-10 mx-auto max-w-sm w-full" label="The Symphony of Homoeopathy (Cover)" />
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center space-x-2 bg-secondary/20 text-primary px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4" />
                <span className="text-xs font-sans font-bold uppercase tracking-widest">Featured Publication</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-0 font-playfair font-bold text-primary leading-tight mb-6">
                The Symphony of Homoeopathy
              </h1>
              <p className="text-xl font-playfair text-secondary italic mb-6">
                A masterpiece reflecting a practical understanding of Classical Homoeopathy.
              </p>
              <div className="prose prose-lg font-sans text-gray-600 mb-8 leading-relaxed">
                <p>
                  Considered one of Dr. Biju's most recognized contributions to homoeopathic literature, this best-selling book has inspired practitioners and students worldwide. It bridges the gap between theoretical materia medica and practical clinical reality.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary">Purchase Book</Button>
                <Button variant="outline">Read Extract</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Articles and Journals */}
      <section className="py-24 bg-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6 text-center mb-16">
           <h2 className="text-sm font-sans font-bold tracking-widest text-secondary uppercase mb-4">Writings</h2>
           <h3 className="text-4xl font-playfair font-bold text-primary">Articles & Journals</h3>
        </div>
        
        <div className="max-w-[1000px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { tag: "Editorial", title: "Future of Homoeopathic Education" },
            { tag: "Clinical Case", title: "Management of Rare Genetic Disorders" },
            { tag: "Magazine Feature", title: "Holistic Health in Modern Lifestyles" },
            { tag: "Professional Article", title: "Evidence-Oriented Prescribing" }
          ].map((article, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex items-start">
              <div className="bg-primary/5 p-4 rounded-xl mr-6 text-primary shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-secondary mb-2 block">{article.tag}</span>
                <h4 className="text-xl font-playfair font-bold text-primary mb-2 leading-snug">{article.title}</h4>
                <a href="#" className="inline-flex items-center text-sm font-sans font-medium text-primary hover:text-secondary mt-2">
                  Read Article &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
