HTMLWidgets.widget({
    name : "canvasXpress",
    type : "output",

    factory: function(el, width, height) {
        var c = document.createElement('canvas');
        c.id        = el.id + '-cx';
        c.className = 'CanvasXpress';
        c.width     = 600;          // default
        c.height    = 400;          // default

        if (width && height && (width !== 0) && (height !== 0)) {
            // set canvas size
            c.width  = width;
            c.height = height;

            // Check if we are running in the viewer; override the width and height
            if (/\bviewer_pane=1\b/.test(window.location)) {
                c.width = document.childNodes[1].clientWidth - 36;
                c.height = document.childNodes[1].clientHeight - 36;
            }
        }

        el.appendChild(c);

        // hold onto these values, will be tracked when resizing happens
        var chart_width  = c.width;
        var chart_height = c.height;

        return {
            id: c.id,

            // reminder: called multiple times, any time the R binding function is called
            renderValue: function(x) {
                // destroy old charts
                try {
                    for (var i = 0; i < CanvasXpress.instances.length; i++) {
                        if (CanvasXpress.instances[i].target.match(c.id)) {
                            CanvasXpress.destroy(CanvasXpress.instances[i].target);
                        }
                    }
                }
                catch(err) {
                    console.log(err);
                }

                // create the new chart
                if (!(x instanceof Array)) {
                    x.renderTo = c.id;

                    new CanvasXpress(x);
                    this.resize(chart_width, chart_height);
                }
            },

            resize: function(width, height) {
                // Check if we are running in the viewer; override the width and height
                if (/\bviewer_pane=1\b/.test(window.location)) {
                    console.log('---> in viewer pane');
                    width  = document.childNodes[1].clientWidth - 36;
                    height = document.childNodes[1].clientHeight - 36;
                }

                // track the new values
                chart_width  = width;
                chart_height = height;

                cx = CanvasXpress.getObject(c.id);
                if (cx) {
                    cx.setDimensions(chart_width, chart_height);
                } else {
                    cx = CanvasXpress.getObject(c.id + '-1');
                    if (cx) {
                        cx.setDimensions(chart_width, chart_height);
                    }
                }
                return cx;
            },

            getImage: function() {
                cx = CanvasXpress.getObject(c.id);
                if (cx && cx.meta && cx.meta.base64) {
                    return cx.meta.base64;
                } else {
                    return false;
                }
            }
        };
    }
});
