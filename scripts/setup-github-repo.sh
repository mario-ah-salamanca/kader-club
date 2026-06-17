#!/usr/bin/env bash
set -euo pipefail

# Kader Club GitHub bootstrap script.
#
# Requirements:
# - Git installed
# - GitHub CLI installed: https://cli.github.com/
# - Logged in with: gh auth login
#
# Usage:
#   chmod +x scripts/setup-github-repo.sh
#   ./scripts/setup-github-repo.sh
#
# Optional:
#   REPO_NAME=kader-club VISIBILITY=private ./scripts/setup-github-repo.sh

OWNER="mario-ah-salamanca"
REPO_NAME="${REPO_NAME:-kader-club}"
VISIBILITY="${VISIBILITY:-private}"
REPO="$OWNER/$REPO_NAME"

echo "Initializing local git repo..."
git init
git add .
git commit -m "chore: initialize Kader Club GitHub workflow" || true
git branch -M main

echo "Creating GitHub repository: $REPO"
if [ "$VISIBILITY" = "public" ]; then
  gh repo create "$REPO" --public --source=. --remote=origin --push
else
  gh repo create "$REPO" --private --source=. --remote=origin --push
fi

echo "Creating labels..."
labels=(
  "type: feature|0E8A16|User-facing feature"
  "type: bug|D73A4A|Defect"
  "type: task|1D76DB|Implementation or operational task"
  "type: docs|0075CA|Documentation work"
  "type: research|5319E7|Research or discovery"
  "type: decision|FBCA04|Decision needed"
  "type: risk|B60205|Risk tracking"
  "priority: P0|B60205|Must happen now"
  "priority: P1|D93F0B|Important, not immediately blocking"
  "priority: P2|FBCA04|Later or post-MVP"
  "area: product|1D76DB|Product management"
  "area: design|C5DEF5|UX/UI"
  "area: engineering|0E8A16|Engineering implementation"
  "area: data|5319E7|Catalog and data quality"
  "area: pricing|006B75|Valuation and price logic"
  "area: trade|7057FF|Wishlist and trade matching"
  "area: docs|0075CA|Documentation"
  "area: infrastructure|6F42C1|CI/CD and environments"
  "status: blocked|B60205|Blocked"
  "status: needs-review|FBCA04|Needs review"
  "status: needs-decision|D93F0B|Needs decision"
)

for item in "${labels[@]}"; do
  IFS="|" read -r name color description <<< "$item"
  gh label create "$name" --repo "$REPO" --color "$color" --description "$description" --force
done

echo "Creating milestones..."
milestones=(
  "Phase 0 — Product Foundation"
  "Phase 1 — Core Platform"
  "Phase 2 — Card Catalog"
  "Phase 3 — Collection Management"
  "Phase 4 — Portfolio Valuation"
  "Phase 5 — Wishlist and Trade Matching"
  "Phase 6 — Closed Beta"
  "Post-MVP — Collector Plus"
  "Future — Fantasy XI"
)

for milestone in "${milestones[@]}"; do
  gh api \
    --method POST \
    "repos/$REPO/milestones" \
    -f title="$milestone" \
    -f state="open" >/dev/null || true
done

echo "Creating initial issues..."
declare -A issue_labels
issue_labels["001-approve-mvp-scope.md"]="type: decision,priority: P0,area: product,status: needs-decision"
issue_labels["002-finalize-first-demo-user-journey.md"]="type: task,priority: P0,area: product"
issue_labels["003-define-catalog-csv-format.md"]="type: task,priority: P0,area: data"
issue_labels["004-create-supabase-project-and-migrations.md"]="type: task,priority: P0,area: engineering,area: infrastructure"
issue_labels["005-implement-auth-and-protected-layout.md"]="type: feature,priority: P0,area: engineering"
issue_labels["006-build-profiles-and-onboarding.md"]="type: feature,priority: P0,area: engineering,area: design"
issue_labels["007-seed-curated-football-cards.md"]="type: task,priority: P0,area: data"
issue_labels["008-build-catalog-schema-and-search.md"]="type: feature,priority: P0,area: engineering,area: data"
issue_labels["009-build-add-card-flow.md"]="type: feature,priority: P0,area: engineering,area: design"
issue_labels["010-build-my-collection-binder-grid.md"]="type: feature,priority: P0,area: engineering,area: design"
issue_labels["011-implement-price-observations-and-snapshots.md"]="type: feature,priority: P1,area: pricing,area: engineering"
issue_labels["012-build-wishlist-and-mvp-trade-matching.md"]="type: feature,priority: P1,area: trade,area: engineering"
issue_labels["013-define-public-showcase-and-fantasy-xi-foundation.md"]="type: research,priority: P2,area: product,area: design"

for file in issues/*.md; do
  base="$(basename "$file")"
  title="$(head -n 1 "$file" | sed 's/^# //')"
  labels="${issue_labels[$base]:-type: task}"
  gh issue create --repo "$REPO" --title "$title" --body-file "$file" --label "$labels"
done

echo "Done."
echo "Repository created and initialized: https://github.com/$REPO"
