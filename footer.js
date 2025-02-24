const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold">IPA Solutions</h3>
            <p className="mt-2 text-sm">Intelligent Process Automation for your business</p>
          </div>
          <div className="w-full md:w-1/3 text-center mt-4 md:mt-0">
            <h4 className="text-sm font-semibold mb-2">Quick Links</h4>
            <a href="#features" className="text-gray-400 hover:text-white mr-4">
              Features
            </a>
            <a href="#examples" className="text-gray-400 hover:text-white mr-4">
              Examples
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white">
              Contact
            </a>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right mt-4 md:mt-0">
            <p className="text-sm">&copy; 2023 IPA Solutions. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


