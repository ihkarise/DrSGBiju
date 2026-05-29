import React from 'react';
import { Mail, Phone, MapPin, Building, Globe } from 'lucide-react';
import { Button } from '../components/Button';
import { PlaceholderImage } from '../components/PlaceholderImage';

export default function Contact() {
  return (
    <div className="w-full pt-[90px]">
      {/* 1. Contact Hero */}
      <section className="bg-dark-section text-white py-24 text-center">
        <div className="max-w-[800px] mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold leading-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 font-sans tracking-wide leading-relaxed">
            For medical consultations, speaking engagements, media interactions, and professional collaborations.
          </p>
        </div>
      </section>

      <section className="py-24 bg-bg-primary">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* 2. Contact Details */}
          <div className="lg:col-span-4">
            <h2 className="text-sm font-sans font-bold tracking-widest text-secondary uppercase mb-4">Direct Contact</h2>
            <h3 className="text-3xl font-playfair font-bold text-primary mb-10">Offices & Enquiries</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <Building className="w-6 h-6 text-secondary mt-1 mr-4 shrink-0" />
                <div>
                  <h4 className="font-sans font-bold text-primary mb-1">Primary Clinic</h4>
                  <p className="text-gray-600 font-sans text-sm leading-relaxed">
                    The Homeopathic Multi Specialty Hospital Pvt. Ltd.,<br />
                    Changanacherry, Kerala, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-secondary mt-1 mr-4 shrink-0" />
                <div>
                  <h4 className="font-sans font-bold text-primary mb-1">Phone</h4>
                  <p className="text-gray-600 font-sans text-sm mb-1">(+91) 481-2412233</p>
                  <p className="text-gray-600 font-sans text-sm">(+91) 9777128799</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-secondary mt-1 mr-4 shrink-0" />
                <div>
                  <h4 className="font-sans font-bold text-primary mb-1">Email</h4>
                  <a href="mailto:drbijugnair@gmail.com" className="text-secondary hover:underline font-sans text-sm">
                    drbijugnair@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Globe className="w-6 h-6 text-secondary mt-1 mr-4 shrink-0" />
                <div>
                  <h4 className="font-sans font-bold text-primary mb-1">Website</h4>
                  <a href="http://www.drbijuonline.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline font-sans text-sm">
                    www.drbijuonline.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* 3 & 4. Forms */}
          <div className="lg:col-span-8">
            <div className="bg-white p-8 md:p-12 rounded-[32px] shadow-sm border border-gray-100">
               <h3 className="text-2xl font-playfair font-bold text-primary mb-8">Send a Message</h3>
               
               <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-sans font-bold text-primary mb-2">Full Name</label>
                      <input type="text" id="name" className="w-full bg-bg-secondary border-0 rounded-xl px-4 py-4 font-sans text-primary focus:ring-2 focus:ring-secondary outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-sans font-bold text-primary mb-2">Email Address</label>
                      <input type="email" id="email" className="w-full bg-bg-secondary border-0 rounded-xl px-4 py-4 font-sans text-primary focus:ring-2 focus:ring-secondary outline-none transition-all" placeholder="john@example.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="purpose" className="block text-sm font-sans font-bold text-primary mb-2">Purpose of Contact</label>
                    <div className="relative">
                      <select id="purpose" className="w-full bg-bg-secondary border-0 rounded-xl px-4 py-4 font-sans text-primary focus:ring-2 focus:ring-secondary outline-none transition-all appearance-none">
                        <option>Medical Consultation</option>
                        <option>Speaking & Seminar Invitation</option>
                        <option>Media Inquiry</option>
                        <option>Other / General</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-sans font-bold text-primary mb-2">Message Details</label>
                    <textarea id="message" rows={5} className="w-full bg-bg-secondary border-0 rounded-xl px-4 py-4 font-sans text-primary focus:ring-2 focus:ring-secondary outline-none transition-all resize-none" placeholder="Please describe your inquiry..."></textarea>
                  </div>
                  
                  <Button type="button" className="w-full sm:w-auto bg-primary text-white">
                    Submit Message
                  </Button>
               </form>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Map Block */}
      <section className="bg-bg-secondary h-[400px] w-full relative">
        <PlaceholderImage aspectRatio="h-full w-full object-cover" label="Interactive Map / Location View" className="border-0" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <div className="bg-primary text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3">
              <MapPin className="text-secondary w-6 h-6" />
              <span className="font-playfair font-bold">Changanacherry, Kerala</span>
           </div>
        </div>
      </section>
    </div>
  );
}
