# Pizza

Dough formulas and pizza recipes on GitHub Pages. Each recipe is one markdown file in `_recipes/`. Dough pages get a calculator that scales the whole recipe, including the amounts written in the method.

## Adding a recipe

Copy a template from `_templates/` into `_recipes/` and fill it in:

- `_templates/dough.md` is a dough (shown here with a poolish stage).
- `_templates/pizza.md` is a pizza with toppings, linked to a dough.
- `_recipes/cheesesticks.md` is a self-contained recipe with its own dough and toppings (`category: special`).

The filename is the recipe's slug and URL: `_recipes/neapolitan.md` becomes `/recipes/neapolitan/`, and a pizza links to it with `uses_dough: neapolitan`.

## Front matter reference

| Field | Meaning |
|---|---|
| `category` | `dough`, `pizza` or `special`. Decides the section on the landing page |
| `summary` | One line shown on the card and under the title |
| `uses_dough` | Pizzas only. The slug of a dough recipe, or a list like `[charlies-ny, charlies-ny-outdoor]` |
| `yield.count` | Balls / rounds in the batch as written (default 1) |
| `yield.weight` | Optional ball weight. Defaults to total dough ÷ count. If the dough totals more than count × weight, the extra is treated as a bowl-loss buffer: it scales with the batch and is included in "Total dough", but isn't called out |
| `yield.default_count` | Ball count the calculator opens with, if different from `yield.count` |
| `yield.unit` / `yield.units` | What a ball is called, e.g. `round` (default "dough ball" or "pizza") |
| `yield.sizes` | Ball weight per pizza size, like `{ 10: 180, 12: 253, 14: 352, 16: 466 }`. Adds size buttons to the calculator, and "Makes" shows the size for whatever grams each is entered (e.g. "~15-inch"). Replaces `label`. `yield.size_noun` changes "pies" |
| `yield.label`, `yield.cut` | Optional text shown in the calculator, e.g. "12-inch rounds", "16 pieces each" |
| `scale` | `balls` (default: count × grams each) or `batch` (a simple batch multiplier) |
| `dough` | Groups (stages) of dough items, in grams for the batch as written |
| `toppings` | Groups of topping items, amounts for **one** pizza. Pizza pages show these as is (no calculator); on `special` recipes they multiply by the count |

**Dough items:** `{ id, name, g, flour: true, water: true, note }`. Mark every flour with `flour: true` and every water with `water: true`, in all stages, so baker's % and hydration come out right. `{ name: Poolish, stage: Poolish }` adds all of an earlier group.

**Topping items:** `{ id, name, qty, unit, note, optional: true }`. `qty` can be a number or a range like `[5, 7]`. Use `text: "Pinch"` for anything that doesn't scale. Add `per_batch: true` to a topping group that's made once rather than per pizza (e.g. a sauce made by the can).

## Placeholders in the method

| Placeholder | Becomes |
|---|---|
| `[[flour]]` | Scaled amount of the item with `id: flour` (topping ids give the per-pizza amount) |
| `[[count]]`, `[[weight]]`, `[[total]]` | Ball count, ball weight, total dough |
| `[[group:Cheese blend]]` | Total weight of a group |
| `[[table:Cheese blend]]` | On its own line, moves that group's table into the method at that point |

A placeholder that doesn't match anything shows up in red with ⚠ on the page.

The calculator stores its inputs in the URL (`?count=6&weight=270`), so you can bookmark or share a specific batch.

## Running locally

Needs Ruby 3.x (macOS system Ruby is too old, so use `brew install ruby`):

```sh
bundle install
bundle exec jekyll serve
```

## Publishing

1. Create a GitHub repo and push `main`.
2. In the repo, go to Settings → Pages → Deploy from a branch → `main` / root.
3. If the site lives at `username.github.io/<repo>`, set `baseurl: "/<repo>"` in `_config.yml`.
