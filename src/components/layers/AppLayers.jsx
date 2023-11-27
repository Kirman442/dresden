import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import GroupLayer from "@arcgis/core/layers/GroupLayer";
import { katasterBuildingRenderer, katasterLanduseRenderer } from '../visualization/renderer/Kataster'
import { transportRenderer, routeRenderer, roadRenderer } from '../visualization/renderer/Transport'
import { stromLineRenderer, stromRenderer } from '../visualization/renderer/Energy'
import { naturRenderer } from '../visualization/renderer/Natur'
import { landusePopup, transportPopup, powerObjectPopup, powerLinePopup, buildingsPopup } from '../popup/layersPopup'

// Dresden Landuse
export const landuse = new FeatureLayer({
  portalItem: { id: "92743ca80aec44ff8d22335d9afca697" },
  renderer: katasterLanduseRenderer,
  // outFields: ["*"],
  visible: true,
  title: "Landuse map",
  popupTemplate: landusePopup
});

// Dresden Buildings
const buildings = new FeatureLayer({
  portalItem: { id: "68d95a30e8034b58af78ffdf7c797e70" },
  renderer: katasterBuildingRenderer,
  outFields: ["*"],
  visible: true,
  title: "Buildings",
  popupTemplate: buildingsPopup
});

// Group landuse and buildings layers
const landuseGroupLayer = new GroupLayer({
  title: "Kataster",
  visible: true,
  visibilityMode: "independent",
  layers: [landuse, buildings],
  opacity: .5
});

// Dresden Transport
export const transport = new FeatureLayer({
  portalItem: { id: "1e61ce91223240afb234eb4f9d6a43c7" },
  renderer: transportRenderer,
  outFields: ["*"],
  visible: true,
  title: "Transport",
  popupTemplate: transportPopup
});

// Dresden Roads
const roads = new FeatureLayer({
  portalItem: { id: "f0fb7804800c4bac8d594a2dadad133b" },
  renderer: roadRenderer,
  visible: false,
  title: "Roads"
});

// Dresden Routes
const routes = new FeatureLayer({
  portalItem: { id: "a188ac9b3e294730909f9c471515204c" },
  renderer: routeRenderer,
  visible: false,
  title: "Routes"
});

// Group roads, routes and transport layers
const transportGroupLayer = new GroupLayer({
  title: "Transport",
  visible: true,
  visibilityMode: "independent",
  layers: [transport, routes, roads],
  opacity: .75
});

const natur = new FeatureLayer({
  portalItem: { id: "1f1a3621ba314e7a9ad1c1aca2c4a719" },
  renderer: naturRenderer,
  visible: false,
  title: "Trees"
});

// Dresden Water
const water = new FeatureLayer({
  portalItem: { id: "5b586405db974551845c1e38a7ad3c4d" },
  visible: false,
  title: "Water"
});

// Group natur and water layers
const naturGroupLayer = new GroupLayer({
  title: "Landscape",
  visible: true,
  visibilityMode: "independent",
  layers: [natur, water],
  opacity: .75
});

// Dresden Power
export const power = new FeatureLayer({
  portalItem: { id: "f8b49a0d1b384ea2859fb5c0d558cb60" },
  renderer: stromRenderer,
  visible: true,
  title: "Infrastructure",
  popupTemplate: powerObjectPopup
});

// Dresden Powerlines
export const powerlines = new FeatureLayer({
  portalItem: { id: "a3e5308a28ed41b5b6f44b9618656001" },
  renderer: stromLineRenderer,
  title: "Network",
  visible: true,
  popupTemplate: powerLinePopup
});

// Group power and powerlines layers
const powerGroupLayer = new GroupLayer({
  title: "Electricity",
  visible: true,
  visibilityMode: "independent",
  layers: [power, powerlines],
  opacity: .75
});

export default {
  landuse,
  buildings,
  landuseGroupLayer,
  transport,
  roads,
  routes,
  transportGroupLayer,
  natur,
  water,
  naturGroupLayer,
  power,
  powerlines,
  powerGroupLayer
};