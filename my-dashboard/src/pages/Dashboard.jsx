import React from 'react';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Chess Usage & Academic Workload</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
        This project is a deep dive into my own chess usage and academic workload trends. By analyzing my habits, I aim to uncover how intellectual recreation like chess correlates with periods of academic pressure and relaxation.
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src="/images/scatter_plot.png" alt="Scatter Plot" className="rounded-lg shadow-md" />
        <img src="/images/bar_plot.png" alt="Bar Plot" className="rounded-lg shadow-md" />
      </div>
      <p className="mt-6 text-gray-700 dark:text-gray-300 text-center">
        These visualizations provide an overview of how my chess engagement varies across different workload levels and how patterns evolve throughout the semester.
      </p>
    </div>
  );
};

export default Dashboard;
