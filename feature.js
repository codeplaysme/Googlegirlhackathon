import { FaRobot, FaFileAlt, FaHeadset } from "react-icons/fa"

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-4xl text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

const Features = () => {
  const features = [
    {
      icon: <FaRobot />,
      title: "Data Entry Automation",
      description: "Streamline your data entry processes with intelligent AI solutions",
    },
    {
      icon: <FaFileAlt />,
      title: "Document Processing",
      description: "Automate document processing and extraction with advanced AI",
    },
    {
      icon: <FaHeadset />,
      title: "Customer Service AI",
      description: "Enhance customer interactions with intelligent chatbots and automation",
    },
  ]

  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

