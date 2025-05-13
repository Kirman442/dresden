import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import GroupLayer from "@arcgis/core/layers/GroupLayer";
import { katasterBuildingRenderer, katasterLanduseRenderer } from '../visualization/renderer/Kataster'
import { transportRenderer, routeRenderer, roadRenderer } from '../visualization/renderer/Transport'
import { stromLineRenderer, stromRenderer } from '../visualization/renderer/Energy'
import { naturRenderer } from '../visualization/renderer/Natur'
import { landusePopup, transportPopup, powerObjectPopup, powerLinePopup, buildingsPopup } from '../popup/layersPopup'

// Dresden Landuse
export const landuse = new FeatureLayer({
  portalItem: { id: "3caf3068d65645a49e6dc784472895a2" }, //92743ca80aec44ff8d22335d9afca697
  renderer: katasterLanduseRenderer,
  // outFields: ["*"],
  visible: true,
  title: "Landuse map",
  popupTemplate: landusePopup
});

// Dresden Buildings
const buildings = new FeatureLayer({
  portalItem: { id: "8cbb78460dbf4c91beaee9db006c1633" }, //68d95a30e8034b58af78ffdf7c797e70
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
  portalItem: { id: "c761fe8e3b1f4496befe5254c35343d5" },
  renderer: transportRenderer,
  outFields: ["*"],
  visible: true,
  title: "Transport",
  popupTemplate: transportPopup
});

// Dresden Roads
const roads = new FeatureLayer({
  portalItem: { id: "b84565a5036842ee9af31fe27969f0f4" },
  renderer: roadRenderer,
  visible: false,
  title: "Roads"
});

// Dresden Routes
const routes = new FeatureLayer({
  portalItem: { id: "4589a9bbc6e84041ba0237a4bd0dc823" },
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
  portalItem: { id: "88fa74f9b43b48c4becd81ad45ecb21a" },
  renderer: naturRenderer,
  visible: false,
  title: "Trees"
});

// Dresden Water
const water = new FeatureLayer({
  portalItem: { id: "e6cdfc2bb38f440d9f73723e9102ffe3" },
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
  portalItem: { id: "42c05353c9fb48f08aff8f6cf5271e82" }, //f8b49a0d1b384ea2859fb5c0d558cb60
  renderer: stromRenderer,
  visible: true,
  title: "Infrastructure",
  popupTemplate: powerObjectPopup
});

// Dresden Powerlines
export const powerlines = new FeatureLayer({
  portalItem: { id: "b6a6b1148c874b5eae4483667ec4e56a" }, //a3e5308a28ed41b5b6f44b9618656001
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