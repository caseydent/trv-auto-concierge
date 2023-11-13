#!/usr/bin/env pwsh
# Enhanced Git Branch Management Script for Worktrees

param (
    [switch]$dryRun
)

$worktreeBasePath = "c:/projects"
$featureBranches = @("aboutus", "navbar-feature", "contacts", "home", "howitworks", "services", "footer")

function Log-Message {
    param (
        [string]$Message
    )
    Write-Host $Message
}

function Check-UncommittedChanges {
    param (
        [string]$WorktreePath
    )
    Set-Location $WorktreePath
    $status = git status --porcelain
    if ($status) {
        Log-Message "There are uncommitted changes in $WorktreePath. Please commit or stash them before running this script."
        return $false
    }
    return $true
}

# Ensure we are in the master branch worktree
Set-Location "$worktreeBasePath/master-dir"
$currentBranch = git rev-parse --abbrev-ref HEAD
if ($currentBranch -ne "master") {
    Log-Message "Current worktree is not on master branch. Please switch to the master worktree."
    exit
}

# Check for uncommitted changes in master worktree
if (-not (Check-UncommittedChanges "$worktreeBasePath/master-dir")) {
    exit
}

foreach ($branch in $featureBranches) {
    $worktreePath = "$worktreeBasePath/$($branch + '-dir')"
    if (Test-Path $worktreePath) {
        Log-Message "Processing worktree for branch: $branch"

        if (-not (Check-UncommittedChanges $worktreePath)) {
            continue
        }

        try {
            if (-not $dryRun) {
                Set-Location $worktreePath
                git merge master
            }
            Log-Message "Merged master into $branch worktree."
        }
        catch {
            Log-Message "Error occurred while processing $branch worktree: $_"
        }
    }
    else {
        Log-Message "Worktree for branch $branch does not exist."
    }
}

# Return to the master worktree
Set-Location "$worktreeBasePath/master-dir"
Log-Message "Script completed. Returned to master worktree."
