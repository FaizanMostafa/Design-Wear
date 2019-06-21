
function loadPattern(ev) {
    if(basePattern === outerCollarPattern) {
        var outer_collar_pattern = ev.target.id;
    } else {
        var outer_collar_pattern = outerCollarPattern;
    }
    if(basePattern === innerCollarPattern) {
        var inner_collar_pattern = ev.target.id;
    } else {
        var inner_collar_pattern = innerCollarPattern;
    }
    if(basePattern === outerCuffPattern) {
        var outer_cuff_pattern = ev.target.id;
    } else {
        var outer_cuff_pattern = outerCuffPattern;
    }
    if(basePattern === innerCuffPattern) {
        var inner_cuff_pattern = ev.target.id;
    } else {
        var inner_cuff_pattern = innerCuffPattern;
    }
    $.ajax({
        type: 'GET',
        url: GetPatternUrl,
        data: {
            'fabric': ev.target.id,
            'collar_catagory': collarDesign,
            'outer_collar_pattern': outer_collar_pattern,
            'inner_collar_pattern': inner_collar_pattern,
            'cuff_catagory': cuffDesign,
            'outer_cuff_pattern': outer_cuff_pattern,
            'inner_cuff_pattern': inner_cuff_pattern,
        },
        dataType: 'json',
        success: function (data) {
           document.getElementById("left-shoulder").src = data.left_shoulder;
           document.getElementById("right-shoulder").src = data.right_shoulder;
           document.getElementById("left-front").src = data.left_front;
           document.getElementById("right-front").src = data.right_front;
           document.getElementById("left-collar-base").src = data.left_collar_base;
           document.getElementById("right-collar-base").src = data.right_collar_base;
           document.getElementById("yoke-top").src = data.yoke_top;
           document.getElementById("yoke-bottom").src = data.yoke_bottom;
           document.getElementById("outer-placket").src = data.outer_placket;
           document.getElementById("inner-placket").src = data.inner_placket;
           document.getElementById("inner-collar").src = data.inner_collar;
           document.getElementById("upper-collar").src = data.upper_collar;
           document.getElementById("outer-right-collar").src = data.outer_right_collar;
           document.getElementById("outer-left-collar").src = data.outer_left_collar;
           document.getElementById("inner-cuff").src = data.inner_cuff;
           document.getElementById("outer-top-cuff").src = data.outer_top_cuff;
           document.getElementById("outer-bottom-cuff").src = data.outer_bottom_cuff;
           basePattern = data.base_pattern;
           outerPlacketPattern = data.base_pattern;
           innerCollarPattern = data.inner_collar_pattern;
           outerCollarPattern = data.outer_collar_pattern;
           outerCuffPattern = data.outer_cuff_pattern;
           innerCuffPattern = data.inner_cuff_pattern;
        }
    });
}


function loadOuterCollarPattern(ev) {
    $.ajax({
        type: 'GET',
        url: GetOuterCollarPatternUrl,
        data: {
        'fabric': ev.target.id,
        'catagory': collarDesign,
        // csrfmiddlewaretoken: "$('input[name=csrfmiddlewaretoken]').val()",
        },
        dataType: 'json',
        success: function (data) {
           document.getElementById("left-collar-base").src = data.left_collar_base;
           document.getElementById("right-collar-base").src = data.right_collar_base;
           document.getElementById("upper-collar").src = data.upper_collar;
           document.getElementById("outer-right-collar").src = data.outer_right_collar;
           document.getElementById("outer-left-collar").src = data.outer_left_collar;
           outerCollarPattern = data.outer_collar_pattern;
        }
    });
}

function loadOuterCollarDesign(ev) {
    $.ajax({
        type: 'GET',
        url: GetOuterCollarDesignUrl,
        data: {
        'fabric': outerCollarPattern,
        'icollar_pattern': innerCollarPattern,
        'catagory': ev.target.id,
        'button': buttonColor,
        // csrfmiddlewaretoken: "$('input[name=csrfmiddlewaretoken]').val()",
        },
        dataType: 'json',
        success: function (data) {
           document.getElementById("left-collar-base").src = data.left_collar_base;
           document.getElementById("right-collar-base").src = data.right_collar_base;
           document.getElementById("upper-collar").src = data.upper_collar;
           document.getElementById("inner-collar").src = data.inner_collar;
           document.getElementById("outer-right-collar").src = data.outer_right_collar;
           document.getElementById("outer-left-collar").src = data.outer_left_collar;
           document.getElementById("collar-button").src = data.button;
           document.getElementById("collar-button-holes").src = data.button_holes;
           collarDesign = data.collar_catagory;
        }
    });
}


function loadInnerCollar(ev) {
    $.ajax({
        type: 'GET',
        url: GetInnerCollarUrl,
        data: {
        'fabric': ev.target.id,
        'catagory': collarDesign,
        // csrfmiddlewaretoken: "$('input[name=csrfmiddlewaretoken]').val()",
        },
        dataType: 'json',
        success: function (data) {
           document.getElementById("inner-collar").src = data.inner_collar;
           innerCollarPattern = data.inner_collar_pattern;
        }
    });
}

function loadOuterPlacket() {
    $.ajax({
        type: 'GET',
        url: GetOuterPlacketUrl,
        data: {
        'fabric': basePattern,
        'inner_collar_pattern': innerCollarPattern,
        'outer_collar_pattern': outerCollarPattern,
        'collar_catagory': collarDesign,
        "button": buttonColor,
        // csrfmiddlewaretoken: "$('input[name=csrfmiddlewaretoken]').val()",
        },
        dataType: 'json',
        success: function (data) {
           document.getElementById("left-collar-base").src = data.left_collar_base;
           document.getElementById("right-collar-base").src = data.right_collar_base;
           document.getElementById("yoke-top").src = data.yoke_top;
           document.getElementById("yoke-bottom").src = data.yoke_bottom;
           document.getElementById("outer-placket").src = data.outer_placket;
           document.getElementById("inner-collar").src = data.inner_collar;
           document.getElementById("upper-collar").src = data.upper_collar;
           document.getElementById("outer-right-collar").src = data.outer_right_collar;
           document.getElementById("outer-left-collar").src = data.outer_left_collar;
           document.getElementById("collar-button").src = data.outer_left_collar;
           document.getElementById("collar-button").src = data.collar_button;
           document.getElementById("collar-button-holes").src = data.button_holes;
        }
    });
}

function loadInnerPlacket(ev) {
    $.ajax({
        type: 'GET',
        url: GetInnerPlacketUrl,
        data: {
        'fabric': ev.target.id,
        // csrfmiddlewaretoken: "$('input[name=csrfmiddlewaretoken]').val()",
        },
        dataType: 'json',
        success: function (data) {
           document.getElementById("inner-placket").src = data.inner_placket;
           innerPlacketPattern = data.inner_placket_pattern;
        }
    });
}

function loadOuterFoldedCuff(ev) {
    $.ajax({
        type: 'GET',
        url: GetOuterFoldedCuffUrl,
        data: {
        'catagory': cuffDesign,
        'base_pattern': basePattern,
        'inner_cuff_pattern': innerCuffPattern,
        'outer_cuff_pattern': outerCuffPattern,
        'button_color': buttonColor,
        // csrfmiddlewaretoken: "$('input[name=csrfmiddlewaretoken]').val()",
        },
        dataType: 'json',
        success: function (data) {
           document.getElementById("inner-cuff").src = data.inner_cuff;
           document.getElementById("outer-top-cuff").src = data.outer_top_cuff;
           document.getElementById("outer-bottom-cuff").src = data.outer_bottom_cuff;
           document.getElementById("cuff-button").src = data.cuff_button;
        }
    });
}

function loadOuterCuffPattern(ev) {
    $.ajax({
        type: 'GET',
        url: GetOuterCuffPatternUrl,
        data: {
        'catagory': cuffDesign,
        'base_pattern': basePattern,
        'outer_cuff_pattern': ev.target.id,
        // csrfmiddlewaretoken: "$('input[name=csrfmiddlewaretoken]').val()",
        },
        dataType: 'json',
        success: function (data) {
           document.getElementById("outer-top-cuff").src = data.outer_top_cuff;
           document.getElementById("outer-bottom-cuff").src = data.outer_bottom_cuff;
           outerCuffPattern = data.outer_cuff_pattern;
        }
    });
}

function loadOuterCuffDesign(ev) {
    $.ajax({
        type: 'GET',
        url: GetOuterCuffDesignUrl,
        data: {
        'catagory': ev.target.id,
        'outer_cuff_pattern': outerCuffPattern,
        'inner_cuff_pattern': innerCuffPattern,
        'button_color': buttonColor,
        // csrfmiddlewaretoken: "$('input[name=csrfmiddlewaretoken]').val()",
        },
        dataType: 'json',
        success: function (data) {
           document.getElementById("outer-top-cuff").src = data.outer_top_cuff;
           document.getElementById("outer-bottom-cuff").src = data.outer_bottom_cuff;
           document.getElementById("inner-cuff").src = data.inner_cuff;
           document.getElementById("cuff-button").src = data.cuff_button;
           cuffDesign = data.cuff_design;
        }
    });
}

function loadPocket(ev) {
    $.ajax({
        type: 'GET',
        url: GetPocketUrl,
        data: {
        'pattern': basePattern,
        'visible': ev.target.querySelector('input').value,
        // csrfmiddlewaretoken: "$('input[name=csrfmiddlewaretoken]').val()",
        },
        dataType: 'json',
        success: function (data) {
           document.getElementById("pocket").src = data.pocket;
           pocket = data.visible;
        }
    });
}

function loadInnerOpenedCuff(ev) {
    $.ajax({
        type: 'GET',
        url: GetInnerOpenedCuffUrl,
        data: {
        'catagory': cuffDesign,
        'base_pattern': basePattern,
        'inner_cuff_pattern': ev.target.id,
        // csrfmiddlewaretoken: "$('input[name=csrfmiddlewaretoken]').val()",
        },
        dataType: 'json',
        success: function (data) {
           document.getElementById("outer-top-cuff").src = data.outer_top_cuff;
           document.getElementById("inner-cuff").src = data.inner_cuff;
           innerCuffPattern = data.inner_cuff_pattern;
        }
    });
}

function loadInnerClosedCuff(ev) {
    $.ajax({
        type: 'GET',
        url: GetInnerClosedCuffUrl,
        data: {
        'catagory': cuffDesign,
        'inner_cuff_pattern': innerCuffPattern,
        },
        dataType: 'json',
        success: function (data) {
           document.getElementById("inner-cuff").src = data.inner_cuff;
        }
    });
}

function postShirtSpecs() {
    document.getElementById("basePattern").value = basePattern;
    document.getElementById("outerCollarPattern").value = outerCollarPattern;
    document.getElementById("innerCollarPattern").value = innerCollarPattern;
    document.getElementById("collarDesign").value = collarDesign;
    document.getElementById("outerCuffPattern").value = outerCuffPattern;
    document.getElementById("innerCuffPattern").value = innerCuffPattern;
    document.getElementById("cuffDesign").value = cuffDesign;
    document.getElementById("innerPlacketPattern").value = innerPlacketPattern;
    document.getElementById("outerPlacketPattern").value = outerPlacketPattern;
    form = document.getElementById('shirtSpecsForm');
    form.submit();
}

function shirtSizeChanged(e) {
    shirt_id = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
    size = e.target.value;
    $.ajax({
        type: 'GET',
        url: GetShirtSizeUpdateUrl,
        data: {
        'id': shirt_id,
        'size': size,
        },
        dataType: 'json',
        success: function (data) {
        }
    });
}

function shirtFittingChanged(e) {
    shirt_id = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
    fitting = e.target.value;
    $.ajax({
        type: 'GET',
        url: GetShirtFittingUpdateUrl,
        data: {
        'id': shirt_id,
        'fitting': fitting,
        },
        dataType: 'json',
        success: function (data) {
        }
    });
}

// var key = document.getElementById('fabrics');
// key.addEventListener('click', (e) => {
//     e.preventDefault();
//     alert("Sent");
//     $.ajax({
//         type: 'POST',
//         url: '',
//         data: {
//         'fabric': key.id,
//         'comment': $('#comment').val(),
//         csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
//         },
//         dataType: 'json',
//         success: function (data) {
//             <!--console.log(data.dp, data.author, data.date, data.comment);-->
//             <!--$('#comment').val("");-->
//             <!--$(".comm").last().after(-->
//                 <!--<div class="comm">-->
//                     <!--<img src="data.dp" style="width:40px;" class="rounded-circle float-left" alt="Display Picture">-->
//                     <!--<b>data.author</b>-->
//                     <!--<br>-->
//                     <!--<b>data.date</b>-->
//                     <!--<p>data.comment</p>-->
//                 <!--</div>-->
//             <!--);-->
//         }
//     });
// });