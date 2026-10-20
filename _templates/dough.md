---
# Copy to _recipes/<slug>.md. The filename (minus .md) is the slug pizzas use in `uses_dough`.
# Write grams for your usual batch; the site calculates baker's % and scales from there.
title: Example Poolish Dough
category: dough
summary: One-line description shown on the landing page.
yield:
  count: 4            # balls in the batch below
  # weight: 250       # optional; defaults to total dough ÷ count
# scale: batch        # use when "balls × weight" doesn't fit; shows a batch multiplier instead

# Each group is a stage. A straight dough has one group.
# Mark flour with `flour: true` and water with `water: true` (in every stage) for baker's % and hydration.
# `stage: <group name>` adds "all of" that group, e.g. the poolish into the final dough.
dough:
  - name: Poolish
    note: Mix and leave covered 16–18 hours at room temperature.
    items:
      - { id: poolish_flour, name: "Tipo 00 flour", g: 180, flour: true }
      - { id: poolish_water, name: "Water", g: 180, water: true }
      - { id: poolish_yeast, name: "Instant yeast", g: 0.5 }
  - name: Final dough
    items:
      - { name: "Poolish", stage: Poolish }
      - { id: flour, name: "Tipo 00 flour", g: 420, flour: true }
      - { id: water, name: "Water", g: 210, water: true }
      - { id: salt, name: "Salt", g: 18 }
---

Write the method in markdown. Placeholders fill in scaled amounts:

- `[[id]]`: any item with an `id`, e.g. [[water]]
- `[[count]]`, `[[weight]]`, `[[total]]`: ball count, ball weight, total dough
- `[[group:Poolish]]`: total weight of a group, e.g. [[group:Poolish]]
- `[[table:Poolish]]` on its own line moves that table into the method

## Poolish (night before)

1. Mix [[poolish_flour]] flour, [[poolish_water]] water and [[poolish_yeast]] yeast.

## Final dough

1. Add the poolish to [[water]] water, then [[flour]] flour and [[salt]] salt.
2. Divide into [[count]] balls of [[weight]].
