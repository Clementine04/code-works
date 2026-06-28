# CODE WORKS --- MASTER FRONTEND PROMPT

> **Project:** Premium software agency showcase website for **Code
> Works**

## Overview

Create a world-class **React + Vite frontend** (served by Express) for
**Code Works**, a software development studio specializing in websites,
web applications, business systems, and mobile apps.

The website must feel like a premium digital product rather than a
generic agency template.

## Goals

-   Convert visitors into clients.
-   Showcase featured projects.
-   Demonstrate design quality.
-   Build trust.
-   Be extremely responsive and mobile-first.

## Company Positioning

Code Works is a software development studio---not freelancers.

We build: - Business websites - Portfolio websites - Restaurant
websites - Coffee shop websites - Hotel websites - Business management
systems - Hotel management systems - Inventory systems - Loan systems -
Reservation systems - Booking systems - Mobile apps - Business
automation - Custom software

We do **not** provide hardware, networking, CCTV, repairs, or physical
products.

------------------------------------------------------------------------

# Tech Stack

-   React
-   Vite
-   Express
-   Tailwind CSS
-   shadcn/ui
-   Framer Motion
-   GSAP
-   Lenis
-   Magic UI
-   Aceternity UI
-   Lucide React
-   Embla Carousel
-   React CountUp
-   Lottie React
-   clsx
-   tailwind-merge

------------------------------------------------------------------------

# Design Philosophy

Inspired by:

-   Apple
-   Stripe
-   Linear
-   Vercel
-   Raycast
-   OpenAI
-   Framer

The interface should be:

-   Minimal
-   Elegant
-   Premium
-   Fast
-   Modern
-   Responsive
-   Highly animated
-   Purposeful

Avoid generic templates.

------------------------------------------------------------------------

# Mobile First

Design mobile-first.

Support: - 320 - 375 - 390 - 414 - 480 - 640 - 768 - 1024 - 1280 -
1440 - 1920

No horizontal scrolling.

Animations should adapt for touch devices.

------------------------------------------------------------------------

# Website Structure

1.  Hero
2.  Selected Work
3.  Services
4.  Industries
5.  Why Code Works
6.  Contact
7.  Footer

Keep the experience focused and easy to navigate.

------------------------------------------------------------------------

# Hero

-   Full viewport
-   Floating glass navigation
-   Animated gradient mesh
-   Aurora lighting
-   Blueprint grids
-   SVG curves
-   Geometric accents
-   Floating laptop/browser mockup
-   Mouse parallax
-   Premium typography
-   Two CTA buttons:
    -   Start Your Project
    -   View Our Work

------------------------------------------------------------------------

# Selected Work

This is the main selling section.

Display 6--10 premium projects.

Each project should have: - Browser or device mockup - 3D hover tilt -
Animated lighting - Smooth image zoom - Modal or detail view -
Technology badges - Category - Short business outcome

------------------------------------------------------------------------

# Services

Large premium cards.

Services:

-   Websites
-   Business Systems
-   Mobile Apps
-   UI/UX Design
-   Business Automation
-   Support & Maintenance

------------------------------------------------------------------------

# Industries

Responsive grid for:

-   Hotels
-   Restaurants
-   Coffee Shops
-   Clinics
-   Corporate
-   Retail
-   Real Estate
-   Startups
-   Virtual Assistants

------------------------------------------------------------------------

# Why Code Works

Focus on business outcomes:

-   Premium design
-   Custom software
-   Scalable architecture
-   Mobile-first
-   Long-term support
-   Business automation

------------------------------------------------------------------------

# Contact

Premium glass form.

Include:

-   Email
-   Phone
-   Messenger / WhatsApp placeholders
-   Social links

Large final CTA encouraging visitors to start a project.

------------------------------------------------------------------------

# Animation Rules

-   Use Framer Motion for UI motion.
-   Use GSAP for cinematic reveals.
-   Use Lenis for smooth scrolling.
-   Prefer spring easing.
-   Respect prefers-reduced-motion.
-   Keep interactions between 180--350 ms.
-   Hero transitions up to 800 ms.

Micro-interactions:

-   Magnetic buttons
-   Soft card lift
-   Animated borders
-   Cursor-follow glow
-   Count-up statistics
-   Image reveal masks
-   Smooth section transitions

------------------------------------------------------------------------

# Visual Language

Use:

-   Glassmorphism
-   Gradient meshes
-   Blueprint grids
-   Geometric circles
-   SVG curves
-   Thin engineering lines
-   Soft glow
-   Frosted panels
-   Minimal shadows
-   Premium spacing

Avoid clutter.

------------------------------------------------------------------------

# Performance

-   Lighthouse \>95
-   Lazy-load images
-   GPU-friendly transforms
-   Responsive images
-   Clean reusable components

------------------------------------------------------------------------

# Final Goal

When a visitor lands on the website they should immediately think:

> "Code Works builds premium software. I want them to build my project."

Every animation, layout, interaction, and visual detail should reinforce
that feeling.



# Showcase Projects (Premium Portfolio Experience)

This is the most important section after the Hero. It should immediately demonstrate the quality of Code Works' work.

## Section Title
Selected Work

**Subtitle**

A collection of websites, web applications, and business systems crafted to solve real business problems.

## Layout

- Responsive Bento Grid on desktop.
- Two-column layout on tablets.
- Single-column cards on mobile.
- Consistent spacing with premium whitespace.

## Project Cards

Each project card should include:

- Large project preview image (placeholder for screenshots)
- Project title
- Industry (Hotel, Restaurant, Coffee Shop, Portfolio, etc.)
- Short description
- Technology tags
- Desktop / Tablet / Mobile device mockups
- "View Details" button

## Hover Interactions

- 3D tilt
- Soft floating animation
- Mouse-following light effect
- Animated gradient border
- Slight image zoom
- Smooth shadow elevation
- Premium spring transitions

## Project Detail Modal

Clicking a project opens a fullscreen modal with:

- Large hero image
- Image gallery / carousel
- Project overview
- Client goals
- Features implemented
- Technologies used
- Responsive previews
- Optional "Visit Live Demo" button
- Smooth animated close interaction

## Categories

Support filtering by:

- Websites
- Business Systems
- Mobile Apps
- Restaurant
- Hotel
- Portfolio
- Dashboard
- E-commerce

Filtering should animate without page refresh.

## Animations

- Staggered card reveal on scroll
- Smooth filter transitions
- Fade + scale modal opening
- Shared element transitions where appropriate
- Count-up statistics for featured projects

## Mobile Experience

- Swipe-friendly cards
- Full-width previews
- Touch-friendly modal
- Optimized images
- Reduced motion complexity while maintaining visual quality

## Goal

The portfolio should convince visitors that Code Works delivers premium, production-ready software and encourage them to start a project.



# Premium Motion & Animation Requirements

## Animation Philosophy

The website must feel **alive**, not flashy. Every animation should guide attention, reinforce quality, and make the interface feel premium.

### Core Motion Stack

- Framer Motion for component animations and page transitions.
- GSAP for cinematic hero reveals, advanced timelines, and scroll storytelling.
- Lenis for ultra-smooth scrolling.
- CSS transforms for lightweight hover interactions.

### Global Motion Rules

- All animations must use spring or premium easing curves.
- Never use abrupt linear animations.
- Target a consistent 60 FPS.
- Animate primarily with `transform` and `opacity`.
- Respect `prefers-reduced-motion`.

### Page Load

- Elegant branded loader.
- Smooth fade from loader into the Hero.
- Navigation, headline, description, buttons, and mockup reveal in a staggered sequence.

### Scroll Animations

Every section should animate only the first time it enters the viewport.

Use combinations of:
- Fade + translate
- Blur reveal
- Scale reveal
- Clip-path reveal
- Mask reveal
- Staggered children

### Smooth Scrolling

- Enable Lenis smooth scrolling.
- Anchor links should scroll naturally.
- Avoid jumpy navigation.
- Maintain smooth momentum on desktop while keeping mobile responsive.

### Hero Motion

- Floating device mockups.
- Slow ambient movement.
- Mouse parallax on desktop.
- Animated gradient mesh.
- Aurora lighting that slowly shifts.
- Background particles moving subtly.
- Geometric SVG lines drawing themselves.

### Card Interactions

Project cards and service cards should include:

- Smooth lift on hover.
- Gentle 3D tilt.
- Cursor-following highlight.
- Soft glowing border.
- Animated shadow.
- Image zoom (very subtle).
- Premium spring transition.

### Button Interactions

Buttons should feel tactile.

Include:
- Magnetic cursor effect.
- Soft scale on hover.
- Press compression.
- Animated arrow movement.
- Gradient light sweep.
- Ripple or shimmer effect.

### Image Transitions

- Lazy-loaded fade-in.
- Smooth crossfades.
- Shared element transitions for modal previews when appropriate.

### Modal Animations

Project modal should:
- Fade + scale into view.
- Blur the background.
- Lock background scrolling.
- Close with the reverse animation.

### Navigation

- Glass navbar smoothly changes opacity while scrolling.
- Hide on scroll down.
- Reappear on scroll up.
- Mobile menu slides and fades naturally with staggered links.

### Performance

Animations should never reduce usability.

Heavy effects should be simplified automatically on lower-powered devices and mobile while preserving the premium experience.
