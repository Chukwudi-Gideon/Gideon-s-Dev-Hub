import { ExternalLink } from "lucide-react";
import type {TimelineItem} from "../types"


{/**Timeline data for the Experience & Education section. Each item represents a significant experience, education, or course in my software development journey.  */}

const timeline: TimelineItem[] = [

  {
    id: 1,
    period: "2026-present",
    organization: "University of the People",
    title: "Bachelor's Degree in Computer Science",
    type: "education",
    description:"Awarded a full scholarship to pursue a Bachelor's degree in Computer Science at the University of the People, an accredited American university based in California. Currently building a broader foundation in computer science, programming, mathematics, and software development.",
  },
  {
    id: 2,
    period: "2025 - Present",
    organization: "Self-Taught Frontend Developer",
    title: "Frontend Development",
    type: "experience",
    description:  "Designing and building modern web applications and responsive interfaces using React, Vue, Angular, Next.js, TypeScript, JavaScript, and Tailwind CSS. Developing projects independently to strengthen practical software development skills, explore modern frontend architecture, and build solutions that resemble real-world products.",
  },
  {
    id:3,
    period: "2024 - Present", 
    organization: "FreeCodeCamp",
    title: "Web Development & Programming",
    type: "course",
    description:  "Completed several structured coursework covering Responsive Web Design, JavaScript Algorithms and Data Structures, and Front End Development Libraries. Applied the concepts through hands-on coding exercises and projects while building a strong foundation in modern web development.",
     certifications: [
     {
      name: "Responsive Web Design", 
      url: "https://www.freecodecamp.org/certification/chukwudi-gideon/responsive-web-design-v9"
    },
      {
        name: "JavaScript Algorithms & Data Structures",
        url: "https://www.freecodecamp.org/certification/chukwudi-gideon/javascript-v9",
      },
      {
        name: "Front End Development Libraries",
        url: "https://www.freecodecamp.org/certification/chukwudi-gideon/front-end-development-libraries-v9",
      },
  ]
  
  }
 
]

export function ExperienceEducation(){
  return (
    <section
    id="experience"
    className='py-14 bg-white border-b border-slate-200/60'
    >
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-slate-400 uppercase">
            EXPERIENCE & EDUCATION
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-950">
            The path behind my work.
          </h2>

          <p className="mt-5 text-base sm:text-lg font-serif leading-8 text-slate-600">
            A look at the experiences, education, and learning that have shaped
            how I approach software development.
          </p>
        </div>


        {/* Timeline */}
        <div className="relative">

          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-200 hidden sm:block" />

          <div className="space-y-14">

            {timeline.map((item) => (
              <article
                key={item.id}
                className="relative grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-6 sm:gap-12"
              >

                {/* Timeline dot */}
                <div className="hidden sm:block absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-white border-2 border-slate-300 z-10" />

                {/* Date */}
                <div className="sm:pl-8">
                  <span className="text-sm font-mono font-semibold text-slate-500">
                    {item.period}
                  </span>
                </div>


                {/* Content */}
                <div className="max-w-3xl">

                  <p className="text-sm font-mono font-medium text-indigo-600">
                    {item.organization}
                  </p>

                  <h3 className="mt-1 text-xl sm:text-2xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-slate-600 font-serif">
                    {item.description}
                  </p>


                  {/* Certifications */}
                  {item.certifications && item.certifications.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-6">

                      {item.certifications.map((certificate) => (
                        <a
                          key={certificate.name}
                          href={certificate.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-xs font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-950 transition-colors"
                        >
                          {certificate.name}

                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}

                    </div>
                  )}

                </div>
              </article>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

