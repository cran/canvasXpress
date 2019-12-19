# Known Issues in CanvasXpress from R/Shiny

---

### Idiosyncracies

* **Hover Effect** - the effect of hovering the mouse over a line/bar/etc may not be visible unless a plot is resized.  This is very browser and chart-specific.  To see if it is resolved by resizing simply grab an edge of the chart and pull a small amount to resize the chart and then re-test if the hover effect is now working.  In general this is not a problem if transitions are used, it seems to be linked directly to charts that have the animated transitions

* **Treemaps** - the sample locations in a treemap are area-based and the layout of the treemap depends on the size and dimensions of the chart, this means that the treemap may differ in layout between platforms and browsers

* **Tag Cloud** - the layout is dynamic and also depends on the size and dimensions of the chart, this means that the tag cloud may differ in layout between platforms and browsers

* **Layout Charts* - the order of layout varies and may differ between browsers and platforms.


### Platform-Specific

* **Ubuntu Browsers** - do not allow selection of areas of points on a chart via either click-drag or the lasso functionality

