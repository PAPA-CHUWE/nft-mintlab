mintlab/
├─ src/
│  ├─ app/
│  │  ├─ (marketing)/
│  │  │  ├─ page.tsx                    # Landing page
│  │  │  └─ layout.tsx                  # Marketing layout (optional)
│  │  ├─ (marketplace)/
│  │  │  ├─ marketplace/
│  │  │  │  ├─ page.tsx                 # Marketplace home / explore
│  │  │  │  └─ loading.tsx
│  │  │  ├─ collections/
│  │  │  │  └─ [slug]/
│  │  │  │     └─ page.tsx              # Collection page
│  │  │  ├─ nft/
│  │  │  │  └─ [id]/
│  │  │  │     └─ page.tsx              # NFT detail page
│  │  │  └─ layout.tsx                  # Marketplace layout (nav/sidebar)
│  │  ├─ api/
│  │  │  ├─ health/route.ts             # Example API route
│  │  │  └─ search/route.ts             # Search endpoint (optional)
│  │  ├─ layout.tsx                     # Root layout (fonts/providers)
│  │  ├─ globals.css
│  │  └─ page.tsx                       # Can redirect to /marketplace or landing
│  │
│  ├─ components/
│  │  ├─ layout/
│  │  │  ├─ Navbar.tsx
│  │  │  ├─ Footer.tsx
│  │  │  ├─ Sidebar.tsx
│  │  │  ├─ Container.tsx
│  │  │  └─ PageHeader.tsx
│  │  │
│  │  ├─ search-input/
│  │  │  ├─ SearchInput.tsx             # main component
│  │  │  ├─ SearchResults.tsx           # dropdown/list results
│  │  │  └─ useSearch.ts                # hook (debounce, fetching)
│  │  │
│  │  ├─ nft/
│  │  │  ├─ NftCard.tsx
│  │  │  ├─ NftGrid.tsx
│  │  │  ├─ NftImage.tsx
│  │  │  └─ NftAttributes.tsx
│  │  │
│  │  ├─ collection/
│  │  │  ├─ CollectionHeader.tsx
│  │  │  └─ CollectionStats.tsx
│  │  │
│  │  ├─ filters/
│  │  │  ├─ FilterBar.tsx
│  │  │  ├─ PriceRange.tsx
│  │  │  └─ SortSelect.tsx
│  │  │
│  │  ├─ wallet/
│  │  │  ├─ ConnectWalletButton.tsx
│  │  │  └─ WalletMenu.tsx
│  │  │
│  │  └─ ui/
│  │     ├─ Button.tsx
│  │     ├─ Input.tsx
│  │     ├─ Modal.tsx
│  │     ├─ Badge.tsx
│  │     └─ Skeleton.tsx
│  │
│  ├─ lib/
│  │  ├─ utils.ts                       # cn(), formatters, helpers
│  │  ├─ validators.ts                  # zod schemas, etc.
│  │  └─ constants.ts
│  │
│  ├─ services/
│  │  ├─ nft.service.ts                 # API calls for NFTs
│  │  ├─ collection.service.ts
│  │  └─ search.service.ts
│  │
│  ├─ hooks/
│  │  ├─ useDebounce.ts
│  │  └─ useLocalStorage.ts
│  │
│  ├─ types/
│  │  ├─ nft.ts
│  │  └─ collection.ts
│  │
│  └─ assets/
│     ├─ logo/
│     └─ images/
│
├─ public/
│  ├─ logo.svg
│  └─ favicon.ico
│
├─ .env.local
├─ next.config.js
├─ package.json
└─ tsconfig.json
