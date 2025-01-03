/* eslint-disable react/no-unescaped-entities */
export default function HowToInstall({ id }: { id: string }) {
    const steps = [
      {
        title: 'Cliquez "Ajouter à chrome"',
        description: 'Cliquez sur le bouton bleu ci-dessus pour accéder au Chrome Web Store.',


      },
      {
        title: 'Installer l’extension',
        description: 'Cliquez "Ajouter à chrome" dans le Chrome Web Store.'

      },
      {
        title: 'Commencez à utiliser',
        description: 'L’icône de l’extension apparaîtra dans votre navigateur. Cliquez dessus pour commencer !'

      },
    ]
  
    return (
      <div id={id} className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Installation</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comment <span className="bg-yellow-400">installer</span> l'extension
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {steps.map((step, index) => (
                <div key={step.title} className="flex flex-col items-center text-center">
                  <div className="rounded-lg bg-blue-600 p-3 text-white w-8 h-8 flex items-center justify-center mb-4">
                    {index + 1}
                  </div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {step.title}
                  </dt>
                  <dd className="mt-1 text-base leading-7 text-gray-600">
                    {step.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }