const locale = require('locale');


function getImg() {
  return require("heatshrink").decompress(atob("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"));
}

Graphics.prototype.setFontTime = function(scale) {
  // Actual height 54 (56 - 3)
  this.setFontCustom(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAPwAAAAAAAA/gAAAAAAAF/AAAAAAAA/8AAAAAAAD/wAAAAAAAP/AAAAAAAA/wAAAAAAAB/AAAAAAAAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAB+AAAAAAAAf4AAAAAAAH/wAAAAAAB//AAAAAAAf/+AAAAAAH//8AAAAAB///wAAAAAf///gAAAAH///+AAAAB////4AAAAf///+AAAAH////gAAAB////8AAAA/////AAAAP////wAAAD////8AAAA/////AAAAP////gAAAD////4AAAA////+AAAAD////gAAAAP///4AAAAAf//+AAAAAB///gAAAAAD//4AAAAAAP/+AAAAAAAf/gAAAAAAB/wAAAAAAAH8AAAAAAAAPAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/wAAAAAAAf/wAAAAAAH//gAAAAAD///gAAAAAf///AAAAAB///+AAAAgP///8AAAHg////wAAAfn////gAAD/t////AAAP/j///8AAA//D///4AAH//D///gAAf//H//+AAB///H//4AAH//+P//gAAP//+P/+AAA///8f/4AAD///8f/gAAP///8f+AAAf///8/wAAB////w/AAAD////A4AAAH///4BgAAAP///gAAAAAf//8AAAAAA///AAAAAAA//wAAAAAAA/+AAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfgAAAAAAAD+AAAAAAAAP4AAAAAAAB/gAAAAAAAP+AAAAAAAA/5//////4D/v//////gP+//////+A/7//////4D/v//////gP+//////+A/7//////4D/v//////gP+//////+Af7//////4A/v//////gA+//////+AA7///hAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8AAAD/4AAfwAAAf/gAD/AAAH/+AA/8AAA//4AH/wAAP//gA//AAD//+AH/8AA///4Af/wAP///gD//AD///+AP/8Af///4A//wH////gD//B////+AP/8f//7/4A//3///P/gD/////w/+AP////8D/4A/////AP/gD////4A/+AP///+AD/4Af///gAH/gB///4AAf/AD///AAB/8AH//wAAH/wAP/8AAAf/AAf/gAAB/4AA/4AAAAAAAAfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//gAAAf/wD/+AAAB//AP/4AAAH/8A//gAAAf/wD/+AAAB//AP/4AAAH/8A//gAAAf/wB/+AAAAAAAAAB/4A//8A////////wH////////Af///////8A////////wD///+////AP///7///8A////P///wB///8f//+AH///h///4AP//+D///AAf//wH//4AA//+AP//AAB//wAf/4AAD/+AAf/AAAD/gAAfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf+AAAAAAAH//AAAAAAA//+AAAAAAP//8AAAAAB///4AAAAAP///wAAAAA////gAAAAH////AAAAA////8AAAAD////4AAAAf////j//gB////+//+AP///////4A////////gD///////+Af///////4B////////gH///////+Af///////gB//////AAAH8AAAHAAAAAAA//wAAAAAAD//4AAAAAAP//gAAAAAA//+AAAAAAD//4AAAAAAP//gAAAAAA//+AAAAAAD//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH////AB/AAf///+AP/+B////4A//4H////AD//gf///8AP/+B////4A//4H////gD//gf/////+AAAAAAAP///wP//gA////A//+AD///8D//4AP///wP//gAf//+A//+AB///4D//4AD///gAB/gAH//8AAAAAAP//gAAAAAAf/8AAAAAAA//gAAAAAAA/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfwAAAAAAAP/8AAAAAAB//8AAAAAAf//8AAAAAD///4AAAAAf///wAAAAD////wAAAAf////AAAAD////+AAAAP////8AAAB/////wAAAP/////gAAA/////+AAAH/////8AAAf/////wAAB//////gAAP/////+AAA//////4AAD//////gAAP/////+AAA//////4AAD//////gAAP//////AAA//////8AAAAf////wAAAAAAP//gAAAAB///+AAAAAH///4AAAAAf///gAAAAB///+AAAAAH///wAAAAAf///AAAAAA///8AAAAAD///gAAAAAH//+AAAAAAP//wAAAAAAf/+AAAAAAA//wAAAAAAB/+AAAAAAAB/gAAAAAAAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/wAAAAAH///AAAAAAf//8AAAAAB///wAAAAAH///AAAAAAf//8AAAAAB///wAAAAAH///AAAAAAf//8AAAAAA//AAAAAAAAAAAAAAAAwAAP//////A////////8D////////wP////////A////////8D////////wP////////A////////8D////////wP////////A////////8D////////wP////////A////0cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/AAAD/gAH//AAA//gA//+AAP//AH//8AB//+A///4AP//8H///wA///4f///AH///j///+Af///P///4D///9////wP////////A////////8D////////wP///3///+AAAAAAAAAAB/wAAAAAAAP///x4AAAA////P///4D///8////gH///z///+Af///H///4B///8f///gD///g///8AH//8D///wAf//wH//+AA//+AP//wAA//gA//+AAA/4AA//gAAAEAAB/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP4AAAAAAAH/8AAAAAAB//8AAAAAAP//4AAAAAB///wAAAAAP///gAAAAB////AAAAAP///8AAAAA////4AAAAH////gAAAAf////AAAAD////8AAAAP////wAAAA/////AAAAD////8AAAAH////wAAAAAAAAAAAAAD///+AAAAAP///////AA///////8AD///////wAP///////AA///////8AB///////wAH//////+AAf//////4AA///////gAD//////8AAH//////wAAf/////+AAA//////4AAB//////AAAH/////4AAAP/////AAAAf////4AAAA////+AAAAB////wAAAAB///8AAAAAB///AAAAAAB//wAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+AB8AAAAAH8AP4AAAAA/4B/wAAAAH/gO/AAAAAf+A/8AAAAB/4D/wAAAAH/AP/AAAAAP4AfwAAAAAfAA+AAAAAAQAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="), 46, atob("FionHyIiJiIyJScyFA=="), 58+(scale<<8)+(1<<16));
  return this;
};


Graphics.prototype.setFontDate = function(scale) {
  // Actual height 28 (27 - 0)
  this.setFontCustom(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///wf///B///8H///wf//+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAfwAAB+AAAAAAAAfwAAB/AAAH8AAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAADg8AAfH+AB//4A///gD//+AP//AA/w/gBPf+AB//4A///wB//8AH//AAfw8AAPDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAD4AAAfwAAD/h4B/+HwH/4/Af//+AP5/4A/n/gB8f8ADg/gAAD8AAADgAAAAAAAAAAAAAAAAAAAAAAAAB8AAAP4CAB/gcAH+D4Af4/wB/n+AH9/wAHv+AAB/wAAf8AAD/gAA/54AH/PwAf5/gB+H+ADw/4AEB/gAAH8AAAPgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAP4AB9/wAP//gB///AP//8A///4D///gH//+Af3/wAfP/AAAf8AAB/gAAP/AAB/8AAP/wAAfOAAAQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+AAAP4AAA/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYBgAH///g////n////f///9/////8AB/fgAH8AAAPAAAAAAAAAAAAAAAAAAAAAAD9/AAf38AB/f///9////z///+H///wP//8AAAAAAAAAAAAAAAAAAAAAAAAFAAAA+AAAH8AAAfwAAB/AAAD8AAAEAAAAAAAAAAAAAAAAAAAAAAAAfAAAB8AAAHwAAAfAAA//wAD//AAP/8AA//wAD//AAAfAAAB8AAAHwAAAfAAAAAAAAAAAAAAAAAAAAAAABkAAAPwAAA/AAAB4AAACAAAAAAAAAAAAAAAAAAAAAD4AAAPgAAA+AAAD4AAAPgAAA+AAAD4AAAPgAAA+AAAD4AAAPgAAA+AAAAAAAAAAAAAAAAAAAAAAACAAAAeAAAD4AAAPgAAA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAPAAAD+AAA/4AAP/wAD//AB//wAf/8AH//AB//wAf/8AA//AAD/wAAH8AAAeAAAAgAAAAAAAAAAAAAAAAAAAAAAAA8AAAP8AAD/4AEP/wAd//gD9//AP9/8A/9/wD/7/AP/78Af/7wA//CAB/8AAD/AAADwAAAAAAAAAAAAAAAAAAAABwAAAPAAAB8AAAH3//+ff//59///n3//+Pf//4d///gAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAD8B4AfwfgH/B+A/8P4P/w/j//D+//8P//vw//4/D/+B8H/gHwf8AfAfAA8AAAAAAAAAAAAAAfgAPx/AB/H8AH8fwAPwH/f/H///8f///x/+//H/7/8P/H/gf8P8A/APgAAAAAAAAAAAAAAAAAAAAAAAAD8AAA/8AAH/4AA//gAD//AAf/9/h///+H///4f///h//8AAD/gAAP+AAA/4AAD/gAAAAAAAAAAAAAAAAAAAAAAAAf/4PB//g/n/+D+f/4P5/gf/n/B/+f8H/5/wP/AAAf4AAA/AAAAAAAAAAAAAAAAAAAAAAAAAA8AAAP8AAD/8AAf/4AD//wAP//gB//+AH//8A///wD///AP//8A///wAAP/AAD/+AAH/4AAf/AAB/8AAD/gAAH+AAAPgAAAAAAAAAAAAAAAAAAAAeAAD/4AAP/gAA/+AAB/4AAAAAM+f///5////n///+f///5////n///+f5AAAAAAAAAAAAAAAAAAAAAAAAAAAAA+AP4H+B/w/8P/n/4////n///+f///4AAAAH/9/+P///4/+f/j/5/+H/D/wH4H+AAAHgAAAAAAAAAAAAAAAAAAAA/AAAP/AAB/+AAP/4AA//wAH//AAf/8AB//wAH///wf///B///8H///wP//+A///4B///gD//8AP//gAP/4AAf+AAAPAAAAAAAAAAAAAAAAAAAAAAGAwAA8HgAH4+AAfD4AA4HAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAB4+AAPn4AA+PgABwcAAAAAAAAAAAAAAAAAAAAABgAAAOAAAB8AAAf4AAD/wAAf/AAD/+AAfz8AA8HwADgfgAEA+AAABgAAAAAAAAAAAAAAAAAAAAHj4AAfPgAB8+AAHz4AAfPgAB8+AAHz4AAfPgAB8+AAHz4AAfPgAB8+AAHj4AAAAAAAAAAAAAAAAAAAAAAAAAAAYAAQDwADgfgAfD8AB/fgAD/8AAH/wAAP+AAAfwAAA+AAABwAAAAAAAAAAAAAAAAAAAAAAAAAD8AAAf8AAD/wAAf/gAB/+AAH/4AgA//3B///cH//9wf//3A//8YD/+AAH/4AAP+AAAPgAAAAAAAAAAAAAAAAAD8AAA/8AAH/4AA//wAH8fgAfu+AAf98AOf7wA///ADn/8AO//wA///AD//YAP/8AA/gMAB//wAD//AAH/4AAP/AAAPwAAAAAAAAAAAAAAAAAAAAP///h///+P///5////n///+f//AB+D8AH///+f///4////h///+B///4AAAAAAAAAAAAAAAAAAAAAAAf///j////P///8////z////P///8////z///AP///+f///5////D/5/8H/H/gPwH8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/gAA//gAH//AA//+AH//8A///4D///gf///B///8H///wf///B/gH8H+Afwf4B/BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//8A////D///8P///w////B///8H///gP//+A///wB//+AD//wAD/8AAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////n///+f///5////n///+f///5////n/fP+f9+/5/37/n/AP+AAAAAAAAAAAAAAAAAAAAAAAAAAAAf///5////n///+f///5////n///+f///5/z8AH/PwAf8AAAAAAAAAAAAAAAAAAAAAAA/gAAP/wAD//wAf//gD///Af//+B///4P///w////H///8f///x////H///8f4H/x/gf/D+B/8AAHAAAAcAAABwAAAHAAAAAAAAAAAAAAAAAAAAAAABgH///gf//+B///4H///gf//+B///4AB+AAf/9+B///4H///gf//+B///4H///gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8P///w////D///8P///w////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHgAAAfAAAB+AAAH4AAAfgAAB+f///5////n///+f///x///8AAAAAAAAAAAAAAAAAAAAAAAAAAANH///8f///x////H///8f///x////H//+AAH/8AA//4AH//wA///gD//+Af//8B///wH///Af//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAX5////n///+f///5////v///+////5//7/gAAP+AAA/4AAD/gAAAAAAAAAAAAAAAAAAAAAAAAAAvh///+P///5////n///+f///5/wAAD+AAAP8AAAfwAAD/AAAP4AAB////n///+f///5////j///+H///4AAAAAAAAAAAAAAAAAAAAAAAH///gf//+B///4H///gf//+B///4B//4AB//4B///4H///gf//+B///4H///gf//+B///4AAAAAAAAAAAAAAAD/AAA//gAH//AA//+AH//8Af//wD///gf//+B///8H///wf///B/z/8H//wAf///B///8H///wf///A///8D///gH//8AP//wAf/+AA//gAA/4AAAAAAAAAAAAAAAAAA/x////H///8f///x////H///8f///x//gAH/+AAf/4AA//gAB/8AAD/gAAH8AAAAAAAAAAAAAAAAAAAAAAAcAAAP8AAD/8AA//8AH//4Af//wD///AP//+B///4H///wf///B///8H//+Af///B///8H///wf///A///8D///gH//+Af//4A///gB//+AB//4AB/PgAAAYAAAAAAAAAAAAAAAAAAAP///5////n///+f///5////n///+P///4////D///+P///4////h/9/+D/gAAD4AAAAAAAAAAAAAAAAAAAAAAAAAADwAAA/wAAH/gAA//AfH/8D8f/4f5////n+P/+f4P/5/g//j8D/8DgH/wAAP8AAAHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwAAAfAAAB8//8H///wf///B///8H///wf//AB8AAAHwAAAeAAAAAAAAAAAAAAAAAAAAAAAAAAB///8H///8f///5////n///+AAAH5////n///+f///x////H///wf/gAAAAAAAAAAAAAAAAQAAAD8AAAP/AAA//wAH//8Af//+B////gf//+AP//4AP//gP//+P///5////n///gP//gA//AAD/gAAPgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///+D///8P///4////j///+PAAfwAAB/AAAH4AAAfw////j//++P//74///vj///8AAB7AAAAAAAAAAAAAAAAAAAAAAAAAAABgeAA+B/AP8P/n/w////j///+H///gH//4D///8P///4////h/4/8H8AfwPAAOAgAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAHwAAAfgAAB/AAAH8H/wf///B///8H///wf///B///8H/8cAfwAAB+AAAHwAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAABwAAAHAAD8cAD/xwD//HH//+f///5////n///+P//w4f/wDh/gAOHgAA4AAADgAAAOAAAAAAAAAAAAAA///+////////////////////////+AAA/wAAD/gAAP+AAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAA/AAAD/AAAf/AAB//gAD//gAD//gAD//gAD//gAD//gAD//AAD/4AAB/AAAB8AAABgAAAAAAAAAAAAAAAAAAOAAAe4AAB7gAAHuAAAe////7////v///+////7////v///YwAAAAAAAA="), 32, atob("HA4NFhEaFwoNDQsRCRALFBMPEBESEBgSExgKCRARERIXEhQVExEPGBMOERYRFhQaExwUExARFRYTFhMPFA4="), 28+(scale<<8)+(1<<16));
  return this;
}


// timeout used to update every minute
var drawTimeout;

// schedule a draw for the next minute
function queueDraw() {
  if (drawTimeout) clearTimeout(drawTimeout);
  drawTimeout = setTimeout(function() {
    drawTimeout = undefined;
    draw();
  }, 60000 - (Date.now() % 60000));
}


function drawBorderString(str, x, y, bw, fc){
  g.setColor("#000");
  for(var i=-bw; i<bw+1; i++){
    g.drawString(str, x, y+i);
    g.drawString(str, x+i, y);
  }

  g.setColor(fc);
  g.drawString(str,x+1,y);
}


function draw() {
  for (let wd of WIDGETS) {wd.draw=()=>{};wd.area="";}
  var x = g.getWidth()/2;
  var y = g.getHeight()/2-20;

  g.reset().clearRect(0,24,g.getWidth(),g.getHeight());
  g.drawImage(getImg(),0,0);

  var date = new Date();
  var timeStr = locale.time(date,1);
  g.setFontAlign(0,0);
  g.setFontTime();
  drawBorderString(timeStr, x, y, 5, "#fff");

  y += 50;
  x = x - g.stringWidth(timeStr) / 2 + 5;
  g.setFontDate();
  g.setFontAlign(-1,0);
  var dateStr = locale.dow(date, true).toUpperCase() + date.getDate();
  var fc = Bangle.isLocked() ? "#0ff" :"#fff";
  fc = E.getBattery() < 50 ? "#f00" : fc;
  drawBorderString(dateStr, x, y, 3, fc);

  // queue draw in one minute
  queueDraw();
}

Bangle.loadWidgets();

// Clear the screen once, at startup
g.setTheme({bg:"#fff",fg:"#fff",dark:false}).clear();
// draw immediately at first, queue update
draw();
// Stop updates when LCD is off, restart when on
Bangle.on('lcdPower',on=>{
  if (on) {
    draw(); // draw immediately, queue redraw
  } else { // stop draw timer
    if (drawTimeout) clearTimeout(drawTimeout);
    drawTimeout = undefined;
  }
});


Bangle.on('lock', function(isLocked) {
  print("LOCK");
  if (drawTimeout) clearTimeout(drawTimeout);
  drawTimeout = undefined;
  draw();
});


// Show launcher when middle button pressed
Bangle.setUI("clock");
