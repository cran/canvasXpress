context("canvasXpress Web Charts - Bubble")


test_that("cXbubble1", {
    check_ui_test(cXbubble1())
})

test_that("cXbubble2", {
    check_ui_test(cXbubble2())
})

test_that("cXbubble3", {
    check_ui_test(cXbubble3())
    warning("Note that the after render for the labels are not in the R code so it will be different than what is shown on the web")
})

test_that("cXbubble4", {
    check_ui_test(cXbubble4())
})
