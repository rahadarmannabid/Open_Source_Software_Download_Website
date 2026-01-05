import { tools, getToolById } from '@/lib/tools';
import type { Metadata } from 'next';

// Generate static params for all tools at build time
export async function generateStaticParams() {
  return tools.map((tool) => ({
    id: tool.id,
  }));
}

// Allow dynamic routes that aren't pre-generated
export const dynamicParams = true;

// Generate metadata for each tool page
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const tool = getToolById(id);
  
  if (!tool) {
    return {
      title: 'Tool Not Found',
      description: 'The requested tool could not be found.',
    };
  }

  return {
    title: `${tool.name} - Open Source Tools`,
    description: tool.description,
    openGraph: {
      title: tool.name,
      description: tool.description,
      type: 'website',
    },
  };
}

export default function ToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

