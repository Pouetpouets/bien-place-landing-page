/* eslint-disable react/no-unescaped-entities */
// src/components/Pricing.tsx
import { Check, X } from 'lucide-react';

interface PricingProps {
  id: string;
}

export default function Pricing({ id }: PricingProps) {
  return (
    <div id={id} className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Un prix simple, seulement <span className='bg-yellow-400'>une fois </span> </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choisissez le plan parfait pour votre recherche immobilière
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 sm:gap-y-0 sm:grid-cols-2 sm:gap-x-8">
          {/* Basic Plan */}
          <div className="rounded-3xl p-8 ring-1 ring-gray-200 bg-white hover:shadow-lg transition-all duration-200">
            <h3 className="text-lg font-semibold leading-8 text-gray-900">
              Basic
            </h3>
            <p className="mt-4 text-sm leading-6 text-gray-600">
            Parfait pour démarrer votre recherche immobilière
            </p>
            <div className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-gray-900">4.99€</span>
            </div>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
              <li className="flex gap-x-3">
                <Check className="h-6 w-5 flex-none text-blue-600" />
                Localisation du bien
              </li>
              <li className="flex gap-x-3">
                <Check className="h-6 w-5 flex-none text-blue-600" />
                5 recherches par jour
              </li>
              <li className="flex gap-x-3">
                <X className="h-6 w-5 flex-none text-grey-400/0" />
                Analyse avancée des données DPE
              </li>
              <li className="flex gap-x-3">
                <X  className="h-6 w-5 flex-none text-grey-400/0" />
                Informations complémentaires sur l'isolation
              </li>
              <li className="flex gap-x-3">
                <X  className="h-6 w-5 flex-none text-grey-400/0" />
                Historique des prix
              </li>
              <li className="flex gap-x-3">
                <X  className="h-6 w-5 flex-none text-grey-400/0" />
                Support prioritaire
              </li>
            </ul>
            <a
              href="#"
              className="mt-8 block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Get Basic
            </a>
          </div>

          {/* Pro Plan */}
          <div className="relative rounded-3xl p-8 ring-1 ring-blue-600 bg-white hover:shadow-lg transition-all duration-200">
          <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-1 rounded-full transform rotate-12 shadow-lg">
              <span className="font-bold">Offre de lancement</span>
            </div>

            <h3 className="text-lg font-semibold leading-8 text-gray-900">
              Pro
              <span className="ml-2 inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                Popular
              </span>
            </h3>
            <p className="mt-4 text-sm leading-6 text-gray-600">
             Pour les investisseurs immobiliers et professionnels
            </p>
            <div className="mt-6 flex items-baseline gap-x-1">
                            <span className="text-4xl font-bold tracking-tight text-gray-900">19.99€</span>
            </div>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
              <li className="flex gap-x-3">
                <Check className="h-6 w-5 flex-none text-blue-600" />
                Localisation du bien
              </li>
              <li className="flex gap-x-3">
                <Check className="h-6 w-5 flex-none text-blue-600" />
                Recherches illimitées
              </li>
              <li className="flex gap-x-3">
                <Check className="h-6 w-5 flex-none text-blue-600" />
                Analyse avancée des données DPE
              </li>
              <li className="flex gap-x-3">
                <Check  className="h-6 w-5 flex-none text-blue-600" />
                Informations complémentaires sur l'isolation
              </li>
              <li className="flex gap-x-3">
                <Check  className="h-6 w-5 flex-none text-blue-600" />
                Historique des prix
              </li>
              <li className="flex gap-x-3">
                <Check  className="h-6 w-5 flex-none text-blue-600" />
                Support prioritaire
              </li>
            </ul>
            <a
              href="#"
              className="mt-8 block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Get Pro
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}