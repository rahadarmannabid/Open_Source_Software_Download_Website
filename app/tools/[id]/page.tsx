'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getToolById } from '@/lib/tools';
import CommentSection from '@/components/CommentSection';

export default function ToolPage() {
  const params = useParams();
  const toolId = params.id as string;
  const tool = getToolById(toolId);

  const [downloadCount, setDownloadCount] = useState<number | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [teasers, setTeasers] = useState<string[]>([]);

  useEffect(() => {
    if (!tool) return;
    
    // Fetch download count for this specific tool
    fetch(`/api/downloads?tool=${tool.id}`)
      .then(res => res.json())
      .then(data => setDownloadCount(data.count ?? 0))
      .catch(error => {
        console.error('Error fetching download count:', error);
        setDownloadCount(0);
      });

    // Fetch teaser images for this specific tool
    fetch(`/api/teasers?tool=${tool.id}`)
      .then(res => res.json())
      .then(data => setTeasers(data.teasers ?? []))
      .catch(error => {
        console.error('Error fetching teasers:', error);
        setTeasers([]);
      });
  }, [tool]);

  const handleDownload = async () => {
    if (!tool || !tool.downloadFile) return;
    
    const downloadUrl = tool.downloadFile; // Store in const for TypeScript
    setIsDownloading(true);
    
    // Increment download count via API
    try {
      const response = await fetch('/api/downloads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tool: tool.id }),
      });
      
      if (response.ok) {
        const data = await response.json();
        setDownloadCount(data.count ?? 0);
      }
    } catch (error) {
      console.error('Error incrementing download count:', error);
    }

    // Trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `${tool.id}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => setIsDownloading(false), 1000);
  };

  const handleLaunchApp = async () => {
    if (!tool || !tool.webappUrl) return;
    
    setIsDownloading(true);
    
    // Increment click count via API
    try {
      const response = await fetch('/api/downloads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tool: tool.id }),
      });
      
      if (response.ok) {
        const data = await response.json();
        setDownloadCount(data.count ?? 0);
      }
    } catch (error) {
      console.error('Error incrementing click count:', error);
    }

    // Open web app in new tab
    window.open(tool.webappUrl, '_blank', 'noopener,noreferrer');
    
    setTimeout(() => setIsDownloading(false), 500);
  };

  // 404 if tool not found
  if (!tool) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Tool Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The tool you&apos;re looking for doesn&apos;t exist.</p>
          <Link 
            href="/"
            className="bg-[#9D2235] text-white px-6 py-3 rounded-lg hover:bg-[#7D1B2D] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#9D2235] to-[#7D1B2D] text-white py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-base font-medium">Back to All Tools</span>
          </Link>
          <div className="text-base">Temple University HCI Lab</div>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Tool Header */}
          <div className="text-center mb-12 border-b-2 border-gray-200 dark:border-gray-700 pb-8">
            <div className="text-7xl mb-4">{tool.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {tool.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 font-light">
              {tool.tagline}
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-[#9D2235] bg-opacity-10 text-[#9D2235] dark:bg-[#9D2235] dark:bg-opacity-30 dark:text-[#E57373] rounded-full text-base font-medium border border-[#9D2235] border-opacity-20">
                {tool.category}
              </span>
              <span className={`px-4 py-2 rounded-full text-base font-medium border ${
                tool.type === 'extension'
                  ? 'bg-blue-600 bg-opacity-10 text-blue-700 dark:bg-blue-600 dark:bg-opacity-30 dark:text-blue-400 border-blue-600 border-opacity-20'
                  : 'bg-green-600 bg-opacity-10 text-green-700 dark:bg-green-600 dark:bg-opacity-30 dark:text-green-400 border-green-600 border-opacity-20'
              }`}>
                {tool.type === 'extension' ? '🧩 Chrome Extension' : '🌐 Web Application'}
              </span>
              <span className="px-4 py-2 bg-purple-700 bg-opacity-10 text-purple-800 dark:bg-purple-700 dark:bg-opacity-30 dark:text-purple-400 rounded-full text-base font-medium border border-purple-700 border-opacity-20">
                Open Source
              </span>
            </div>
          </div>

          {/* Authors Section */}
          <div className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-3 mb-4">
              <svg className="w-6 h-6 text-[#9D2235] dark:text-[#E57373] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Authors</h3>
                <div className="flex flex-wrap gap-2">
                  {tool.authors.map((author, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {author}
                    </span>
                  ))}
                </div>
                {tool.maintainer && (
                  <div className="mt-4 flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-400">
                      Maintained by: <span className="font-semibold text-gray-900 dark:text-white">{tool.maintainer}</span>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Abstract Section */}
          <div className="mb-12 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border-l-4 border-[#9D2235]">
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-300 uppercase tracking-wide mb-4">About</h2>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {tool.fullDescription}
            </p>
          </div>

          {/* Download/Launch Button & Counter */}
          <div className="mb-12 flex flex-col items-center gap-4">
            {tool.webappUrl ? (
              // Web App - Launch Button
              <button
                onClick={handleLaunchApp}
                disabled={isDownloading}
                className="group relative inline-flex items-center gap-3 bg-[#9D2235] hover:bg-[#7D1B2D] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {isDownloading ? 'Launching...' : 'Launch App'}
              </button>
            ) : tool.downloadFile ? (
              // Extension - Download Button
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
            ) : null}

            {downloadCount !== null && (
              <div className="inline-flex items-center gap-2 text-gray-900 dark:text-gray-300 bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  {tool.webappUrl ? (
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  ) : (
                    <>
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </>
                  )}
                </svg>
                <span className="font-medium text-base">
                  {downloadCount.toLocaleString()} {tool.webappUrl ? 'launches' : 'downloads'}
                </span>
              </div>
            )}
          </div>

          {/* Demo Video */}
          {tool.demoVideo && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Demo Video</h2>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="aspect-video rounded-lg overflow-hidden border-2 border-gray-300 dark:border-gray-600">
                  <iframe 
                    className="w-full h-full" 
                    src={tool.demoVideo}
                    title={`${tool.name} Demo Video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          )}

          {/* Teasers */}
          {teasers && teasers.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Teasers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {teasers.map((teaser, idx) => (
                  <div 
                    key={idx}
                    className="rounded-lg overflow-hidden border-2 border-gray-300 dark:border-gray-600 hover:border-[#9D2235] hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <img 
                      src={teaser} 
                      alt={`${tool.name} teaser ${idx + 1}`}
                      className="w-full h-auto object-contain bg-gray-50 dark:bg-gray-800"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {tool.features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-[#9D2235] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{feature.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                      <p className="text-base text-gray-600 dark:text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Installation Guide */}
          <div className="mb-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-3 text-gray-900 dark:text-white">
              Installation Guide
            </h2>
            <p className="text-center text-base text-gray-600 dark:text-gray-400 mb-8">
              Follow these steps to install {tool.name}
            </p>
            <div className="space-y-4">
              {tool.installationSteps.map((step, idx) => (
                <div 
                  key={idx}
                  className="flex gap-4 items-start bg-white dark:bg-gray-700 p-6 rounded-lg border-l-4 border-[#9D2235]"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[#9D2235] text-white rounded-full flex items-center justify-center font-bold text-base">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                    <p className="text-base text-gray-700 dark:text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Links */}
          {(tool.githubUrl || tool.documentationUrl) && (
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {tool.githubUrl && (
                <a
                  href={tool.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  View on GitHub
                </a>
              )}
              {tool.documentationUrl && (
                <a
                  href={tool.documentationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Documentation
                </a>
              )}
            </div>
          )}

          {/* Comment Section */}
          <CommentSection toolId={tool.id} toolName={tool.name} />
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
              <Link href="/" className="hover:text-[#9D2235] transition-colors">All Tools</Link>
              <a href="#" className="hover:text-[#9D2235] transition-colors">Research</a>
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

