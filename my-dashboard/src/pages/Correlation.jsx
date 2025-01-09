/* Updated Correlation.jsx */
import React from 'react';

const Correlation = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Correlation Studies</h2>
      <img src="/images/correlation.png" alt="Correlation Matrix" className="rounded-lg shadow-md mb-6 mx-auto" />
      <p className="text-gray-700 dark:text-gray-300">
        The <b>Correlation Matrix</b> highlights a negative correlation between workload and chess usage, indicating reduced chess activity during demanding academic weeks.
      </p>
    </div>
  );
};

export default Correlation;