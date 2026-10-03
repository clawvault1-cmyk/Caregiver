# Parent Care File

A static page for an adult child taking care of a parent. The first screen is the night itself: one person leaving, one staying. The line, the $97 price, and one button sit on that picture. The file itself is not shown.

$97 for the whole file. Separately: Medication & Daily Log $37, Doctor & Insurance Sheet $32, One-Page ER Brief $37. Together those three are $106.

It is not medical advice, not a device, and not a clinic.

## Checkout

Edit `checkout.config.js`. Each value starts as an empty string. Paste a full `https://` link for each file. There is no card form on this page.

## Publish

Host this folder as static files. `.nojekyll` is included for GitHub Pages.

```bash
python3 -m http.server 8080
```

Type is [Source Serif 4](https://github.com/adobe-fonts/source-serif), used under the SIL Open Font License. See `fonts/OFL.txt`.
