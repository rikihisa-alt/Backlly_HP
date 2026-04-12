"use client";

import type { ResourceItem } from "@/components/sections/ResourceDownload";

interface ResourceCardProps {
  resource: ResourceItem;
  onDownload: () => void;
}

function PdfIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <rect
        x="4"
        y="2"
        width="24"
        height="28"
        rx="2"
        stroke="#0F172A"
        strokeWidth="1.5"
        fill="none"
      />
      <path d="M4 8h24" stroke="#E2E8F0" strokeWidth="1" />
      <text
        x="16"
        y="21"
        textAnchor="middle"
        fontSize="8"
        fontFamily="monospace"
        fontWeight="600"
        fill="#06B6D4"
      >
        PDF
      </text>
    </svg>
  );
}

export default function ResourceCard({
  resource,
  onDownload,
}: ResourceCardProps) {
  return (
    <div className="group py-8 border-b border-border first:border-t transition-colors hover:bg-bg/50">
      <div className="flex flex-col md:flex-row items-start gap-5 md:gap-8">
        {/* Left: Icon + content */}
        <div className="flex items-start gap-4 flex-1 min-w-0">
          <div className="mt-0.5">
            <PdfIcon />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-serif text-lg md:text-xl font-bold text-navy">
                {resource.title}
              </h3>
              <span className="text-[10px] font-mono text-text-muted px-2 py-0.5 border border-border rounded tracking-wider">
                {resource.type}
              </span>
              {resource.pages && (
                <span className="text-[10px] font-mono text-text-muted tracking-wider hidden sm:inline">
                  {resource.pages}
                </span>
              )}
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              {resource.description}
            </p>
          </div>
        </div>

        {/* Right: Download button */}
        <button
          onClick={onDownload}
          className="flex-shrink-0 flex items-center gap-2 text-sm text-navy font-medium border border-navy/30 px-6 py-3 rounded hover:border-navy hover:bg-navy hover:text-white transition-colors duration-200 md:self-center"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="flex-shrink-0"
          >
            <path
              d="M8 2v8m0 0L5 7m3 3l3-3M3 12h10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {resource.buttonLabel}
        </button>
      </div>
    </div>
  );
}
