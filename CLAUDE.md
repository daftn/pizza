# Pizza site

Personal pizza recipe site for the owner and friends, live at https://daftn.github.io/pizza/ (GitHub Pages, deploys from `main` / root about a minute after each push). Plain Jekyll, no theme or plugins: markdown recipes with YAML front matter, two layouts, one CSS file and one vanilla JS file.

**Read `README.md` first.** It is the reference for the recipe front matter (`dough`, `toppings`, `yield`, `uses_dough`, `per_batch`, …) and the `[[placeholder]]` syntax. Keep it up to date when you add a feature.

## Layout

- `_recipes/*.md`: one file per recipe. `category` is `dough`, `pizza` or `special` (self-contained, e.g. Boomsticks = `cheesesticks.md`).
- **Fear Fest:** a friend's yearly horror-movie fest has a theme each year, and the owner makes one new pie for it. Those pizzas add `fest_year` and `fest_theme` and show in their own landing-page section (first: Vertigo, 2026, Alfred Hitchcock).
- `_templates/`: starting points for new doughs and pizzas (not published).
- `_layouts/recipe.html`: renders the header and dough links, embeds front matter as JSON in `#recipe-data`, and lists "Pizzas using this dough".
- `assets/recipe.js`: calculator, ingredient tables, placeholder filling. Reads only `#recipe-data`.
- `assets/style.css`: the whole look. Color tokens at the top, with a light set and a dark set (the dark set appears twice: the `prefers-color-scheme` block and `[data-theme="dark"]`; keep them in sync).
- `_data/quotes.yml`: random quote on the landing page.
- `_config.yml`: `baseurl: "/pizza"` is required for the project site. Don't remove it.

## How the calculator works

- Dough items are written in **grams for the batch as written**, flour marked `flour: true` and water `water: true`; baker's % and hydration are derived.
- `yield.sizes` (inches → grams per ball) gives the size buttons and the "Makes" size, worked out from grams each (~ when between sizes).
- Scale factor = (balls × grams each) ÷ (`yield.count` × `yield.weight`). Dough beyond count × weight is a bowl-loss buffer and scales too (included in the total, not shown separately).
- Toppings are **per pizza**. Pizza pages have no calculator (owner's call), so they show one pizza's amounts. On `special` recipes (which have their own dough) toppings multiply by the count; groups with `per_batch: true` (sauces made by the can) don't.
- In the method, placeholders for dough amounts get a highlight (they change with the calculator); topping placeholders get a dotted underline with a "Per pizza" hint (they don't). Unknown placeholders show in red with ⚠.

## Conventions (decided with the owner)

- **Adding a recipe from someone else's site or video:** take ingredients and amounts as given, write the method **in your own words** (never copy their text), and credit + link the source at the top of the method. Flag any inconsistencies in the source rather than silently picking one.
- **Doughs and pizzas are separate.** A dough page is dough only. Sauce, toppings, stretching and baking go on a pizza page that links to it with `uses_dough` (one slug or a list). Self-contained recipes go in `special`.
- **Different ovens:** if the dough formula changes (e.g. outdoor vs home oven), make a separate dough recipe. If only the bake changes, use separate `## Bake: home oven` / `## Bake: outdoor oven` sections on the pizza page.
- **No guessed amounts.** If the owner doesn't give an amount, use text like "A handful" or "Spread thin" instead of inventing grams. They'll add real numbers after testing.
- **No calendar schedules.** No days of the week or clock times ("Sunday night", "9:35 PM"). Relative timing is fine ("3+ hours ahead", "after 48 hours").
- **No brand-specific equipment in steps** (mixers, ovens). Describe it generically: "spiral mixer, low (~90 RPM)".
- **Names:** the owner's friends name the pizzas, so titles change. Fun names draw on horror, horror comedies, action movies (e.g. *Die Hard*) and rock/metal, often as cheese or ingredient puns (Mozzferatu, Scream Cheese). Change `title:` only. Keep the filename (slug) stable, since it's the URL and what `uses_dough` points at. Renaming a slug means updating every `uses_dough` and `../slug/` link.
- **Links between recipes** inside a recipe body use relative paths like `[Charlie's NY](../charlies-ny/)`. Don't use Liquid there.
- **Unit style:** grams written like `700g`, temperatures as `425°F`. No LaTeX/math notation (`$100\%$` doesn't render on Pages).
- **Vibe:** horror movie / metal / *Army of Darkness*, but readable: bone-colored light mode, charcoal (not pure black) dark mode, blood-red accent. Site name in Metal Mania, recipe names in Bebas Neue, other headings in Pirata One, body in Inter, labels in IBM Plex Mono.

## Workflow

- Commit when a change is done. **Ask before pushing**: a push publishes to the live site.
- Before committing a recipe, check that every `[[placeholder]]` matches an `id` (or `count`, `weight`, `total`, `group:Name`, `table:Name`), that every `uses_dough` slug exists, and that flour/water flags are set.
- To preview: `bundle install && bundle exec jekyll serve` (needs Ruby 3.x), then open http://localhost:4000/pizza/. After a push, confirm the live page updated, e.g. by curling it and checking for the change.
- Summaries for the owner should be short and plain. They read on a phone.
