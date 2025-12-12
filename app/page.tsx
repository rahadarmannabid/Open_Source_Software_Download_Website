'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [downloadCount, setDownloadCount] = useState<number | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    // Fetch global download count from API
    fetch('/api/downloads')
      .then(res => {
        if (!res.ok) {
          throw new Error(`API error: ${res.status}`);
        }
        return res.json();
      })
      .then(data => setDownloadCount(data.count || 0))
      .catch(error => {
        console.error('Error fetching download count:', error);
        setDownloadCount(0);
      });
  }, []);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    // Increment download count via API
    try {
      const response = await fetch('/api/downloads', {
        method: 'POST',
      });
      
      const data = await response.json();
      setDownloadCount(data.count);
    } catch (error) {
      console.error('Error incrementing download count:', error);
    }

    // Trigger download
    const link = document.createElement('a');
    link.href = '/Extension.zip';
    link.download = 'expert-goggles-extension.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => setIsDownloading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Research Header */}
      <div className="bg-gradient-to-r from-[#9D2235] to-[#7D1B2D] text-white py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            <span className="text-base font-medium">Temple University HCI Lab</span>
          </div>
          <div className="text-base">Research Tool</div>
        </div>
      </div>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Research Paper Style Header */}
          <div className="text-center mb-12 border-b-2 border-gray-200 dark:border-gray-700 pb-8">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Expert Goggles
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-black dark:text-gray-300 mb-6 font-light">
              An Interactive Learning Tool for Data Visualization Research
            </p>

            {/* Research Attribution */}
            <div className="text-base text-black dark:text-gray-300 mb-4">
              <p className="font-semibold">Temple University Human-Computer Interaction Lab</p>
              <p className="mt-1">Open-Source Research Software</p>
            </div>

            {/* Research Tags */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <span className="px-4 py-2 bg-[#9D2235] bg-opacity-10 text-[#9D2235] dark:bg-[#9D2235] dark:bg-opacity-30 dark:text-[#E57373] rounded-full text-base font-medium border border-[#9D2235] border-opacity-20">
                Data Visualization
              </span>
              <span className="px-4 py-2 bg-blue-600 bg-opacity-10 text-blue-700 dark:bg-blue-600 dark:bg-opacity-30 dark:text-blue-400 rounded-full text-base font-medium border border-blue-600 border-opacity-20">
                Human-Computer Interaction
              </span>
              <span className="px-4 py-2 bg-green-700 bg-opacity-10 text-green-800 dark:bg-green-700 dark:bg-opacity-30 dark:text-green-400 rounded-full text-base font-medium border border-green-700 border-opacity-20">
                Education Research
              </span>
              <span className="px-4 py-2 bg-purple-700 bg-opacity-10 text-purple-800 dark:bg-purple-700 dark:bg-opacity-30 dark:text-purple-400 rounded-full text-base font-medium border border-purple-700 border-opacity-20">
                Open Source
              </span>
            </div>
          </div>

          {/* Abstract Section */}
          <div className="mb-12 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border-l-4 border-[#9D2235]">
            <h2 className="text-base font-bold text-black dark:text-gray-300 uppercase tracking-wide mb-4">Abstract</h2>
            <p className="text-base text-black dark:text-gray-300 leading-relaxed">
              Expert Goggles is a research-driven Chrome extension designed to facilitate learning in data visualization. 
              Developed at Temple University&apos;s HCI Lab, this tool provides interactive, guided experiences that help 
              learners understand complex visualization concepts through hands-on exploration. The open-source nature of 
              this tool encourages community contributions and enables researchers to extend its capabilities for their 
              own studies in visualization education and human-computer interaction.
            </p>
          </div>

          {/* Download Button */}
          <div className="mb-6">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="group relative inline-flex items-center gap-3 bg-[#9D2235] hover:bg-[#7D1B2D] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-base"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {isDownloading ? 'Downloading...' : 'Download Extension'}
            </button>
          </div>

          {/* Download Counter */}
          {downloadCount !== null && (
            <div className="inline-flex items-center gap-2 text-black dark:text-gray-300 bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              <span className="font-medium text-base">{downloadCount.toLocaleString()} downloads</span>
            </div>
          )}
        </div>

        {/* Demo Section */}
        <div className="max-w-6xl mx-auto mt-16 mb-16">
          <h2 className="text-2xl font-bold mb-4 text-black dark:text-white text-center">Tool Demonstration</h2>
          <p className="text-base text-black dark:text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            Watch how Expert Goggles enhances data visualization learning through interactive guidance and real-time feedback.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Video Demo */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">Video Demo</h3>
              <div className="aspect-video rounded-lg overflow-hidden border-2 border-gray-300 dark:border-gray-600">
                <video 
                  className="w-full h-full object-cover" 
                  controls 
                  preload="metadata"
                  playsInline
                >
                  <source src="/demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Screenshots */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">Interface Screenshots</h3>
              <div className="space-y-4">
                {/* Main Screenshot */}
                <div className="aspect-video rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600">
                  <img 
                    src="/screenshots/Screenshot1.png" 
                    alt="Expert Goggles Main Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Small Screenshots Grid */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-video rounded overflow-hidden border border-gray-300 dark:border-gray-600">
                    <img 
                      src="/screenshots/Screenshot2.png" 
                      alt="Expert Goggles Feature 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-video rounded overflow-hidden border border-gray-300 dark:border-gray-600">
                    <img 
                      src="/screenshots/Screenshot3.png" 
                      alt="Expert Goggles Feature 3"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Contributions */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-4 text-black dark:text-white text-center">Research Contributions</h2>
          <p className="text-base text-black dark:text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            Key contributions to visualization education and HCI research.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-[#9D2235] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="w-12 h-12 bg-[#9D2235] bg-opacity-10 dark:bg-[#9D2235] dark:bg-opacity-30 rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
                <svg className="w-6 h-6 text-[#9D2235] dark:text-[#E57373]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-black dark:text-white">Evidence-Based Learning</h3>
              <p className="text-base text-black dark:text-gray-300 flex-grow">
                Grounded in visualization research and cognitive science principles to provide effective learning pathways for understanding data visualization concepts.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-[#9D2235] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="w-12 h-12 bg-blue-600 bg-opacity-10 dark:bg-blue-600 dark:bg-opacity-30 rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
                <svg className="w-6 h-6 text-blue-700 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-black dark:text-white">Community-Driven Research</h3>
              <p className="text-base text-black dark:text-gray-300 flex-grow">
                Open-source platform enabling researchers and educators to contribute, extend, and adapt the tool for diverse educational and research contexts.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-[#9D2235] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="w-12 h-12 bg-green-700 bg-opacity-10 dark:bg-green-700 dark:bg-opacity-30 rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
                <svg className="w-6 h-6 text-green-700 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-black dark:text-white">Reproducible Methods</h3>
              <p className="text-base text-black dark:text-gray-300 flex-grow">
                Transparent implementation and documentation supporting reproducibility in visualization education research and empirical studies.
              </p>
            </div>
          </div>
        </div>

        {/* Installation Steps */}
        <div className="max-w-4xl mx-auto mt-16 mb-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-3 text-black dark:text-white">
            Installation Guide
          </h2>
          <p className="text-center text-base text-black dark:text-gray-400 mb-8">
            For researchers, educators, and students
          </p>
          <div className="space-y-4">
            <div className="flex gap-4 items-start bg-white dark:bg-gray-700 p-6 rounded-lg border-l-4 border-[#9D2235]">
              <div className="flex-shrink-0 w-10 h-10 bg-[#9D2235] text-white rounded-full flex items-center justify-center font-bold text-base">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">Download the Extension</h3>
                <p className="text-base text-black dark:text-gray-300">Click the download button above to obtain the extension package as a ZIP file.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-white dark:bg-gray-700 p-6 rounded-lg border-l-4 border-[#9D2235]">
              <div className="flex-shrink-0 w-10 h-10 bg-[#9D2235] text-white rounded-full flex items-center justify-center font-bold text-base">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">Extract the Archive</h3>
                <p className="text-base text-black dark:text-gray-300">Unzip the downloaded file to a permanent location on your system.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-white dark:bg-gray-700 p-6 rounded-lg border-l-4 border-[#9D2235]">
              <div className="flex-shrink-0 w-10 h-10 bg-[#9D2235] text-white rounded-full flex items-center justify-center font-bold text-base">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">Load in Chrome Browser</h3>
                <p className="text-base text-black dark:text-gray-300">
                  Navigate to <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded text-sm">chrome://extensions</code>, 
                  enable &quot;Developer mode&quot;, click &quot;Load unpacked&quot;, and select the extracted directory.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-white dark:bg-gray-700 p-6 rounded-lg border-l-4 border-[#9D2235]">
              <div className="flex-shrink-0 w-10 h-10 bg-[#9D2235] text-white rounded-full flex items-center justify-center font-bold text-base">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">Begin Research</h3>
                <p className="text-base text-black dark:text-gray-300">The tool is now ready for data visualization learning and research activities.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 mt-0 py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          {/* Compact Layout */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            {/* Logo and Title */}
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

            {/* Quick Links */}
            <div className="flex flex-wrap gap-6 text-sm text-black dark:text-gray-300">
              <a href="#" className="hover:text-[#9D2235] transition-colors">Research</a>
              <a href="#" className="hover:text-[#9D2235] transition-colors">Documentation</a>
              <a href="#" className="hover:text-[#9D2235] transition-colors">GitHub</a>
              <a href="#" className="hover:text-[#9D2235] transition-colors">Publications</a>
            </div>
          </div>

          {/* Copyright */}
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
