# Temperature Converter

A single-file, vanilla HTML/CSS/JavaScript temperature converter that converts values between Celsius, Fahrenheit, and Kelvin with real-time input validation.

## Live Demo

Open `temperature-converter.html` in any modern browser — no build step, no dependencies, no server required.

## Features

- **Instant unit conversion** across Celsius (°C), Fahrenheit (°F), and Kelvin (K)
- **Real-time input validation** — flags non-numeric input as you type, before you even click Convert
- **Auto-conversion display** — shows all three scales simultaneously after conversion, with the unit you entered clearly badged as "Input"
- **Absolute zero handling** — any value that normalizes below −273.15 °C (−459.67 °F / 0 K) triggers a friendly warning instead of a nonsense result
- **Segmented unit selector** styled as color-coded pill buttons (blue = Celsius, orange = Fahrenheit, violet = Kelvin), fully keyboard-navigable
- **Keyboard support** — Tab/arrow-key navigation, Enter to convert, visible focus rings throughout
- **Responsive layout** — centered card design that adapts down to mobile widths

## Tech Stack

- HTML5
- CSS3 (custom properties / CSS variables, no framework)
- Vanilla JavaScript (no libraries, no build tools)
- Google Fonts: Space Grotesk, Inter, JetBrains Mono (loaded via CDN link)

## How It Works

### Conversion logic

Every input value is first normalized to Celsius, then Celsius is used to derive the other two scales. This keeps a single source of truth instead of six separate conversion formulas:

```
toCelsius(value, unit):
  C → value
  F → (value − 32) × 5⁄9
  K → value − 273.15

fromCelsius(c):
  C → c
  F → c × 9⁄5 + 32
  K → c + 273.15
```

### Validation

The input field is `type="text"` (not `type="number"`) so the app has full control over validation and error messaging rather than relying on inconsistent native browser behavior. A regex (`/^-?(\d+\.?\d*|\.\d+)$/`) checks for valid numeric entries — digits with an optional leading minus sign and optional decimal point. Partial in-progress states like a lone `-` or `.` are treated as "still typing," not errors.

### Absolute zero check

After normalizing to Celsius, the value is compared against −273.15 °C (with a small floating-point epsilon so the exact boundary value is correctly accepted, not rejected). Anything colder triggers the warning banner and suppresses the result cards.

## File Structure

```
temperature-converter.html   ← everything (HTML + CSS + JS) in one file
```

## Browser Support

Works in all modern evergreen browsers (Chrome, Firefox, Safari, Edge). Uses standard CSS Grid, Flexbox, custom properties, and ES6 JavaScript — no polyfills included.

## License

Free to use, modify, and extend for personal or academic purposes.
