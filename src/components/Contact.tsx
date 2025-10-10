import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Twitter, Github, Instagram, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/habeeb-muhammed-44715a309",
    color: "hover:text-[#0077B5]",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/ycent003",
    color: "hover:text-[#1DA1F2]",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/ycent",
    color: "hover:text-foreground",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/centz.jpg",
    color: "hover:text-[#E4405F]",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://thehabeeb.me/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground">
              I'm always open to conversations, collaborations, and new opportunities.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 flex-wrap">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-lg bg-card shadow-soft hover:shadow-hover transition-smooth ${social.color}`}
                aria-label={social.name}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="space-y-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-12"
              />
              
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-12"
              />
              
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="min-h-[150px] resize-none"
              />
            </div>
            
            <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
              <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
