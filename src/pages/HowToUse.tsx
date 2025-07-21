
import React, { useState } from 'react';
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Settings, Zap, MessageCircle, Terminal, FileText, Copy, Check, HelpCircle } from "lucide-react";

const HowToUse = () => {
  const [copiedStates, setCopiedStates] = useState<{[key: string]: boolean}>({});
  const [showTooltip, setShowTooltip] = useState<number | null>(null);
  const [tooltipCopied, setTooltipCopied] = useState(false);

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
      description: "Choose your preferred setup method:",
      substeps: [],
      showHelp: true
    },
    {
      icon: <Settings className="w-8 h-8 text-green-600" />,
      title: "Create New Project",
      description: "",
      substeps: [
        "pnpm webui:create"
      ],
   
      showHelp: true
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "Start Development",
      description: "Open edge_webui folder, start job in GitHub Copilot",
      substeps: [
        "/webui_desktop help dev this design: ${link}"
      ],
      showHelp: true
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
                      <CardTitle className="text-xl text-gray-900 flex items-center">
                        {step.title}
                        {step.showHelp && (
                          <div 
                            className="relative ml-2"
                            onMouseEnter={() => setShowTooltip(index)}
                            onMouseLeave={() => setShowTooltip(null)}
                          >
                            <HelpCircle 
                              className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-help"
                            />
                            {showTooltip === index && (
                              <div 
                                className="absolute left-6 top-0 z-10 w-80 bg-gray-900 text-white text-sm rounded-lg p-4 shadow-lg cursor-pointer hover:bg-gray-800 transition-colors"
                                onClick={() => {
                                  let text = '';
                                  if (index === 0) {
                                    text = `How to get your Figma API key:
1. Go to: https://www.figma.com/files
2. Click on your profile picture in the top left
3. Go to Settings → Security
4. Scroll down and click "Generate new token"
5. Input token name (e.g., 'EdgeWebDev')
6. Select Read-only permissions if available
7. Click "Generate token"
8. Copy the token (you won't see it again)

Note: The VS Code extension includes detailed setup instructions`;
                                  } else if (index === 1) {
                                    text = `If you're not familiar with WebUI:
See the walkthrough for detailed setup instructions:
https://dev.azure.com/microsoft/Edge/_wiki/wikis/Edge.wiki/138659/WebUI-Development-Walkthrough`;
                                  } else if (index === 2) {
                                    text = `How to get Figma link:
1. Select the Figma component or design element
2. Click on the component name in the left panel or select the design edge
3. Right-click on the selected element
4. Choose "Copy" from the context menu
5. Select "Copy link to section" from the submenu

Replace \${link} in the command with your copied Figma link.`;
                                  }
                                  copyToClipboard(text, 'tooltip');
                                  setTooltipCopied(true);
                                  setTimeout(() => setTooltipCopied(false), 2000);
                                }}
                                title="Click to copy instructions"
                              >
                                <div className="flex items-center justify-between mb-2">
                                  <div className="font-semibold">
                                    {index === 0 ? "How to get your Figma API key:" : 
                                     index === 1 ? "WebUI Help" : "How to get Figma link:"}
                                  </div>
                                  <div className="flex items-center">
                                    {tooltipCopied ? (
                                      <Check className="w-4 h-4 text-green-400" />
                                    ) : (
                                      <Copy className="w-4 h-4 text-gray-400 hover:text-white" />
                                    )}
                                  </div>
                                </div>
                                {index === 0 ? (
                                  <ol className="space-y-1 text-xs">
                                    <li>1. Go to: <a href="https://www.figma.com/files" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">https://www.figma.com/files</a></li>
                                    <li>2. Click on your profile picture in the top left</li>
                                    <li>3. Go to Settings → Security</li>
                                    <li>4. Scroll down and click "Generate new token"</li>
                                    <li>5. Input token name (e.g., 'EdgeWebDev')</li>
                                    <li>6. Select Read-only permissions if available</li>
                                    <li>7. Click "Generate token"</li>
                                    <li>8. Copy the token (you won't see it again)</li>
                                  </ol>
                                ) : index === 1 ? (
                                  <div className="space-y-2 text-xs">
                                    <div className="text-yellow-300 font-medium mb-2">If you're not familiar with WebUI:</div>
                                    <div className="bg-gray-800 rounded p-2">
                                      See the <a href="https://dev.azure.com/microsoft/Edge/_wiki/wikis/Edge.wiki/138659/WebUI-Development-Walkthrough" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline font-medium">walkthrough</a> for detailed setup instructions
                                    </div>
                                  </div>
                                ) : (
                                  <div className="space-y-2 text-xs">
                                    <div className="text-purple-300 font-medium mb-2">How to get your Figma link:</div>
                                    <ol className="space-y-1">
                                      <li>1. <span className="text-blue-300">Select</span> the Figma component or design element</li>
                                      <li>2. <span className="text-blue-300">Click</span> on the component name in left panel or design edge</li>
                                      <li>3. <span className="text-blue-300">Right-click</span> on the selected element</li>
                                      <li>4. Choose <span className="text-green-300">"Copy"</span> from the context menu</li>
                                      <li>5. Select <span className="text-green-300">"Copy link to section"</span> from submenu</li>
                                    </ol>
                                    <div className="bg-gray-800 rounded p-2 mt-2">
                                      <span className="text-yellow-300">Tip:</span> Replace <code className="text-orange-300">{'${link}'}</code> in the command with your copied link
                                    </div>
                                  </div>
                                )}
                                <div className="mt-2 text-xs text-gray-300 italic">
                                  {index === 0 
                                    ? "Note: The VS Code extension includes detailed setup instructions"
                                    : index === 1 
                                    ? ""
                                    : "Note: Make sure you have access to the Figma design file"
                                  }
                                </div>
                                <div className="absolute -left-2 top-2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900"></div>
                              </div>
                            )}
                          </div>
                        )}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pl-16">
                  <CardDescription className="text-gray-600 text-base leading-relaxed mb-4">
                    {step.description.includes('GitHub Copilot') ? (
                      <>
                        {step.description.split('GitHub Copilot')[0]}
                        <strong className="text-gray-900 font-semibold">GitHub Copilot</strong>
                        {step.description.split('GitHub Copilot')[1]}
                      </>
                    ) : (
                      step.description
                    )}
                  </CardDescription>
                  {/* Show substeps in colorful rectangles for Step 2 and 3, regular list for others */}
                  {(index === 1 || index === 2) && step.substeps.length > 0 ? (
                    <div className="mt-6 space-y-4">
                      {step.substeps.map((substep, substepIndex) => (
                        <div key={substepIndex} className="bg-gray-900 rounded-md p-3 relative">
                          <code className="text-green-400 text-sm font-mono">{substep}</code>
                          <button
                            onClick={() => copyToClipboard(substep, `substep-${index}-${substepIndex}`)}
                            className="absolute top-2 right-2 p-1 hover:bg-gray-700 rounded transition-colors"
                            title="Copy to clipboard"
                          >
                            {copiedStates[`substep-${index}-${substepIndex}`] ? (
                              <Check className="w-4 h-4 text-green-400" />
                            ) : (
                              <Copy className="w-4 h-4 text-gray-400" />
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : step.substeps.length > 0 ? (
                    <ul className="space-y-2 mb-6">
                      {step.substeps.map((substep, substepIndex) => (
                        <li key={substepIndex} className="flex items-start">
                          <span className="text-gray-400 mr-3 mt-1">•</span>
                          <span className="text-gray-700 text-sm">{substep}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {/* Setup Options for Step 1 */}
                  {index === 0 && (
                    <div className="mt-6 space-y-4">
                      {/* Script Setup */}
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                        <h5 className="font-semibold text-gray-900 mb-2">Run the Script</h5>
                        <p className="text-sm text-gray-700 mb-3">Download and run FSD setup script with administrator</p>
                        <button 
                          onClick={() => {
                            const link = document.createElement('a');
                            link.href = '/fsd-setup.ps1';
                            link.download = 'fsd-setup.ps1';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          }}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors text-sm"
                        >
                          Download Script
                        </button>
                      </div>

                      {/* VS Code Extension */}
                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <h5 className="font-semibold text-gray-900 mb-2">Use VS Code Extension</h5>
                        <p className="text-sm text-gray-700 mb-3">Install the FSD Edge Agent extension for one-click setup directly in VS Code</p>
                        <button 
                          onClick={() => {
                            const link = document.createElement('a');
                            link.href = '/edge-fsd-agent-extension-0.3.8.vsix';
                            link.download = 'edge-fsd-agent-extension-0.3.8.vsix';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          }}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-colors text-sm"
                        >
                          Download VS Code Extension
                        </button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default HowToUse;
