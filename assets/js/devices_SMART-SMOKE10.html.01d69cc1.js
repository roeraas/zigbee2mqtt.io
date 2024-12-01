"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[36970],{34445:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>n,data:()=>s});var l=a(6254);const i={},n=(0,a(39583).A)(i,[["render",function(e,t){const a=(0,l.g2)("RouteLink");return(0,l.uX)(),(0,l.CE)("div",null,[t[7]||(t[7]=(0,l.Lk)("h1",{id:"alecto-smart-smoke10",tabindex:"-1"},[(0,l.Lk)("a",{class:"header-anchor",href:"#alecto-smart-smoke10"},[(0,l.Lk)("span",null,"Alecto SMART-SMOKE10")])],-1)),(0,l.Lk)("table",null,[t[6]||(t[6]=(0,l.Lk)("thead",null,[(0,l.Lk)("tr",null,[(0,l.Lk)("th"),(0,l.Lk)("th")])],-1)),(0,l.Lk)("tbody",null,[t[2]||(t[2]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",null,"Model"),(0,l.Lk)("td",null,"SMART-SMOKE10")],-1)),(0,l.Lk)("tr",null,[t[1]||(t[1]=(0,l.Lk)("td",null,"Vendor",-1)),(0,l.Lk)("td",null,[(0,l.bF)(a,{to:"/supported-devices/#v=Alecto"},{default:(0,l.k6)((()=>t[0]||(t[0]=[(0,l.eW)("Alecto")]))),_:1})])]),t[3]||(t[3]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",null,"Description"),(0,l.Lk)("td",null,"Smoke detector")],-1)),t[4]||(t[4]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",null,"Exposes"),(0,l.Lk)("td",null,"smoke_state, battery_state, checking_result, smoke_value, battery, lifecycle, self_checking, silence, linkquality")],-1)),t[5]||(t[5]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",null,"Picture"),(0,l.Lk)("td",null,[(0,l.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SMART-SMOKE10.png",alt:"Alecto SMART-SMOKE10"})])],-1))])]),t[8]||(t[8]=(0,l.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Press the test button 3 times (until the red LED stays on). After this the device will reset and try to join a network.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="smoke-state-enum" tabindex="-1"><a class="header-anchor" href="#smoke-state-enum"><span>Smoke state (enum)</span></a></h3><p>Value can be found in the published state on the <code>smoke_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>alarm</code>, <code>normal</code>.</p><h3 id="battery-state-enum" tabindex="-1"><a class="header-anchor" href="#battery-state-enum"><span>Battery state (enum)</span></a></h3><p>Value can be found in the published state on the <code>battery_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>low</code>, <code>middle</code>, <code>high</code>.</p><h3 id="checking-result-enum" tabindex="-1"><a class="header-anchor" href="#checking-result-enum"><span>Checking result (enum)</span></a></h3><p>Value can be found in the published state on the <code>checking_result</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>checking</code>, <code>check_success</code>, <code>check_failure</code>, <code>others</code>.</p><h3 id="smoke-value-numeric" tabindex="-1"><a class="header-anchor" href="#smoke-value-numeric"><span>Smoke value (numeric)</span></a></h3><p>Value can be found in the published state on the <code>smoke_value</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="lifecycle-binary" tabindex="-1"><a class="header-anchor" href="#lifecycle-binary"><span>Lifecycle (binary)</span></a></h3><p>Value can be found in the published state on the <code>lifecycle</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> lifecycle is ON, if <code>false</code> OFF.</p><h3 id="self-checking-binary" tabindex="-1"><a class="header-anchor" href="#self-checking-binary"><span>Self checking (binary)</span></a></h3><p>Value can be found in the published state on the <code>self_checking</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;self_checking&quot;: NEW_VALUE}</code>. If value equals <code>true</code> self checking is ON, if <code>false</code> OFF.</p><h3 id="silence-binary" tabindex="-1"><a class="header-anchor" href="#silence-binary"><span>Silence (binary)</span></a></h3><p>Value can be found in the published state on the <code>silence</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;silence&quot;: NEW_VALUE}</code>. If value equals <code>true</code> silence is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',22))])}]]),s=JSON.parse('{"path":"/devices/SMART-SMOKE10.html","title":"Alecto SMART-SMOKE10 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Alecto SMART-SMOKE10 control via MQTT","description":"Integrate your Alecto SMART-SMOKE10 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-06-14T22:06:16.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Smoke state (enum)","slug":"smoke-state-enum","link":"#smoke-state-enum","children":[]},{"level":3,"title":"Battery state (enum)","slug":"battery-state-enum","link":"#battery-state-enum","children":[]},{"level":3,"title":"Checking result (enum)","slug":"checking-result-enum","link":"#checking-result-enum","children":[]},{"level":3,"title":"Smoke value (numeric)","slug":"smoke-value-numeric","link":"#smoke-value-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Lifecycle (binary)","slug":"lifecycle-binary","link":"#lifecycle-binary","children":[]},{"level":3,"title":"Self checking (binary)","slug":"self-checking-binary","link":"#self-checking-binary","children":[]},{"level":3,"title":"Silence (binary)","slug":"silence-binary","link":"#silence-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1733051890000},"filePathRelative":"devices/SMART-SMOKE10.md"}')}}]);