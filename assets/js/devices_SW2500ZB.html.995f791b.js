"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[3819],{78673:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>c,data:()=>n});var i=t(6254);const d={},c=(0,t(39583).A)(d,[["render",function(e,o){const t=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[o[8]||(o[8]=(0,i.Lk)("h1",{id:"sinope-sw2500zb",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#sinope-sw2500zb"},[(0,i.Lk)("span",null,"Sinopé SW2500ZB")])],-1)),(0,i.Lk)("table",null,[o[6]||(o[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[o[2]||(o[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"SW2500ZB")],-1)),(0,i.Lk)("tr",null,[o[1]||(o[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(t,{to:"/supported-devices/#v=Sinop%C3%A9"},{default:(0,i.k6)((()=>o[0]||(o[0]=[(0,i.eW)("Sinopé")]))),_:1})])]),o[3]||(o[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Zigbee smart light switch")],-1)),o[4]||(o[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"timer_seconds, led_intensity_on, led_intensity_off, led_color_on, led_color_off, keypad_lockout, connected_load, switch (state), power_on_behavior, power, energy, action, linkquality")],-1)),o[5]||(o[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SW2500ZB.png",alt:"Sinopé SW2500ZB"})])],-1))])]),o[9]||(o[9]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>o[7]||(o[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),o[10]||(o[10]=(0,i.Fv)('<ul><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="timer-seconds-numeric" tabindex="-1"><a class="header-anchor" href="#timer-seconds-numeric"><span>Timer seconds (numeric)</span></a></h3><p>Automatically turn off load after x seconds. Value can be found in the published state on the <code>timer_seconds</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;timer_seconds&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;timer_seconds&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>. The unit of this value is <code>s</code>. Besides the numeric values the following values are accepted: <code>Disabled</code>.</p><h3 id="led-intensity-on-numeric" tabindex="-1"><a class="header-anchor" href="#led-intensity-on-numeric"><span>Led intensity on (numeric)</span></a></h3><p>Control status LED intensity when load ON. Value can be found in the published state on the <code>led_intensity_on</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_intensity_on&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_intensity_on&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="led-intensity-off-numeric" tabindex="-1"><a class="header-anchor" href="#led-intensity-off-numeric"><span>Led intensity off (numeric)</span></a></h3><p>Control status LED intensity when load OFF. Value can be found in the published state on the <code>led_intensity_off</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_intensity_off&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_intensity_off&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="led-color-on-composite" tabindex="-1"><a class="header-anchor" href="#led-color-on-composite"><span>Led color on (composite)</span></a></h3><p>Control status LED color when load ON. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_color_on&quot;: {&quot;r&quot;: VALUE, &quot;g&quot;: VALUE, &quot;b&quot;: VALUE}}</code></p><ul><li><code>r</code> (numeric)</li><li><code>g</code> (numeric)</li><li><code>b</code> (numeric)</li></ul><h3 id="led-color-off-composite" tabindex="-1"><a class="header-anchor" href="#led-color-off-composite"><span>Led color off (composite)</span></a></h3><p>Control status LED color when load OFF. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_color_off&quot;: {&quot;r&quot;: VALUE, &quot;g&quot;: VALUE, &quot;b&quot;: VALUE}}</code></p><ul><li><code>r</code> (numeric)</li><li><code>g</code> (numeric)</li><li><code>b</code> (numeric)</li></ul><h3 id="keypad-lockout-enum" tabindex="-1"><a class="header-anchor" href="#keypad-lockout-enum"><span>Keypad lockout (enum)</span></a></h3><p>Enables or disables the device’s buttons. Value can be found in the published state on the <code>keypad_lockout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;keypad_lockout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keypad_lockout&quot;: NEW_VALUE}</code>. The possible values are: <code>unlock</code>, <code>lock</code>.</p><h3 id="connected-load-numeric" tabindex="-1"><a class="header-anchor" href="#connected-load-numeric"><span>Connected load (numeric)</span></a></h3><p>Load connected in watt. Value can be found in the published state on the <code>connected_load</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;connected_load&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;connected_load&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>1800</code>. The unit of this value is <code>W</code>.</p><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum"><span>Power-on behavior (enum)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>toggle</code>, <code>previous</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric"><span>Power (numeric)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;energy&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>up_single</code>, <code>up_double</code>, <code>up_hold</code>, <code>down_single</code>, <code>down_double</code>, <code>down_hold</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',32))])}]]),n=JSON.parse('{"path":"/devices/SW2500ZB.html","title":"Sinopé SW2500ZB control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Sinopé SW2500ZB control via MQTT","description":"Integrate your Sinopé SW2500ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-03-16T20:41:09.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Timer seconds (numeric)","slug":"timer-seconds-numeric","link":"#timer-seconds-numeric","children":[]},{"level":3,"title":"Led intensity on (numeric)","slug":"led-intensity-on-numeric","link":"#led-intensity-on-numeric","children":[]},{"level":3,"title":"Led intensity off (numeric)","slug":"led-intensity-off-numeric","link":"#led-intensity-off-numeric","children":[]},{"level":3,"title":"Led color on (composite)","slug":"led-color-on-composite","link":"#led-color-on-composite","children":[]},{"level":3,"title":"Led color off (composite)","slug":"led-color-off-composite","link":"#led-color-off-composite","children":[]},{"level":3,"title":"Keypad lockout (enum)","slug":"keypad-lockout-enum","link":"#keypad-lockout-enum","children":[]},{"level":3,"title":"Connected load (numeric)","slug":"connected-load-numeric","link":"#connected-load-numeric","children":[]},{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Power-on behavior (enum)","slug":"power-on-behavior-enum","link":"#power-on-behavior-enum","children":[]},{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1733051890000},"filePathRelative":"devices/SW2500ZB.md"}')}}]);