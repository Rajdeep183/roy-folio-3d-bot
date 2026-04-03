import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const emailjs = await import('emailjs-com');

      emailjs
        .send(
          'service_0uyb7pq',
          'template_xwlo9cq',
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          'X9EgN0ucd0-nskrTZ'
        )
        .then(
          () => {
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
          },
          () => {
            alert('Failed to send message. Please try again later.');
          }
        );
    } catch {
      alert('Failed to send message. Please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-5">Get in touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Open to discussing full-time roles, collaborations, and technically challenging projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-2xl p-8 border border-border bg-card">
              <h3 className="text-xl font-medium text-foreground mb-6">Contact information</h3>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-foreground font-medium">Email</p>
                    <p className="text-muted-foreground">royrajdeep20@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-foreground font-medium">Location</p>
                    <p className="text-muted-foreground">India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-foreground font-medium">Phone</p>
                    <p className="text-muted-foreground">Available upon request</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-base font-medium text-foreground mb-4">Profiles</h4>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/rajdeep-roy-4086a2274/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-border rounded-full text-sm text-foreground hover:bg-accent"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/Rajdeep183"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-border rounded-full text-sm text-foreground hover:bg-accent"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl p-8 border border-border bg-card">
              <h3 className="text-xl font-medium text-foreground mb-6">Send a message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-foreground font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-input rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-foreground font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-input rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-foreground font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-input rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Tell me about your project or just say hello."
                  />
                </div>

                <Button type="submit" className="w-full rounded-xl py-3 flex items-center justify-center gap-2">
                  <Send size={18} />
                  Send message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
