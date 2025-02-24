import Link from "next/link"
import { BotIcon as RobotIcon, ClipboardCheckIcon, HeadphonesIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-700">IPA Solutions</div>
            <div className="flex space-x-4">
              <Link href="/" className="text-gray-800 hover:text-gray-600">
                Home
              </Link>
              <Link href="/features" className="text-gray-800 hover:text-gray-600">
                Features
              </Link>
              <Link href="/contact" className="text-gray-800 hover:text-gray-600">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Intelligent Process Automation</h1>
        <p className="text-xl text-center mb-12">Revolutionize your business with AI-powered automation solutions</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <RobotIcon className="w-12 h-12 mb-4 mx-auto text-blue-500" />
            <h2 className="text-xl font-semibold text-center mb-2">Data Entry Automation</h2>
            <p className="text-gray-600 text-center">
              Streamline your data entry processes with intelligent AI solutions
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <ClipboardCheckIcon className="w-12 h-12 mb-4 mx-auto text-green-500" />
            <h2 className="text-xl font-semibold text-center mb-2">Document Processing</h2>
            <p className="text-gray-600 text-center">Automate document processing and extraction with advanced AI</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <HeadphonesIcon className="w-12 h-12 mb-4 mx-auto text-purple-500" />
            <h2 className="text-xl font-semibold text-center mb-2">Customer Service AI</h2>
            <p className="text-gray-600 text-center">
              Enhance customer interactions with intelligent chatbots and automation
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

