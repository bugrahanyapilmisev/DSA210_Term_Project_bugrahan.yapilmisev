/* Updated ChessUsage.jsx */
import React from 'react';

const ChessUsage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Chess Usage Analysis</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
        Chess has been my preferred intellectual break. This section analyzes chess session frequency and patterns during various academic periods.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src="/images/box_plot.png" alt="Box Plot" className="rounded-lg shadow-md" />
        <img src="/images/violin_plot.png" alt="Violin Plot" className="rounded-lg shadow-md" />
      </div>
      <p className="mt-6 text-gray-700 dark:text-gray-300">
        The <b>Box Plot</b> shows longer chess sessions during lighter academic weeks, whereas the <b>Violin Plot</b> highlights shorter sessions during high-pressure weeks.
      </p>
    </div>
  );
};

export default ChessUsage;