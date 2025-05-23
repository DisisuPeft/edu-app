import Image from "next/image";

export default function TeamSection() {
  // Sample data for team members
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Carlos Lopez",
      role: "Director Administrativo",
      image:
        "/assets/fotos-team/UNSZA-Dr-Carlos-López-Director-administrativo.png",
    },
    {
      id: 2,
      name: "Lic. Laura Molina",
      role: "Coordinadora Educativa",
      image:
        "/assets/fotos-team/UNSZA-Lic-Laura-Molina-Coordinadora-Educativa.png",
    },
    {
      id: 3,
      name: "Lic. Amayrani López",
      role: "Asesora Educativa",
      image:
        "/assets/fotos-team/UNSZA-Lic-Amayrani-López-asesora-educativa.png",
    },
    {
      id: 4,
      name: "Mtra. Andrea Brindis",
      role: "Asesora Educativa",
      image:
        "/assets/fotos-team/UNSZA-Mtra-andrea-brindis-asesora-educativa.png",
    },
    {
      id: 5,
      name: "Mtra. Grecia Palacios",
      role: "Asesora Educativa",
      image:
        "/assets/fotos-team/UNSZA-Mtra-Grecia-Palacios-asesora-educativa.png",
    },
  ];

  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h6 className="inline-block bg-white text-[#121829] text-sm font-semibold px-3 py-1 mb-4 border-l-4 border-[#121b6a]">
            Nuestro equipo
          </h6>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#121829] mb-5">
            Expertos de la educación
          </h1>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
            >
              {/* Image Container */}
              <div className="overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-75 cursor-pointer"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>

              {/* Social Links Container with Negative Margin */}
              {/* <div className="relative flex justify-center -mt-6">
                <div className="bg-white rounded-lg shadow-sm flex justify-center pt-2 px-4 pb-2"> */}
              {/* Social Icons - Commented for now */}
              {/* 
                  <a href="#" className="text-[#121b6a] hover:text-[#0a1050] mx-1">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-[#121b6a] hover:text-[#0a1050] mx-1">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-[#121b6a] hover:text-[#0a1050] mx-1">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  */}
              {/* <div className="w-16 h-2"></div>{" "} */}
              {/* Placeholder for social icons */}
              {/* </div>
              </div> */}

              {/* Team Member Info */}
              <div className="text-center p-4">
                <h5 className="font-bold text-lg text-[#121829] mb-1">
                  {member.name}
                </h5>
                <small className="text-gray-600 text-sm">{member.role}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
