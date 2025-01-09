/* New HypothesisTesting.jsx */
import React from 'react';

const HypothesisTesting = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Hypothesis Testing</h2>
      <img src="/images/p_test.png" alt="P-Test Result" className="rounded-lg shadow-md mb-6 mx-auto" />
      <p className="text-gray-700 dark:text-gray-300">
        <b>Hypotheses:</b>
        <ul className="list-disc pl-6 mt-2">
          <li>Null Hypothesis (H₀): There is no correlation between academic workload and chess activity.</li>
          <li>Alternative Hypothesis (Hₐ): There is a significant correlation between academic workload and chess activity.</li>
        </ul>
      </p>
      <p className="text-gray-700 dark:text-gray-300 mt-4">
        Based on the <b>p-value</b> observed (0.0137), we reject the null hypothesis, indicating a significant correlation exists. This supports the conclusion that increased workload increases chess activity.
      </p>
    </div>
  );
};

export default HypothesisTesting;