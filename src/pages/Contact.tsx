import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">Get in Touch</h1>
        <p className="text-muted-foreground mb-10">Have a question or need a custom quote? We'd love to hear from you.</p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Name</label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email</label>
              <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Message</label>
              <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can we help?" rows={5} />
            </div>
            <Button type="submit" size="lg">Send Message</Button>
          </form>

          {/* Info + Map */}
          <div className="space-y-6">
            <div className="space-y-4">
              {[
                { icon: Phone, label: "+91 123 456 7890", href: "tel:+911234567890" },
                { icon: Mail, label: "info@driveeasytravels.com", href: "mailto:info@driveeasytravels.com" },
                { icon: MapPin, label: "123 MG Road, Bangalore, Karnataka 560001", href: "#" },
              ].map((item) => (
                <a key={item.label} href={item.href} className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  {item.label}
                </a>
              ))}
            </div>

            <div className="rounded-lg overflow-hidden border border-border h-64">
              <iframe
                title="DriveEasy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE4LjAiTiA3N8KwMzUnMzguNiJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
