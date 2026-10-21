---
title: Vito's Neapolitan
category: dough
summary: Overnight poolish, spiral-mixed with a bassinage finish.
yield:
  count: 6              # the batch as written below
  weight: 280           # 6 × 280g = 1,680g; the extra 35g is a bowl-loss buffer
  default_count: 4
  label: 12–13-inch pies

dough:
  - name: Poolish
    note: 1 hour at room temperature, then 14–24 hours in the fridge.
    items:
      - { id: poolish_water, name: "Water (72–75°F)", g: 300, water: true }
      - { id: poolish_yeast, name: "Instant or active dry yeast", g: 3 }
      - { id: poolish_honey, name: "Honey", g: 4 }
      - { id: poolish_flour, name: "00 flour", g: 300, flour: true }
  - name: Final dough
    note: Mixed in a spiral mixer after the poolish has fermented.
    items:
      - { name: "Cold poolish", stage: Poolish, note: "Straight from the fridge" }
      - { id: bread_flour, name: "High-gluten / bread flour (or Manitoba)", g: 420, flour: true }
      - { id: flour_00, name: "00 flour", g: 280, flour: true }
      - { id: water, name: "Primary cold water (45–50°F)", g: 310, water: true, note: "Added at the start with the poolish" }
      - { id: reserve_water, name: "Reserve cold water (45–50°F)", g: 70, water: true, note: "Held back for the bassinage drizzle" }
      - { id: salt, name: "Fine sea salt", g: 28 }
---

*Adapted and optimized from Vito Iacopelli's poolish masterclass for a high-efficiency spiral mixer and high-heat gas pizza oven. Flour is 58% 00 and 42% high-gluten or bread flour.*

## Part 1: Building the poolish (14 to 24 hours before mixing)

1. **Dissolve yeast & honey.** In a 1.5-liter (6-cup) or larger Tupperware container, whisk the **[[poolish_yeast]] yeast** and **[[poolish_honey]] honey** into **[[poolish_water]] room-temperature water (72–75°F)**.
2. **Mix in flour.** Add the **[[poolish_flour]] 00 flour** and stir with a spoon or spatula until no dry flour remains. Scrape down the sides of the container.
3. **Room-temp kickstart (1 hour).** Snap the lid onto the container and leave it at room temperature for **60 minutes** to wake up the yeast.
4. **Cold ferment.** Transfer the sealed container to the refrigerator for **14 to 24 hours**. By then, the poolish should be domed, frothy, and webbed with bubbles.

## Part 2: Spiral mixing (~4.5 hours before baking)

*Equipment setup: install the **spiral dough hook** (and **breaker bar**, if your mixer has one). Keep the poolish cold straight from the fridge to offset mixer friction.*

1. **Zero-waste container rinse & liquefy: low (~90 RPM) for 1:00**
   - Pour the **[[water]] primary cold water** directly into the cold poolish container. Use your fingers to swish and loosen the poolish from the corners, then dump the entire contents into the mixer bowl.
   - Run the mixer on **low (~90 RPM) for 1 minute**. The hook will whip the poolish into a uniform, frothy liquid so no dry flour chunks can form.
2. **Hydrate the flours: low (~90 RPM) for 4:00**
   - Dump all **[[bread_flour]] bread flour** and **[[flour_00]] 00 flour** into the bowl at once.
   - Mix on **low (~90 RPM) for 4 minutes**. Because [[reserve_water]] of water is held back, the dough will quickly grab the hook.
3. **Lock in the salt: low-medium (~105 RPM) for 2:00**
   - With the mixer running on **low-medium (~105 RPM)**, add the **[[salt]] fine sea salt** and mix for **2 minutes** until the salt crunch disappears.
4. **In-bowl relaxation rest: off for 10:00**
   - Leave the dough untouched inside the closed bowl with the motor off for **10 minutes**. This lets the high-protein flour passively absorb water and build gluten bonds without generating motor friction heat.
5. **Bassinage drizzle & gluten polish: medium (~160 RPM) for 3:00 to 5:00**
   - Turn the mixer up to **medium (~160 RPM)**. Slowly trickle the **[[reserve_water]] reserve cold water** down the side of the bowl in 3 to 4 small splashes, waiting ~30 seconds for the bowl walls to wipe clean before adding the next splash.
   - **When to stop:** prioritize visual gluten cues over temperature. Stop the mixer as soon as the bowl walls wipe completely clean and the dough forms a smooth, satin "pumpkin" (*zucca*) hugging the hook.
   - *Note on temperature:* 73–75°F is a heat ceiling, not a minimum. If the bowl is clean and the dough is smooth at 68–72°F, pull it immediately rather than over-mixing.

## Part 3: Bulk fermentation & balling

1. **Clean extraction.** **Remove the hook (and breaker bar) first**, leaving the bowl in place. Using lightly damp hands, lift the entire dough ball cleanly out of the unobstructed bowl.
2. **Bulk rest (1 hour).** Shape the dough into a tight, smooth round. Cover it with an inverted bowl or lidded container and let it rest for **1 hour** at room temperature.
   - *Cool dough tip:* if your dough came out of the mixer below 70°F, rest it on a wooden cutting board or a folded dish towel (rather than a cold stone countertop), or place it inside a turned-off oven with the oven light on.
3. **Divide & ball ([[count]] balls at [[weight]]).**
   - Divide the bulk dough into **[[count]] pieces at [[weight]] each**.
   - Using barely damp hands (avoid olive oil so bench flour doesn't clump later), tuck and round each piece into a tight, seamless ball.
   - Place the balls into a lidded proofing tray, leaving roughly four fingers of space between each ball.
4. **Final proof (2.5 to 3 hours).**
   - Proof covered at room temperature (70–72°F) for **2.5 to 3 hours** until the balls have roughly doubled in volume and feel light and pillowy.

## Timeline at a glance

| Stage | Time | Action |
| :--- | :--- | :--- |
| **Mix poolish** | ~5 min | Mix [[poolish_water]] water, [[poolish_yeast]] yeast, [[poolish_honey]] honey, and [[poolish_flour]] 00 flour. Cover tightly. |
| **Room-temp start** | 1 hour | Leave covered on the counter. |
| **Cold ferment** | 14–24 hours | Into the fridge. |
| **Spiral mix** | ~20–25 min | Cold poolish + [[water]] cold water (1 min, low), add flours (4 min, low), add [[salt]] salt (2 min, low-medium), rest 10 min, then drizzle [[reserve_water]] cold water (3–5 min, medium). |
| **Bulk rest** | 1 hour | Round into a tight ball, cover, and rest at room temp (on a wood board if cool). |
| **Ball dough** | — | Divide into **[[count]] balls at [[weight]]** using damp hands. Place in proofing box. |
| **Final proof** | 2.5–3 hours | Proof covered at room temperature until doubled. Then stretch and bake. |

## Freezing extra dough balls

Never freeze dough balls at 100% proofed, as the core takes ~60 minutes to freeze solid and will over-proof and collapse in the freezer. Use one of these two windows:

1. **Option A: 30 minutes after balling. *Best oven spring.***
   - Let the freshly shaped balls rest covered for 30 minutes so the seams seal and gluten relaxes, then freeze before large gas pockets form.
   - **To use later:** thaw in a covered dough box in the fridge overnight, then set on the counter **2.5 to 3 hours** before baking (or thaw straight on the counter for **4.5 to 5 hours**).
2. **Option B: at ~75% proofed. *Fastest thaw.***
   - Pull the balls 2 hours into the final proof when they are puffy and ~75% expanded. The residual warmth will carry them the rest of the way as they freeze.
   - **To use later:** place directly into a lightly oiled, covered proofing box at room temperature **3.5 to 4 hours** before baking.
3. **How to wrap for the freezer.**
   - Lightly coat the balls in olive oil and set them uncovered in the freezer for **60 to 90 minutes** until the outer skin freezes firm.
   - Wrap each firm ball tightly in plastic wrap, place inside a zip-top freezer bag, and store for up to **3 months**. Always peel the plastic wrap off *while the dough is still frozen solid* before thawing.
