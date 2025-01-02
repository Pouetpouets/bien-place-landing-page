// src/components/Team.tsx
/* eslint-disable react/no-unescaped-entities */

import { Github, Linkedin, Code } from 'lucide-react';

interface TeamProps {
  id: string;
}

export default function Team({ id }: TeamProps) {
  const founders = [
    {
      name: "Corentin B.",
      role: "Full Stack Developer",
      image: "/api/placeholder/400/400", // Placeholder pour l'image
      bio: "Passionné de développement web et d'immobilier, je cherche à combiner ces deux domaines pour créer des solutions innovantes qui facilitent la recherche immobilière.",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Lucas L.",
      role: "Full Stack Developer",
      image: "/api/placeholder/400/400", // Placeholder pour l'image
      bio: "Expert en développement fullstack avec une forte appétence pour l'immobilier. Je souhaite révolutionner la façon dont les gens recherchent leur bien immobilier idéal.",
      linkedin: "#",
      github: "#"
    }
  ];

  return (
    <div id={id} className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Une histoire de passion
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Deux développeurs passionnés d&apos;immobilier qui souhaitent simplifier vos recherches immobilières.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {founders.map((person) => (
            <div key={person.name} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col gap-6 xl:flex-row">
                <img
                  className="aspect-square w-24 h-24 flex-none rounded-xl object-cover"
                  src={person.image}
                  alt={person.name}
                />
                <div className="flex-auto">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-base leading-7 text-blue-600">{person.role}</p>
                  <p className="mt-4 text-sm leading-6 text-gray-600">{person.bio}</p>
                  <div className="mt-4 flex gap-4">
                    <a
                      href={person.linkedin}
                      className="text-gray-400 hover:text-gray-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={person.github}
                      className="text-gray-400 hover:text-gray-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notre Mission */}
        <div className="mt-16 mx-auto max-w-2xl text-center">
          <div className="rounded-2xl bg-blue-50 p-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Notre Mission
            </h3>
            <p className="text-blue-700">
              Simplifier la recherche immobilière en développant des outils innovants qui améliorent l'expérience utilisateur. 
              Notre extension Chrome n'est que le début d'une suite d'outils que nous développons pour vous aider dans votre parcours immobilier.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Code className="h-6 w-6 text-blue-600" />
              <span className="text-blue-600 font-medium">
                Développé avec passion en France 🇫🇷
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}