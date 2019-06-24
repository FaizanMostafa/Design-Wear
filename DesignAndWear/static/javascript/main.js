
function getMainContentBack() {
    resetImages();
    resetDesignsPatterns();
    getMainContent();
}

function getMainContent() {
    var contentDiv = document.createElement("div");
    contentDiv.id = "content";
    contentDiv.innerHTML = `
                            <div>
                                <h2>Customize Your Shirt's Fabric</h2>
                                <ul class="fli">
                                    <li style="background-color: #F9FAFB;" class="fli" OnClick=ShowBaseFabrics()><div id="base-fabric-icon" class="sprite-icons sprite1"></div> BASE FABRIC</li>
                                    <li class="fli" OnClick=ShowOuterCollar()><div id="outer-collar-icon" class="sprite-icons sprite1"></div> OUTER COLLAR</li>
                                    <li style="background-color: #F9FAFB;" class="fli" OnClick=ShowInnerCollar()><div id="inner-collar-icon" class="sprite-icons sprite1"></div> INNER COLLAR</li>
                                    <li class="fli" OnClick=ShowOuterCuff()><div id="outer-cuff-icon" class="sprite-icons sprite1"></div> OUTER CUFFS</li>
                                    <li style="background-color: #F9FAFB;" class="fli" OnClick=ShowInnerCuff()><div id="inner-cuff-icon" class="sprite-icons sprite1"></div> INNER CUFFS</li>
                                    <li class="fli" OnClick=ShowInnerPlacket()><div id="inner-placket-icon" class="sprite-icons sprite1"></div> INNER PLACKET</li>
                                </ul>
                            <div>
                            `;
    document.getElementById("listContainer").replaceChild(contentDiv, document.getElementById("content"));
    var btnDiv = document.createElement("div");
    btnDiv.id = "btns_div";
    var btn = document.createElement("button");
    btn.innerHTML = "Continue Styling";
    btn.onclick = getSecondMenuContent;
    btn.className = "float-right btn btn-primary";
    btnDiv.appendChild(btn);
    document.getElementsByClassName("btn_container")[0].replaceChild(btnDiv, document.getElementById("btns_div"));
}

function saveAndGetMainContent() {
    getMainContent();
}

function ShowBaseFabrics() {
    preserveImages();
    preserveDesignsPatterns();
    target = document.getElementById("content");
    target.innerHTML = `<div class="text-center" style="height: 492px; overflow-y:scroll; padding-top: 25px;">
                            <div class="base-fabric-sprite1" id="Bp1" onclick=loadPattern(event)></div>
                            <div class="base-fabric-sprite2" id="Bp2" onclick=loadPattern(event)></div>
                            <div class="base-fabric-sprite2" id="Bp3" onclick=loadPattern(event)></div>
                            <div class="base-fabric-sprite3" id="Bp4" onclick=loadPattern(event)></div>
                            <div class="base-fabric-sprite3" id="Bp5" onclick=loadPattern(event)></div>
                            <div class="base-fabric-sprite2" id="Bp6" onclick=loadPattern(event)></div>
                            <div class="base-fabric-sprite3" id="Bp7" onclick=loadPattern(event)></div>
                            <div class="base-fabric-sprite3" id="Bp8" onclick=loadPattern(event)></div>
                            <div class="base-fabric-sprite3" id="Bp9" onclick=loadPattern(event)></div>
                            <div class="base-fabric-sprite1" id="Bp1" onclick=loadPattern(event)></div>
                            <div class="base-fabric-sprite2" id="Bp2" onclick=loadPattern(event)></div>
                            <div class="base-fabric-sprite2" id="Bp3" onclick=loadPattern(event)></div>
                            <div class="base-fabric-sprite3" id="Bp4" onclick=loadPattern(event)></div>
                            <div class="base-fabric-sprite3" id="Bp5" onclick=loadPattern(event)></div>
                            <div class="base-fabric-sprite2" id="Bp6" onclick=loadPattern(event)></div>
                            <div class="base-fabric-sprite3" id="Bp7" onclick=loadPattern(event)></div>
                            <div class="base-fabric-sprite3" id="Bp8" onclick=loadPattern(event)></div>
                            <div class="base-fabric-sprite3" id="Bp9" onclick=loadPattern(event)></div>
                        </div>
                        `;
    var btnDiv = document.createElement("div");
    btnDiv.id = "btns_div";
    var backBtn = document.createElement("button");
    backBtn.innerHTML = "Back";
    backBtn.onclick = getMainContentBack;
    backBtn.className = "btn btn-secondary";
    var saveBtn = document.createElement("button");
    saveBtn.innerHTML = "Save";
    saveBtn.className = "float-right btn btn-primary";
    saveBtn.onclick = saveAndGetMainContent;
    btnDiv.appendChild(backBtn);
    btnDiv.appendChild(saveBtn);
    document.getElementsByClassName("btn_container")[0].replaceChild(btnDiv, document.getElementById("btns_div"));
}

//--------------------------------Show Outer Collar-------------------------------------------------


function ShowOuterCollar() {
    preserveImages();
    preserveDesignsPatterns();
    target = document.getElementById("content");
    target.innerHTML = `
                        <div class="text-center" style="height: 492px; overflow-y:scroll; padding-top: 25px;">
                            <div class="collar-fabric-sprite1" id="OCp1" onclick=loadOuterCollarPattern(event)></div>
                            <div class="base-fabric-sprite1" id="OCp2" onclick=loadOuterCollarPattern(event)></div>
                            <div class="collar-fabric-sprite1" id="OCp3" onclick=loadOuterCollarPattern(event)></div>
                            <div class="base-fabric-sprite1" id="OCp4" onclick=loadOuterCollarPattern(event)></div>
                            <div class="collar-fabric-sprite1" id="OCp5" onclick=loadOuterCollarPattern(event)></div>
                            <div class="collar-fabric-sprite2" id="OCp6" onclick=loadOuterCollarPattern(event)></div>
                            <div class="collar-fabric-sprite3" id="OCp7" onclick=loadOuterCollarPattern(event)></div>
                            <div class="collar-fabric-sprite1" id="OCp8" onclick=loadOuterCollarPattern(event)></div>
                            <div class="collar-fabric-sprite1" id="OCp9" onclick=loadOuterCollarPattern(event)></div>
                            <div class="base-fabric-sprite1" id="OCp10" onclick=loadOuterCollarPattern(event)></div>
                            <div class="base-fabric-sprite1" id="OCp11" onclick=loadOuterCollarPattern(event)></div>
                            <div class="base-fabric-sprite1" id="OCp12" onclick=loadOuterCollarPattern(event)></div>
                            <div class="base-fabric-sprite1" id="OCp13" onclick=loadOuterCollarPattern(event)></div>
                            <div class="base-fabric-sprite1" id="OCp14" onclick=loadOuterCollarPattern(event)></div>
                            <div class="base-fabric-sprite1" id="OCp15" onclick=loadOuterCollarPattern(event)></div>
                            <div class="base-fabric-sprite1" id="OCp16" onclick=loadOuterCollarPattern(event)></div>
                        </div>
                        `;
    var btnDiv = document.createElement("div");
    btnDiv.id = "btns_div";
    var backBtn = document.createElement("button");
    backBtn.innerHTML = "Back";
    backBtn.onclick = getMainContentBack;
    backBtn.className = "btn btn-secondary";
    var saveBtn = document.createElement("button");
    saveBtn.innerHTML = "Save";
    saveBtn.className = "float-right btn btn-primary";
    saveBtn.onclick = saveAndGetMainContent;
    btnDiv.appendChild(backBtn);
    btnDiv.appendChild(saveBtn);
    document.getElementsByClassName("btn_container")[0].replaceChild(btnDiv, document.getElementById("btns_div"));
}


//--------------------------------Show Inner Collar-------------------------------------------------


function ShowInnerCollar() {
    preserveImages();
    preserveDesignsPatterns();
    target = document.getElementById("content");
    target.innerHTML = `
                        <div class="text-center" style="height: 492px; overflow-y:scroll; padding-top: 25px;">
                            <div class="base-fabric-sprite1" id="ICp1" onclick=loadInnerCollar(event)></div>
                            <div class="collar-fabric-sprite1" id="ICp2" onclick=loadInnerCollar(event)></div>
                            <div class="collar-fabric-sprite1" id="ICp3" onclick=loadInnerCollar(event)></div>
                            <div class="collar-fabric-sprite1" id="ICp4" onclick=loadInnerCollar(event)></div>
                            <div class="collar-fabric-sprite1" id="ICp5" onclick=loadInnerCollar(event)></div>
                            <div class="collar-fabric-sprite3" id="ICp6" onclick=loadInnerCollar(event)></div>
                            <div class="collar-fabric-sprite3" id="ICp7" onclick=loadInnerCollar(event)></div>
                            <div class="collar-fabric-sprite2" id="ICp8" onclick=loadInnerCollar(event)></div>
                            <div class="collar-fabric-sprite2" id="ICp9" onclick=loadInnerCollar(event)></div>
                            <div class="collar-fabric-sprite2" id="ICp10" onclick=loadInnerCollar(event)></div>
                            <div class="collar-fabric-sprite1" id="ICp11" onclick=loadInnerCollar(event)></div>
                            <div class="collar-fabric-sprite3" id="ICp12" onclick=loadInnerCollar(event)></div>
                            <div class="collar-fabric-sprite1" id="ICp13" onclick=loadInnerCollar(event)></div>
                            <div class="base-fabric-sprite1" id="ICp14" onclick=loadInnerCollar(event)></div>
                            <div class="base-fabric-sprite1" id="ICp15" onclick=loadInnerCollar(event)></div>
                            <div class="base-fabric-sprite1" id="ICp16" onclick=loadInnerCollar(event)></div>
                            <div class="base-fabric-sprite1" id="ICp17" onclick=loadInnerCollar(event)></div>
                            <div class="base-fabric-sprite1" id="ICp18" onclick=loadInnerCollar(event)></div>
                            <div class="base-fabric-sprite1" id="ICp19" onclick=loadInnerCollar(event)></div>
                            <div class="base-fabric-sprite1" id="ICp20" onclick=loadInnerCollar(event)></div>
                            <div class="base-fabric-sprite1" id="ICp21" onclick=loadInnerCollar(event)></div>
                            <div class="base-fabric-sprite1" id="ICp22" onclick=loadInnerCollar(event)></div>
                        </div>
                        `;
    var btnDiv = document.createElement("div");
    btnDiv.id = "btns_div";
    var backBtn = document.createElement("button");
    backBtn.innerHTML = "Back";
    backBtn.onclick = getMainContentBack;
    backBtn.className = "btn btn-secondary";
    var saveBtn = document.createElement("button");
    saveBtn.innerHTML = "Save";
    saveBtn.className = "float-right btn btn-primary";
    saveBtn.onclick = saveAndGetMainContent;
    btnDiv.appendChild(backBtn);
    btnDiv.appendChild(saveBtn);
    document.getElementsByClassName("btn_container")[0].replaceChild(btnDiv, document.getElementById("btns_div"));
}


//--------------------------------Show Inner Placket-------------------------------------------------


function ShowInnerPlacket() {
    preserveImages();
    preserveDesignsPatterns();
    loadOuterPlacket();
    target = document.getElementById("content");
    target.innerHTML = `
                        <div class="text-center" style="height: 492px; overflow-y:scroll; padding-top: 25px;">
                            <div class="base-fabric-sprite1" id="IPp1" onclick=loadInnerPlacket(event)></div>
                            <div class="base-fabric-sprite1" id="IPp2" onclick=loadInnerPlacket(event)></div>
                            <div class="collar-fabric-sprite1" id="IPp3" onclick=loadInnerPlacket(event)></div>
                            <div class="collar-fabric-sprite1" id="IPp4" onclick=loadInnerPlacket(event)></div>
                            <div class="collar-fabric-sprite1" id="IPp5" onclick=loadInnerPlacket(event)></div>
                            <div class="collar-fabric-sprite3" id="IPp6" onclick=loadInnerPlacket(event)></div>
                            <div class="collar-fabric-sprite3" id="IPp7" onclick=loadInnerPlacket(event)></div>
                            <div class="collar-fabric-sprite2" id="IPp8" onclick=loadInnerPlacket(event)></div>
                            <div class="collar-fabric-sprite2" id="IPp9" onclick=loadInnerPlacket(event)></div>
                            <div class="collar-fabric-sprite3" id="IPp10" onclick=loadInnerPlacket(event)></div>
                            <div class="collar-fabric-sprite2" id="IPp11" onclick=loadInnerPlacket(event)></div>
                            <div class="collar-fabric-sprite3" id="IPp12" onclick=loadInnerPlacket(event)></div>
                            <div class="collar-fabric-sprite1" id="IPp13" onclick=loadInnerPlacket(event)></div>
                            <div class="collar-fabric-sprite1" id="IPp14" onclick=loadInnerPlacket(event)></div>
                            <div class="base-fabric-sprite1" id="IPp15" onclick=loadInnerPlacket(event)></div>
                            <div class="base-fabric-sprite1" id="IPp16" onclick=loadInnerPlacket(event)></div>
                            <div class="base-fabric-sprite1" id="IPp17" onclick=loadInnerPlacket(event)></div>
                            <div class="base-fabric-sprite1" id="IPp18" onclick=loadInnerPlacket(event)></div>
                            <div class="base-fabric-sprite1" id="IPp19" onclick=loadInnerPlacket(event)></div>
                            <div class="base-fabric-sprite1" id="IPp20" onclick=loadInnerPlacket(event)></div>
                            <div class="base-fabric-sprite1" id="IPp21" onclick=loadInnerPlacket(event)></div>
                            <div class="base-fabric-sprite1" id="IPp22" onclick=loadInnerPlacket(event)></div>
                            <div class="base-fabric-sprite1" id="IPp23" onclick=loadInnerPlacket(event)></div>
                        </div>
                        `;
    var btnDiv = document.createElement("div");
    btnDiv.id = "btns_div";
    var backBtn = document.createElement("button");
    backBtn.innerHTML = "Back";
    backBtn.onclick = getMainContentBack;
    backBtn.className = "btn btn-secondary";
    var saveBtn = document.createElement("button");
    saveBtn.innerHTML = "Save";
    saveBtn.className = "float-right btn btn-primary";
    saveBtn.onclick = resetPlacketImages;
    btnDiv.appendChild(backBtn);
    btnDiv.appendChild(saveBtn);
    document.getElementsByClassName("btn_container")[0].replaceChild(btnDiv, document.getElementById("btns_div"));
}
//--------------------------------Show Inner Cuff-------------------------------------------------


function ShowInnerCuff() {
    preserveImages();
    preserveDesignsPatterns();
    loadOuterFoldedCuff();
    target = document.getElementById("content");
    target.innerHTML = `
                        <div class="text-center" style="height: 492px; overflow-y:scroll; padding-top: 25px;">
                            <div class="cuff-fabric-sprite1" id="ICup1" onclick=loadInnerOpenedCuff(event)></div>
                            <div class="collar-fabric-sprite1" id="ICup2" onclick=loadInnerOpenedCuff(event)></div>
                            <div class="collar-fabric-sprite1" id="ICup3" onclick=loadInnerOpenedCuff(event)></div>
                            <div class="collar-fabric-sprite1" id="ICup4" onclick=loadInnerOpenedCuff(event)></div>
                            <div class="collar-fabric-sprite1" id="ICup5" onclick=loadInnerOpenedCuff(event)></div>
                            <div class="collar-fabric-sprite2" id="ICup6" onclick=loadInnerOpenedCuff(event)></div>
                            <div class="collar-fabric-sprite2" id="ICup7" onclick=loadInnerOpenedCuff(event)></div>
                            <div class="collar-fabric-sprite3" id="ICup8" onclick=loadInnerOpenedCuff(event)></div>
                            <div class="collar-fabric-sprite1" id="ICup9" onclick=loadInnerOpenedCuff(event)></div>
                            <div class="collar-fabric-sprite1" id="ICup10" onclick=loadInnerOpenedCuff(event)></div>
                            <div class="base-fabric-sprite1" id="ICup11" onclick=loadInnerOpenedCuff(event)></div>
                            <div class="base-fabric-sprite1" id="ICup12" onclick=loadInnerOpenedCuff(event)></div>
                            <div class="base-fabric-sprite1" id="ICup13" onclick=loadInnerOpenedCuff(event)></div>
                            <div class="base-fabric-sprite1" id="ICup14" onclick=loadInnerOpenedCuff(event)></div>
                            <div class="base-fabric-sprite1" id="ICup15" onclick=loadInnerOpenedCuff(event)></div>
                            <div class="base-fabric-sprite1" id="ICup16" onclick=loadInnerOpenedCuff(event)></div>
                            <div class="base-fabric-sprite1" id="ICup17" onclick=loadInnerOpenedCuff(event)></div>
                            <div class="base-fabric-sprite1" id="ICup18" onclick=loadInnerOpenedCuff(event)></div>
                            <!--<div class="fabric" id="ICup19" onclick=loadInnerOpenedCuff(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: red;">P19</div>-->
                        </div>
                        `;
    var btnDiv = document.createElement("div");
    btnDiv.id = "btns_div";
    var backBtn = document.createElement("button");
    backBtn.innerHTML = "Back";
    backBtn.onclick = getMainContentBack;
    backBtn.className = "btn btn-secondary";
    var saveBtn = document.createElement("button");
    saveBtn.innerHTML = "Save";
    saveBtn.className = "float-right btn btn-primary";
    saveBtn.onclick = resetCuffImages;
    btnDiv.appendChild(backBtn);
    btnDiv.appendChild(saveBtn);
    document.getElementsByClassName("btn_container")[0].replaceChild(btnDiv, document.getElementById("btns_div"));
}
//--------------------------------Show Outer Cuff-------------------------------------------------


function ShowOuterCuff() {
    preserveImages();
    preserveDesignsPatterns();
    target = document.getElementById("content");
    target.innerHTML = `
                        <div class="text-center" style="height: 492px; overflow-y:scroll; padding-top: 25px;">
                            <div class="cuff-fabric-sprite1" id="OCup1" onclick=loadOuterCuffPattern(event)></div>
                            <div class="collar-fabric-sprite1" id="OCup2" onclick=loadOuterCuffPattern(event)></div>
                            <div class="collar-fabric-sprite1" id="OCup3" onclick=loadOuterCuffPattern(event)></div>
                            <div class="collar-fabric-sprite3" id="OCup4" onclick=loadOuterCuffPattern(event)></div>
                            <div class="collar-fabric-sprite2" id="OCup5" onclick=loadOuterCuffPattern(event)></div>
                            <div class="collar-fabric-sprite1" id="OCup6" onclick=loadOuterCuffPattern(event)></div>
                            <div class="collar-fabric-sprite2" id="OCup7" onclick=loadOuterCuffPattern(event)></div>
                            <div class="collar-fabric-sprite2" id="OCup8" onclick=loadOuterCuffPattern(event)></div>
                            <div class="collar-fabric-sprite1" id="OCup9" onclick=loadOuterCuffPattern(event)></div>
                            <div class="collar-fabric-sprite1" id="OCup10" onclick=loadOuterCuffPattern(event)></div>
                            <div class="collar-fabric-sprite1" id="OCup11" onclick=loadOuterCuffPattern(event)></div>
                            <div class="base-fabric-sprite1" id="OCup12" onclick=loadOuterCuffPattern(event)></div>
                            <div class="base-fabric-sprite1" id="OCup13" onclick=loadOuterCuffPattern(event)></div>
                            <div class="base-fabric-sprite1" id="OCup14" onclick=loadOuterCuffPattern(event)></div>
                            <div class="base-fabric-sprite1" id="OCup15" onclick=loadOuterCuffPattern(event)></div>
                            <div class="base-fabric-sprite1" id="OCup16" onclick=loadOuterCuffPattern(event)></div>
                            <div class="base-fabric-sprite1" id="OCup17" onclick=loadOuterCuffPattern(event)></div>
                            <div class="base-fabric-sprite1" id="OCup18" onclick=loadOuterCuffPattern(event)></div>
                        </div>
                        `;
    var btnDiv = document.createElement("div");
    btnDiv.id = "btns_div";
    var backBtn = document.createElement("button");
    backBtn.innerHTML = "Back";
    backBtn.onclick = getMainContentBack;
    backBtn.className = "btn btn-secondary";
    var saveBtn = document.createElement("button");
    saveBtn.innerHTML = "Save";
    saveBtn.className = "float-right btn btn-primary";
    saveBtn.onclick = saveAndGetMainContent;
    btnDiv.appendChild(backBtn);
    btnDiv.appendChild(saveBtn);
    document.getElementsByClassName("btn_container")[0].replaceChild(btnDiv, document.getElementById("btns_div"));
}