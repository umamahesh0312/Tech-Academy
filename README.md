# Srinath Tech Academy — Website

A React + Vite marketing site for Srinath Tech Academy, a technical training
partner for engineering colleges.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview it with `npm run preview`.

## Editing content

Almost everything you'd want to change (institution names, statistics,
testimonials, services, training programs, contact details) lives in one file:

```
src/data/content.js
```

Edit that file and the whole site updates. Placeholder values are marked in
comments — replace them with real, verified information before publishing
(institution names, testimonials, and the impact statistics in particular
should only show confirmed facts).

## Project structure

```
src/
  App.jsx              -- assembles all sections
  index.css            -- design tokens + all styles
  data/content.js       -- editable placeholder content
  components/
    Navbar.jsx
    Hero.jsx
    TrustedBy.jsx
    About.jsx
    Services.jsx
    Programs.jsx
    HowWeWork.jsx
    WhyChooseUs.jsx
    StudentOutcomes.jsx
    PartnerCTA.jsx
    Testimonials.jsx
    Stats.jsx
    Contact.jsx
    Footer.jsx
```

## Backend

The contact form currently just shows a confirmation message on submit. Wire
it up to a real backend/email service later (e.g. by replacing the
`handleSubmit` function in `src/components/Contact.jsx` with an API call).
