import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Globe, Star, Users, Clock, Award } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Heart,
      title: 'Make a Difference',
      description: 'Join our community of volunteers making real impact in local communities.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connect with opportunities worldwide and expand your horizons.',
    },
    {
      icon: Star,
      title: 'Skill Development',
      description: 'Gain valuable experience and develop new skills while helping others.',
    },
  ];

  const stats = [
    { label: 'Active Volunteers', value: '2,500+', icon: Users },
    { label: 'Hours Contributed', value: '15,000+', icon: Clock },
    { label: 'Projects Completed', value: '150+', icon: Award },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center py-12 lg:py-20">
        <div className="mb-8">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700 mb-6">
            <Star className="h-4 w-4 mr-2" />
            Join Our Growing Community
          </span>
        </div>

        <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
          Welcome to Our
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600">
            Volunteer Program
          </span>
        </h1>

        <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Transform lives, build communities, and create lasting change. Join thousands of volunteers 
          making a difference across the globe through meaningful service opportunities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/register"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-indigo-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>

          <Link
            to="/admin"
            className="inline-flex items-center px-8 py-4 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-indigo-300 hover:text-indigo-700 hover:bg-white transition-all duration-200"
          >
            Admin Login
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-100 to-emerald-100 rounded-xl mb-4">
                <Icon className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">{item.value}</div>
              <div className="text-slate-600 font-medium">{item.label}</div>
            </div>
          );
        })}
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-100 to-emerald-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
