import { motion, useInView } from "framer-motion";
import { memo, useRef, useState } from "react";
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

function ContactSectionComponent({ isDarkMode }) {
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

    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/mzzjyrzd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setStatus(response.ok ? "success" : "error");

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
      }
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus(null), 4000);
  };

  const fieldClass = `w-full px-6 py-4 rounded-lg backdrop-blur-sm border focus:outline-none transition-all placeholder-transparent peer ${
    isDarkMode
      ? "bg-white/5 text-white border-cyan-400/20 focus:border-cyan-400"
      : "bg-white/90 text-gray-800 border-gray-200 focus:border-cyan-300"
  }`;

  return (
    <section
      ref={ref}
      id="contact"
      className={`relative py-32 px-6 overflow-hidden ${
        isDarkMode ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="mb-4 bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p
            className={`${
              isDarkMode ? "text-white/60" : "text-gray-700/80"
            } max-w-2xl mx-auto`}
          >
            Have a project in mind? Let's create something amazing together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.form
            noValidate
            aria-label="Contact form"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {["name", "email", "message"].map((field) => (
              <div key={field} className="relative">
                {field !== "message" ? (
                  <motion.input
                    type={field === "email" ? "email" : "text"}
                    required
                    aria-invalid={!!errors[field]}
                    aria-describedby={errors[field] ? `${field}-error` : undefined}
                    value={formData[field]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                    onFocus={() => setFocusedField(field)}
                    onBlur={() => setFocusedField(null)}
                    placeholder={field}
                    className={fieldClass}
                  />
                ) : (
                  <motion.textarea
                    rows={5}
                    required
                    aria-invalid={!!errors[field]}
                    aria-describedby={errors[field] ? `${field}-error` : undefined}
                    value={formData[field]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                    onFocus={() => setFocusedField(field)}
                    onBlur={() => setFocusedField(null)}
                    placeholder={field}
                    className={`${fieldClass} resize-none`}
                  />
                )}
                <motion.label
                  animate={{
                    y: focusedField === field || formData[field] ? -32 : 0,
                    scale: focusedField === field || formData[field] ? 0.85 : 1,
                  }}
                  className="absolute left-6 top-4 pointer-events-none transition-all text-sm"
                  style={{
                    color:
                      focusedField === field || formData[field]
                        ? isDarkMode
                          ? "#00FFFF"
                          : "#6B21A8"
                        : isDarkMode
                        ? "#ffffff60"
                        : "#00000060",
                  }}
                >
                  {field === "name"
                    ? "Your Name"
                    : field === "email"
                    ? "Your Email"
                    : "Your Message"}
                </motion.label>
                {errors[field] && (
                  <p id={`${field}-error`} className="text-red-400 text-sm mt-1">
                    {errors[field]}
                  </p>
                )}
              </div>
            ))}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2 font-semibold ${
                isDarkMode
                  ? "bg-linear-to-r from-cyan-500 to-purple-600 text-white"
                  : "bg-linear-to-r from-cyan-400 to-blue-500 text-white"
              }`}
            >
              <span>Send Message</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Send className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
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

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div
              className={`p-8 rounded-2xl border space-y-4 ${
                isDarkMode
                  ? "bg-white/5 border-cyan-400/20 text-white"
                  : "glass-card border border-transparent text-gray-800"
              }`}
            >
              <h3 className={`${isDarkMode ? "text-white" : "text-gray-800"} mb-6`}>
                Connect With Me
              </h3>
              <p
                className={`${
                  isDarkMode ? "text-white/60" : "text-gray-700/80"
                } mb-8 leading-relaxed`}
              >
                Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities.
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
                    className={`flex items-center gap-4 p-4 rounded-lg transition-all border ${
                      isDarkMode
                        ? "bg-white/5 border-cyan-400/20 hover:border-cyan-400/50 text-white"
                        : "glass-card border border-transparent hover:shadow-md text-gray-800"
                    } ${color}`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-shadow ${
                        isDarkMode
                          ? "bg-linear-to-br from-cyan-500 to-purple-600"
                          : "bg-linear-to-br from-cyan-400 to-blue-500"
                      }`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span
                      className={`${
                        isDarkMode ? "text-white/80" : "text-gray-800/90"
                      } transition-colors`}
                    >
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

export const ContactSection = memo(ContactSectionComponent);
