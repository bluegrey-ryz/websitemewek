var size = 0;
var placement = 'point';

var style_sungai_17 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "6.5px \'Cambria\', sans-serif";
    var labelFill = "#1732e3";
    var bufferColor = "#ffffff";
    var bufferWidth = 0.4;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("namasungai") !== null) {
        labelText = String(feature.get("namasungai"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(45,80,232,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
