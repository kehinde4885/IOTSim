**Asset**
Represents a **physical, tangible piece of equipment** — something you could point to, install, replace, or maintain. Light bulbs, HVAC units, pumps, chillers, and fixtures typically fall here. A light bulb is a physical object with a serial number, a lifespan, a manufacturer, a location — classic "Asset" characteristics.

**Capability**
Represents a **functional ability or behavior**, not a physical thing — e.g., "Dimming," "On/Off Control," "Color Temperature Adjustment." These are usually modeled as properties or relationships *attached to* an Asset, not as standalone entities. So the light bulb itself isn't a Capability — but "turn on/off" or "dim to 50%" would be Capabilities that the light bulb Asset *has*.

**Space**
Represents a **physical location** — a room, floor, building, zone. A light bulb isn't a location; it's *located within* a Space (e.g., "Conference Room 3"), typically via a relationship like `isLocatedIn`.

**Logical Device**
Represents the **digital/computational identity** of a device — its network endpoint, telemetry stream, firmware, connectivity status. This is relevant if the light bulb is a "smart bulb" (e.g., Philips Hue) that reports telemetry (on/off state, power usage) and receives commands over a network. In that case, the *physical bulb* is the Asset, while its *communication/software interface* is often separately modeled as a Logical Device.

### Typical modeling pattern

```
Space: "Conference Room 3"
  └── contains → Asset: "Light Bulb #42"
                    ├── hosts → Capability: "Dimming"
                    ├── hosts → Capability: "On/Off"
                    └── implementedBy → Logical Device: "Hue Bulb (network endpoint)"
```

### Summary
| Category | Fits a light bulb? |
|---|---|
| **Asset** | ✅ Yes — it's a physical piece of equipment |
| Capability | ❌ No — the bulb *has* capabilities, it isn't one |
| Space | ❌ No — it exists *within* a space |
| Logical Device | ⚠️ Only if it's "smart"/connected — models its digital/communication identity separately from the physical Asset |

For a plain, non-connected light bulb: **Asset**, full stop.
For a smart/connected light bulb: **Asset** (the physical fixture) **+ Logical Device** (its network/telemetry identity), often as two related twins rather than one.
