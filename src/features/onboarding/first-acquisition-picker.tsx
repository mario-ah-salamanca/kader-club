"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  SearchIcon,
  StarIcon,
  TrophyIcon
} from "@/components/icons";
import { demoCards, formatCurrencyEur } from "@/features/catalog/demo-cards";

export function FirstAcquisitionPicker() {
  const [query, setQuery] = useState("");
  const [selectedCardId, setSelectedCardId] = useState(demoCards[0]?.id ?? "");
  const [completed, setCompleted] = useState(false);

  const filteredCards = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return demoCards;
    }

    return demoCards.filter((card) =>
      [
        card.playerName,
        card.club,
        card.league,
        card.setName,
        card.manufacturer,
        card.parallel
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery)
    );
  }, [query]);

  const selectedCard =
    demoCards.find((card) => card.id === selectedCardId) ?? demoCards[0];

  if (completed && selectedCard) {
    return (
      <div className="onboarding-panel completion-panel">
        <span className="completion-icon">
          <TrophyIcon />
        </span>
        <span className="eyebrow">Onboarding complete</span>
        <h1>{selectedCard.playerName} joins your watchlist.</h1>
        <p>
          The next engineering step is to connect this action to the catalog,
          user_cards, wishlist, and RLS-backed profile tables.
        </p>
        <div className="completion-card">
          <div className={`mini-card-art tone-${selectedCard.accent}`} />
          <div>
            <strong>{selectedCard.playerName}</strong>
            <span>
              {selectedCard.club} · {selectedCard.parallel}
            </span>
          </div>
        </div>
        <div className="hero-actions centered">
          <Link className="button button-primary" href="/app">
            Open dashboard <ArrowRightIcon />
          </Link>
          <Link className="button button-muted" href="/app/catalog">
            Browse catalog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="onboarding-panel wide">
      <span className="eyebrow">
        <StarIcon /> First acquisition
      </span>
      <h1>Choose your first card target.</h1>
      <p>
        Search the curated starter catalog and select the card that should anchor
        your first digital binder demo.
      </p>

      <label className="search-field">
        <SearchIcon />
        <span className="sr-only">Search catalog</span>
        <input
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search for Haaland, Bellingham, Musiala..."
          type="search"
          value={query}
        />
      </label>

      <div className="acquisition-grid">
        {filteredCards.map((card) => {
          const isSelected = card.id === selectedCardId;

          return (
            <button
              className="acquisition-card"
              data-selected={isSelected}
              key={card.id}
              onClick={() => setSelectedCardId(card.id)}
              type="button"
            >
              <span className={`mini-card-art tone-${card.accent}`}>
                {isSelected && <CheckIcon />}
              </span>
              <span className="acquisition-copy">
                <strong>{card.playerName}</strong>
                <small>
                  {card.club} · {card.setName}
                </small>
                <em>
                  {formatCurrencyEur(card.estimatedValueEur)} · {card.confidence}
                </em>
              </span>
            </button>
          );
        })}
      </div>

      <div className="onboarding-actions">
        <Link className="button button-muted" href="/app/onboarding/focus">
          <ArrowLeftIcon /> Back
        </Link>
        <button
          className="button button-primary"
          disabled={!selectedCardId}
          onClick={() => setCompleted(true)}
          type="button"
        >
          Finish setup <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
}
