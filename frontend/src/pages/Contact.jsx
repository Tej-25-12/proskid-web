import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
  };

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get In Touch With Our Experts</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <ScrollReveal direction="left" className="contact-info-block">
            <SectionHeading 
              subtitle="Contact Info" 
              title="Reach Out To Us Directly" 
            />
            <div className="contact-methods">
              <div className="method">
                <div className="method-icon"><MapPin size={24} /></div>
                <div className="method-text">
                  <h4>Our Office</h4>
                  <p>123 Industrial Park, Engineering Way, Houston, TX 77001</p>
                </div>
              </div>
              <div className="method">
                <div className="method-icon"><Phone size={24} /></div>
                <div className="method-text">
                  <h4>Phone Numbers</h4>
                  <p>+1 (555) 123-4567 (Sales)</p>
                  <p>+1 (555) 987-6543 (HR)</p>
                </div>
              </div>
              <div className="method">
                <div className="method-icon"><Mail size={24} /></div>
                <div className="method-text">
                  <h4>Email Addresses</h4>
                  <p>info@proskidengineering.com</p>
                  <p>careers@proskidengineering.com</p>
                </div>
              </div>
            </div>
            
            <div className="whatsapp-cta">
              <div className="wa-icon"><MessageCircle size={30} /></div>
              <div className="wa-text">
                <h4>Quick Support</h4>
                <p>Chat with us on WhatsApp for fast response.</p>
                <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="wa-btn">Chat Now</a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="contact-form-block">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Inquiry Type</label>
                <select 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                >
                  <option>General Inquiry</option>
                  <option>Business Partnership</option>
                  <option>Manpower Requirement</option>
                  <option>Project Consultation</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Your Message</label>
                <textarea 
                  rows="5" 
                  required 
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      <section className="map-section">
        <iframe 
          title="office-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.60385923407!2d-95.401290!3d29.717394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf375c800331%3A0x88439162985f5247!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1625000000000!5m2!1sen!2sus" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
