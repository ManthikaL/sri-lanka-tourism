import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-green-500"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-8 bg-gradient-to-r from-orange-500 via-red-600 to-green-600 rounded-lg shadow-lg"></div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-green-400 bg-clip-text text-transparent">
                  Visit Sri Lanka
                </h3>
                <div className="text-xs text-gray-400">Pearl of the Indian Ocean</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Discover the pearl of the Indian Ocean with its rich culture, stunning landscapes, and warm hospitality.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors group"
              >
                <Facebook className="h-5 w-5 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors group"
              >
                <Instagram className="h-5 w-5 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors group"
              >
                <Twitter className="h-5 w-5 text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-orange-400 text-lg">Explore</h4>
            <ul className="space-y-3">
              {[
                { name: "Amazing Places", href: "#places" },
                { name: "Activities & Adventures", href: "#activities" },
                { name: "Events & Festivals", href: "#events" },
                { name: "Rich History", href: "#history" },
                { name: "Authentic Shopping", href: "#shop" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Travel Resources */}
          <div>
            <h4 className="font-bold mb-6 text-green-400 text-lg">Travel Resources</h4>
            <ul className="space-y-3">
              {[
                { name: "Transport & Travel Tips", href: "#transport" },
                { name: "Local Guides", href: "#guides" },
                { name: "Photo Gallery", href: "#gallery" },
                { name: "About Sri Lanka", href: "#about" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-bold mb-6 text-red-400 text-lg">Stay Connected</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Phone className="h-4 w-4 text-red-400" />
                </div>
                <span className="text-sm">+94 11 234 5678</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Mail className="h-4 w-4 text-red-400" />
                </div>
                <span className="text-sm">info@visitsrilanka.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-red-400" />
                </div>
                <span className="text-sm">Colombo, Sri Lanka</span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="font-semibold mb-3 text-gray-200">Newsletter</h5>
              <p className="text-sm text-gray-400 mb-4">Get travel tips and updates</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                />
                <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-6 py-2 rounded-r-lg font-medium transition-all transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p className="flex items-center">
                © 2024 Visit Sri Lanka. Made with
                <Heart className="h-4 w-4 text-red-500 mx-1" />
                for travelers
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
