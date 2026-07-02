# Mariner Math

Marketing website for **Mariner Math** — one-on-one calculus tutoring for middle
school, high school, and college students in the Seattle area (in person or over Zoom).

It's a fast, static site (plain HTML/CSS/JS) — no build step, no server needed.

## Files

| File          | What it is                                              |
|---------------|---------------------------------------------------------|
| `index.html`  | The home page (hero, courses, approach, about teaser, contact) |
| `about.html`  | The full **About Gabe** page                            |
| `styles.css`  | All styling (colors, fonts, layout, animations)         |
| `main.js`     | Small interactions + the contact form behavior          |
| `favicon.svg` | The little compass icon in the browser tab              |

## Preview it locally

Just open `index.html` in your browser. Or, for a proper local server:

```bash
cd gabes_math_tutoring
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Things you'll want to personalize

1. **A photo** — Both the home page and `about.html` have a placeholder box. To add a
   real photo, drop an image in this folder (e.g. `gabe.jpg`) and replace the
   `.portrait-placeholder` block with `<img src="gabe.jpg" alt="Gabe Riedel" />`.
2. **Your bio** — The About page (`about.html`) is written from your resume. Give it a
   read and tweak anything you'd phrase differently — the Mariners mention, camp details, etc.
3. **Rates** — There's no pricing on the site right now (by design). If you later
   want to add it, tell me and I'll build a pricing section.

## How the contact form works

The site is static, so the form doesn't need a backend. When someone hits **Send
message**, it opens their own email app with a pre-filled email to
`gaberiedel@gmail.com`.

**Want submissions to arrive automatically instead** (no email app needed on their
end)? Use a free form service like [Formspree](https://formspree.io):
1. Sign up, create a form, and copy your form's endpoint URL.
2. In `index.html`, change the `<form>` tag to
   `<form action="https://formspree.io/f/XXXX" method="POST">`.
3. In `main.js`, remove the `e.preventDefault()` / mailto logic so it submits normally.

Tell me if you'd like this switched over — it's a 5-minute change.

## Publishing it (free options)

- **GitHub Pages** — push this repo to GitHub, then enable Pages in the repo
  settings (deploy from the `main` branch). Free, great for a static site.
- **Netlify / Cloudflare Pages** — drag-and-drop this folder, or connect the repo.
  Both give you a free URL and easy custom-domain setup.

For a professional look, buy a domain (e.g. `marinermath.com`) and point it at
whichever host you pick.

---

_Independent tutoring business. The name uses "Mariner" in its general seafaring
sense; the site deliberately avoids any sports-team branding, colors, or logos to
steer clear of trademark issues._
