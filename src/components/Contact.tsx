import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! 🎉");
    setFormData({ email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Contact Me 📬
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                Your Mail 📧
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-card border-border focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground flex items-center gap-2">
                <Send className="w-4 h-4 text-primary" />
                Your Message 
              </label>
              <Textarea
                id="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="bg-card border-border focus:border-primary resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-amber-400 hover:opacity-90 text-accent-foreground font-semibold"
            >
              <Send className="mr-2 h-5 w-5" />
              SEND
            </Button>
          </form>

          {/* Illustration */}
          <div className="flex justify-center items-center animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <Mail className="w-64 h-64 text-primary/30 relative" strokeWidth={0.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
