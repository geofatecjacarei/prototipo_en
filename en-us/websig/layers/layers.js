var wms_layers = [];


        var lyr_MapabaseGoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth Basemap',
            //'type': 'base',
            'opacity': 0.5,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
//Dupliquei o mapa base e troquei para Google Terrain
        var lyr_MapabaseGoogleEarth_1 = new ol.layer.Tile({
            'title': 'Google Earth Basemap',
            //'type': 'base',
            'opacity': 1,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}' 
            })
        });

var lyr_Imagemsatlitedolocal_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Satellite Image of area",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Imagemsatlitedolocal_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5101798.388060, -2651679.335323, -5101476.618712, -2651532.522393]
                            })
                        });
var format_Pomarrea_2 = new ol.format.GeoJSON();
var features_Pomarrea_2 = format_Pomarrea_2.readFeatures(json_Pomarrea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pomarrea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pomarrea_2.addFeatures(features_Pomarrea_2);
var lyr_Pomarrea_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pomarrea_2, 
                style: style_Pomarrea_2,
                popuplayertitle: "Pomar área",
                interactive: false,
                title: '<img src="styles/legend/Pomarrea_2.png" /> Farm Fruit area'
            });
var format_Pomar_3 = new ol.format.GeoJSON();
var features_Pomar_3 = format_Pomar_3.readFeatures(json_Pomar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pomar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pomar_3.addFeatures(features_Pomar_3);
var lyr_Pomar_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pomar_3, 
                style: style_Pomar_3,
                popuplayertitle: "Pomar",
                interactive: false,
                title: '<img src="styles/legend/Pomar_3.png" /> Farm Fruit'
            });
var format_Espciesarbreas_en_4 = new ol.format.GeoJSON();
var features_Espciesarbreas_en_4 = format_Espciesarbreas_en_4.readFeatures(json_Espciesarbreas_en_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espciesarbreas_en_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espciesarbreas_en_4.addFeatures(features_Espciesarbreas_en_4);
var lyr_Espciesarbreas_en_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espciesarbreas_en_4, 
                style: style_Espciesarbreas_en_4,
                popuplayertitle: "Tree species",
                interactive: true,
    title: 'Tree species<br />\
    <img src="styles/legend/Espciesarbreas_en_4_0.png" /> Dead, no tree leaves<br />\
    <img src="styles/legend/Espciesarbreas_en_4_1.png" /> Healthy during periods of leaf loss<br />\
    <img src="styles/legend/Espciesarbreas_en_4_2.png" /> Healthy with few leaves<br />\
    <img src="styles/legend/Espciesarbreas_en_4_3.png" /> Healthy and flowery<br />\
    <img src="styles/legend/Espciesarbreas_en_4_4.png" /> Healthy and quite flowery<br />\
    <img src="styles/legend/Espciesarbreas_en_4_5.png" /> No classification<br />'
        });

lyr_MapabaseGoogleEarth_0.setVisible(true);lyr_Imagemsatlitedolocal_1.setVisible(true);lyr_Pomarrea_2.setVisible(true);lyr_Pomar_3.setVisible(true);lyr_Espciesarbreas_en_4.setVisible(true);
var layersList = [lyr_MapabaseGoogleEarth_0,lyr_Imagemsatlitedolocal_1,lyr_Pomarrea_2,lyr_Pomar_3,lyr_Espciesarbreas_en_4];
lyr_Pomarrea_2.set('fieldAliases', {'id': 'id', });
lyr_Pomar_3.set('fieldAliases', {'id': 'id', });
lyr_Espciesarbreas_en_4.set('fieldAliases', {'Árvore': 'Tree', 'Família': 'Family', 'Nome cient': 'Scientific Name', 'Nome popul': 'Popular Name', 'Fotos': 'Photos', 'Observacoe': 'Observations', 'Classifica': 'Classification', 'Coroamento': 'Crown of plants', });
lyr_Pomarrea_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Pomar_3.set('fieldImages', {'id': 'TextEdit', });
lyr_Espciesarbreas_en_4.set('fieldImages', {'Árvore': 'TextEdit', 'Família': 'TextEdit', 'Nome cient': 'TextEdit', 'Nome popul': 'TextEdit', 'Fotos': 'ExternalResource', 'Observacoe': 'TextEdit', 'Classifica': 'TextEdit', 'Coroamento': 'TextEdit', });
lyr_Pomarrea_2.set('fieldLabels', {'id': 'no label', });
lyr_Pomar_3.set('fieldLabels', {'id': 'no label', });
lyr_Espciesarbreas_en_4.set('fieldLabels', {'Árvore': 'inline label - always visible', 'Família': 'inline label - always visible', 'Nome cient': 'inline label - always visible', 'Nome popul': 'inline label - always visible', 'Fotos': 'no label', 'Observacoe': 'inline label - always visible', 'Classifica': 'hidden field', 'Coroamento': 'inline label - always visible', });
lyr_Espciesarbreas_en_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

//Criei um mapa base para o mini mapa - cópia para diminuir numero de layers
var layersList2 = [lyr_MapabaseGoogleEarth_1];