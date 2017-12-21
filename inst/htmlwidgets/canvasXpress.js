HTMLWidgets.widget({
    name : "canvasXpress",
    type : "output",
    
    factory: function(el, width, height) {
        var c = document.createElement('canvas');
        c.id = el.id + '-cx';
        c.width = width;
        c.height = height;

        el.appendChild(c);
        
        return {
            id: c.id,
            renderValue: function(x) {
                if (x.length === 0) {
                    CanvasXpress.destroy(c.id);
                }
                else {
                    x.renderTo = c.id;
                    new CanvasXpress(x);
                }
            },
            resize: function(width, height) {
                cx = CanvasXpress.getObject(c.id);
                if (cx) {
                    cx.setDimensions(width, height);
                }
            }
        };
    }
});
