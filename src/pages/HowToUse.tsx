
import React, { useState } from 'react';
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Settings, Zap, MessageCircle, Terminal, FileText, Copy, Check } from "lucide-react";

const HowToUse = () => {
  const [copiedStates, setCopiedStates] = useState<{[key: string]: boolean}>({});

  const copyToClipboard = async (text: string, id: string) => {
    console.log('Attempting to copy:', text);
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        console.log('Copied using clipboard API');
      } else {
        // Fallback for browsers without clipboard API or non-secure contexts
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        textArea.remove();
        console.log('Fallback copy successful:', successful);
      }
      setCopiedStates(prev => ({ ...prev, [id]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [id]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      // Try one more fallback
      try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        console.log('Emergency fallback used');
      } catch (fallbackErr) {
        console.error('All copy methods failed:', fallbackErr);
      }
      // Still show feedback
      setCopiedStates(prev => ({ ...prev, [id]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [id]: false }));
      }, 2000);
    }
  };

  const steps = [
    {
      icon: <Download className="w-8 h-8 text-blue-600" />,
      title: "Setup Figma MCP",
      description: "Get started by downloading the setup script and running it in Windows PowerShell for automatic environment configuration.",
      substeps: [
        "Download fsd-setup.ps1 script from the website",
        "Open Windows PowerShell",
        "Run the fsd-setup.ps1 script to automatically configure your environment",
        "Note: macOS support is currently being built and not yet supported"
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-green-600" />,
      title: "Create New Project",
      description: "Use pnpm to scaffold a new project with our webui template, setting up all the necessary files and dependencies.",
      substeps: [
        "Run 'pnpm webui:create' to scaffold a new project"
      ]
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "Start Development",
      description: "Open your webui folder and start chatting with the webui_desktop to begin your development workflow.",
      substeps: [
        "Open webui folder",
        "Use '/' to chat with webui_desktop"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              How to Use FSD
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started with FSD in three simple steps and transform your Figma designs into production-ready code
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card key={index} className="bg-white border-gray-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-lg font-bold text-gray-600">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">
                        {step.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pl-16">
                  <CardDescription className="text-gray-600 text-base leading-relaxed mb-4">
                    {step.description}
                  </CardDescription>
                  <ul className="space-y-2 mb-6">
                    {step.substeps.map((substep, substepIndex) => (
                      <li key={substepIndex} className="flex items-start">
                        <span className="text-gray-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700 text-sm">{substep}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Additional MCP Setup Options for Step 1 */}
                  {index === 0 && (
                    <div className="mt-6 space-y-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Automated Setup Process:</h4>
                      
                      {/* Primary Option: Using fsd-setup.ps1 */}
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                        <div className="flex items-center mb-3">
                          <Terminal className="w-5 h-5 text-blue-600 mr-2" />
                          <h5 className="font-semibold text-gray-900">Recommended: Windows PowerShell Setup</h5>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-medium text-gray-700 mb-2">Steps:</p>
                            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                              <li>Download the fsd-setup.ps1 script from this website</li>
                              <li>Open Windows PowerShell</li>
                              <li>Navigate to the downloaded file location</li>
                              <li>Set execution policy (required):</li>
                            </ol>
                            <div className="bg-gray-900 text-green-400 p-3 rounded-md text-xs font-mono overflow-x-auto mt-2 relative">
                              <button
                                onClick={() => {
                                  const textToCopy = 'Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass';
                                  console.log('Copying:', textToCopy);
                                  copyToClipboard(textToCopy, 'powershell-policy');
                                }}
                                className="absolute top-2 right-2 p-1 hover:bg-gray-700 rounded transition-colors"
                                title="Copy to clipboard"
                              >
                                {copiedStates['powershell-policy'] ? (
                                  <Check className="w-4 h-4 text-green-400" />
                                ) : (
                                  <Copy className="w-4 h-4 text-gray-400 hover:text-white" />
                                )}
                              </button>
                              <code>Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass</code>
                            </div>
                            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700" start={5}>
                              <li>Run the script:</li>
                            </ol>
                            <div className="bg-gray-900 text-green-400 p-3 rounded-md text-xs font-mono overflow-x-auto mt-2">
                              <code>
                                <a 
                                  href="/fsd-setup.ps1" 
                                  download="fsd-setup.ps1" 
                                  className="text-blue-400 hover:text-blue-300 underline"
                                >
                                  ./fsd-setup.ps1
                                </a>
                              </code>
                            </div>
                            <p className="text-xs text-gray-600 mt-2">
                              The script will automatically install UV, keyring, vsts-npm-auth, and configure your MCP setup.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* macOS Notice */}
                      <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                        <div className="flex items-center mb-3">
                          <FileText className="w-5 h-5 text-amber-600 mr-2" />
                          <h5 className="font-semibold text-gray-900">macOS Support</h5>
                        </div>
                        <p className="text-sm text-gray-700">
                          macOS support is currently being built and is not yet supported. Please use a Windows environment for now.
                        </p>
                      </div>

                      {/* Manual Option for Advanced Users */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center mb-3">
                          <FileText className="w-5 h-5 text-purple-600 mr-2" />
                          <h5 className="font-semibold text-gray-900">Manual Setup (Advanced Users)</h5>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-2">If you prefer manual configuration, first run these commands:</p>
                          <div className="bg-gray-900 text-green-400 p-3 rounded-md text-xs font-mono overflow-x-auto mb-3 relative">
                            <button
                              onClick={() => copyToClipboard('npm install -g vsts-npm-auth --registry https://registry.npmjs.com --always-auth false\nvsts-npm-auth -config .npmrc -f', 'npm-commands')}
                              className="absolute top-2 right-2 p-1 hover:bg-gray-700 rounded transition-colors"
                              title="Copy to clipboard"
                            >
                              {copiedStates['npm-commands'] ? (
                                <Check className="w-4 h-4 text-green-400" />
                              ) : (
                                <Copy className="w-4 h-4 text-gray-400 hover:text-white" />
                              )}
                            </button>
                            <div className="space-y-1">
                              <div>npm install -g vsts-npm-auth --registry https://registry.npmjs.com --always-auth false</div>
                              <div>vsts-npm-auth -config .npmrc -f</div>
                            </div>
                          </div>
                          <p className="text-sm font-medium text-gray-700 mb-2">Then press F1 and search for "mcp: open user configuration":</p>
                          <div className="bg-gray-900 text-green-400 p-3 rounded-md text-xs font-mono overflow-x-auto relative">
                            <button
                              onClick={() => copyToClipboard(`{
    "servers": {
        "edge-figma-mcp": {
            "command": "npx",
            "args": [
                "-y",
                "--registry",
                "https://pkgs.dev.azure.com/microsoft/Edge/_packaging/edge_webui/npm/registry/",
                "edge-figma-mcp",
                "--stdio"
            ],
            "env": {
                "FIGMA_API_KEY": "your-figma-api-key"
            }
        }
    }
}`, 'mcp-config')}
                              className="absolute top-2 right-2 p-1 hover:bg-gray-700 rounded transition-colors"
                              title="Copy to clipboard"
                            >
                              {copiedStates['mcp-config'] ? (
                                <Check className="w-4 h-4 text-green-400" />
                              ) : (
                                <Copy className="w-4 h-4 text-gray-400 hover:text-white" />
                              )}
                            </button>
                            <pre>
{`{
    "servers": {
        "edge-figma-mcp": {
            "command": "npx",
            "args": [
                "-y",
                "--registry",
                "https://pkgs.dev.azure.com/microsoft/Edge/_packaging/edge_webui/npm/registry/",
                "edge-figma-mcp",
                "--stdio"
            ],
            "env": {
                "FIGMA_API_KEY": "your-figma-api-key"
            }
        }
    }
}`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 bg-white rounded-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What You Get
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Figma Integration</h3>
                <p className="text-gray-600">Seamless connection between Figma designs and code generation</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Interactive Development</h3>
                <p className="text-gray-600">Chat-based interface for real-time code generation and modifications</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Modern Tooling</h3>
                <p className="text-gray-600">Built with latest development tools and best practices</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Easy Setup</h3>
                <p className="text-gray-600">One-click environment setup and configuration</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/fsd-setup.ps1';
                link.download = 'fsd-setup.ps1';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-block"
            >
              Download Setup Script
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
