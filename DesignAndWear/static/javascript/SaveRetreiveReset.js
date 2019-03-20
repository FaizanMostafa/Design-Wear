var left_shoulder, right_shoulder, left_front, right_front, left_collar_base, right_collar_base;
var yoke_top, yoke_bottom, inner_placket, outer_placket, inner_collar, upper_collar, outer_right_collar, outer_left_collar, inner_cuff, outer_top_cuff, outer_bottom_cuff;
var tempCuffDesign, tempOuterCuffPattern, tempInnerCuffPattern, tempInnerPlacketPattern, tempBasePattern, tempOuterCollarPattern, tempCollarDesign, tempInnerCollarPattern, temOuterPlacketPattern;
var cuffDesign="RR", outerCuffPattern="Bp1", innerCuffPattern="Bp1", innerPlacketPattern="Bp1", basePattern="Bp1", outerCollarPattern="Bp1", collarDesign="RR", innerCollarPattern="Bp1", outerPlacketPattern="Bp1";

function preserveDesignsPatterns() {
    tempBasePattern = basePattern;
    tempOuterCollarPattern = outerCollarPattern;
    tempCollarDesign = collarDesign;
    tempInnerCollarPattern = innerCollarPattern;
    temOuterPlacketPattern = outerPlacketPattern;
    tempInnerPlacketPattern = innerPlacketPattern;
    tempCuffDesign = cuffDesign;
    tempOuterCuffPattern = outerCuffPattern;
    tempInnerCuffPattern = innerCuffPattern;
}

function resetDesignsPatterns() {
    basePattern = tempBasePattern;
    outerCollarPattern = tempOuterCollarPattern;
    collarDesign = tempCollarDesign;
    innerCollarPattern = tempInnerCollarPattern;
    outerPlacketPattern = temOuterPlacketPattern;
    innerPlacketPattern = tempInnerPlacketPattern;
    cuffDesign = tempCuffDesign;
    outerCuffPattern = tempOuterCuffPattern;
    innerCuffPattern = tempInnerCuffPattern;
}

function preserveImages() {
    left_shoulder = document.getElementById("left-shoulder").src;
    right_shoulder = document.getElementById("right-shoulder").src;
    left_front = document.getElementById("left-front").src;
    right_front = document.getElementById("right-front").src;
    left_collar_base = document.getElementById("left-collar-base").src;
    right_collar_base = document.getElementById("right-collar-base").src;
    yoke_top = document.getElementById("yoke-top").src;
    yoke_bottom = document.getElementById("yoke-bottom").src;
    inner_placket = document.getElementById("inner-placket").src;
    outer_placket = document.getElementById("outer-placket").src;
    inner_collar = document.getElementById("inner-collar").src;
    upper_collar = document.getElementById("upper-collar").src;
    outer_right_collar = document.getElementById("outer-right-collar").src;
    outer_left_collar = document.getElementById("outer-left-collar").src;
    inner_cuff = document.getElementById("inner-cuff").src;
    outer_top_cuff = document.getElementById("outer-top-cuff").src;
    outer_bottom_cuff = document.getElementById("outer-bottom-cuff").src;
}

function resetImages(){
    document.getElementById("left-shoulder").src = left_shoulder;
    document.getElementById("right-shoulder").src = right_shoulder;
    document.getElementById("left-front").src = left_front;
    document.getElementById("right-front").src = right_front;
    document.getElementById("left-collar-base").src = left_collar_base;
    document.getElementById("right-collar-base").src = right_collar_base;
    document.getElementById("yoke-top").src = yoke_top;
    document.getElementById("yoke-bottom").src = yoke_bottom;
    document.getElementById("inner-placket").src = inner_placket;
    document.getElementById("outer-placket").src = outer_placket;
    document.getElementById("inner-collar").src = inner_collar;
    document.getElementById("upper-collar").src = upper_collar;
    document.getElementById("outer-right-collar").src = outer_right_collar;
    document.getElementById("outer-left-collar").src = outer_left_collar;
    document.getElementById("inner-cuff").src = inner_cuff;
    document.getElementById("outer-top-cuff").src = outer_top_cuff;
    document.getElementById("outer-bottom-cuff").src = outer_bottom_cuff;
}

function resetPlacketImages(){
    document.getElementById("left-shoulder").src = left_shoulder;
    document.getElementById("right-shoulder").src = right_shoulder;
    document.getElementById("left-front").src = left_front;
    document.getElementById("right-front").src = right_front;
    document.getElementById("left-collar-base").src = left_collar_base;
    document.getElementById("right-collar-base").src = right_collar_base;
    document.getElementById("yoke-top").src = yoke_top;
    document.getElementById("yoke-bottom").src = yoke_bottom;
    document.getElementById("outer-placket").src = outer_placket;
    document.getElementById("inner-collar").src = inner_collar;
    document.getElementById("upper-collar").src = upper_collar;
    document.getElementById("outer-right-collar").src = outer_right_collar;
    document.getElementById("outer-left-collar").src = outer_left_collar;
    document.getElementById("inner-cuff").src = inner_cuff;
    document.getElementById("outer-top-cuff").src = outer_top_cuff;
    document.getElementById("outer-bottom-cuff").src = outer_bottom_cuff;
    getMainContent();
}