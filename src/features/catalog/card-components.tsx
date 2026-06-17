import type { CSSProperties, ElementType, ReactNode } from "react";
import { CheckIcon } from "@/components/icons";
import type { DemoCard } from "@/features/catalog/demo-cards";
import {
  formatCatalogSummary,
  formatCurrencyEur,
  formatTradeStatus
} from "@/features/catalog/demo-cards";

type MiniCardArtProps = {
  card: DemoCard;
  children?: ReactNode;
};

export function MiniCardArt({ card, children }: MiniCardArtProps) {
  return (
    <span className={`mini-card-art tone-${card.accent}`} aria-hidden={!children}>
      {children}
    </span>
  );
}

type FoilCardPreviewProps = {
  card: DemoCard;
  index: number;
};

export function FoilCardPreview({ card, index }: FoilCardPreviewProps) {
  return (
    <article
      className={`foil-card foil-card-${card.accent}`}
      style={{ "--card-tilt": `${(index - 1) * 4}deg` } as CSSProperties}
    >
      <div className="foil-card-sheen" />
      <div className="foil-card-topline">
        <span>{card.manufacturer}</span>
        <span>{card.rarity}</span>
      </div>
      <div>
        <span className="card-position">{card.position}</span>
        <h2>{card.playerName}</h2>
        <p>
          {card.club} · {card.setName}
        </p>
      </div>
      <div className="foil-card-footer">
        <span>{formatCurrencyEur(card.estimatedValueEur)}</span>
        <span>{card.confidence}</span>
      </div>
    </article>
  );
}

type BinderCardProps = {
  card: DemoCard;
  footer: "confidence" | "trade";
  headingLevel?: "h2" | "h3";
};

export function BinderCard({
  card,
  footer,
  headingLevel = "h3"
}: BinderCardProps) {
  const Heading = headingLevel as ElementType;

  return (
    <article className={`binder-card tone-${card.accent}`}>
      <div className="binder-card-art">
        <span>{card.position}</span>
      </div>
      <div className="binder-card-copy">
        <span>{card.manufacturer}</span>
        <Heading>{card.playerName}</Heading>
        <p>
          {card.club} · {card.parallel}
        </p>
        <div>
          <strong>{formatCurrencyEur(card.estimatedValueEur)}</strong>
          {footer === "confidence" ? (
            <em>
              <CheckIcon /> {card.confidence}
            </em>
          ) : (
            <em>{formatTradeStatus(card.tradeStatus)}</em>
          )}
        </div>
      </div>
    </article>
  );
}

type CatalogCardRowProps = {
  card: DemoCard;
};

export function CatalogCardRow({ card }: CatalogCardRowProps) {
  return (
    <article className="catalog-row">
      <MiniCardArt card={card} />
      <div>
        <h2>{card.playerName}</h2>
        <p>{formatCatalogSummary(card)}</p>
        <dl className="catalog-row-details">
          <div>
            <dt>League</dt>
            <dd>{card.league}</dd>
          </div>
          <div>
            <dt>Card no.</dt>
            <dd>{card.cardNumber}</dd>
          </div>
          <div>
            <dt>Rarity</dt>
            <dd>{card.rarity}</dd>
          </div>
        </dl>
      </div>
      <div className="catalog-row-meta">
        <strong>{formatCurrencyEur(card.estimatedValueEur)}</strong>
        <span>{card.confidence} confidence</span>
      </div>
    </article>
  );
}
