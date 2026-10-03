# Parent Care File

A static page for a paper file an adult child fills in for a parent. The first screen is a sample one-page brief, set in type, with the price and one button.

Helen Ward, the doses, the doctor, and the insurance line are made up. Each sample sheet is marked SAMPLE. The page is not medical advice, not a medical device, and not a clinic.

No build step. The folder is the site.

## Offers

| File | Price |
| --- | --- |
| Parent Care File | $97 |
| Medication & Daily Log | $37 |
| Doctor & Insurance Sheet | $32 |
| One-Page ER Brief | $37 |

The three files separately are $37 + $32 + $37 = $106.

## Checkout

Edit `checkout.config.js`. Each value is a checkout URL and starts as an empty string. Paste a full `https://` link for each file. Buttons open that URL. There is no card form on this page.

## Publish

Host this folder on any static host. `.nojekyll` is included so GitHub Pages serves the files as they are.

```bash
python3 -m http.server 8080
```

Type is [Source Serif 4](https://github.com/adobe-fonts/source-serif), used under the SIL Open Font License. See `fonts/OFL.txt`.
