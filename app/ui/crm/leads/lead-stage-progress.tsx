"use client";

import { Etapa_pipeline } from "@/redux/crm/types";
// import { useRetrieveLeadQuery } from "@/redux/crm/crmApiSlice";
// import Link from "next/link";
// import {
//   ArrowLeft,
//   Edit,
//   User,
//   Mail,
//   Phone,
//   BookOpen,
//   BarChart2,
//   Clock,
// } from "lucide-react";
// import { Etapas, Pipeline } from "@/redux/interface/crm/crm";

interface LeadStageProps {
  stages: Etapa_pipeline[];
  currentStage: number;
  onStageChange: (stage: Etapa_pipeline) => void;
}
// console.log(stages);
export default function LeadStageProgress({
  stages,
  currentStage,
  onStageChange,
}: LeadStageProps) {
  const currentIndex = stages.findIndex((stage) => stage.id === currentStage);
  // console.log(stages);
  return (
    <div className="text-gray-800 w-full">
      <div className="flex items-center justify-between mb-4">
        {stages.map((stage, index) => {
          const isCompleted = currentIndex > index;
          const isCurrent = currentIndex === index;
          // const isPending = currentIndex < index;

          return (
            <div
              key={stage.id}
              className="flex flex-col items-center relative"
              style={{ width: `${100 / stages.length}` }}
            >
              <button
                onClick={() => onStageChange(stage)}
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 transition-colors ${
                  isCompleted
                    ? "bg-green-500 text-white"
                    : isCurrent
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-500 hover:bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
              <span className="text-xs text-center">{stage.nombre}</span>
              {/* {index < stages.length - 1 && (
                <div
                  className={`absolute top-4 left-[80px] h-0.5 transform -translate-y-1/2 ${
                    isCompleted ? "bg-green-500" : "bg-gray-200"
                  }`}
                  style={{ width: "50px" }} // ajusta según el spacing entre puntos
                ></div>
              )} */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
