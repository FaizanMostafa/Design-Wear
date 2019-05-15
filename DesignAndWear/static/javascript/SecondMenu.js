function getSecondMenuContentBack() {
    resetImages();
    resetDesignsPatterns();
    getSecondMenuContent();
}

function getSecondMenuContent() {
    var contentDiv = document.createElement("div");
    contentDiv.id = "content";
    contentDiv.innerHTML = `<h2>Customize Your Shirt's Style</h2>
                            <ul class="fli">
                                <li class="fli" OnClick=ShowCollarStyles()>COLLAR</li>
                                <li class="fli" OnClick=ShowCuffStyles()>CUFF</li>
                                <li class="fli">POCKET</li>
                                <li class="fli" OnClick=ShowInnerCollar()>SHIRT BACK</li>
                                <li class="fli" OnClick=ShowOuterCuff()>BUTTON COLOUR</li>
                                <li class="fli" OnClick=ShowInnerCuff()>MONOGRAM</li>
                            </ul>
                            <button OnClick=getMainContent()>Back</button>
                            <button OnClick=postShirtSpecs()>Add to cart</button>`;
    document.getElementById("listContainer").replaceChild(contentDiv, document.getElementById("content"));
}

function saveAndGetMenuContent() {
    getSecondMenuContent();
}

function ShowCollarStyles() {
    preserveImages();
    preserveDesignsPatterns();
    target = document.getElementById("content");
    target.innerHTML = `
                        <div class="fabric" id="RR" onclick=loadOuterCollarDesign(event) style="height: 40px; width: 90px; display: inline-block; margin-left: 7px; background-color: red;">REGULAR</div>
                        <div class="fabric" id="SP" onclick=loadOuterCollarDesign(event) style="height: 40px; width: 90px; display: inline-block; margin-left: 7px; background-color: green;">SHORT POINT</div>
                        <div class="fabric" id="CA" onclick=loadOuterCollarDesign(event) style="height: 40px; width: 90px; display: inline-block; margin-left: 7px; background-color: blue;">CUT AWAY</div>
                        <div class="fabric" id="BR" onclick=loadOuterCollarDesign(event) style="height: 40px; width: 90px; display: inline-block; margin-left: 7px; background-color: yellow;">BIG ROUND</div>
                        <div class="fabric" id="PH" onclick=loadOuterCollarDesign(event) style="height: 40px; width: 90px; display: inline-block; margin-left: 7px; background-color: yellow;">PINHOLE</div>
                        <div class="fabric" id="SW" onclick=loadOuterCollarDesign(event) style="height: 40px; width: 90px; display: inline-block; margin-left: 7px; background-color: yellow;">SEMI WIDE</div>
                        <div class="fabric" id="WS" onclick=loadOuterCollarDesign(event) style="height: 40px; width: 90px; display: inline-block; margin-left: 7px; background-color: yellow;">WIDE SPREAD</div>
                        <div class="fabric" id="SS" onclick=loadOuterCollarDesign(event) style="height: 40px; width: 90px; display: inline-block; margin-left: 7px; background-color: yellow;">STAND</div>
                        <div class="fabric" id="DB" onclick=loadOuterCollarDesign(event) style="height: 40px; width: 90px; display: inline-block; margin-left: 7px; background-color: yellow;">DUAL BUTTON</div>
                        <div class="fabric" id="RB" onclick=loadOuterCollarDesign(event) style="height: 40px; width: 90px; display: inline-block; margin-left: 7px; background-color: yellow;">BUTTONED DOWN</div>
                        `;
    var backBtn = document.createElement("button");
    backBtn.innerHTML = "Back";
    backBtn.onclick = getSecondMenuContentBack;
    document.getElementById("content").appendChild(backBtn);
    var saveBtn = document.createElement("button");
    saveBtn.innerHTML = "Save";
    saveBtn.onclick = saveAndGetMenuContent;
    document.getElementById("content").appendChild(saveBtn);
}

function ShowCuffStyles() {
    preserveImages();
    preserveDesignsPatterns();
    target = document.getElementById("content");
    target.innerHTML = `
                        <div class="fabric" id="RR" onclick=loadOuterCuffDesign(event) style="height: 40px; width: 90px; display: inline-block; margin-left: 7px; background-color: red;">ROUND</div>
                        <div class="fabric" id="BA" onclick=loadOuterCuffDesign(event) style="height: 40px; width: 90px; display: inline-block; margin-left: 7px; background-color: green;">BIG ANGLE</div>
                        <div class="fabric" id="SQ" onclick=loadOuterCuffDesign(event) style="height: 40px; width: 90px; display: inline-block; margin-left: 7px; background-color: blue;">SQUARE</div>
                        <div class="fabric" id="BR" onclick=loadOuterCuffDesign(event) style="height: 40px; width: 90px; display: inline-block; margin-left: 7px; background-color: yellow;">BIG ROUND</div>
                        <div class="fabric" id="AA" onclick=loadOuterCuffDesign(event) style="height: 40px; width: 90px; display: inline-block; margin-left: 7px; background-color: yellow;">ANGLE</div>
                        <div class="fabric" id="FR" onclick=loadOuterCuffDesign(event) style="height: 40px; width: 90px; display: inline-block; margin-left: 7px; background-color: yellow;">FRENCH</div>
                        `;
    var backBtn = document.createElement("button");
    backBtn.innerHTML = "Back";
    backBtn.onclick = getSecondMenuContentBack;
    document.getElementById("content").appendChild(backBtn);
    var saveBtn = document.createElement("button");
    saveBtn.innerHTML = "Save";
    saveBtn.onclick = saveAndGetMenuContent;
    document.getElementById("content").appendChild(saveBtn);
}