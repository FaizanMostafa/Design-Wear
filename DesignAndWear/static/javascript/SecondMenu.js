function getSecondMenuContentBack() {
    resetImages();
    resetDesignsPatterns();
    getSecondMenuContent();
}

function preservePocketImage() {
    pocketUrl = document.getElementById("pocket").src;
}

function resetPocketGetSecondMenuContentBack() {
    document.getElementById("pocket").src = pocketUrl;
    getSecondMenuContent();
}

function getSecondMenuContent() {
    var contentDiv = document.createElement("div");
    contentDiv.id = "content";
    contentDiv.innerHTML = `
                            <div>
                                <h2>Customize Your Shirt's Style</h2>
                                <ul class="fli">
                                    <li class="fli" OnClick=ShowCollarStyles()><div id="collar-style-icon" class="sprite-icons sprite2"></div> COLLAR</li>
                                    <li class="fli" OnClick=ShowCuffStyles()><div id="cuff-style-icon" class="sprite-icons sprite2"></div> CUFF</li>
                                    <li class="fli" OnClick=ShowPocket()><div id="pocket-icon" class="sprite-icons sprite2"></div> POCKET</li>
                                    <li class="fli" OnClick=ShowShirtBack()><div id="shirt-back-icon" class="sprite-icons sprite2"></div> SHIRT BACK</li>
                                    <li class="fli" OnClick=ShowBuutons()><div id="button-icon" class="sprite-icons sprite2"></div> BUTTON COLOUR</li>
                                    <li class="fli" OnClick=ShowMonogram()><div id="monogram-icon" class="sprite-icons sprite2"></div> MONOGRAM</li>
                                </ul>
                            </div>
                            `;
    document.getElementById("listContainer").replaceChild(contentDiv, document.getElementById("content"));
    var btnDiv = document.createElement("div");
    btnDiv.id = "btns_div";
    var backBtn = document.createElement("button");
    backBtn.innerHTML = "Back";
    backBtn.onclick = getMainContent;
    backBtn.className = "btn btn-secondary";
    var cartBtn = document.createElement("button");
    cartBtn.innerHTML = "Add to cart";
    cartBtn.onclick = postShirtSpecs;
    cartBtn.className = "float-right btn btn-primary";
    btnDiv.appendChild(backBtn);
    btnDiv.appendChild(cartBtn);
    document.getElementsByClassName("btn_container")[0].replaceChild(btnDiv, document.getElementById("btns_div"));
}

function saveAndGetMenuContent() {
    getSecondMenuContent();
}

function ShowCollarStyles() {
    preserveImages();
    preserveDesignsPatterns();
    target = document.getElementById("content");
    target.innerHTML = `
                        <div>
                            <div class="collar-designs" id="RR" onclick=loadOuterCollarDesign(event) style="height: 100px; width: 100px; margin-left: 7px;">REGULAR</div>
                            <div class="collar-designs" id="SP" onclick=loadOuterCollarDesign(event) style="height: 100px; width: 100px; margin-left: 7px;">SHORT POINT</div>
                            <div class="collar-designs" id="CA" onclick=loadOuterCollarDesign(event) style="height: 100px; width: 100px; margin-left: 7px;">CUT AWAY</div>
                            <div class="collar-designs" id="BR" onclick=loadOuterCollarDesign(event) style="height: 100px; width: 100px; margin-left: 7px;">BIG ROUND</div>
                            <div class="collar-designs" id="PH" onclick=loadOuterCollarDesign(event) style="height: 100px; width: 100px; margin-left: 7px;">PINHOLE</div>
                            <div class="collar-designs" id="SW" onclick=loadOuterCollarDesign(event) style="height: 100px; width: 100px; margin-left: 7px;">SEMI WIDE</div>
                            <div class="collar-designs" id="WS" onclick=loadOuterCollarDesign(event) style="height: 100px; width: 100px; margin-left: 7px;">WIDE SPREAD</div>
                            <div class="collar-designs" id="SS" onclick=loadOuterCollarDesign(event) style="height: 100px; width: 100px; margin-left: 7px;">STAND</div>
                            <div class="collar-designs" id="DB" onclick=loadOuterCollarDesign(event) style="height: 100px; width: 100px; margin-left: 7px;">DUAL BUTTON</div>
                            <div class="collar-designs" id="RB" onclick=loadOuterCollarDesign(event) style="height: 100px; width: 100px; margin-left: 7px;">BUTTONED DOWN</div>
                        </div>
                        `;
    var btnDiv = document.createElement("div");
    btnDiv.id = "btns_div";
    var backBtn = document.createElement("button");
    backBtn.innerHTML = "Back";
    backBtn.onclick = getSecondMenuContentBack;
    backBtn.className = "btn btn-secondary";
    var saveBtn = document.createElement("button");
    saveBtn.innerHTML = "Save";
    saveBtn.className = "float-right btn btn-primary";
    saveBtn.onclick = saveAndGetMenuContent;
    btnDiv.appendChild(backBtn);
    btnDiv.appendChild(saveBtn);
    document.getElementsByClassName("btn_container")[0].replaceChild(btnDiv, document.getElementById("btns_div"));
}

function ShowCuffStyles() {
    preserveImages();
    preserveDesignsPatterns();
    target = document.getElementById("content");
    target.innerHTML = `
                        <div>
                            <div class="fabric" id="RR" onclick=loadOuterCuffDesign(event) style="height: 40px; width: 90px; display: inline-block; margin-left: 7px; background-color: red;">ROUND</div>
                            <div class="fabric" id="BA" onclick=loadOuterCuffDesign(event) style="height: 40px; width: 90px; display: inline-block; margin-left: 7px; background-color: green;">BIG ANGLE</div>
                            <div class="fabric" id="SQ" onclick=loadOuterCuffDesign(event) style="height: 40px; width: 90px; display: inline-block; margin-left: 7px; background-color: blue;">SQUARE</div>
                            <div class="fabric" id="BR" onclick=loadOuterCuffDesign(event) style="height: 40px; width: 90px; display: inline-block; margin-left: 7px; background-color: yellow;">BIG ROUND</div>
                            <div class="fabric" id="AA" onclick=loadOuterCuffDesign(event) style="height: 40px; width: 90px; display: inline-block; margin-left: 7px; background-color: yellow;">ANGLE</div>
                            <div class="fabric" id="FR" onclick=loadOuterCuffDesign(event) style="height: 40px; width: 90px; display: inline-block; margin-left: 7px; background-color: yellow;">FRENCH</div>
                        </div>
                        `;
    var btnDiv = document.createElement("div");
    btnDiv.id = "btns_div";
    var backBtn = document.createElement("button");
    backBtn.innerHTML = "Back";
    backBtn.onclick = getSecondMenuContentBack;
    backBtn.className = "btn btn-secondary";
    var saveBtn = document.createElement("button");
    saveBtn.innerHTML = "Save";
    saveBtn.className = "float-right btn btn-primary";
    saveBtn.onclick = saveAndGetMenuContent;
    btnDiv.appendChild(backBtn);
    btnDiv.appendChild(saveBtn);
    document.getElementsByClassName("btn_container")[0].replaceChild(btnDiv, document.getElementById("btns_div"));
}

function ShowPocket() {
    preservePocketImage();
    target = document.getElementById("content");
    target.innerHTML = `
                        <div>
                            <h3 class="text-center">Pocket</h3>
                            <fieldset class="text-center" style="margin: 0.4vw 0vw">
                                <div class="btn-group btn-group-toggle sizes" data-toggle="buttons">
                                    <label class="btn btn-outline-primary active" onclick=loadPocket(event)>
                                        <input type="radio" name="pocket" id="option1" value="False" autocomplete="off"
                                        > No Pocket
                                    </label>
                                    <label class="btn btn-outline-primary" onclick=loadPocket(event)>
                                        <input type="radio" name="pocket" id="option2" value="True" autocomplete="off"
                                        > Left Pocket
                                    </label>
                                </div>
                            </fieldset>
                            <p class="text-center">No pocket is more formal, while a pocket is more casual.</p>
                        </div>
                        `;
    var btnDiv = document.createElement("div");
    btnDiv.id = "btns_div";
    var backBtn = document.createElement("button");
    backBtn.innerHTML = "Back";
    backBtn.onclick = resetPocketGetSecondMenuContentBack;
    backBtn.className = "btn btn-secondary";
    var saveBtn = document.createElement("button");
    saveBtn.innerHTML = "Save";
    saveBtn.className = "float-right btn btn-primary";
    saveBtn.onclick = saveAndGetMenuContent;
    btnDiv.appendChild(backBtn);
    btnDiv.appendChild(saveBtn);
    document.getElementsByClassName("btn_container")[0].replaceChild(btnDiv, document.getElementById("btns_div"));
}

function ShowShirtBack() {
    preserveImages();
    preserveDesignsPatterns();
    target = document.getElementById("content");
    target.innerHTML = `
                        <div>
                            <div class="shirt_back" id="NNN" onclick=loadOuterCollarDesign(event) style="height: 150px; width: 100px; margin-left: 7px;"><p class="text-center align-bottom">None</p></div>
                            <div class="shirt_back" id="BPP" onclick=loadOuterCollarDesign(event) style="height: 150px; width: 100px; margin-left: 7px;"><p class="text-center align-bottom">Box Pleats</p></div>
                            <div class="shirt_back" id="SPP"  onclick=loadOuterCollarDesign(event) style="height: 150px; width: 100px; margin-left: 7px;"><p class="text-center align-bottom">Side Pleats</p></div>
                        </div>
                        `;
    var btnDiv = document.createElement("div");
    btnDiv.id = "btns_div";
    var backBtn = document.createElement("button");
    backBtn.innerHTML = "Back";
    backBtn.onclick = getSecondMenuContentBack;
    backBtn.className = "btn btn-secondary";
    var saveBtn = document.createElement("button");
    saveBtn.innerHTML = "Save";
    saveBtn.className = "float-right btn btn-primary";
    saveBtn.onclick = saveAndGetMenuContent;
    btnDiv.appendChild(backBtn);
    btnDiv.appendChild(saveBtn);
    document.getElementsByClassName("btn_container")[0].replaceChild(btnDiv, document.getElementById("btns_div"));
}

function ShowBuutons() {
    preserveImages();
    preserveDesignsPatterns();
    target = document.getElementById("content");
    target.innerHTML = `<center>
                        <div>
                            <div class="buttons" id="b1" onclick=loadButtons(event) style="height: 100px; width: 100px; display: inline-block; margin: 7px;"></div>
                            <div class="buttons" id="b2" onclick=loadButtons(event) style="height: 100px; width: 100px; display: inline-block; margin: 7px;"></div>
                            <div class="buttons" id="b3" onclick=loadButtons(event) style="height: 100px; width: 100px; display: inline-block; margin: 7px;"></div>
                            <div class="buttons" id="b4" onclick=loadButtons(event) style="height: 100px; width: 100px; display: inline-block; margin: 7px;"></div>
                            <div class="buttons" id="b5" onclick=loadButtons(event) style="height: 100px; width: 100px; display: inline-block; margin: 7px;"></div>
                            <div class="buttons" id="b6" onclick=loadButtons(event) style="height: 100px; width: 100px; display: inline-block; margin: 7px;"></div>
                            <div class="buttons" id="b7" onclick=loadButtons(event) style="height: 100px; width: 100px; display: inline-block; margin: 7px;"></div>
                            <div class="buttons" id="b8" onclick=loadButtons(event) style="height: 100px; width: 100px; display: inline-block; margin: 7px;"></div>
                            <div class="buttons" id="b9" onclick=loadButtons(event) style="height: 100px; width: 100px; display: inline-block; margin: 7px;"></div>
                            <div class="buttons" id="b10" onclick=loadButtons(event) style="height: 100px; width: 100px; display: inline-block; margin: 7px;"></div>
                            <div class="buttons" id="b11" onclick=loadButtons(event) style="height: 100px; width: 100px; display: inline-block; margin: 7px;"></div>
                            <div class="buttons" id="b12" onclick=loadButtons(event) style="height: 100px; width: 100px; display: inline-block; margin: 7px;"></div>
                            <div class="buttons" id="b13" onclick=loadButtons(event) style="height: 100px; width: 100px; display: inline-block; margin: 7px;"></div>
                            <div class="buttons" id="b14" onclick=loadButtons(event) style="height: 100px; width: 100px; display: inline-block; margin: 7px;"></div>
                            <div class="buttons" id="b15" onclick=loadButtons(event) style="height: 100px; width: 100px; display: inline-block; margin: 7px;"></div>
                            <div class="buttons" id="b16" onclick=loadButtons(event) style="height: 100px; width: 100px; display: inline-block; margin: 7px;"></div>
                        </div>
                        </center>
                        `;
    var btnDiv = document.createElement("div");
    btnDiv.id = "btns_div";
    var backBtn = document.createElement("button");
    backBtn.innerHTML = "Back";
    backBtn.onclick = getSecondMenuContentBack;
    backBtn.className = "btn btn-secondary";
    var saveBtn = document.createElement("button");
    saveBtn.innerHTML = "Save";
    saveBtn.className = "float-right btn btn-primary";
    saveBtn.onclick = saveAndGetMenuContent;
    btnDiv.appendChild(backBtn);
    btnDiv.appendChild(saveBtn);
    document.getElementsByClassName("btn_container")[0].replaceChild(btnDiv, document.getElementById("btns_div"));
}

function ShowMonogram() {
    preserveImages();
    preserveDesignsPatterns();
    target = document.getElementById("content");
    target.innerHTML = `
                        <div>
                            <h3 class="text-center">Monogram</h3>
                            <fieldset class="text-center" style="margin: 0.4vw 0vw">
                                <div class="btn-group btn-group-toggle sizes" data-toggle="buttons">
                                    <label class="btn btn-outline-primary active">
                                        <input type="radio" name="monogram" id="option1" value="NP" autocomplete="off"
                                        > None
                                    </label>
                                    <label class="btn btn-outline-primary">
                                        <input type="radio" name="monogram" id="option2" value="LP" autocomplete="off"
                                        > Add Monogram
                                    </label>
                                </div>
                            </fieldset>
                            <p class="text-center">We can add a monogram to your shirt.</p>
                        </div>
                        `;
    var btnDiv = document.createElement("div");
    btnDiv.id = "btns_div";
    var backBtn = document.createElement("button");
    backBtn.innerHTML = "Back";
    backBtn.onclick = getSecondMenuContentBack;
    backBtn.className = "btn btn-secondary";
    var saveBtn = document.createElement("button");
    saveBtn.innerHTML = "Save";
    saveBtn.className = "float-right btn btn-primary";
    saveBtn.onclick = saveAndGetMenuContent;
    btnDiv.appendChild(backBtn);
    btnDiv.appendChild(saveBtn);
    document.getElementsByClassName("btn_container")[0].replaceChild(btnDiv, document.getElementById("btns_div"));
}