const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: Splaiul Independentei, Nr 202 B, Bl. 202B, Sc. 1, Et. 4, Ap. 15, Sector 6, București</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} Example Company. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
