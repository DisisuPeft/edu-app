"use client";

import type React from "react";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div
        className="px-4 py-5 border-b border-gray-200 sm:px-6 cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
        <button
          type="button"
          className="text-gray-500 hover:text-gray-700"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
      </div>
      {isOpen && <div className="px-4 py-5 sm:p-6">{children}</div>}
    </div>
  );
}
