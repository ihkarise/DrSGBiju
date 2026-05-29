import React, { useState } from 'react';
import { PlaceholderImage } from '../components/PlaceholderImage';
import { Image as ImageIcon } from 'lucide-react';
import { cn } from '../lib/utils';

const categories = [
  "All",
  "Portraits",
  "Clinical Life",
  "Teaching & Seminars",
  "Awards & Events",
  "Media",
  "Social Service",
  "Publications",
  "International"
];

const images = [
  { id: 1, category: "Portraits", aspect: "aspect-[3/4]", label: "Professional Portrait" },
  { id: 2, category: "Clinical Life", aspect: "aspect-[4/3]", label: "Consultation" },
  { id: 3, category: "Teaching & Seminars", aspect: "aspect-video", label: "Seminar Audience" },
  { id: 4, category: "Awards & Events", aspect: "aspect-square", label: "Receiving Award" },
  { id: 5, category: "Media", aspect: "aspect-[4/3]", label: "TV Interview" },
  { id: 6, category: "Social Service", aspect: "aspect-video", label: "Community Camp" },
  { id: 7, category: "Publications", aspect: "aspect-[3/4]", label: "Book Launch" },
  { id: 8, category: "International", aspect: "aspect-[16/9]", label: "Global Conference" },
  { id: 9, category: "Portraits", aspect: "aspect-square", label: "Candid Portrait" },
  { id: 10, category: "Teaching & Seminars", aspect: "aspect-[4/5]", label: "Stage Speaking" },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredImages = activeTab === "All" 
    ? images 
    : images.filter(img => img.category === activeTab);

  return (
    <div className="w-full pt-[90px]">
      <section className="bg-dark-section text-white py-24 text-center">
        <div className="max-w-[800px] mx-auto px-6">
          <ImageIcon className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-playfair font-bold leading-tight mb-6">
            Visual Archive
          </h1>
          <p className="text-xl text-gray-300 font-sans tracking-wide leading-relaxed">
            A curated visual journey through medicine, education, leadership, service, and inspiration.
          </p>
        </div>
      </section>

      <section className="py-24 bg-bg-primary min-h-screen">
        <div className="max-w-[1400px] mx-auto px-6">
          
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={cn(
                  "px-6 py-2 rounded-full font-sans text-sm font-medium transition-colors border",
                  activeTab === cat 
                    ? "bg-primary text-white border-primary" 
                    : "bg-transparent text-gray-600 border-gray-200 hover:border-gray-400 hover:text-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            {filteredImages.map((img) => (
              <div key={img.id} className="break-inside-avoid relative group overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100">
                <PlaceholderImage aspectRatio={img.aspect} label={img.label} className="border-0 bg-bg-secondary w-full" />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                   <span className="text-secondary text-xs font-bold uppercase tracking-widest mb-1">{img.category}</span>
                   <span className="text-white font-playfair text-lg font-bold">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
               <p className="text-gray-500 font-sans">No images currently available in this category.</p>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
