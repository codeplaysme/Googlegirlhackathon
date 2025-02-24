const ProcessExample = ({ title, steps }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <ol className="list-decimal list-inside">
      {steps.map((step, index) => (
        <li key={index} className="mb-2">
          {step}
        </li>
      ))}
    </ol>
  </div>
)

const ProcessExamples = () => {
  const examples = [
    {
      title: "Invoice Processing Automation",
      steps: [
        "AI scans and extracts data from invoices",
        "System validates and categorizes information",
        "Automated approval workflow is triggered",
        "Payment is processed and recorded",
      ],
    },
    {
      title: "Customer Support Ticket Resolution",
      steps: [
        "AI analyzes incoming support ticket",
        "Relevant information and solutions are retrieved",
        "Automated response is generated and sent",
        "Complex issues are escalated to human agents",
      ],
    },
    {
      title: "Employee Onboarding Process",
      steps: [
        "New hire information is collected via smart forms",
        "AI generates personalized onboarding documents",
        "System automatically provisions accounts and access",
        "Onboarding progress is tracked and reported",
      ],
    },
  ]

  return (
    <section id="examples" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Process Automation Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <ProcessExample key={index} {...example} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessExamples

