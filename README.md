# Parent Care File

A single static landing page for a parent care file. It is for an adult child taking care of a parent. The first screen shows the cover, the price, and one button.

No build step. No account. The folder is the site.

## Offers

| File | Price | What it is |
| --- | --- | --- |
| Parent Care File | $97 | The whole file. Medication list, daily log, appointment notes, doctor and insurance contacts, and a one-page sheet a sibling or the ER can read. |
| Medication & Daily Log | $37 | Medication list, daily log, and appointment notes. |
| Doctor & Insurance Sheet | $32 | Doctor and insurance contacts, on one sheet. |
| One-Page ER Brief | $37 | One page a sibling or the ER can read. |

The three files separately are $37 + $32 + $37 = $106.

The cover is `images/cover.jpg`. The page beside a pill bottle and a pen is `images/page-bottle-pen.jpg`. Both were made for this page.

## Checkout

Edit `checkout.config.js`. Each value is a checkout URL and starts as an empty string. Paste a full `https://` link for each file you sell.

Buttons open that URL. If a value is still empty, the button says checkout is not connected yet. There is no card form on this page.

## Publish

Host this folder on any static host. `.nojekyll` is included so GitHub Pages serves the files as they are.

Open `index.html` in a browser, or from this folder:

```bash
python3 -m http.server 8080
```

## What this page does not do

It does not give medical advice, take card numbers, or show reviews, timers, or guarantees. You fill the file in from what you already know. Delivery is an instant PDF through the checkout link you paste in: print it, and keep it with the medications.

Type is [Source Serif 4](https://github.com/adobe-fonts/source-serif), used under the SIL Open Font License. See `fonts/OFL.txt`.
