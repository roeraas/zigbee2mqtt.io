"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[47977],{98243:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>d,data:()=>a});var i=o(6254);const l={},d=(0,o(39583).A)(l,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[8]||(t[8]=(0,i.Lk)("h1",{id:"custom-devices-diy-ptvo-switch",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#custom-devices-diy-ptvo-switch"},[(0,i.Lk)("span",null,"Custom devices (DiY) ptvo.switch")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"ptvo.switch")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Custom%20devices%20(DiY)"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Custom devices (DiY)")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Multi-functional device")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"l1, switch (state), l2, l3, l4, l5, l6, l7, l8, linkquality")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ptvo.switch.png",alt:"Custom devices (DiY) ptvo.switch"})])],-1))])]),t[9]||(t[9]=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><p><a href="https://ptvo.info/zigbee-configurable-firmware-features/" target="_blank" rel="noopener noreferrer">Multi-functional device</a></p><h3 id="deprecated-click-event" tabindex="-1"><a class="header-anchor" href="#deprecated-click-event"><span>Deprecated click event</span></a></h3><p>By default this device exposes a deprecated <code>click</code> event. It&#39;s recommended to use the <code>action</code> event instead.</p><p>To disable the <code>click</code> event, set <code>legacy: false</code> for this device in <code>configuration.yaml</code>. Example:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">devices</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">&#39;0x12345678&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_device</span>\n<span class="line">    <span class="token key atrule">legacy</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',7)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,i.Fv)('<ul><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="l1-text-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#l1-text-l1-endpoint"><span>L1 (text, l1 endpoint)</span></a></h3><p>State or sensor value. Value can be found in the published state on the <code>l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;l1&quot;: NEW_VALUE}</code>.</p><h3 id="switch-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l1-endpoint"><span>Switch (l1 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l1</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l1&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l1&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l1&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l1&quot;: &quot;&quot;}</code>.</p><h3 id="l2-text-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#l2-text-l2-endpoint"><span>L2 (text, l2 endpoint)</span></a></h3><p>State or sensor value. Value can be found in the published state on the <code>l2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;l2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;l2&quot;: NEW_VALUE}</code>.</p><h3 id="switch-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l2-endpoint"><span>Switch (l2 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l2</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l2&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l2&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l2&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l2&quot;: &quot;&quot;}</code>.</p><h3 id="l3-text-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#l3-text-l3-endpoint"><span>L3 (text, l3 endpoint)</span></a></h3><p>State or sensor value. Value can be found in the published state on the <code>l3</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;l3&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;l3&quot;: NEW_VALUE}</code>.</p><h3 id="switch-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l3-endpoint"><span>Switch (l3 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l3</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l3&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l3&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l3&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l3&quot;: &quot;&quot;}</code>.</p><h3 id="l4-text-l4-endpoint" tabindex="-1"><a class="header-anchor" href="#l4-text-l4-endpoint"><span>L4 (text, l4 endpoint)</span></a></h3><p>State or sensor value. Value can be found in the published state on the <code>l4</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;l4&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;l4&quot;: NEW_VALUE}</code>.</p><h3 id="switch-l4-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l4-endpoint"><span>Switch (l4 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l4</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l4&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l4&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l4&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l4&quot;: &quot;&quot;}</code>.</p><h3 id="l5-text-l5-endpoint" tabindex="-1"><a class="header-anchor" href="#l5-text-l5-endpoint"><span>L5 (text, l5 endpoint)</span></a></h3><p>State or sensor value. Value can be found in the published state on the <code>l5</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;l5&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;l5&quot;: NEW_VALUE}</code>.</p><h3 id="switch-l5-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l5-endpoint"><span>Switch (l5 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l5</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l5&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l5&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l5&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l5&quot;: &quot;&quot;}</code>.</p><h3 id="l6-text-l6-endpoint" tabindex="-1"><a class="header-anchor" href="#l6-text-l6-endpoint"><span>L6 (text, l6 endpoint)</span></a></h3><p>State or sensor value. Value can be found in the published state on the <code>l6</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;l6&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;l6&quot;: NEW_VALUE}</code>.</p><h3 id="switch-l6-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l6-endpoint"><span>Switch (l6 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l6</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l6&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l6&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l6&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l6&quot;: &quot;&quot;}</code>.</p><h3 id="l7-text-l7-endpoint" tabindex="-1"><a class="header-anchor" href="#l7-text-l7-endpoint"><span>L7 (text, l7 endpoint)</span></a></h3><p>State or sensor value. Value can be found in the published state on the <code>l7</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;l7&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;l7&quot;: NEW_VALUE}</code>.</p><h3 id="switch-l7-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l7-endpoint"><span>Switch (l7 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l7</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l7&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l7&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l7&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l7&quot;: &quot;&quot;}</code>.</p><h3 id="l8-text-l8-endpoint" tabindex="-1"><a class="header-anchor" href="#l8-text-l8-endpoint"><span>L8 (text, l8 endpoint)</span></a></h3><p>State or sensor value. Value can be found in the published state on the <code>l8</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;l8&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;l8&quot;: NEW_VALUE}</code>.</p><h3 id="switch-l8-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l8-endpoint"><span>Switch (l8 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l8</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l8&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l8&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l8&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l8&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',36))])}]]),a=JSON.parse('{"path":"/devices/ptvo.switch.html","title":"Custom devices (DiY) ptvo.switch control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Custom devices (DiY) ptvo.switch control via MQTT","description":"Integrate your Custom devices (DiY) ptvo.switch via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-09-08T21:16:00.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Deprecated click event","slug":"deprecated-click-event","link":"#deprecated-click-event","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"L1 (text, l1 endpoint)","slug":"l1-text-l1-endpoint","link":"#l1-text-l1-endpoint","children":[]},{"level":3,"title":"Switch (l1 endpoint)","slug":"switch-l1-endpoint","link":"#switch-l1-endpoint","children":[]},{"level":3,"title":"L2 (text, l2 endpoint)","slug":"l2-text-l2-endpoint","link":"#l2-text-l2-endpoint","children":[]},{"level":3,"title":"Switch (l2 endpoint)","slug":"switch-l2-endpoint","link":"#switch-l2-endpoint","children":[]},{"level":3,"title":"L3 (text, l3 endpoint)","slug":"l3-text-l3-endpoint","link":"#l3-text-l3-endpoint","children":[]},{"level":3,"title":"Switch (l3 endpoint)","slug":"switch-l3-endpoint","link":"#switch-l3-endpoint","children":[]},{"level":3,"title":"L4 (text, l4 endpoint)","slug":"l4-text-l4-endpoint","link":"#l4-text-l4-endpoint","children":[]},{"level":3,"title":"Switch (l4 endpoint)","slug":"switch-l4-endpoint","link":"#switch-l4-endpoint","children":[]},{"level":3,"title":"L5 (text, l5 endpoint)","slug":"l5-text-l5-endpoint","link":"#l5-text-l5-endpoint","children":[]},{"level":3,"title":"Switch (l5 endpoint)","slug":"switch-l5-endpoint","link":"#switch-l5-endpoint","children":[]},{"level":3,"title":"L6 (text, l6 endpoint)","slug":"l6-text-l6-endpoint","link":"#l6-text-l6-endpoint","children":[]},{"level":3,"title":"Switch (l6 endpoint)","slug":"switch-l6-endpoint","link":"#switch-l6-endpoint","children":[]},{"level":3,"title":"L7 (text, l7 endpoint)","slug":"l7-text-l7-endpoint","link":"#l7-text-l7-endpoint","children":[]},{"level":3,"title":"Switch (l7 endpoint)","slug":"switch-l7-endpoint","link":"#switch-l7-endpoint","children":[]},{"level":3,"title":"L8 (text, l8 endpoint)","slug":"l8-text-l8-endpoint","link":"#l8-text-l8-endpoint","children":[]},{"level":3,"title":"Switch (l8 endpoint)","slug":"switch-l8-endpoint","link":"#switch-l8-endpoint","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1733051890000},"filePathRelative":"devices/ptvo.switch.md"}')}}]);