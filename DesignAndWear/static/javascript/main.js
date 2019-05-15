
function getMainContentBack() {
    resetImages();
    resetDesignsPatterns();
    getMainContent();
}

function getMainContent() {
    var contentDiv = document.createElement("div");
    contentDiv.id = "content";
    contentDiv.innerHTML = `<h2>Customize Your Shirt's Fabric</h2>
                            <ul class="fli">
                                <li class="fli" OnClick=ShowBaseFabrics()>BASE FABRIC</li>
                                <li class="fli" OnClick=ShowOuterCollar()>OUTER COLLAR</li>
                                <li class="fli" OnClick=ShowInnerCollar()>INNER COLLAR</li>
                                <li class="fli" OnClick=ShowOuterCuff()>OUTER CUFFS</li>
                                <li class="fli" OnClick=ShowInnerCuff()>INNER CUFFS</li>
                                <li class="fli" OnClick=ShowInnerPlacket()>INNER PLACKET</li>
                            </ul>
                            <button OnClick=getSecondMenuContent()>Continue Styling</button>`;
    document.getElementById("listContainer").replaceChild(contentDiv, document.getElementById("content"));
}

function saveAndGetMainContent() {
    getMainContent();
}

function ShowBaseFabrics() {
    preserveImages();
    preserveDesignsPatterns();
    target = document.getElementById("content");
    target.innerHTML = `
                        <div class="fabric" id="Bp1" onclick=loadPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: red;">P1</div>
                        <div class="fabric" id="Bp2" onclick=loadPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: green;">P2</div>
                        <div class="fabric" id="Bp3" onclick=loadPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: blue;">P3</div>
                        <div class="fabric" id="Bp4" onclick=loadPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: yellow;">P4</div>
                        `;
    var backBtn = document.createElement("button");
    backBtn.innerHTML = "Back";
    backBtn.onclick = getMainContentBack;
    document.getElementById("content").appendChild(backBtn);
    var saveBtn = document.createElement("button");
    saveBtn.innerHTML = "Save";
    saveBtn.onclick = saveAndGetMainContent;
    document.getElementById("content").appendChild(saveBtn);
}

//--------------------------------Show Outer Collar-------------------------------------------------


function ShowOuterCollar() {
    preserveImages();
    preserveDesignsPatterns();
    target = document.getElementById("content");
    target.innerHTML = `
                        <div class="fabric" id="OCp1" onclick=loadOuterCollarPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: red;">P1</div>
                        <div class="fabric" id="OCp2" onclick=loadOuterCollarPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: green;">P2</div>
                        <div class="fabric" id="OCp3" onclick=loadOuterCollarPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: blue;">P3</div>
                        <div class="fabric" id="OCp4" onclick=loadOuterCollarPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: yellow;">P4</div>
                        <div class="fabric" id="OCp5" onclick=loadOuterCollarPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: red;">P5</div>
                        <div class="fabric" id="OCp6" onclick=loadOuterCollarPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: green;">P6</div>
                        <div class="fabric" id="OCp7" onclick=loadOuterCollarPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: blue;">P7</div>
                        <div class="fabric" id="OCp8" onclick=loadOuterCollarPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: yellow;">P8</div>
                        <div class="fabric" id="OCp9" onclick=loadOuterCollarPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: red;">P9</div>
                        <div class="fabric" id="OCp10" onclick=loadOuterCollarPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: green;">P10</div>
                        <div class="fabric" id="OCp11" onclick=loadOuterCollarPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: blue;">P11</div>
                        <div class="fabric" id="OCp12" onclick=loadOuterCollarPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: yellow;">P12</div>
                        <div class="fabric" id="OCp13" onclick=loadOuterCollarPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: red;">P13</div>
                        <div class="fabric" id="OCp14" onclick=loadOuterCollarPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: green;">P14</div>
                        <div class="fabric" id="OCp15" onclick=loadOuterCollarPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: blue;">P15</div>
                        <div class="fabric" id="OCp16" onclick=loadOuterCollarPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: yellow;">P16</div>
                        `;
    var backBtn = document.createElement("button");
    backBtn.innerHTML = "Back";
    backBtn.onclick = getMainContentBack;
    document.getElementById("content").appendChild(backBtn);
    var saveBtn = document.createElement("button");
    saveBtn.innerHTML = "Save";
    saveBtn.onclick = saveAndGetMainContent;
    document.getElementById("content").appendChild(saveBtn);
}


//--------------------------------Show Inner Collar-------------------------------------------------


function ShowInnerCollar() {
    preserveImages();
    preserveDesignsPatterns();
    target = document.getElementById("content");
    target.innerHTML = `
                        <div class="fabric" id="ICp1" onclick=loadInnerCollar(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: red;">P1</div>
                        <div class="fabric" id="ICp2" onclick=loadInnerCollar(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: green;">P2</div>
                        <div class="fabric" id="ICp3" onclick=loadInnerCollar(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: blue;">P3</div>
                        <div class="fabric" id="ICp4" onclick=loadInnerCollar(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: yellow;">P4</div>
                        <div class="fabric" id="ICp5" onclick=loadInnerCollar(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: red;">P5</div>
                        <div class="fabric" id="ICp6" onclick=loadInnerCollar(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: green;">P6</div>
                        <div class="fabric" id="ICp7" onclick=loadInnerCollar(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: blue;">P7</div>
                        <div class="fabric" id="ICp8" onclick=loadInnerCollar(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: yellow;">P8</div>
                        <div class="fabric" id="ICp9" onclick=loadInnerCollar(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: red;">P9</div>
                        <div class="fabric" id="ICp10" onclick=loadInnerCollar(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: green;">P10</div>
                        <div class="fabric" id="ICp11" onclick=loadInnerCollar(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: blue;">P11</div>
                        <div class="fabric" id="ICp12" onclick=loadInnerCollar(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: yellow;">P12</div>
                        <div class="fabric" id="ICp13" onclick=loadInnerCollar(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: red;">P13</div>
                        <div class="fabric" id="ICp14" onclick=loadInnerCollar(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: green;">P14</div>
                        <div class="fabric" id="ICp15" onclick=loadInnerCollar(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: blue;">P15</div>
                        <div class="fabric" id="ICp16" onclick=loadInnerCollar(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: yellow;">P16</div>
                        <div class="fabric" id="ICp17" onclick=loadInnerCollar(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: blue;">P17</div>
                        <div class="fabric" id="ICp18" onclick=loadInnerCollar(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: yellow;">P18</div>
                        <div class="fabric" id="ICp19" onclick=loadInnerCollar(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: red;">P19</div>
                        <div class="fabric" id="ICp20" onclick=loadInnerCollar(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: green;">P20</div>
                        <div class="fabric" id="ICp21" onclick=loadInnerCollar(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: blue;">P21</div>
                        <div class="fabric" id="ICp22" onclick=loadInnerCollar(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: yellow;">P22</div>
                        `;
    var backBtn = document.createElement("button");
    backBtn.innerHTML = "Back";
    backBtn.onclick = getMainContentBack;
    document.getElementById("content").appendChild(backBtn);
    var saveBtn = document.createElement("button");
    saveBtn.innerHTML = "Save";
    saveBtn.onclick = saveAndGetMainContent;
    document.getElementById("content").appendChild(saveBtn);
}


//--------------------------------Show Inner Placket-------------------------------------------------


function ShowInnerPlacket() {
    preserveImages();
    preserveDesignsPatterns();
    loadOuterPlacket();
    target = document.getElementById("content");
    target.innerHTML = `
                        <div class="fabric" id="IPp1" onclick=loadInnerPlacket(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: red;">P1</div>
                        <div class="fabric" id="IPp2" onclick=loadInnerPlacket(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: green;">P2</div>
                        <div class="fabric" id="IPp3" onclick=loadInnerPlacket(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: blue;">P3</div>
                        <div class="fabric" id="IPp4" onclick=loadInnerPlacket(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: yellow;">P4</div>
                        <div class="fabric" id="IPp5" onclick=loadInnerPlacket(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: red;">P5</div>
                        <div class="fabric" id="IPp6" onclick=loadInnerPlacket(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: green;">P6</div>
                        <div class="fabric" id="IPp7" onclick=loadInnerPlacket(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: blue;">P7</div>
                        <div class="fabric" id="IPp8" onclick=loadInnerPlacket(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: yellow;">P8</div>
                        <div class="fabric" id="IPp9" onclick=loadInnerPlacket(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: red;">P9</div>
                        <div class="fabric" id="IPp10" onclick=loadInnerPlacket(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: green;">P10</div>
                        <div class="fabric" id="IPp11" onclick=loadInnerPlacket(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: blue;">P11</div>
                        <div class="fabric" id="IPp12" onclick=loadInnerPlacket(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: yellow;">P12</div>
                        <div class="fabric" id="IPp13" onclick=loadInnerPlacket(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: red;">P13</div>
                        <div class="fabric" id="IPp14" onclick=loadInnerPlacket(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: green;">P14</div>
                        <div class="fabric" id="IPp15" onclick=loadInnerPlacket(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: blue;">P15</div>
                        <div class="fabric" id="IPp16" onclick=loadInnerPlacket(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: yellow;">P16</div>
                        <div class="fabric" id="IPp17" onclick=loadInnerPlacket(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: blue;">P17</div>
                        <div class="fabric" id="IPp18" onclick=loadInnerPlacket(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: yellow;">P18</div>
                        <div class="fabric" id="IPp19" onclick=loadInnerPlacket(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: red;">P19</div>
                        <div class="fabric" id="IPp20" onclick=loadInnerPlacket(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: green;">P20</div>
                        <div class="fabric" id="IPp21" onclick=loadInnerPlacket(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: blue;">P21</div>
                        <div class="fabric" id="IPp22" onclick=loadInnerPlacket(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: yellow;">P22</div>
                        <div class="fabric" id="IPp23" onclick=loadInnerPlacket(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: yellow;">P23</div>
                        `;
    var backBtn = document.createElement("button");
    backBtn.innerHTML = "Back";
    backBtn.onclick = getMainContentBack;
    document.getElementById("content").appendChild(backBtn);
    var saveBtn = document.createElement("button");
    saveBtn.innerHTML = "Save";
    saveBtn.onclick = resetPlacketImages;
    document.getElementById("content").appendChild(saveBtn);
}
//--------------------------------Show Inner Cuff-------------------------------------------------


function ShowInnerCuff() {
    preserveImages();
    preserveDesignsPatterns();
    loadOuterFoldedCuff();
    target = document.getElementById("content");
    target.innerHTML = `
                        <div class="fabric" id="ICup1" onclick=loadInnerOpenedCuff(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: red;">P1</div>
                        <div class="fabric" id="ICup2" onclick=loadInnerOpenedCuff(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: green;">P2</div>
                        <div class="fabric" id="ICup3" onclick=loadInnerOpenedCuff(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: blue;">P3</div>
                        <div class="fabric" id="ICup4" onclick=loadInnerOpenedCuff(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: yellow;">P4</div>
                        <div class="fabric" id="ICup5" onclick=loadInnerOpenedCuff(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: red;">P5</div>
                        <div class="fabric" id="ICup6" onclick=loadInnerOpenedCuff(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: green;">P6</div>
                        <div class="fabric" id="ICup7" onclick=loadInnerOpenedCuff(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: blue;">P7</div>
                        <div class="fabric" id="ICup8" onclick=loadInnerOpenedCuff(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: yellow;">P8</div>
                        <div class="fabric" id="ICup9" onclick=loadInnerOpenedCuff(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: red;">P9</div>
                        <div class="fabric" id="ICup10" onclick=loadInnerOpenedCuff(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: green;">P10</div>
                        <div class="fabric" id="ICup11" onclick=loadInnerOpenedCuff(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: blue;">P11</div>
                        <div class="fabric" id="ICup12" onclick=loadInnerOpenedCuff(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: yellow;">P12</div>
                        <div class="fabric" id="ICup13" onclick=loadInnerOpenedCuff(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: red;">P13</div>
                        <div class="fabric" id="ICup14" onclick=loadInnerOpenedCuff(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: green;">P14</div>
                        <div class="fabric" id="ICup15" onclick=loadInnerOpenedCuff(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: blue;">P15</div>
                        <div class="fabric" id="ICup16" onclick=loadInnerOpenedCuff(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: yellow;">P16</div>
                        <div class="fabric" id="ICup17" onclick=loadInnerOpenedCuff(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: blue;">P17</div>
                        <div class="fabric" id="ICup18" onclick=loadInnerOpenedCuff(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: yellow;">P18</div>
                        <div class="fabric" id="ICup19" onclick=loadInnerOpenedCuff(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: red;">P19</div>
                        `;
    var backBtn = document.createElement("button");
    backBtn.innerHTML = "Back";
    backBtn.onclick = getMainContentBack;
    document.getElementById("content").appendChild(backBtn);
    var saveBtn = document.createElement("button");
    saveBtn.innerHTML = "Save";
    saveBtn.onclick = resetCuffImages;
    document.getElementById("content").appendChild(saveBtn);
}
//--------------------------------Show Outer Cuff-------------------------------------------------


function ShowOuterCuff() {
    preserveImages();
    preserveDesignsPatterns();
    target = document.getElementById("content");
    target.innerHTML = `
                        <div class="fabric" id="OCup1" onclick=loadOuterCuffPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: red;">P1</div>
                        <div class="fabric" id="OCup2" onclick=loadOuterCuffPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: green;">P2</div>
                        <div class="fabric" id="OCup3" onclick=loadOuterCuffPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: blue;">P3</div>
                        <div class="fabric" id="OCup4" onclick=loadOuterCuffPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: yellow;">P4</div>
                        <div class="fabric" id="OCup5" onclick=loadOuterCuffPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: red;">P5</div>
                        <div class="fabric" id="OCup6" onclick=loadOuterCuffPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: green;">P6</div>
                        <div class="fabric" id="OCup7" onclick=loadOuterCuffPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: blue;">P7</div>
                        <div class="fabric" id="OCup8" onclick=loadOuterCuffPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: yellow;">P8</div>
                        <div class="fabric" id="OCup9" onclick=loadOuterCuffPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: red;">P9</div>
                        <div class="fabric" id="OCup10" onclick=loadOuterCuffPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: green;">P10</div>
                        <div class="fabric" id="OCup11" onclick=loadOuterCuffPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: blue;">P11</div>
                        <div class="fabric" id="OCup12" onclick=loadOuterCuffPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: yellow;">P12</div>
                        <div class="fabric" id="OCup13" onclick=loadOuterCuffPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: red;">P13</div>
                        <div class="fabric" id="OCup14" onclick=loadOuterCuffPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: green;">P14</div>
                        <div class="fabric" id="OCup15" onclick=loadOuterCuffPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: blue;">P15</div>
                        <div class="fabric" id="OCup16" onclick=loadOuterCuffPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: yellow;">P16</div>
                        <div class="fabric" id="OCup17" onclick=loadOuterCuffPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: blue;">P17</div>
                        <div class="fabric" id="OCup18" onclick=loadOuterCuffPattern(event) style="height: 40px; width: 40px; display: inline-block; margin-left: 7px; background-color: yellow;">P18</div>
                        `;
    var backBtn = document.createElement("button");
    backBtn.innerHTML = "Back";
    backBtn.onclick = getMainContentBack;
    document.getElementById("content").appendChild(backBtn);
    var saveBtn = document.createElement("button");
    saveBtn.innerHTML = "Save";
    saveBtn.onclick = saveAndGetMainContent;
    document.getElementById("content").appendChild(saveBtn);
}