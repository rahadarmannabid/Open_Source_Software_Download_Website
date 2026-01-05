'use client';

import { useState } from 'react';
import Link from 'next/link';
import { tools } from '@/lib/tools';

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  
  // Define all filter options
  const filters = ['All', 'Chrome Extension', 'Web App', 'Education', 'Analysis'];
  
  // Filter tools based on selected filter
  const filteredTools = selectedFilter === 'All' 
    ? tools 
    : selectedFilter === 'Chrome Extension'
    ? tools.filter(tool => tool.type === 'extension')
    : selectedFilter === 'Web App'
    ? tools.filter(tool => tool.type === 'webapp')
    : tools.filter(tool => tool.category === selectedFilter);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#9D2235] to-[#7D1B2D] text-white py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            <span className="text-base font-medium">Temple University HCI Lab</span>
          </div>
          <div className="text-base">Open Source Research Tools</div>
        </div>
      </div>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#9D2235] to-purple-600 bg-clip-text text-transparent">
              Open Source Research Tools
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our collection of open-source tools for data visualization, education, and research. 
              Built by researchers, for researchers and learners.
            </p>
          </div>

          {/* Filter Options */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedFilter === filter
                    ? 'bg-[#9D2235] text-white shadow-lg scale-105'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map(tool => (
              <Link 
                key={tool.id} 
                href={`/tools/${tool.id}`}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-[#9D2235] transform hover:scale-105"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-br from-[#9D2235] to-purple-600 p-8 text-center">
                  <div className="text-6xl mb-3">{tool.icon}</div>
                  <h2 className="text-2xl font-bold text-white">{tool.name}</h2>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-sm font-semibold text-[#9D2235] dark:text-purple-400 uppercase tracking-wide">
                      {tool.category}
                    </p>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      tool.type === 'extension' 
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                        : 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                    }`}>
                      {tool.type === 'extension' ? '🧩 Extension' : '🌐 Web App'}
                    </span>
                  </div>
                  <p className="text-base font-medium text-gray-900 dark:text-white mb-3">
                    {tool.tagline}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {tool.description}
                  </p>

                  {/* Features Preview */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tool.features.slice(0, 3).map((feature, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                      >
                        {feature.icon} {feature.title}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-[#9D2235] dark:text-purple-400 font-semibold group-hover:underline">
                      Learn More →
                    </span>
                    <svg 
                      className="w-5 h-5 text-[#9D2235] dark:text-purple-400 transform group-hover:translate-x-1 transition-transform"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredTools.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500 dark:text-gray-400">
                No tools found for this filter.
              </p>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl border-2 border-blue-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">
            About Our Research Tools
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 mb-4 text-center">
            All tools are open-source and developed at Temple University&apos;s Human-Computer Interaction Lab. 
            Our mission is to make research tools accessible to everyone and advance the field of HCI and data visualization.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 bg-white dark:bg-gray-700 px-4 py-2 rounded-lg">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">100% Free</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-700 px-4 py-2 rounded-lg">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Open Source</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-700 px-4 py-2 rounded-lg">
              <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Research-Backed</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 mt-16 py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-4">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/5fcaa363238e860bf8af32a3/c03a8543-0111-4f88-8e3d-a7bc031aec4e/LinkedIn+Post+%281%29.png" 
                alt="Temple University HCI Lab"
                className="h-12 w-auto object-contain"
              />
              <div>
                <h3 className="text-base font-bold text-black dark:text-white">
                  Temple University HCI Lab
                </h3>
                <p className="text-sm text-black dark:text-gray-400">
                  Human-Computer Interaction Research
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-black dark:text-gray-300">
              <a href="#" className="hover:text-[#9D2235] transition-colors">Research</a>
              <a href="#" className="hover:text-[#9D2235] transition-colors">Documentation</a>
              <a href="#" className="hover:text-[#9D2235] transition-colors">GitHub</a>
              <a href="#" className="hover:text-[#9D2235] transition-colors">Publications</a>
            </div>
          </div>

          <div className="text-center text-sm text-black dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
            <p>
              © 2025 Temple University HCI Lab • MIT License • Open-source research software for educational purposes
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
