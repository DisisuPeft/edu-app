"use client";
import { useState } from "react";
import Link from "next/link";
export default function StudentDashboard() {
  const courses = [
    {
      id: 1,
      title: "Fundamentos de React",
      progress: 100,
      completed: true,
      certificate: "cert-react-101",
      certificateUrl: "/certificates/cert-react-101.pdf",
      date: "10/01/2024",
      skills: ["JSX", "Componentes", "Props", "Estado", "Hooks básicos"],
    },
    {
      id: 2,
      title: "React Avanzado",
      progress: 85,
      completed: false,
      skills: [
        "Context API",
        "Hooks personalizados",
        "Optimización",
        "Testing",
      ],
    },
    {
      id: 3,
      title: "Introducción a Next.js",
      progress: 100,
      completed: true,
      certificate: "cert-nextjs-intro",
      certificateUrl: "/certificates/cert-nextjs-intro.pdf",
      date: "15/02/2024",
      skills: ["Pages Router", "SSR", "SSG", "API Routes"],
    },
    {
      id: 4,
      title: "Next.js Avanzado",
      progress: 40,
      completed: false,
      skills: ["App Router", "Server Components", "Edge Functions"],
    },
  ];

  const [activeTab, setActiveTab] = useState("courses");

  // Calcular estadísticas
  const completedCourses = courses.filter((course) => course.completed).length;
  const totalCourses = courses.length;
  const certificatesEarned = courses.filter(
    (course) => course.certificate
  ).length;
  const averageProgress = Math.round(
    courses.reduce((acc, course) => acc + course.progress, 0) / totalCourses
  );

  // Extraer todas las habilidades únicas
  const allSkills = Array.from(
    new Set(courses.flatMap((course) => course.skills || []))
  );

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Mi aprendizaje
        </h1>

        {/* Tarjetas de estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-gray-500 text-sm">Cursos Completados</h2>
            <p className="text-3xl font-bold">
              {completedCourses}/{totalCourses}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-gray-500 text-sm">Progreso Promedio</h2>
            <p className="text-3xl font-bold">{averageProgress}%</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-gray-500 text-sm">Certificados Obtenidos</h2>
            <p className="text-3xl font-bold">{certificatesEarned}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-gray-500 text-sm">Habilidades Adquiridas</h2>
            <p className="text-3xl font-bold">{allSkills.length}</p>
          </div>
        </div>

        {/* Pestañas */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("courses")}
              className={`py-3 px-6 font-medium ${
                activeTab === "courses"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500"
              }`}
            >
              Mis Cursos
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              className={`py-3 px-6 font-medium ${
                activeTab === "certificates"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500"
              }`}
            >
              Mis Certificados
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`py-3 px-6 font-medium ${
                activeTab === "skills"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500"
              }`}
            >
              Mis Habilidades
            </button>
          </div>

          {/* Contenido de pestaña: Cursos */}
          {activeTab === "courses" && (
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Mis Cursos</h2>
              <div className="space-y-4">
                {courses.map((course) => (
                  <div key={course.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">{course.title}</h3>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          course.completed
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {course.completed ? "Completado" : "En progreso"}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Progreso: {course.progress}%</span>
                      {course.completed && (
                        <span>Completado: {course.date}</span>
                      )}
                    </div>
                    <div className="flex justify-end pt-2">
                      <Link
                        href="/curso"
                        className="rounded-md bg-slate-800 text-white p-2 w-[50px] text-center"
                      >
                        Ver
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contenido de pestaña: Certificados */}
          {activeTab === "certificates" && (
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Mis Certificados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courses
                  .filter((course) => course.certificate)
                  .map((course) => (
                    <div
                      key={course.id}
                      className="border rounded-lg p-4 flex flex-col"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">{course.title}</h3>
                        <span className="text-sm text-gray-500">
                          Fecha: {course.date}
                        </span>
                      </div>
                      <div className="flex-grow flex items-center justify-center bg-gray-50 p-6 mb-4 rounded">
                        <div className="text-center">
                          <span className="text-5xl text-blue-600">🏆</span>
                          <p className="text-sm mt-2 text-gray-600">
                            Certificado #{course.certificate}
                          </p>
                        </div>
                      </div>
                      <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 text-sm">
                        Ver Certificado
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Contenido de pestaña: Habilidades */}
          {activeTab === "skills" && (
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Mis Habilidades</h2>
              <div className="flex flex-wrap gap-2">
                {allSkills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h3 className="font-medium mt-6 mb-3">Desglose por curso</h3>
              <div className="space-y-4">
                {courses.map((course) => (
                  <div key={course.id} className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">{course.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.skills &&
                        course.skills.map((skill) => (
                          <span
                            key={`${course.id}-${skill}`}
                            className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
