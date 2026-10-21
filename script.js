
"use strict";

// =====================================================
// PAKISTAN PUBLIC TRANSPORT EXPLORER
// Data sources: OpenStreetMap, Nominatim, Overpass API
// =====================================================

// ---------- 1. CITY AND TOWN LIST ----------

const locations = [
    // Islamabad Capital Territory
    ["Islamabad", 33.6844, 73.0479],
    ["Rawalpindi", 33.5651, 73.0169],
    ["Taxila", 33.7463, 72.8397],
    ["Wah Cantonment", 33.7995, 72.7510],
    ["Murree", 33.9070, 73.3943],
    ["Bharakahu", 33.7380, 73.1920],
    ["Gujar Khan", 33.2558, 73.3047],
    ["Kahuta", 33.5918, 73.3874],
    ["Kallar Syedan", 33.4130, 73.3790],
    ["Fateh Jang", 33.5660, 72.6380],

    // Punjab
    ["Lahore", 31.5204, 74.3587],
    ["Faisalabad", 31.4504, 73.1350],
    ["Multan", 30.1575, 71.5249],
    ["Gujranwala", 32.1877, 74.1945],
    ["Sialkot", 32.4945, 74.5229],
    ["Sargodha", 32.0836, 72.6711],
    ["Bahawalpur", 29.3956, 71.6836],
    ["Sahiwal", 30.6682, 73.1114],
    ["Sheikhupura", 31.7131, 73.9783],
    ["Rahim Yar Khan", 28.4212, 70.2989],
    ["Jhang", 31.2781, 72.3317],
    ["Dera Ghazi Khan", 30.0561, 70.6348],
    ["Gujrat", 32.5731, 74.0789],
    ["Kasur", 31.1177, 74.4467],
    ["Okara", 30.8138, 73.4534],
    ["Chiniot", 31.7200, 72.9789],
    ["Khanewal", 30.3017, 71.9321],
    ["Mianwali", 32.5839, 71.5370],
    ["Attock", 33.7667, 72.3609],
    ["Jhelum", 32.9425, 73.7257],
    ["Chakwal", 32.9328, 72.8539],
    ["Hafizabad", 32.0709, 73.6880],
    ["Mandi Bahauddin", 32.5861, 73.4912],
    ["Narowal", 32.1019, 74.8730],
    ["Pakpattan", 30.3410, 73.3866],
    ["Vehari", 30.0452, 72.3489],
    ["Lodhran", 29.5339, 71.6324],
    ["Muzaffargarh", 30.0726, 71.1938],
    ["Layyah", 30.9613, 70.9390],
    ["Bhakkar", 31.6269, 71.0657],
    ["Khushab", 32.2967, 72.3525],
    ["Toba Tek Singh", 30.9713, 72.4827],
    ["Kamalia", 30.7271, 72.6446],
    ["Burewala", 30.1667, 72.6500],
    ["Arifwala", 30.2900, 73.0667],
    ["Wazirabad", 32.4432, 74.1159],
    ["Daska", 32.3242, 74.3500],
    ["Pasrur", 32.2660, 74.6630],
    ["Muridke", 31.8020, 74.2570],
    ["Nankana Sahib", 31.4500, 73.7000],
    ["Pattoki", 31.0200, 73.8500],
    ["Jaranwala", 31.3333, 73.4333],
    ["Kamoke", 31.9750, 74.2230],
    ["Chishtian", 29.7972, 72.8577],
    ["Haroonabad", 29.6133, 73.1367],
    ["Bahawalnagar", 29.9987, 73.2536],
    ["Fort Abbas", 29.1930, 72.8550],
    ["Taunsa", 30.7058, 70.6500],

    // Sindh
    ["Karachi", 24.8607, 67.0011],
    ["Hyderabad", 25.3960, 68.3578],
    ["Sukkur", 27.7052, 68.8574],
    ["Larkana", 27.5589, 68.2120],
    ["Nawabshah", 26.2442, 68.4100],
    ["Mirpur Khas", 25.5269, 69.0111],
    ["Jacobabad", 28.2769, 68.4514],
    ["Shikarpur", 27.9556, 68.6382],
    ["Khairpur", 27.5295, 68.7592],
    ["Thatta", 24.7474, 67.9235],
    ["Badin", 24.6550, 68.8380],
    ["Dadu", 26.7303, 67.7769],
    ["Ghotki", 28.0060, 69.3160],
    ["Kashmore", 28.4326, 69.5830],
    ["Umerkot", 25.3614, 69.7361],
    ["Tando Allahyar", 25.4605, 68.7175],
    ["Tando Adam", 25.7682, 68.6610],
    ["Kotri", 25.3650, 68.3080],
    ["Jamshoro", 25.4283, 68.2800],
    ["Matiari", 25.5971, 68.4467],
    ["Sehwan", 26.4240, 67.8610],
    ["Kandhkot", 28.2450, 69.1800],
    ["Rohri", 27.6920, 68.8950],

    // Khyber Pakhtunkhwa
    ["Peshawar", 34.0151, 71.5249],
    ["Mardan", 34.1989, 72.0231],
    ["Abbottabad", 34.1688, 73.2215],
    ["Mingora", 34.7795, 72.3627],
    ["Kohat", 33.5869, 71.4420],
    ["Dera Ismail Khan", 31.8320, 70.9024],
    ["Bannu", 32.9853, 70.6040],
    ["Mansehra", 34.3300, 73.1968],
    ["Nowshera", 34.0153, 71.9747],
    ["Charsadda", 34.1453, 71.7308],
    ["Swabi", 34.1202, 72.4699],
    ["Haripur", 33.9945, 72.9341],
    ["Chitral", 35.8518, 71.7864],
    ["Timergara", 34.8260, 71.8440],
    ["Karak", 33.1167, 71.0833],
    ["Hangu", 33.5310, 71.0590],
    ["Lakki Marwat", 32.6079, 70.9114],
    ["Tank", 32.2170, 70.3830],
    ["Battagram", 34.6796, 73.0233],
    ["Dir", 35.1980, 71.8750],
    ["Parachinar", 33.8992, 70.1008],
    ["Landi Kotal", 34.0980, 71.1450],

    // Balochistan
    ["Quetta", 30.1798, 66.9750],
    ["Gwadar", 25.1264, 62.3225],
    ["Turbat", 26.0031, 63.0544],
    ["Khuzdar", 27.8000, 66.6167],
    ["Chaman", 30.9210, 66.4520],
    ["Sibi", 29.5448, 67.8764],
    ["Zhob", 31.3411, 69.4481],
    ["Loralai", 30.3705, 68.5979],
    ["Dera Murad Jamali", 28.5460, 68.2230],
    ["Kalat", 29.0266, 66.5908],
    ["Nushki", 29.5500, 66.0167],
    ["Pishin", 30.5800, 66.9900],
    ["Mastung", 29.7990, 66.8450],
    ["Pasni", 25.2630, 63.4710],
    ["Uthal", 25.8070, 66.6210],
    ["Dalbandin", 28.8880, 64.4060],
    ["Awaran", 26.4560, 65.2310],
    ["Hub", 25.0500, 66.8800],

    // Gilgit-Baltistan
    ["Gilgit", 35.9208, 74.3144],
    ["Skardu", 35.2971, 75.6333],
    ["Hunza", 36.3167, 74.6500],
    ["Aliabad", 36.3070, 74.6160],
    ["Gahkuch", 36.1760, 73.7660],
    ["Chilas", 35.4200, 74.0960],
    ["Astore", 35.3410, 74.8560],
    ["Shigar", 35.4230, 75.7500],
    ["Khaplu", 35.1500, 76.3330],
    ["Gupis", 36.1700, 73.4000],
    ["Nagar", 36.2600, 74.7200],

    // Azad Jammu and Kashmir
    ["Muzaffarabad", 34.3700, 73.4710],
    ["Mirpur", 33.1478, 73.7519],
    ["Kotli", 33.5184, 73.9022],
    ["Rawalakot", 33.8578, 73.7604],
    ["Bagh", 33.9811, 73.7761],
    ["Bhimber", 32.9747, 74.0790],
    ["Pallandri", 33.7150, 73.6900],
    ["Hattian Bala", 34.1690, 73.7430],
    ["Neelum Valley", 34.5850, 73.9070]
];

// ---------- 2. HTML ELEMENTS ----------

const citySelect = document.getElementById("citySelect");
const locationSearch = document.getElementById("locationSearch");
const searchForm = document.getElementById("searchForm");
const nationalViewBtn = document.getElementById("nationalViewBtn");
const quickCityButtons = document.getElementById("quickCityButtons");
const nameFilter = document.getElementById("nameFilter");

const filterBus = document.getElementById("filterBus");
const filterRail = document.getElementById("filterRail");
const filterMetro = document.getElementById("filterMetro");
const filterOther = document.getElementById("filterOther");

const loadRoutesBtn = document.getElementById("loadRoutesBtn");
const applyFiltersBtn = document.getElementById("applyFiltersBtn");
const resetBtn = document.getElementById("resetBtn");
const zoomToResultsBtn = document.getElementById("zoomToResultsBtn");

const currentLocation = document.getElementById("currentLocation");
const totalFacilities = document.getElementById("totalFacilities");
const visibleFacilities = document.getElementById("visibleFacilities");
const statusMessage = document.getElementById("statusMessage");
const mapTitle = document.getElementById("mapTitle");
const loadingOverlay = document.getElementById("loadingOverlay");

// ---------- 3. MAP SETUP ----------

const map = L.map("map", {
    zoomControl: true
}).setView([30.3753, 69.3451], 5);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>'
}).addTo(map);

const markerLayer = L.layerGroup().addTo(map);
const routeLayer = L.layerGroup().addTo(map);

let allFacilities = [];
let currentSearchController = null;
let currentSearchId = 0;
let lastSearchBounds = null;
let routeRequestController = null;

// ---------- 4. FILL CITY DROPDOWN ----------

locations.sort((a, b) => a[0].localeCompare(b[0]));

locations.forEach(([name, lat, lon]) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    citySelect.appendChild(option);
});

// Show frequently used cities as quick buttons.
const quickCities = [
    "Islamabad", "Rawalpindi", "Lahore", "Karachi",
    "Peshawar", "Quetta", "Multan", "Gilgit", "Skardu"
];

quickCities.forEach(name => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quick-city";
    button.textContent = name;
    button.addEventListener("click", () => searchLocation(name));
    quickCityButtons.appendChild(button);
});

// ---------- 5. STATUS AND LOADING HELPERS ----------

function setStatus(message, type = "") {
    statusMessage.textContent = message;
    statusMessage.className = "status-message";

    if (type) {
        statusMessage.classList.add(type);
    }
}

function setLoading(isLoading) {
    loadingOverlay.classList.toggle("hidden", !isLoading);
}

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

// ---------- 6. TRANSPORT CLASSIFICATION ----------

function classifyFacility(tags = {}) {
    const railway = (tags.railway || "").toLowerCase();
    const station = (tags.station || "").toLowerCase();
    const highway = (tags.highway || "").toLowerCase();
    const amenity = (tags.amenity || "").toLowerCase();
    const publicTransport = (tags.public_transport || "").toLowerCase();
    const bus = (tags.bus || "").toLowerCase();
    const name = (tags.name || "").toLowerCase();

    if (
        railway === "station" ||
        railway === "halt" ||
        railway === "tram_stop" ||
        railway === "subway_entrance" ||
        station === "train" ||
        station === "light_rail"
    ) {
        return "rail";
    }

    if (
        station === "subway" ||
        railway === "subway" ||
        railway === "light_rail" ||
        name.includes("metro station") ||
        name.includes("orange line") ||
        name.includes("green line")
    ) {
        return "metro";
    }

    if (
        highway === "bus_stop" ||
        amenity === "bus_station" ||
        publicTransport === "platform" && (bus === "yes" || tags.bus)
    ) {
        return "bus";
    }

    if (
        publicTransport === "station" ||
        publicTransport === "stop_position" ||
        publicTransport === "platform" ||
        amenity === "ferry_terminal" ||
        railway === "platform"
    ) {
        return "other";
    }

    return null;
}

function facilityLabel(category) {
    const labels = {
        bus: "Bus stop / station",
        rail: "Railway station / stop",
        metro: "Metro / light rail",
        other: "Other transport facility"
    };

    return labels[category] || "Transport facility";
}

function categoryColor(category) {
    const colors = {
        bus: "#0d9488",
        rail: "#3868d8",
        metro: "#e59b32",
        other: "#9463c7"
    };

    return colors[category] || "#64748b";
}

// ---------- 7. MAP MARKERS ----------

function createMarker(facility) {
    const color = categoryColor(facility.category);

    const marker = L.circleMarker([facility.lat, facility.lon], {
        radius: 7,
        color: "#ffffff",
        weight: 2,
        fillColor: color,
        fillOpacity: 0.95
    });

    const name = facility.tags.name || "Unnamed facility";
    const tags = facility.tags;

    const details = [
        `<h3>${escapeHTML(name)}</h3>`,
        `<p><strong>Type:</strong> ${escapeHTML(facilityLabel(facility.category))}</p>`,
        tags.operator
            ? `<p><strong>Operator:</strong> ${escapeHTML(tags.operator)}</p>`
            : "",
        tags.network
            ? `<p><strong>Network:</strong> ${escapeHTML(tags.network)}</p>`
            : "",
        tags.ref
            ? `<p><strong>Reference:</strong> ${escapeHTML(tags.ref)}</p>`
            : "",
        `<p><strong>Coordinates:</strong> ${facility.lat.toFixed(5)}, ${facility.lon.toFixed(5)}</p>`,
        `<p><a href="https://www.openstreetmap.org/${facility.type}/${facility.id}" target="_blank" rel="noopener noreferrer">View OpenStreetMap feature</a></p>`
    ].join("");

    marker.bindPopup(`<div class="transport-popup">${details}</div>`);
    facility.marker = marker;

    return marker;
}

// ---------- 8. FILTERS ----------

function isCategoryEnabled(category) {
    if (category === "bus") return filterBus.checked;
    if (category === "rail") return filterRail.checked;
    if (category === "metro") return filterMetro.checked;
    return filterOther.checked;
}

function getFilteredFacilities() {
    const searchText = nameFilter.value.trim().toLowerCase();

    return allFacilities.filter(facility => {
        const name = (facility.tags.name || "").toLowerCase();
        const operator = (facility.tags.operator || "").toLowerCase();

        return isCategoryEnabled(facility.category) &&
            (!searchText || name.includes(searchText) || operator.includes(searchText));
    });
}

function renderFacilities(fitMap = false) {
    markerLayer.clearLayers();

    const filtered = getFilteredFacilities();

    filtered.forEach(facility => {
        const marker = createMarker(facility);
        marker.addTo(markerLayer);
    });

    totalFacilities.textContent = allFacilities.length.toLocaleString();
    visibleFacilities.textContent = filtered.length.toLocaleString();

    if (fitMap && filtered.length) {
        const group = L.featureGroup(filtered.map(f => f.marker));
        map.fitBounds(group.getBounds().pad(0.15), { maxZoom: 15 });
    }
}

// ---------- 9. OVERPASS API QUERY ----------

const OVERPASS_ENDPOINTS = [
    "https://overpass-api.de/api/interpreter",
    "https://overpass.kumi.systems/api/interpreter"
];

function makeTransportQuery(south, west, north, east, includeRoutes = false) {
    const bbox = `(${south},${west},${north},${east})`;

    const featureQuery = `
    node["highway"="bus_stop"]${bbox};
    node["amenity"="bus_station"]${bbox};
    node["public_transport"~"platform|station|stop_position"]${bbox};
    node["railway"~"station|halt|tram_stop|subway_entrance|platform"]${bbox};
    node["station"~"subway|train|light_rail"]${bbox};
    way["amenity"="bus_station"]${bbox};
    way["railway"="station"]${bbox};
    relation["amenity"="bus_station"]${bbox};
  `;

    const routeQuery = includeRoutes ? `
    relation["route"~"bus|train|subway|tram|light_rail|trolleybus"]${bbox};
  ` : "";

    return `
    [out:json][timeout:45];
    (
      ${featureQuery}
      ${routeQuery}
    );
    out center tags;
  `;
}

async function fetchOverpassData(query, signal) {
    let lastError = null;

    for (const endpoint of OVERPASS_ENDPOINTS) {
        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                },
                body: "data=" + encodeURIComponent(query),
                signal
            });

            if (!response.ok) {
                throw new Error(`Map data service returned HTTP ${response.status}.`);
            }

            return await response.json();
        } catch (error) {
            if (error.name === "AbortError") {
                throw error;
            }

            lastError = error;
        }
    }

    throw lastError || new Error("Could not connect to the map data services.");
}

// ---------- 10. NORMALIZE API RESULTS ----------

function extractFacilities(elements) {
    const result = [];
    const seen = new Set();

    elements.forEach(element => {
        const tags = element.tags || {};

        // Route relations are drawn separately.
        if (element.type === "relation" && tags.route) {
            return;
        }

        const category = classifyFacility(tags);

        if (!category) return;

        const lat = element.lat ?? element.center?.lat;
        const lon = element.lon ?? element.center?.lon;

        if (!Number.isFinite(lat) || !Number.isFinite(lon)) return;

        const uniqueKey = `${element.type}-${element.id}`;

        if (seen.has(uniqueKey)) return;
        seen.add(uniqueKey);

        result.push({
            id: element.id,
            type: element.type,
            lat,
            lon,
            category,
            tags
        });
    });

    return result;
}

// ---------- 11. SEARCH LOCATION WITH NOMINATIM ----------

async function geocodeLocation(query, signal) {
    const url = new URL("https://nominatim.openstreetmap.org/search");

    url.searchParams.set("q", query);
    url.searchParams.set("format", "jsonv2");
    url.searchParams.set("limit", "5");
    url.searchParams.set("countrycodes", "pk");
    url.searchParams.set("addressdetails", "1");

    const response = await fetch(url, {
        headers: { "Accept": "application/json" },
        signal
    });

    if (!response.ok) {
        throw new Error(`Location search returned HTTP ${response.status}.`);
    }

    const results = await response.json();

    if (!results.length) {
        throw new Error("No matching location was found in Pakistan. Try another spelling or nearby city.");
    }

    // Prefer an exact or close name match when available.
    const cleanQuery = query.trim().toLowerCase();
    const bestMatch = results.find(item =>
        (item.name || "").toLowerCase() === cleanQuery
    ) || results[0];

    return bestMatch;
}

// ---------- 12. MAIN SEARCH FUNCTION ----------

async function searchLocation(query, fixedLocation = null) {
    const cleanQuery = query.trim();

    if (!cleanQuery && !fixedLocation) {
        setStatus("Please enter a city, town or district.", "error");
        return;
    }

    if (currentSearchController) {
        currentSearchController.abort();
    }

    const controller = new AbortController();
    currentSearchController = controller;
    const searchId = ++currentSearchId;

    setLoading(true);
    setStatus("Searching for the location and transport facilities...");
    currentLocation.textContent = cleanQuery || "Selected location";
    mapTitle.textContent = cleanQuery || "Location search";

    try {
        let south, west, north, east;
        let displayName = cleanQuery;

        if (fixedLocation) {
            const [name, lat, lon] = fixedLocation;
            const delta = 0.055;

            south = lat - delta;
            west = lon - delta;
            north = lat + delta;
            east = lon + delta;
            displayName = name;

            map.setView([lat, lon], 13);
        } else {
            const result = await geocodeLocation(cleanQuery, controller.signal);

            if (searchId !== currentSearchId) return;

            const box = result.boundingbox.map(Number);
            south = box[0];
            north = box[1];
            west = box[2];
            east = box[3];

            // Large regions can overload public APIs. Use a local area
            // around the geocoded center for the first search.
            const lat = Number(result.lat);
            const lon = Number(result.lon);
            const latSpan = north - south;
            const lonSpan = east - west;

            if (latSpan > 0.6 || lonSpan > 0.6) {
                const delta = 0.08;
                south = lat - delta;
                north = lat + delta;
                west = lon - delta;
                east = lon + delta;
            }

            displayName = result.display_name || cleanQuery;
            map.setView([lat, lon], Math.max(10, Math.min(14, map.getZoom())));
        }

        lastSearchBounds = L.latLngBounds(
            [south, west],
            [north, east]
        );

        const queryText = makeTransportQuery(south, west, north, east);

        const data = await fetchOverpassData(queryText, controller.signal);

        if (searchId !== currentSearchId) return;

        allFacilities = extractFacilities(data.elements || []);

        currentLocation.textContent = displayName;
        mapTitle.textContent = displayName;
        renderFacilities(true);

        if (allFacilities.length) {
            setStatus(
                `Loaded ${allFacilities.length} mapped transport facilities for this search area. Use the filters to explore the results.`,
                "success"
            );
        } else {
            setStatus(
                "No matching public transport facilities were returned for this area. Data may be missing from OpenStreetMap, or try a nearby location.",
                "error"
            );
        }
    } catch (error) {
        if (error.name === "AbortError") return;

        console.error(error);

        setStatus(
            `${error.message || "Something went wrong."} Please try again after a short wait.`,
            "error"
        );
    } finally {
        if (searchId === currentSearchId) {
            setLoading(false);
            currentSearchController = null;
        }
    }
}

// ---------- 13. LOAD PUBLIC TRANSPORT ROUTES ----------

async function loadPublicTransportRoutes() {
    if (!lastSearchBounds) {
        setStatus("First search for a city or town before loading routes.", "error");
        return;
    }

    if (routeRequestController) {
        routeRequestController.abort();
    }

    routeRequestController = new AbortController();

    setLoading(true);
    setStatus("Loading public transport route relations...");

    try {
        const bounds = lastSearchBounds;
        const south = bounds.getSouth();
        const west = bounds.getWest();
        const north = bounds.getNorth();
        const east = bounds.getEast();

        const query = makeTransportQuery(south, west, north, east, true);
        const data = await fetchOverpassData(query, routeRequestController.signal);

        routeLayer.clearLayers();

        const routeRelations = (data.elements || []).filter(element =>
            element.type === "relation" && element.tags?.route
        );

        // Relation geometry is not always returned by this compact query.
        // Display available route names and explain this limitation.
        const routeNames = routeRelations
            .map(element => element.tags?.name || element.tags?.ref || element.tags?.route)
            .filter(Boolean);

        if (!routeNames.length) {
            setStatus(
                "No mapped public transport route relations were found in this area. Route coverage varies across OpenStreetMap.",
                "error"
            );
        } else {
            const uniqueNames = [...new Set(routeNames)];

            setStatus(
                `Found ${uniqueNames.length} route relation(s): ${uniqueNames.slice(0, 8).join(", ")}${uniqueNames.length > 8 ? "…" : ""}. The current API query lists route names; it does not draw complete route paths.`,
                "success"
            );
        }
    } catch (error) {
        if (error.name === "AbortError") return;

        console.error(error);
        setStatus(
            "Could not load route information. The public API may be busy; try again later.",
            "error"
        );
    } finally {
        setLoading(false);
    }
}

// ---------- 14. EVENT LISTENERS ----------

searchForm.addEventListener("submit", event => {
    event.preventDefault();

    const query = locationSearch.value.trim();

    if (query) {
        searchLocation(query);
    }
});

citySelect.addEventListener("change", () => {
    const selectedName = citySelect.value;

    if (!selectedName) return;

    const selected = locations.find(location => location[0] === selectedName);

    if (selected) {
        locationSearch.value = selectedName;
        searchLocation(selectedName, selected);
    }
});

nationalViewBtn.addEventListener("click", () => {
    if (currentSearchController) {
        currentSearchController.abort();
    }

    if (routeRequestController) {
        routeRequestController.abort();
    }

    allFacilities = [];
    markerLayer.clearLayers();
    routeLayer.clearLayers();
    lastSearchBounds = null;

    map.setView([30.3753, 69.3451], 5);
    currentLocation.textContent = "Pakistan";
    mapTitle.textContent = "Pakistan overview";
    totalFacilities.textContent = "0";
    visibleFacilities.textContent = "0";

    setLoading(false);
    setStatus(
        "National view selected. Search a city or district to load its public transport facilities. A nationwide data query is intentionally not run because it can be too large for public APIs."
    );
});

applyFiltersBtn.addEventListener("click", () => {
    renderFacilities(false);

    setStatus(
        `Filters applied. ${visibleFacilities.textContent} of ${totalFacilities.textContent} loaded facilities are visible.`,
        "success"
    );
});

[filterBus, filterRail, filterMetro, filterOther].forEach(input => {
    input.addEventListener("change", () => renderFacilities(false));
});

nameFilter.addEventListener("input", () => renderFacilities(false));

resetBtn.addEventListener("click", () => {
    nameFilter.value = "";
    filterBus.checked = true;
    filterRail.checked = true;
    filterMetro.checked = true;
    filterOther.checked = true;

    renderFacilities(false);
    setStatus("Filters have been reset.");
});

loadRoutesBtn.addEventListener("click", loadPublicTransportRoutes);

zoomToResultsBtn.addEventListener("click", () => {
    const filtered = getFilteredFacilities();

    if (filtered.length) {
        const points = filtered.map(facility => [facility.lat, facility.lon]);
        map.fitBounds(L.latLngBounds(points).pad(0.15), { maxZoom: 15 });
    } else if (lastSearchBounds) {
        map.fitBounds(lastSearchBounds);
    } else {
        map.setView([30.3753, 69.3451], 5);
    }
});

// ---------- 15. INITIAL MESSAGE ----------

setStatus("Ready. Select a city or search any location in Pakistan.");
