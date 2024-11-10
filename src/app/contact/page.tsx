"use client"
import Link from "next/link"

export default function Contact() {
  return (
    <div className="min-h-screen bg-dark gray">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
           
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["HOME", "ABOUT", "PORTFOLIO", "CONTACT"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray">
            </button>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div>
                  <p className="text-xl font-semibold">+1233456789</p>
                  <p className="text-gray-600">Call us for any inquiries</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div>
                  <p className="text-xl font-semibold">MONDAY TO SATURDAY</p>
                  <p className="text-gray-600">10AM to 9PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                
                <div>
                  <p className="text-xl font-semibold">XYZRoad, ABC Building</p>
                  <p className="text-gray-600">KARACHI, SHAH LATIF, IN</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
              
                <div>
                  <p className="text-xl font-semibold">1234676@gmail.com</p>
                  <p className="text-gray-600">EMAIL US YOUR QUERYE</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Enter email adress"
                    className="w-full"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter your subject"
                    className="w-full"
                  />
                </div>
                <div>
                  {/* <Textarea
                    placeholder="message"
                    className="w-full min-h-[150px]"
                  /> */}
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-8"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}