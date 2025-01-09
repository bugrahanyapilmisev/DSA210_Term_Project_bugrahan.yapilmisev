import React from 'react';

const Insights = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Key Insights & Reflections</h2>
      <p className="text-gray-700 dark:text-gray-300">
        This project offered valuable insights into how my academic workload impacts chess usage:
      </p>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mt-4">
        <li>
          Chess served as a mental break during light workload periods, with activity peaking on weekends.
        </li>
        <li>
          During high-stress periods like midterms and finals, my chess activity decreased significantly, indicating a focus shift to academics.
        </li>
        <li>
          The correlation analysis reaffirmed the inverse relationship between workload and leisure activity, emphasizing the importance of balance.
        </li>
      </ul>
      <p className="mt-6 text-gray-700 dark:text-gray-300">
        Moving forward, I aim to better integrate recreational activities like chess into my schedule, even during demanding academic periods, to maintain a healthy work-life balance.
      </p>
    </div>
  );
};

export default Insights;
