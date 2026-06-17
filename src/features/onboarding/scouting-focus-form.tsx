"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  CompassIcon
} from "@/components/icons";
import {
  scoutingClubs,
  scoutingLeagues
} from "@/features/onboarding/onboarding-data";

export function ScoutingFocusForm() {
  const [selectedLeagues, setSelectedLeagues] = useState<string[]>([
    "bundesliga"
  ]);
  const [selectedClubs, setSelectedClubs] = useState<string[]>([
    "bayern-munchen"
  ]);

  const selectionCount = selectedLeagues.length + selectedClubs.length;
  const canContinue = selectionCount > 0;

  const selectedSummary = useMemo(() => {
    if (selectionCount === 1) {
      return "1 focus selected";
    }

    return `${selectionCount} focuses selected`;
  }, [selectionCount]);

  function toggleSelection(id: string, type: "league" | "club") {
    const setter = type === "league" ? setSelectedLeagues : setSelectedClubs;

    setter((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  return (
    <div className="onboarding-panel wide">
      <span className="eyebrow">
        <CompassIcon /> Collector setup
      </span>
      <h1>Define your scouting focus.</h1>
      <p>
        Pick the leagues and clubs you care about most. This keeps future
        catalog recommendations, wishlist prompts, and trade discovery relevant.
      </p>

      <section className="selection-section" aria-labelledby="league-heading">
        <div className="selection-heading">
          <h2 id="league-heading">Major leagues</h2>
          <span>{selectedLeagues.length} selected</span>
        </div>
        <div className="selection-grid">
          {scoutingLeagues.map((league) => {
            const isSelected = selectedLeagues.includes(league.id);

            return (
              <button
                className="selection-card"
                data-selected={isSelected}
                key={league.id}
                onClick={() => toggleSelection(league.id, "league")}
                type="button"
              >
                <span className={`selection-card-art tone-${league.imageTone}`}>
                  {isSelected && <CheckIcon />}
                </span>
                <strong>{league.name}</strong>
                <small>{league.country}</small>
              </button>
            );
          })}
        </div>
      </section>

      <section className="selection-section" aria-labelledby="club-heading">
        <div className="selection-heading">
          <h2 id="club-heading">Top global clubs</h2>
          <span>{selectedClubs.length} selected</span>
        </div>
        <div className="selection-grid clubs">
          {scoutingClubs.map((club) => {
            const isSelected = selectedClubs.includes(club.id);

            return (
              <button
                className="selection-card compact"
                data-selected={isSelected}
                key={club.id}
                onClick={() => toggleSelection(club.id, "club")}
                type="button"
              >
                <span className="club-badge">{club.name.slice(0, 2)}</span>
                <strong>{club.name}</strong>
                <small>{club.country}</small>
                {isSelected && <CheckIcon />}
              </button>
            );
          })}
        </div>
      </section>

      <div className="onboarding-actions">
        <Link className="button button-muted" href="/app/onboarding/welcome">
          <ArrowLeftIcon /> Back
        </Link>
        <span className="selection-stat">{selectedSummary}</span>
        <Link
          aria-disabled={!canContinue}
          className="button button-primary"
          href={canContinue ? "/app/onboarding/first-card" : "#"}
        >
          Continue <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
}
