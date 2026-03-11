

# Content Rewrite Plan — Zxora V3 (Privacy Tool → Agent Economic OS)

This is a **text-only rewrite** across all sections. No design, layout, animation, or styling changes. The project pivots from a "crypto privacy browser" to "the economic operating system for autonomous AI agents built on OpenClaw."

---

## Components to Modify

### 1. Navigation (`Navigation.tsx`)
- Update nav items: remove "Story", "Agent"; rename labels to `Features`, `How It Works`, `Roadmap`, `Treasury` (id: treasury), `FAQ`
- CTA button: "JOIN EARLY ACCESS" → `Launch App` linking to `https://app.zxora.tech`

### 2. Hero (`Hero.tsx`)
- Scramble text: "NAVIGATE IN THE SHADOW LAYER" → `THE OPERATING SYSTEM FOR AUTONOMOUS AGENTS`
- Subheading → new copy about budgets, approvals, treasury, verifiable receipts, OpenClaw
- Terminal lines → new agent/mission-themed lines (connecting gateway, agent online, mission funded, etc.)
- CTA buttons: "REQUEST EARLY ACCESS" → `Launch Dashboard` (link to app.zxora.tech), "VIEW HOW IT WORKS" stays but scrolls to how-it-works
- Add badge text `OPENCLAW-NATIVE ECONOMIC LAYER` above headline

### 3. Story (`Story.tsx`)
- Title: "WHY ZXORA EXISTS" → `THE PROBLEM`
- Subtitle → "One economic layer between your agents and chaos."
- Step tabs: rename to "The Problem", "Without Zxora", "With Zxora"
- Step content rewritten to V3 narrative (unaccountable agents → Zxora adds control)
- Console visuals: update ExposureMeter labels (budget_control→none, approval_gates→missing, etc.), FragmentedToolsMap nodes, ShadowLayerReveal (You → Zxora → Agents), principles updated
- All terminal log labels updated to match new context

### 4. HowItWorks (`HowItWorks.tsx`)
- Complete content rewrite to 4 steps: Connect Gateway → Deploy Agents → Fund Missions → Verify Everything
- Title: → `FOUR STEPS TO FULLY ACCOUNTABLE AUTONOMOUS AGENTS`
- Subtitle: → "From gateway connection to verifiable proof of work — in minutes."
- Update icons and labels for each step
- Change from 5 steps to 4 steps

### 5. Features (`Features.tsx`)
- Title: → `EVERYTHING YOUR AGENTS NEED TO BE TRUSTED`
- 6 cards rewritten: Missions, Budget Vaults, OpenClaw-Native Agents, Approval Gates, Verifiable Receipts, Stablecoin Treasury
- Update icons to match new concepts (Target, DollarSign, Zap, ShieldCheck, FileText, DollarSign)

### 6. AnimationsShowcase (`AnimationsShowcase.tsx`)
- Title: "SEE ZXORA IN MOTION" → `WATCH MISSIONS FUND, AGENTS DISPATCH, AND RECEIPTS ANCHOR IN REAL TIME`
- Subtitle → "A simulation of how Zxora manages autonomous agent economics."
- Rename tabs: "Mask Shift" → `Mission Breakdown`, "Gate Inspect" → `Agent Dispatch`, "Corridor Burn" → `Budget Vault`
- Update all simulation panel content (labels, status text, terminal lines) to match agent economics theme
- Node labels: YOU→Operator, MASK→Mission, dApp→Agent
- Gate console → agent dispatch with agent cards
- Corridor → budget vault with spend tracking

### 7. Roadmap (`Roadmap.tsx`)
- Title stays "ROADMAP"
- Subtitle → "From budget vaults to a full agent economy — the Zxora build plan."
- Replace 5 phases with 4 new phases: Missions & Budget Vaults (Complete), Agents & Gateway Integration (Complete), Approvals & Execution Control (In Progress), Receipts & Verification (Upcoming)
- Remove ZXO utility callout at bottom entirely
- Remove disclaimer about token price

### 8. Tokenomics → Treasury (`Tokenomics.tsx`)
- Section id: "tokenomics" → "treasury"
- Title: "TOKENOMICS" → `TREASURY`
- Subtitle → "Real money. Real accountability. Stablecoin-first economics powering agent operations."
- Left column stats → Currency: USDC, Network: Base, Treasury Model: Per-tenant vaults, Budget Cycle: Reserve/Commit/Release, Spend Categories: Model·API·x402·Chain·Payout, Receipt Anchoring: Merkle roots on-chain, Audit Status: Fully verifiable
- Right column: remove contract address + copy button; replace with "How Agent Economics Work" explainer card + CTA link to app.zxora.tech
- Remove entire Token Utility section (3 cards + 5-phase timeline + docs link)

### 9. FAQ (`FAQ.tsx`)
- Title: "QUESTIONS, ANSWERED" → `QUESTIONS ABOUT THE ECONOMIC LAYER`
- Replace all 7 Q&As with 6 new ones about Zxora as agent economic OS, OpenClaw dependency, budget mechanics, receipts, agent protection

### 10. CTA (`CTA.tsx`)
- Title: "OPERATE IN THE SHADOW LAYER" → `YOUR AGENTS. ACCOUNTABLE.`
- Subtitle → new copy about live dashboard
- **Remove email form entirely** — replace with two buttons: "Launch Dashboard" (app.zxora.tech) + "Read the Docs" (docs.zxora.tech)
- Remove form state, toast logic, Input/Textarea imports

### 11. ZxoraShadowAgent — **Remove entirely**
- Remove `<ZxoraShadowAgent />` from Index.tsx
- Remove "Agent" from navigation

### 12. LinksHub — **Remove entirely**
- Remove `<LinksHub />` from Index.tsx

### 13. Footer (`Footer.tsx`)
- Update links: Privacy→Dashboard (app.zxora.tech), Security→Docs (docs.zxora.tech), Contact→GitHub (github.com/vultrdev)
- Tagline: → "The economic operating system for autonomous agents."
- Update copyright year reference

### 14. Index.tsx
- Remove `LinksHub` and `ZxoraShadowAgent` imports and renders

---

## Summary of Removals
- `ZxoraShadowAgent` component (removed from page, file kept)
- `LinksHub` component (removed from page, file kept)
- Token utility cards + timeline in Tokenomics
- Contract address copy box
- Email waitlist form in CTA
- All ZXO/token references throughout

## Files Modified (14 total)
`Navigation.tsx`, `Hero.tsx`, `Story.tsx`, `HowItWorks.tsx`, `Features.tsx`, `AnimationsShowcase.tsx`, `Roadmap.tsx`, `Tokenomics.tsx`, `FAQ.tsx`, `CTA.tsx`, `Footer.tsx`, `Index.tsx`

