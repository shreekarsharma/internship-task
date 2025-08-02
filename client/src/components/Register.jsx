import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { User, Mail, Phone, Briefcase, Send, CheckCircle } from 'lucide-react';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post('http://localhost:5000/api/applicants', form);
      toast.success("Registration successful! We'll be in touch soon.", {
        icon: <CheckCircle className="h-5 w-5" />,
      });
      setForm({ name: '', email: '', phone: '', role: '' });
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          Join Our Volunteer Program
        </h2>
        <p className="text-lg text-slate-600">
          Take the first step towards making a meaningful impact in your community
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20"
      >
        <div className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-semibold text-slate-700">
              <User className="h-4 w-4 mr-2 text-indigo-600" />
              Full Name
            </label>
            <input
              className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 placeholder-slate-400"
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-semibold text-slate-700">
              <Mail className="h-4 w-4 mr-2 text-indigo-600" />
              Email Address
            </label>
            <input
              className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 placeholder-slate-400"
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-semibold text-slate-700">
              <Phone className="h-4 w-4 mr-2 text-indigo-600" />
              Phone Number
            </label>
            <input
              className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 placeholder-slate-400"
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Role */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-semibold text-slate-700">
              <Briefcase className="h-4 w-4 mr-2 text-indigo-600" />
              Preferred Role
            </label>
            <select
              className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-slate-700"
              name="role"
              value={form.role}
              onChange={handleChange}
              required
            >
              <option value="" disabled className="text-slate-400">
                Select your preferred role
              </option>
              <option value="Intern">Intern</option>
              <option value="Volunteer">Volunteer</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Submitting...
              </div>
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
                Submit Application
              </>
            )}
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-slate-500">
            By submitting this form, you agree to our terms and conditions
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
