"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[23356],{85930:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>l,data:()=>s});var i=t(6254);const a={},l=(0,t(39583).A)(a,[["render",function(e,o){const t=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[o[8]||(o[8]=(0,i.Lk)("h1",{id:"moes-zts-eur-c",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#moes-zts-eur-c"},[(0,i.Lk)("span",null,"Moes ZTS-EUR-C")])],-1)),(0,i.Lk)("table",null,[o[6]||(o[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[o[2]||(o[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"ZTS-EUR-C")],-1)),(0,i.Lk)("tr",null,[o[1]||(o[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(t,{to:"/supported-devices/#v=Moes"},{default:(0,i.k6)((()=>o[0]||(o[0]=[(0,i.eW)("Moes")]))),_:1})])]),o[3]||(o[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Zigbee + RF curtain switch")],-1)),o[4]||(o[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"cover (state, position), backlight, calibration, motor_reversal, linkquality")],-1)),o[5]||(o[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZTS-EUR-C.png",alt:"Moes ZTS-EUR-C"})])],-1))])]),o[9]||(o[9]=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="calibration" tabindex="-1"><a class="header-anchor" href="#calibration"><span>Calibration</span></a></h3><p>Calibration procedure:</p><ol><li>Turn calibration on</li><li>Move cover completely up (open)</li><li>Press stop</li><li>Close cover</li><li>Press stop when closed</li><li>Turn calibration off</li></ol><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',5)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>o[7]||(o[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),o[10]||(o[10]=(0,i.Fv)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="backlight-enum" tabindex="-1"><a class="header-anchor" href="#backlight-enum"><span>Backlight (enum)</span></a></h3><p>Value can be found in the published state on the <code>backlight</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;backlight&quot;: NEW_VALUE}</code>. The possible values are: <code>OFF</code>, <code>ON</code>.</p><h3 id="calibration-enum" tabindex="-1"><a class="header-anchor" href="#calibration-enum"><span>Calibration (enum)</span></a></h3><p>Value can be found in the published state on the <code>calibration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration&quot;: NEW_VALUE}</code>. The possible values are: <code>OFF</code>, <code>ON</code>.</p><h3 id="motor-reversal-enum" tabindex="-1"><a class="header-anchor" href="#motor-reversal-enum"><span>Motor reversal (enum)</span></a></h3><p>Value can be found in the published state on the <code>motor_reversal</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_reversal&quot;: NEW_VALUE}</code>. The possible values are: <code>OFF</code>, <code>ON</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12))])}]]),s=JSON.parse('{"path":"/devices/ZTS-EUR-C.html","title":"Moes ZTS-EUR-C control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Moes ZTS-EUR-C control via MQTT","description":"Integrate your Moes ZTS-EUR-C via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-06-01T15:08:55.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Calibration","slug":"calibration","link":"#calibration","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Backlight (enum)","slug":"backlight-enum","link":"#backlight-enum","children":[]},{"level":3,"title":"Calibration (enum)","slug":"calibration-enum","link":"#calibration-enum","children":[]},{"level":3,"title":"Motor reversal (enum)","slug":"motor-reversal-enum","link":"#motor-reversal-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1733051890000},"filePathRelative":"devices/ZTS-EUR-C.md"}')}}]);