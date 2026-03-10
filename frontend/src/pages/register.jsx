import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    setSubmitted(false);
    setServerError("");
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = "Full name is required.";
    }
    if (!form.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.password) {
      newErrors.password = "Password is required.";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
      // TODO: connect to backend API (issue #11)
      console.log("Registration data:", form);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4 py-12">
      <div className="bg-[#0B1F3B] border border-[#1E3A8A] rounded-2xl shadow-2xl w-full max-w-lg p-8 sm:p-10">

        {/* Top accent line */}
        <div className="h-[3px] rounded-sm mb-8 bg-gradient-to-r from-[#1E3A8A] via-[#00D4FF] to-[#1E3A8A]" />

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-[#E2E8F0] mb-2">
            Create Account
          </h1>
          <p className="text-[#94A3B8] text-sm">
            Join the Student Developer Platform community
          </p>
        </div>

        {/* Server error */}
        {serverError && (
          <div className="bg-red-400/10 border border-red-400/30 rounded-lg px-4 py-3 mb-6 text-red-400 text-sm text-center">
            {serverError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 text-left">

          {/* Full Name */}
          <div>
            <label className="block text-left text-[#E2E8F0] text-sm font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
              className={`w-full bg-[#0F172A] text-[#E2E8F0] rounded-lg px-4 py-3 text-sm placeholder-[#94A3B8] border outline-none transition-colors duration-200 ${
                errors.name
                  ? "border-red-400"
                  : "border-[#1E3A8A] focus:border-[#00D4FF]"
              }`}
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-left text-[#E2E8F0] text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
              className={`w-full bg-[#0F172A] text-[#E2E8F0] rounded-lg px-4 py-3 text-sm placeholder-[#94A3B8] border outline-none transition-colors duration-200 ${
                errors.email
                  ? "border-red-400"
                  : "border-[#1E3A8A] focus:border-[#00D4FF]"
              }`}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-left text-[#E2E8F0] text-sm font-semibold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Minimum 6 characters"
                value={form.password}
                onChange={handleChange}
                required
                minLength={6}
                autoComplete="new-password"
                className={`w-full bg-[#0F172A] text-[#E2E8F0] rounded-lg px-4 py-3 pr-16 text-sm placeholder-[#94A3B8] border outline-none transition-colors duration-200 ${
                  errors.password
                    ? "border-red-400"
                    : "border-[#1E3A8A] focus:border-[#00D4FF]"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#00D4FF] hover:opacity-80"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-400 text-xs mt-1.5">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-left text-[#E2E8F0] text-sm font-semibold mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Re-enter your password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                minLength={6}
                autoComplete="new-password"
                className={`w-full bg-[#0F172A] text-[#E2E8F0] rounded-lg px-4 py-3 pr-16 text-sm placeholder-[#94A3B8] border outline-none transition-colors duration-200 ${
                  errors.confirmPassword
                    ? "border-red-400"
                    : "border-[#1E3A8A] focus:border-[#00D4FF]"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#00D4FF] hover:opacity-80"
                aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-400 text-xs mt-1.5">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Success message */}
          {submitted && (
            <div className="bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-lg px-4 py-3 text-[#00D4FF] text-sm text-center">
              Registration successful!
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#00D4FF] hover:bg-cyan-400 active:scale-[0.98] disabled:bg-[#94A3B8] disabled:cursor-not-allowed text-[#0B1F3B] font-bold py-3 rounded-lg text-base transition-all duration-200 mt-2"
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-[#1E3A8A]" />
          <span className="text-[#94A3B8] text-xs">or</span>
          <div className="flex-1 h-px bg-[#1E3A8A]" />
        </div>

        {/* Login Link */}
        <p className="text-center text-[#94A3B8] text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-[#00D4FF] font-semibold hover:underline">
            Sign in
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;