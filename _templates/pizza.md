---
# Copy to _recipes/<slug>.md.
title: Example Pizza
category: pizza
summary: One-line description shown on the landing page.
uses_dough: example-dough    # filename of a dough in _recipes, without .md

# Amounts for ONE pizza. Pizza pages have no calculator; dough pages do.
# qty can be a number or a range like [5, 7]; use `text:` for things like "Pinch" or "To taste".
toppings:
  - name: Toppings
    items:
      - { id: sauce, name: "Tomato sauce", qty: 80, unit: g }
      - { id: mozz, name: "Fior di latte", qty: 90, unit: g, note: "Torn, drained" }
      - { name: "Basil", text: "A few leaves" }
      - { name: "Chili flakes", text: "Pinch", optional: true }
---

1. Stretch the dough, spread [[sauce]] sauce, scatter [[mozz]] mozzarella.
2. Bake. Finish with basil.
