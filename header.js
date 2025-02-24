const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold text-gray-800">IPA Solutions</div>
          <div className="hidden md:flex space-x-4">
            <a href="#features" className="text-gray-600 hover:text-gray-800">
              Features
            </a>
            <a href="#examples" className="text-gray-600 hover:text-gray-800">
              Examples
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

