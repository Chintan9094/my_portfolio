import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Send,
  Github,
  Linkedin,
  Twitter,
  Mail,
  CheckCircle,
  XCircle,
} from "lucide-react";

const socialLinks = [
  {
    Icon: Github,
    href: "https://github.com/Chintan9094",
    label: "GitHub",
    color: "hover:text-white",
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/chintan-rabari-a54a712b9/",
    label: "LinkedIn",
    color: "hover:text-blue-400",
  },
  {
    Icon: Twitter,
    href: "https://x.com/@Chintandesai94",
    label: "Twitter",
    color: "hover:text-cyan-400",
  },
  {
    Icon: Mail,
    href: "mailto:chintandesai249@gmail.com",
    label: "Email",
    color: "hover:text-purple-400",
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState(null);
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Your name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email address.";
    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    // If all good
    setStatus("success");
    setTimeout(() => setStatus(null), 4000);
    setFormData({ name: "", email: "", message: "" });

    try {
      const response = await fetch("https://formspree.io/f/mzzjyrzd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.form
            noValidate
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name Field */}
            <div className="relative">
              <motion.input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-lg focus:border-cyan-400 focus:outline-none transition-all text-white placeholder-transparent peer"
                placeholder="Your Name"
              />

              <motion.label
                animate={{
                  y: focusedField === "name" || formData.name ? -32 : 0,
                  scale: focusedField === "name" || formData.name ? 0.85 : 1,
                  color: focusedField === "name" ? "#00FFFF" : "#ffffff60",
                }}
                className="absolute left-6 top-4 pointer-events-none transition-all"
              >
                Your Name
              </motion.label>
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="relative">
              <motion.input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-lg focus:border-cyan-400 focus:outline-none transition-all text-white placeholder-transparent peer"
                placeholder="Your Email"
              />
              <motion.label
                animate={{
                  y: focusedField === "email" || formData.email ? -32 : 0,
                  scale: focusedField === "email" || formData.email ? 0.85 : 1,
                  color: focusedField === "email" ? "#00FFFF" : "#ffffff60",
                }}
                className="absolute left-6 top-4 pointer-events-none transition-all"
              >
                Your Email
              </motion.label>
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Message Field */}
            <div className="relative">
              <motion.textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-lg focus:border-cyan-400 focus:outline-none transition-all text-white placeholder-transparent peer resize-none"
                placeholder="Your Message"
              />
              <motion.label
                animate={{
                  y: focusedField === "message" || formData.message ? -32 : 0,
                  scale:
                    focusedField === "message" || formData.message ? 0.85 : 1,
                  color: focusedField === "message" ? "#00FFFF" : "#ffffff60",
                }}
                className="absolute left-6 top-4 pointer-events-none transition-all"
              >
                Your Message
              </motion.label>
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-shadow flex items-center justify-center gap-2 group"
            >
              <span>Send Message</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Send className="w-5 h-5" />
              </motion.div>
            </motion.button>

            {status === "success" && (
              <div className="flex items-center justify-center gap-2 text-green-400 mt-4">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm md:text-base">
                  Message sent successfully!
                </span>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center justify-center gap-2 text-red-400 mt-4">
                <XCircle className="w-5 h-5" />
                <span className="text-sm md:text-base">
                  Something went wrong. Try again!
                </span>
              </div>
            )}
          </motion.form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-cyan-400/20">
              <h3 className="text-white mb-6">Connect With Me</h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                Feel free to reach out through any of these platforms. I'm
                always open to discussing new projects, creative ideas, or
                opportunities.
              </p>

              <div className="space-y-4">
                {socialLinks.map(({ Icon, href, label, color }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className={`flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-cyan-400/20 hover:border-cyan-400/50 transition-all group ${color}`}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-shadow">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white/80 group-hover:text-white transition-colors">
                      {label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
