export default function FAQ() {
    const faqs = [
      {
        question: 'What does this extension do?',
        answer: 'Detailed explanation of your extension\'s main functionality.',
      },
      {
        question: 'Is it free?',
        answer: 'Information about pricing, if any.',
      },
      {
        question: 'How do I get support?',
        answer: 'Instructions for getting help or support.',
      },
    ]
  
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">FAQ</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl">
            <dl className="space-y-8">
              {faqs.map((faq) => (
                <div key={faq.question} className="pt-6">
                  <dt className="text-lg font-semibold leading-7 text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }