---
title: Vito's Neapolitan
category: dough
summary: Overnight poolish, spiral-mixed with bassinage, baked at 800–830°F with flame management.
yield:
  count: 6              # the batch as written below
  weight: 280           # 6 × 280g = 1,680g; the extra 35g is a bowl-loss buffer
  default_count: 4
  label: 12–13-inch pies

dough:
  - name: Poolish
    note: Night before. 1 hour at room temperature, then 14–24 hours in the fridge.
    items:
      - { id: poolish_water, name: "Water (72–75°F)", g: 300, water: true }
      - { id: poolish_yeast, name: "Instant or active dry yeast", g: 3 }
      - { id: poolish_honey, name: "Honey", g: 4 }
      - { id: poolish_flour, name: "00 flour", g: 300, flour: true }
  - name: Final dough
    note: Bake day, in the Ooni Halo Pro.
    items:
      - { name: "Cold poolish", stage: Poolish, note: "Straight from the fridge" }
      - { id: bread_flour, name: "High-gluten / bread flour (or Manitoba)", g: 420, flour: true }
      - { id: flour_00, name: "00 flour", g: 280, flour: true }
      - { id: water, name: "Primary cold water (45–50°F)", g: 310, water: true, note: "Added at the start with the poolish" }
      - { id: reserve_water, name: "Reserve cold water (45–50°F)", g: 70, water: true, note: "Held back for the bassinage drizzle" }
      - { id: salt, name: "Fine sea salt", g: 28 }

toppings:
  - name: Sauce
    per_batch: true
    note: One can sauces about 6 pizzas at 3–4 tablespoons each. Make a second can for a bigger batch or heavier saucing.
    items:
      - { id: tomatoes, name: "Whole peeled San Marzano tomatoes", qty: 400, unit: g, note: "One can" }
      - { id: sauce_salt, name: "Fine sea salt", qty: 4, unit: g, note: "1% of the tomato weight" }
      - { id: sauce_oil, name: "Extra virgin olive oil", qty: 5, unit: g, note: "About 1 tsp" }
      - { name: "Fresh basil", text: "A few leaves", note: "Hand-torn" }
  - name: Bench & toppings
    items:
      - { name: "Fine semolina (semola rimacinata)", text: "For dusting", note: "Bench and stretching" }
      - { name: "Crushed tomato sauce", text: "3–4 tbsp" }
      - { name: "Parmigiano-Reggiano", text: "Light dusting", note: "Freshly grated, under the mozzarella" }
      - { id: mozz, name: "Mozzarella", qty: [80, 100], unit: g, note: "Dry fresh fior di latte or whole-milk low-moisture, cut into thick batons" }
      - { name: "Fresh basil", text: "A few whole leaves", note: "Dabbed with olive oil so they don't burn" }
      - { name: "Extra virgin olive oil", text: "To finish" }
---

*Adapted and optimized from Vito Iacopelli's poolish masterclass for a high-efficiency spiral mixer and high-heat gas pizza oven. Flour is 58% 00 and 42% high-gluten or bread flour.*

## Part 1: Building the poolish (14 to 24 hours before mixing)

1. **Dissolve yeast & honey.** In a 1.5-liter (6-cup) or larger Tupperware container, whisk the **[[poolish_yeast]] yeast** and **[[poolish_honey]] honey** into **[[poolish_water]] room-temperature water (72–75°F)**.
2. **Mix in flour.** Add the **[[poolish_flour]] 00 flour** and stir with a spoon or spatula until no dry flour remains. Scrape down the sides of the container.
3. **Room-temp kickstart (1 hour).** Snap the lid onto the container and leave it at room temperature for **60 minutes** to wake up the yeast.
4. **Cold ferment.** Transfer the sealed container to the refrigerator for **14 to 24 hours**. By the next day, the poolish should be domed, frothy, and webbed with bubbles.

## Part 2: Ooni Halo Pro mixing protocol (~4.5 hours before baking)

*Equipment setup: install the **spiral dough hook** and lock in the **removable breaker bar**. Keep the poolish cold straight from the fridge to offset mixer friction.*

1. **Zero-waste container rinse & liquefy: 15% (90 RPM) for 1:00**
   - Pour the **[[water]] primary cold water** directly into the cold poolish container. Use your fingers to swish and loosen the poolish from the corners, then dump the entire contents into the Halo Pro bowl.
   - Run the mixer at **15% (90 RPM) for 1 minute**. The hook and breaker bar will whip the poolish into a uniform, frothy liquid so no dry flour chunks can form.
2. **Hydrate the flours: 15% (90 RPM) for 4:00**
   - Dump all **[[bread_flour]] bread flour** and **[[flour_00]] 00 flour** into the bowl at once.
   - Attach the **splash guard** and mix at **15% (90 RPM) for 4 minutes**. Because [[reserve_water]] of water is held back, the dough will quickly grab the hook and ride up against the breaker bar.
3. **Lock in the salt: 20% (105 RPM) for 2:00**
   - With the mixer running at **20% (105 RPM)**, pour the **[[salt]] fine sea salt** down the splash guard spout and mix for **2 minutes** until the salt crunch disappears.
4. **In-bowl relaxation rest: 0% (off) for 10:00**
   - Leave the dough untouched inside the closed bowl with the motor off for **10 minutes**. This lets the high-protein flour passively absorb water and build gluten bonds without generating motor friction heat.
5. **Bassinage drizzle & gluten polish: 35% (160 RPM) for 3:00 to 5:00**
   - Turn the dial up to **35% (160 RPM)**. Slowly trickle the **[[reserve_water]] reserve cold water** down the splash guard spout in 3 to 4 small splashes, waiting ~30 seconds for the bowl walls to wipe clean before adding the next splash.
   - **When to stop:** prioritize visual gluten cues over temperature. Stop the mixer as soon as the stainless steel bowl walls wipe completely clean and the dough forms a smooth, satin "pumpkin" (*zucca*) hugging the hook.
   - *Note on temperature:* 73–75°F is a heat ceiling, not a minimum. If the bowl is clean and the dough is smooth at 68–72°F, pull it immediately rather than over-mixing.

## Part 3: Bulk fermentation & balling

1. **Clean extraction.** Tilt the Halo Pro head back and **unclip the breaker bar and spiral hook first** while leaving the bowl locked in the base. Using lightly damp hands, lift the entire dough ball cleanly out of the unobstructed bowl.
2. **Bulk rest (1 hour).** Shape the dough into a tight, smooth round. Cover it with an inverted bowl or lidded container and let it rest for **1 hour** at room temperature.
   - *Cool dough tip:* if your dough came out of the mixer below 70°F, rest it on a wooden cutting board or a folded dish towel (rather than a cold stone countertop), or place it inside a turned-off oven with the oven light on.
3. **Divide & ball ([[count]] balls at [[weight]]).**
   - Divide the bulk dough into **[[count]] pieces at [[weight]] each**.
   - Using barely damp hands (avoid olive oil so bench flour doesn't clump later), tuck and round each piece into a tight, seamless ball.
   - Place the balls into a lidded proofing tray, leaving roughly four fingers of space between each ball.
4. **Final proof (2.5 to 3 hours).**
   - Proof covered at room temperature (70–72°F) for **2.5 to 3 hours** until the balls have roughly doubled in volume and feel light and pillowy.

## Part 4: Sauce prep, stretching & Gozney bake

1. **Prep the sauce & cheese (45 minutes before bake).**
   - Pour a [[tomatoes]] can of whole peeled tomatoes into a bowl, add **[[sauce_salt]] fine sea salt**, a drizzle (**[[sauce_oil]]**) of extra virgin olive oil, and hand-torn fresh basil leaves. Crush the tomatoes by hand so the sauce stays chunky and bright, leaving the seeds intact without blending them (which turns the sauce bitter).
   - Slice the mozzarella into thick rectangular batons and rest them on paper towels to blot away any surface moisture.
2. **Preheat the Gozney.**
   - Fire up the Gozney 40 to 45 minutes before baking. Because this dough contains 42% bread/Manitoba flour, aim for a slightly moderated stone temperature of **800–830°F** (425–445°C) rather than 900°F+.
3. **Stretch in fine semolina.**
   - Dust your work surface generously with **fine semolina**. Flip a dough ball out onto the semolina and coat both sides.
   - Press the gas from the center outward toward the rim, stopping ½ inch from the edge. Pinch all the way around the inner border of the rim to lock the air into the *cornicione*.
   - Lift, stretch to a 12- to 13-inch round, and shake off all excess semolina before setting the dough on the counter to top.
4. **Top & launch.**
   - Spread 3 to 4 tablespoons of crushed tomatoes across the base.
   - Dust with freshly grated Parmigiano-Reggiano, arrange [[mozz]] of mozzarella batons evenly, and top with fresh basil leaves dabbed lightly with olive oil (so they don't burn under the flame).
   - Slide onto a lightly dusted perforated peel, give it a quick jiggle to confirm it moves freely, and launch into the Gozney.
5. **Gozney flame management (60 to 90 seconds total).**
   - **First 40 seconds:** immediately turn the Gozney flame down to **low / medium-low** right after launching. This lets the 800°F+ stone set a crisp, structured undercarriage without scorching the bread-flour crust.
   - **Final 20 to 40 seconds:** once the bottom sets, rotate the pizza 180° and turn the flame back up to **medium-high / high** to blister the *cornicione* and melt the mozzarella batons.

## Sample bake-day timeline (target: 5:00 PM dinner)

| Time | Stage | Action |
| :--- | :--- | :--- |
| **9:35 PM (night before)** | **Mix poolish** | Mix [[poolish_water]] water, [[poolish_yeast]] yeast, [[poolish_honey]] honey, and [[poolish_flour]] 00 flour. Cover tightly. |
| **9:40 – 10:40 PM** | **Room-temp start** | Leave covered on the counter for 1 hour. |
| **10:40 PM** | **Refrigerate** | Place in the fridge overnight (~13.5 to 14 hours). |
| **12:15 PM (bake day)** | **Halo Pro mix** | Cold poolish + [[water]] cold water (1 min @ 15%), add flours (4 min @ 15%), add [[salt]] salt (2 min @ 20%), rest 10 min, then drizzle [[reserve_water]] cold water (3–5 min @ 35%). |
| **12:40 – 1:40 PM** | **Bulk rest** | Round into a tight ball, cover, and rest 1 hour at room temp (on a wood board if cool). |
| **1:40 PM** | **Ball dough** | Divide into **[[count]] balls at [[weight]]** using damp hands. Place in proofing box. |
| **1:40 – 4:25 PM** | **Final proof** | Proof covered at room temperature for ~2 hours 45 minutes until doubled. |
| **3:45 PM** | **Fire Gozney & prep** | Ignite the Gozney to reach 800–830°F. Crush tomatoes with 1% salt and slice mozzarella batons. |
| **4:25 – 5:00 PM** | **Stretch & bake** | Stretch in semolina, top, launch, drop flame for 40s, then raise flame to finish. |

## Freezing extra dough balls

Never freeze dough balls at 100% proofed, as the core takes ~60 minutes to freeze solid and will over-proof and collapse in the freezer. Use one of these two windows:

1. **Option A: 30 minutes after balling (~2:10 PM on the timeline). *Best oven spring.***
   - Let the freshly shaped balls rest covered for 30 minutes so the seams seal and gluten relaxes, then freeze before large gas pockets form.
   - **To use later:** thaw in a covered dough box in the fridge overnight, then set on the counter **2.5 to 3 hours** before baking (or thaw straight on the counter for **4.5 to 5 hours**).
2. **Option B: at ~75% proofed (~3:40 PM on the timeline). *Fastest afternoon thaw.***
   - Pull the balls 2 hours into the final proof when they are puffy and ~75% expanded. The residual warmth will carry them the rest of the way as they freeze.
   - **To use later:** place directly into a lightly oiled, covered proofing box at room temperature **3.5 to 4 hours** before baking.
3. **How to wrap for the freezer.**
   - Lightly coat the balls in olive oil and set them uncovered in the freezer for **60 to 90 minutes** until the outer skin freezes firm.
   - Wrap each firm ball tightly in plastic wrap, place inside a zip-top freezer bag, and store for up to **3 months**. Always peel the plastic wrap off *while the dough is still frozen solid* before thawing.
