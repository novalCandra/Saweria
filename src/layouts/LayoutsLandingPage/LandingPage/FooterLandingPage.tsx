import { Instagram } from "lucide-react";
function FooterLandingPage() {
  return (
    <>
      <footer className="bg-[#11151d] text-gray-400 py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {/* Footers 1 */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Features
              </h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tip
                  </a>
                </li>
              </ul>
            </div>
            {/* End Footers 1 */}

            {/* Footers 2 */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Concats</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Emails
                  </a>
                </li>
              </ul>
            </div>
            {/* End Footers 2 */}

            {/* Footers 3 */}
            <div>
              <h3 className="text-white text-lg">Abouts Krates</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms and conditions
                  </a>
                </li>
              </ul>
            </div>
            {/* End Footers 3 */}

            {/* Logo Footers */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg flex items-center justify-center hover:text-purple-500 transition-colors"
                >
                  <Instagram className="w-10 h-10" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-center">&copy; 2025 サバカン</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterLandingPage;
