export default function FAQ({ id }: { id: string }) {
    const faqs = [
      {
        question: 'Que fait cette extension?',
        answer: 'Ajoute des informations supplémentaires sur les biens immobiliers lors de votre recherche.',
      },
      {
        question: 'Comment obtenir de l’aide?',
        answer: 'support@bienplace.com',
      },
    ]
  
    return (
      <div  id={id} className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">FAQ</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Questions frequemmment posées
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