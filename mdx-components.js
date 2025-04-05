import Image from 'next/image';

// Callout component for important information
export function Callout({ children, type = 'default' }) {
  const styles = {
    default: 'bg-gray-100 border-gray-300 text-gray-800',
    info: 'bg-blue-50 border-blue-300 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-300 text-yellow-800',
    error: 'bg-red-50 border-red-300 text-red-800',
    success: 'bg-green-50 border-green-300 text-green-800',
  };

  return (
    <div className={`p-4 my-4 border-l-4 rounded-r ${styles[type]}`}>
      {children}
    </div>
  );
}

// Code block with syntax highlighting (simplified version)
export function CodeBlock({ children, language }) {
  return (
    <div className="my-6 rounded-lg overflow-hidden">
      <div className="bg-gray-800 text-white text-xs px-4 py-1">
        {language}
      </div>
      <pre className="bg-gray-900 p-4 overflow-x-auto">
        <code className="text-gray-100 text-sm">{children}</code>
      </pre>
    </div>
  );
}

// Chart component for visualizing data
export function PerformanceChart({ data }) {
  return (
    <div className="my-6 bg-white p-4 border rounded-lg">
      <h4 className="font-medium text-center mb-4">Performance Improvements</h4>
      <div className="flex justify-between items-end h-48 mt-4">
        {data.map((item) => (
          <div key={item.name} className="flex flex-col items-center w-full">
            <div className="flex w-full justify-center space-x-1">
              <div 
                className="w-4 bg-gray-400"
                style={{ height: `${item.before * 30}px` }}
                title={`Before: ${item.before}s`}
              />
              <div 
                className="w-4 bg-blue-500"
                style={{ height: `${item.after * 30}px` }}
                title={`After: ${item.after}s`}
              />
            </div>
            <div className="text-xs mt-1 text-center">{item.name}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 text-xs">
        <div className="flex items-center mr-4">
          <div className="w-3 h-3 bg-gray-400 mr-1"></div>
          <span>Before</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-500 mr-1"></div>
          <span>After</span>
        </div>
      </div>
    </div>
  );
}

// Define components that will be available in MDX files
const components = {
  img: (props) => (
    <div className="relative w-full h-64 my-6">
      <Image
        {...props}
        fill
        className="object-cover rounded-lg"
        alt={props.alt || 'Blog image'}
      />
    </div>
  ),
  h2: (props) => (
    <p {...props}/>
  ),
  Callout,
  CodeBlock,
  PerformanceChart,
}

export function useMDXComponents(components) {
    return {
      ...components,
    }
  }