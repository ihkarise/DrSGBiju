import React from 'react';
import { PlaceholderImage } from '../components/PlaceholderImage';
import { MonitorPlay, Newspaper, Mic, Video } from 'lucide-react';

export default function Media() {
  return (
    <div className="w-full pt-[90px]">
      {/* 1. Media Hero */}
      <section className="bg-dark-section text-white py-24 text-center">
        <div className="max-w-[800px] mx-auto px-6">
          <MonitorPlay className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-playfair font-bold leading-tight mb-6">
            Press & Media
          </h1>
          <p className="text-xl text-gray-300 font-sans tracking-wide leading-relaxed">
            Public appearances, television interviews, panel discussions, and print media coverage to make healthcare knowledge accessible.
          </p>
        </div>
      </section>

      {/* 2. TV Interviews & Video */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
             <Video className="w-8 h-8 text-secondary" />
             <h3 className="text-3xl font-playfair font-bold text-primary">Television & Video</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group">
              <PlaceholderImage aspectRatio="aspect-video rounded-2xl mb-6 relative overflow-hidden" label="TV Interview Main">
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                     <MonitorPlay className="w-8 h-8 text-white ml-1" />
                   </div>
                 </div>
              </PlaceholderImage>
              <h4 className="text-xl font-playfair font-bold text-primary mb-2">Health Awareness Panel Discussion</h4>
              <p className="text-gray-500 font-sans text-sm">National Television • Leading Health Network</p>
            </div>
            <div className="group">
              <PlaceholderImage aspectRatio="aspect-video rounded-2xl mb-6 relative overflow-hidden" label="News Feature">
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                     <MonitorPlay className="w-8 h-8 text-white ml-1" />
                   </div>
                 </div>
              </PlaceholderImage>
              <h4 className="text-xl font-playfair font-bold text-primary mb-2">Expert Opinion on Holistic Healing</h4>
              <p className="text-gray-500 font-sans text-sm">Morning News Live Coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Newspaper & Print Media */}
      <section className="py-24 bg-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
             <Newspaper className="w-8 h-8 text-secondary" />
             <h3 className="text-3xl font-playfair font-bold text-primary">Print Media & Articles</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Front page feature on Humanitarian Service",
              "Interview in Leading Medical Magazine",
              "Medical Opinion Column on Autoimmune Care"
            ].map((title, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <PlaceholderImage aspectRatio="aspect-[4/3] rounded-xl mb-6 bg-bg-secondary border-0" label="Clipping Placeholder" />
                <h4 className="text-lg font-playfair font-bold text-primary mb-3 leading-snug">{title}</h4>
                <a href="#" className="text-secondary font-sans font-medium text-sm hover:underline">Read Clipping/Article</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Radio / Audio */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
             <Mic className="w-8 h-8 text-secondary" />
             <h3 className="text-3xl font-playfair font-bold text-primary">Radio & Audio</h3>
          </div>
          <div className="bg-bg-secondary rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
               <PlaceholderImage aspectRatio="aspect-square rounded-2xl" label="Radio Studio Session" />
            </div>
            <div className="w-full md:w-2/3">
               <h4 className="text-2xl font-playfair font-bold text-primary mb-4">Community Radio Talk on Healthy Living</h4>
               <p className="text-gray-600 font-sans leading-relaxed mb-6">
                 An extensive discussion focusing on lifestyle disorders and preventive homoeopathic action, reaching thousands of listeners across regional and national broadcasts.
               </p>
               <span className="inline-block bg-primary text-white text-sm px-4 py-2 rounded-full opacity-50 cursor-not-allowed">Audio coming soon</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
