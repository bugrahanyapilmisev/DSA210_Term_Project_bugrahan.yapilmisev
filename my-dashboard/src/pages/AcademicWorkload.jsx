/* Updated AcademicWorkload.jsx */
import React from 'react';

const AcademicWorkload = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Academic Workload Analysis</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
        Academic workload impacts my habits significantly. This section analyzes workload intensity over time and its influence on my chess engagement.
      </p>
      <img src="/images/heatmat.png" alt="Heatmap" className="rounded-lg shadow-md mb-6 mx-auto" />
      <p className="text-gray-700 dark:text-gray-300">
        The <b>Heatmap</b> illustrates my busiest academic periods, such as midterms and finals, when workload intensity peaked. During these times, my chess activity decreased, reflecting a shift in focus to academics.
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        Lighter workload periods, such as early semester weeks, show increased chess activity, indicating its role as a recreational outlet during less stressful times.
      </p>
    </div>
  );
};

export default AcademicWorkload;