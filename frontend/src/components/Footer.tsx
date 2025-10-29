export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Product
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Status
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; 2025 Merch-tool. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
