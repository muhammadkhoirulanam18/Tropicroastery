# AI Agent Guideline — Coffee Affiliate Website (Execution-Ready)

---

## 0. System Definition (NEW — CRITICAL)

This project is NOT a generic blog.

This is a:
- SEO acquisition system
- Conversion funnel
- Affiliate revenue engine

Every output MUST:
- Increase traffic
- OR increase CTR
- OR increase conversion

If not → reject output.

---

## 1. Objective

Build a coffee niche website optimized for:

- SEO traffic (primary growth)
- Affiliate monetization (primary revenue)
- Display ads (secondary revenue)

---

## 2. Core Business Logic (REFINED)

Traffic → Consideration → Conversion → Revenue

### Mapping:

- Blog → attract traffic
- Internal linking → direct intent
- Best/Review → convert
- CTA → generate revenue

---

## 3. Website Structure (LOCKED)

/
├── (homepage)
├── /blog/[slug]
├── /blog/category/[slug]
├── /review/[slug]
├── /best/[category]
├── /comparison/[slug]
├── /tools/[slug]
├── /about
└── /contact

Rules:
- No unnecessary routes
- No duplicate structure
- URL must be SEO-friendly

---

## 4. Homepage Rules (STRICT)

Homepage = routing layer, NOT content-heavy page

### MUST include:

1. Hero
   - Clear value proposition
   - Primary CTA → /best

2. Featured Products
   - Max 6 items
   - High CTR layout

3. Best Picks (internal linking)

4. Blog Preview (max 6 posts)

5. Comparison Highlight

---

### MUST NOT:

- Overload content
- Add long paragraphs
- Place ads above the fold

---

## 5. Page Execution Rules (UPGRADED)

---

### 5.1 Blog Page

Goal:
- Capture search traffic
- Redirect to money pages

Strict Rules:

- 1000–1500 words ONLY
- No filler content
- Every section must serve intent

MANDATORY:
- ≥2 links to /best
- ≥1 link to /review

---

### 5.2 Review Page

Goal:
- Convert user → click

MANDATORY STRUCTURE:

1. Title (keyword)
2. TL;DR box (top)
3. CTA (above fold)
4. Pros & Cons
5. Detailed breakdown
6. Use-case clarity
7. CTA (mid)
8. CTA (bottom)

---

### 5.3 Best Page (PRIMARY REVENUE PAGE)

This is the MOST IMPORTANT page.

MANDATORY:

- Rank products (Top 1–5 only)
- Highlight Top 1 visually
- Use badges:
  - Best Overall
  - Best Budget
  - Best Premium

---

### 5.4 Comparison Page

Goal:
- Eliminate hesitation

MANDATORY:
- Clear winner
- Table comparison
- Scenario-based recommendation

---

## 6. Conversion System (NEW — CRITICAL)

---

### 6.1 CTA Rules

Allowed text:
- "Cek Harga"
- "Lihat Detail"
- "Beli Sekarang"

---

### 6.2 CTA Placement (STRICT)

- 1x above fold
- 1x mid content
- 1x end content

---

### 6.3 Psychological Triggers (MANDATORY)

Must include at least 2:
- Best Choice
- Most Popular
- Value Terbaik
- Cocok untuk Pemula

---

### 6.4 Product Highlight Logic

Top product MUST:
- Have larger visual weight
- Have badge
- Have strongest CTA

---

## 7. SEO System (REFINED)

---

### 7.1 Keyword Mapping (MANDATORY)

Each topic MUST connect:

Example:
- Blog → grinder kopi
- Best → grinder kopi terbaik
- Review → specific product

---

### 7.2 Internal Linking Rules

Every blog:
- → 1 best page
- → 1 review page

No exception.

---

### 7.3 Content Intent Matching

- Blog → Informational
- Best → Commercial
- Review → Transactional

---

## 8. Component System (STRICT CONTRACT)

---

### ProductCard

MUST support:
- badge
- rating
- CTA

---

### CTAButton

MUST:
- track clicks
- reusable
- consistent style

---

### ComparisonTable

MUST:
- responsive
- sortable (optional)
- highlight winner

---

### AdSlot

Rules:
- lazy load
- fixed height (prevent CLS)

---

## 9. Data Integrity Rules (NEW)

- No hardcoded product data
- All product data from CMS/API
- Slug must be unique
- Price must be dynamic

---

## 10. Performance Budget (STRICT)

FAIL if:

- LCP > 2.5s
- CLS > 0.1
- JS bundle too large

MANDATORY:
- Image optimization
- Lazy loading
- Code splitting

---

## 11. Tracking System (ENFORCED)

Track:

- Affiliate click (per product)
- CTR per page
- Scroll depth

Tools:
- Google Analytics
- Event tracking (custom)

---

## 12. Tech Stack (LOCKED)

Frontend:
- Next.js (App Router)
- Tailwind CSS
- shadcn/ui

Backend:
- Headless WordPress

---

## 13. Development Constraints (NEW)

- No inline styles
- No duplicated components
- No unnecessary re-render
- No blocking scripts

---

## 14. Deployment Rules

- Use CDN
- Enable caching
- Use ISR where possible

---

## 15. Execution Priority

Phase 1:
- Homepage
- 1 Best page
- 2 Review pages
- 3 Blog articles

DO NOT build everything at once.

---

## 16. Anti-Patterns (STRICT)

DO NOT:

- Create generic UI
- Write long content without direction
- Add unnecessary animations
- Add too many products

---

## 17. Success Criteria

Minimum target:

- CTR ≥ 3%
- Bounce rate ↓
- Time on page ↑
- Affiliate clicks ↑

---

## 18. Output Standard (AI Agent)

Output MUST:

- Be production-ready
- Be modular
- Be scalable
- Follow all constraints above

---

## 19. Final Principle

If a feature does NOT:
- increase traffic
- increase CTR
- or increase conversion

→ DO NOT BUILD IT