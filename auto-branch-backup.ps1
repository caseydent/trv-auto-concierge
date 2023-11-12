# Get the list of all branches
$branches = git branch | foreach { $_.TrimStart("* ").Trim() }

# Loop through each branch and create a backup
foreach ($branch in $branches) {
    # Define the backup branch name
    $backupBranch = "$branch-backup"

    # Checkout the branch and create its backup
    git checkout $branch
    git branch $backupBranch
}

# Switch back to the master branch
git checkout master
