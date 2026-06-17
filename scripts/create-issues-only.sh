#!/usr/bin/env bash
set -euo pipefail

# Create initial Kader Club issues in an existing repository.
#
# Usage:
#   chmod +x scripts/create-issues-only.sh
#   REPO=mario-ah-salamanca/kader-club ./scripts/create-issues-only.sh

REPO="${REPO:-mario-ah-salamanca/kader-club}"

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
