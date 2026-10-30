# Map data and attribution

`map-data.js` bundles simplified country geometry so the game map works when opened locally and does not need a map service.

- Modern country boundaries are derived from [Natural Earth, Admin 0 Countries](https://github.com/nvkelso/natural-earth-vector), a public-domain map dataset.
- The 1938 and 1800 historical basemaps are derived from [aourednik/historical-basemaps](https://github.com/aourednik/historical-basemaps), licensed under GPL-3.0. The applicable license is included in [`LICENSE-GPL-3.0.txt`](./LICENSE-GPL-3.0.txt).
- The game uses the available 1938 map as the starting geometry for 1939–1942 scenarios, then applies simplified wartime ownership changes. These scenarios are intended for gameplay and are not a precise account of every occupation or front line.
- The 1800 map provides the approximate historical geography used by the Americas and Qing scenarios.
