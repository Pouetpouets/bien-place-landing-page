'use client'
import { AlignEndHorizontal, MapPinHouse, Sparkle } from 'lucide-react';

export default function Features({ id }: { id: string }) {

    const features = [
      {
        icon: <MapPinHouse />,
        name: 'Adresse exacte', 
        description: 'Locasliation de votre bien, depuis Google Maps.',
      },
      {
        icon: <Sparkle />,
        name: "Consommation d'énergie",
        description: 'Estimation plus précise, avec des éléments de comparaison.',
      },
      {
        icon: <AlignEndHorizontal />,
        name: 'Estimation de prix',
        description: 'Analyse des données avec des biens similaires.',
      },
    ]
  
    return (
      <div id={id} className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Fonctionnalités</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tout ce dont vous  <span className="bg-yellow-400">avez besoin</span> 
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-3xl font-bold text-blue-600 bg-blue-100 rounded-full">
                    {feature.icon}
                  </div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col items-center justify-center text-base leading-7 text-gray-600">
                    <p className="flex-auto text-center">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  