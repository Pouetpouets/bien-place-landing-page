/* import { Chrome } from 'lucide-react' */


export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl sm:py-28 lg:py-46">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
           Trouvez en <span className="bg-yellow-400"> un instant </span> la localisation du bien repéré 
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Une extension Chrome pour vous aider à localiser vos recherches immobiliéres, la consomation energétiques, la qualité des isolations et plus encore.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://chrome.google.com/webstore"
              className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Ajouter à chrome
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}