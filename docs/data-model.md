# Data Model

## Core Tables

### profiles

Stores public and private user profile fields.

Suggested fields:

- `id`
- `user_id`
- `display_name`
- `country`
- `favorite_club`
- `bio`
- `trade_availability`
- `role`
- `created_at`
- `updated_at`

### players

Suggested fields:

- `id`
- `name`
- `nationality`
- `position`
- `created_at`
- `updated_at`

### clubs

Suggested fields:

- `id`
- `name`
- `country`
- `league_id`
- `created_at`
- `updated_at`

### leagues

Suggested fields:

- `id`
- `name`
- `country`
- `created_at`
- `updated_at`

### card_sets

Suggested fields:

- `id`
- `manufacturer`
- `name`
- `season`
- `league_id`
- `created_at`
- `updated_at`

### card_variants

Suggested fields:

- `id`
- `player_id`
- `club_id`
- `set_id`
- `card_number`
- `parallel`
- `rarity`
- `serial_numbering`
- `rookie_flag`
- `autograph_flag`
- `relic_patch_flag`
- `image_url`
- `created_at`
- `updated_at`

### user_cards

Suggested fields:

- `id`
- `user_id`
- `card_variant_id`
- `condition`
- `grade_company`
- `grade_value`
- `quantity`
- `purchase_price`
- `purchase_currency`
- `trade_status`
- `notes`
- `created_at`
- `updated_at`

## Trade Status

Allowed values:

- `not_for_trade`
- `open_to_offers`
- `actively_trading`

## Seed Catalog CSV Fields

Minimum recommended fields:

```csv
player,club,league,season,manufacturer,set_name,card_number,parallel,rarity,serial_numbering,rookie_flag,autograph_flag,relic_patch_flag,image_url
```

## Catalog Quality Rule

Catalog quality is a product moat. Start with fewer cards and cleaner metadata rather than many messy entries.

Target first catalog:

- Topps Chrome Bundesliga
- Topps Chrome UEFA
- Topps Merlin
- Panini Prizm
- Panini Select
- Sapphire
- Finest

## Fantasy XI Future-Proofing

Preserve these fields now even if Fantasy XI is not built in MVP:

- Player
- Club
- League
- Season
- Position
- Manufacturer
- Set
- Card number
- Parallel
- Rarity
- Serial numbering
- Rookie flag
- Autograph flag
- Relic/patch flag
- Grade
- Card image
- User ownership
- Trade status
