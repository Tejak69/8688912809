var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_srmapnewblocks_1 = new ol.format.GeoJSON();
var features_srmapnewblocks_1 = format_srmapnewblocks_1.readFeatures(json_srmapnewblocks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_srmapnewblocks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_srmapnewblocks_1.addFeatures(features_srmapnewblocks_1);
var lyr_srmapnewblocks_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_srmapnewblocks_1, 
                style: style_srmapnewblocks_1,
                popuplayertitle: "srmap new blocks",
                interactive: true,
                title: '<img src="styles/legend/srmapnewblocks_1.png" /> srmap new blocks'
            });

lyr_OSMStandard_0.setVisible(true);lyr_srmapnewblocks_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_srmapnewblocks_1];
lyr_srmapnewblocks_1.set('fieldAliases', {'id': 'id', 'block name': 'block name', 'population': 'population', });
lyr_srmapnewblocks_1.set('fieldImages', {'id': '', 'block name': '', 'population': '', });
lyr_srmapnewblocks_1.set('fieldLabels', {'id': 'no label', 'block name': 'no label', 'population': 'no label', });
lyr_srmapnewblocks_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});