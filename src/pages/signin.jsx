import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import Button from "../components/ui/Button"

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitted", formData)
  }

  // Force background and remove transparency
  useEffect(() => {
    document.body.style.backgroundColor = "#000" // black
    document.body.style.overflow = "hidden"

    const header = document.querySelector("header")
    if (header) {
      header.style.backgroundColor = "#000"
      header.style.boxShadow = "none"
    }

    const footer = document.querySelector("footer")
    if (footer) {
      footer.style.display = "none"
    }

    return () => {
      document.body.style.backgroundColor = ""
      document.body.style.overflow = ""
      if (header) header.style.backgroundColor = ""
      if (footer) footer.style.display = ""
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
          </div>
          <Link to="/">
          <Button type="submit" className="w-full">Sign In</Button>
          </Link>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  )
}

export default Signin



