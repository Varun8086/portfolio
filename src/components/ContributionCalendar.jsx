"use client";
import { useState, useMemo } from "react";
import { ActivityCalendar } from "react-activity-calendar";

export default function ContributionCalendar({ data, totals }) {
  const years = Object.keys(totals).sort((a, b) => b - a);
  const [selectedYear, setSelectedYear] = useState(years[0]);

  const filteredData = useMemo(
    () => data.filter((day) => day.date.startsWith(selectedYear)),
    [data, selectedYear]
  );

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1 overflow-x-auto">
        <p className="text-[var(--foreground)] mb-4">
          {totals[selectedYear] ?? 0} contributions in {selectedYear}
        </p>
        <ActivityCalendar
          data={filteredData}
          theme={{
            light: ["#4a2833", "#5c3540", "#8a4a5a", "#c9647a", "#e8b04b"],
            dark: ["#4a2833", "#5c3540", "#8a4a5a", "#c9647a", "#e8b04b"],
          }}
          colorScheme="dark"
          blockSize={11}
          blockMargin={4}
          fontSize={12}
          hideColorLegend={false}
          showWeekdayLabels
        />
      </div>

      <div className="flex md:flex-col gap-2 md:w-24">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedYear === year
                ? "bg-[var(--accent)] text-black"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
}