# MVP Requirements

## Operating Objective

Build Kader Club from design concept into a working MVP that lets a user:

- Create an account
- Search a curated football-card catalog
- Add cards to a digital binder
- View basic collection value
- Prepare for wishlist/trade matching

## First Demo Scenario

A new user signs up, searches for a card such as `Jamal Musiala Topps Chrome Bundesliga`, adds it to their collection with condition and purchase price, and sees it appear in their collection dashboard.

## MVP Scope

### Must Have

- Supabase Auth
- Profiles
- Protected app layout
- Admin role support
- Curated card catalog
- Catalog search
- Card detail page
- Add card to collection
- My Collection binder grid
- Trade status on owned cards
- Basic estimated collection value
- Price confidence labels
- Basic wishlist foundation
- Basic trade discovery foundation

### Should Have

- CSV seed catalog import
- CSV export for user collection
- Admin price observation entry
- Empty states guiding users to add first 10 cards
- Success states after adding cards
- Basic analytics events

### Could Have

- Public profile showcase placeholder
- Favorite cards
- Set completion placeholder
- Price observation CSV import

### Will Not Have in MVP

- Marketplace checkout
- Payments
- Escrow
- Shipping
- Physical authentication
- Complex social feed
- Public forum
- Fantasy XI squad builder
- Advanced ROI dashboard
- Automated market scraping

## First Collection Loop Acceptance Criteria

- [ ] User can create an account.
- [ ] User can log in and log out.
- [ ] User can complete a profile with display name, country, favorite club, and trade availability.
- [ ] User can search a seeded card catalog.
- [ ] User can open a card detail page.
- [ ] User can add a card to collection with condition, quantity, purchase price, grade, and trade status.
- [ ] User can view owned cards in a binder-style collection page.
- [ ] User cannot access or edit another user's private cards.
- [ ] Admin can seed or manage card catalog data.
- [ ] App shows basic collection stats.
