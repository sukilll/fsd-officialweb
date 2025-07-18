#!/usr/bin/env pwsh

# Setup Script for Edge Figma MCP Development Environment
# This script automates the installation and configuration process

Write-Host "🚀 Starting Edge Figma MCP Development Environment Setup..." -ForegroundColor Green

# Function to check if a command was successful
function Test-CommandSuccess {
    param($ExitCode, $CommandName)
    if ($ExitCode -ne 0) {
        Write-Host "❌ Failed to execute: $CommandName" -ForegroundColor Red
        exit 1
    } else {
        Write-Host "✅ Successfully completed: $CommandName" -ForegroundColor Green
    }
}

# 1. Install UV
Write-Host "`n📦 Step 1: Installing UV..." -ForegroundColor Cyan
try {
    powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
    Test-CommandSuccess $LASTEXITCODE "UV installation"
} catch {
    Write-Host "❌ Failed to install UV: $_" -ForegroundColor Red
    exit 1
}

# 2. Install keyring with artifacts-keyring
Write-Host "`n🔑 Step 2: Installing keyring with artifacts-keyring..." -ForegroundColor Cyan
try {
    uv tool install keyring --with artifacts-keyring
    Test-CommandSuccess $LASTEXITCODE "Keyring installation"
} catch {
    Write-Host "❌ Failed to install keyring: $_" -ForegroundColor Red
    exit 1
}

# 3. Install vsts-npm-auth globally
Write-Host "`n🔧 Step 3: Installing vsts-npm-auth globally..." -ForegroundColor Cyan
try {
    npm install -g vsts-npm-auth --registry https://registry.npmjs.com
    Test-CommandSuccess $LASTEXITCODE "vsts-npm-auth installation"
} catch {
    Write-Host "❌ Failed to install vsts-npm-auth: $_" -ForegroundColor Red
    exit 1
}

# 4. Configure vsts-npm-auth
# Step 1: Writing the .npmrc configuration file...
Write-Host "`n⚙️ Step 1: Writing the .npmrc configuration file..." -ForegroundColor Cyan

$npmrcContent = @"
registry=https://pkgs.dev.azure.com/microsoft/Edge/_packaging/edge_webui/npm/registry/
always-auth=true
update-notifier=false
verify-store-integrity=false
store-dir=tools/packages/.pnpm
workspace-concurrency=1
"@

Set-Content -Path ".\.npmrc" -Value $npmrcContent

Write-Host "✅ .npmrc configuration file written successfully!" -ForegroundColor Green

# Step 2: Configuring vsts-npm-auth...
Write-Host "`n⚙️ Step 2: Configuring vsts-npm-auth..." -ForegroundColor Cyan
try {
    vsts-npm-auth -config .npmrc -f
    if ($LASTEXITCODE -ne 0) {
        throw "vsts-npm-auth configuration failed with exit code $LASTEXITCODE"
    }
} catch {
    Write-Host "❌ Failed to configure vsts-npm-auth: $_" -ForegroundColor Red
    exit 1
}



# Step 5: Adding MCP configuration to mcp.json...
Write-Host "`n🔗 Step 5: Adding MCP configuration to mcp.json..." -ForegroundColor Cyan
$figmaApiKey = Read-Host "⚠️ Note: Enter your actual FIGMA_API_KEY"

$mcpConfig = @{
    command = "npx"
    args = @("-y", "--registry", "https://pkgs.dev.azure.com/microsoft/Edge/_packaging/edge_webui/npm/registry/", "edge-figma-mcp", "--stdio")
    env = @{ FIGMA_API_KEY = $figmaApiKey }
    type = "stdio"
}

# Path to the mcp.json file using a wildcard for the username
$mcpJsonPath = "$env:APPDATA\Code\User\mcp.json"

if (-Not (Test-Path $mcpJsonPath)) {
    # Create an empty object with servers and inputs if the file does not exist
    $mcpData = @{
        servers = @{}
        inputs = @()
    }
} else {
    # Read existing configurations
    $mcpData = Get-Content $mcpJsonPath | ConvertFrom-Json -AsHashtable
}

# Add the new MCP configuration to the servers object
$mcpData.servers["edge-figma-mcp"] = $mcpConfig

# Write back to the mcp.json file
$mcpData | ConvertTo-Json -Depth 3 | Set-Content $mcpJsonPath

Write-Host "✅ MCP configuration added successfully!" -ForegroundColor Green



