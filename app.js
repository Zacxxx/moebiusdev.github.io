// Configure CesiumJS access token
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2M2MxMjY1MC1jYTg4LTQzNTUtOGU1NC0zZjhlZmY4MGFkMjMiLCJpZCI6MjIzMTU4LCJpYXQiOjE3MTg3ODY1NTN9.ARLbHXa-2d2VYQ2ISg7iinNd8h6x1b0lkKjxZ-R9WyY';

// Initialize the Cesium Viewer
const viewer = new Cesium.Viewer('cesiumContainer', {
    imageryProvider: new Cesium.IonImageryProvider({ assetId: 2 }), // Bing Maps Aerial imagery
    baseLayerPicker: false,
    geocoder: false,
    homeButton: false,
    sceneModePicker: false,
    timeline: false,
    navigationHelpButton: false,
    animation: false
});

// Enable lighting
viewer.scene.globe.enableLighting = true;

// Add some additional effects
viewer.scene.postProcessStages.fxaa.enabled = true;
viewer.scene.skyAtmosphere.show = true;

// Add a rotation animation
const spinRate = 1.0; // radians per second
viewer.clock.onTick.addEventListener(function (clock) {
    const delta = viewer.clock.tickDuration;
    viewer.scene.camera.rotate(Cesium.Cartesian3.UNIT_Z, -spinRate * delta);
});

// Add a simple marker
const redPin = viewer.entities.add({
    name: 'Red pin',
    position: Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
    billboard: {
        image: 'https://img.icons8.com/color/48/000000/marker.png',
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
});

// Add terrain
viewer.terrainProvider = Cesium.createWorldTerrain({
    requestVertexNormals: true,
    requestWaterMask: true
});
