---
name: Gunite Pools Renovations
description: Massachusetts Premier Gunite Pool Repair & Resurfacing Design System
colors:
  primary: "#0b6eb3"
  primary-hover: "#08558c"
  primary-light: "#e6f3fa"
  secondary: "#1c1367"
  secondary-dark: "#0a0e27"
  accent-gold: "#f59e0b"
  neutral-bg: "#f4f7fb"
  neutral-surface: "#ffffff"
  text-dark: "#1e293b"
  text-body: "#475569"
  text-muted: "#64748b"
typography:
  display:
    fontFamily: "Outfit, Inter, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 3.5rem)"
    fontWeight: 900
    lineHeight: 1.25
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "8px"
  md: "14px"
  lg: "20px"
  pill: "50px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-surface}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-white:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
---

# Design System: Gunite Pools Renovations

## Overview

**Creative North Star: "The Coastal Crystal Oasis"**

Gunite Pools Renovations uses a vibrant, high-trust coastal aesthetic tailored for New England homeowners and commercial pool operators. The atmosphere combines deep nautical navy tones, luminous sky-blue reflections, crisp white card containers, and warm gold CTA highlights.

The interface balances authoritative masonry craftsmanship with modern interactive web affordances, utilizing pill-shaped buttons, smooth image sliders, rounded surface cards, and clear typography hierarchy.

**Key Characteristics:**
- **High-Trust Contrast:** Deep navy headers and section anchors offset by bright ocean blue primary actions.
- **Pill & Curve Forms:** Soft rounded pill buttons (`50px` radius) and rounded card corners (`20px`).
- **Interactive Visual Proof:** Embedded touch-friendly Before & After comparison slider and live texture simulator.
- **Direct Accessibility:** Clear contact hotline and regional coverage tags accessible from any viewport.

## Colors

The color palette reflects clean swimming pool waters, deep gunite structural integrity, and premium New England craftsmanship.

### Primary
- **Ocean Blue** (`#0b6eb3`): Primary action color, used for CTA buttons, active tab indicators, and interactive highlights.
- **Ocean Light** (`#e6f3fa`): Light blue background fill for icon badges, visualizer specs, and hover states.

### Secondary
- **Deep Navy** (`#1c1367`): Primary brand anchor color, used for section titles, top bar background, and dark card containers.
- **Navy Dark** (`#0a0e27`): Darkest background tone for hero overlays and footer section.

### Accent
- **Accent Gold** (`#f59e0b`): High-priority trust icon accents, star highlights, and phone link highlights.

### Neutral
- **Background Light** (`#f4f7fb`): Soft cool gray body background.
- **Background White** (`#ffffff`): Crisp card background and container fill.
- **Text Dark** (`#1e293b`): Primary headings and high-contrast text.
- **Text Body** (`#475569`): Standard paragraph text color.
- **Text Muted** (`#64748b`): Subtitles, labels, and secondary metadata.

### Named Rules
**The Rarity of Gold Rule.** Gold (`#f59e0b`) is reserved strictly for high-value trust badges and phone call highlights. It never replaces primary button fills.

## Typography

**Display Font:** `Outfit` (sans-serif)  
**Body Font:** `Inter` (sans-serif)

**Character:** A modern, geometric headline paired with a clean, highly legible body font for optimal readability across all screen sizes.

### Hierarchy
- **Display** (Weight: 900, Size: 3.5rem, Line Height: 1.25): Hero main headline.
- **Headline** (Weight: 800, Size: 2.5rem, Line Height: 1.25): Major section titles.
- **Title** (Weight: 700, Size: 1.35rem, Line Height: 1.3): Service card titles & feature headers.
- **Body** (Weight: 400, Size: 1rem, Line Height: 1.6): Paragraph text and list items.
- **Label** (Weight: 800, Size: 0.85rem, Letter Spacing: 1.5px, Uppercase): Subtitles and section category pills.

## Layout

- **Container Max-Width:** 1220px centered with 1.5rem side padding.
- **Service Cards Grid:** 3-column responsive grid on desktop (`repeat(3, 1fr)`), 1-column on mobile.
- **Trust Bar:** 3-column balanced grid below the hero.
- **Section Spacing:** 6rem vertical padding (`96px`) for distinct visual section pacing.

## Elevation & Depth

Surfaces use subtle, layered drop shadows to create a clean lifted feel over the soft background.

### Shadow Vocabulary
- **Shadow Small** (`0 2px 8px rgba(28, 19, 103, 0.06)`): Card rest state.
- **Shadow Medium** (`0 10px 25px rgba(28, 19, 103, 0.08)`): Trust bar and floating header container.
- **Shadow Large** (`0 15px 35px rgba(28, 19, 103, 0.12)`): Visualizer card and Before & After container.
- **Shadow Hover** (`0 20px 40px rgba(11, 110, 179, 0.18)`): Lifted card hover state with ocean blue tint.

## Shapes

- **Buttons & Badges:** Full pill radius (`50px`).
- **Cards & Features:** Soft rounded corners (`20px` radius).
- **Icons & Avatars:** Circle containers (`50%` radius).
- **Floating Header:** Rounded pill shell (`50px` radius) positioned stickily near top viewport.

## Components

### Primary Button
- **Shape:** Pill (`50px` radius).
- **Background:** Ocean Blue (`#0b6eb3`).
- **Text:** White (`#ffffff`), uppercase, weight 700, size 0.95rem.
- **Hover:** Ocean Blue Hover (`#08558c`), translateY(-2px), glow shadow.

### Service Card
- **Background:** White (`#ffffff`).
- **Corner Radius:** `20px`.
- **Header Image Height:** 200px cropped image with scale hover transition.
- **Border:** 1px solid border light (`#e2e8f0`).
- **Hover:** translateY(-8px), border shifts to Ocean Blue (`#0b6eb3`).

### Before & After Slider
- **Container:** 900px max width, 480px height, 20px rounded corners with 4px solid white frame.
- **Handle:** Circular pill button with left-right chevrons, interactive mouse/touch tracking.

## Do's and Don'ts

### Do:
- **Do** use `assets/logo.png` in circular brand containers for header and footer logos.
- **Do** maintain smooth CSS transitions (`all 0.3s cubic-bezier(0.16, 1, 0.3, 1)`) on interactive components.
- **Do** ensure phone numbers (`(978) 596-4103`) and email (`poolsrenovation@hotmail.com`) are linked via `tel:` and `mailto:` protocols.

### Don't:
- **Don't** use sharp 0px corners on interactive buttons or service cards.
- **Don't** re-introduce the 15+ years experience badge or estimate calculator section.
- **Don't** use generic default blue colors; always use the design system's `--ocean-blue` (`#0b6eb3`) and `--navy-primary` (`#1c1367`).
