import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Users,
  Mail,
  Phone,
  Briefcase,
  Search,
  Filter,
  RefreshCw,
} from "lucide-react";

const AdminView = () => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("");

  useEffect(() => {
    fetchApplicants();
  }, []);

  const fetchApplicants = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/applicants");
      setApplicants(response.data);
    } catch (error) {
      console.error("Error fetching applicants:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredApplicants = applicants.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === "" || app.role === filterRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          Admin Dashboard
        </h2>
        <p className="text-lg text-slate-600">
          Manage and review volunteer applications
        </p>
      </div>

      {/* Controls */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg border border-white/20">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search applicants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="pl-10 pr-8 py-3 bg-white/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 min-w-[150px]"
              >
                <option value="">All Roles</option>
                <option value="Intern">Intern</option>
                <option value="Volunteer">Volunteer</option>
              </select>
            </div>
          </div>

          {/* Refresh Button */}
          <button
            onClick={fetchApplicants}
            disabled={loading}
            className="flex items-center px-4 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 transition-all duration-200"
          >
            <RefreshCw
              className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`}
            />
            Refresh
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-800">
              {applicants.length}
            </div>
            <div className="text-sm text-slate-600">Total Applications</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600">
              {applicants.filter((app) => app.role === "Volunteer").length}
            </div>
            <div className="text-sm text-slate-600">Volunteers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600">
              {applicants.filter((app) => app.role === "Intern").length}
            </div>
            <div className="text-sm text-slate-600">Interns</div>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading applications...</p>
        </div>
      )}

      {/* Applicants Grid */}
      {!loading && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredApplicants.map((app) => (
            <div
              key={app._id}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:bg-white/90 hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-emerald-100 rounded-xl flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors duration-200">
                      {app.name}
                    </h3>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        app.role === "Volunteer"
                          ? "bg-indigo-100 text-indigo-700"
                          : "bg-emerald-100 text-emerald-700"
                      }`}
                    >
                      <Briefcase className="h-3 w-3 mr-1" />
                      {app.role}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-slate-600">
                  <Mail className="h-4 w-4 mr-3 text-slate-400" />
                  <span className="text-sm">{app.email}</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Phone className="h-4 w-4 mr-3 text-slate-400" />
                  <span className="text-sm">{app.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && filteredApplicants.length === 0 && (
        <div className="text-center py-12">
          <Users className="h-16 w-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-600 mb-2">
            No Applications Found
          </h3>
          <p className="text-slate-500">
            {searchTerm || filterRole
              ? "Try adjusting your search or filter criteria"
              : "No volunteer applications have been submitted yet"}
          </p>
        </div>
      )}
    </div>
  );
};

export default AdminView;
