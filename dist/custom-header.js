let e=document.querySelector("home-assistant");const t=e=(e=(e=(e=(e=(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root");function n(){const e=function(){let e=t.lovelace,n=t.shadowRoot;const o={},i=Array.from(n.querySelector("paper-tabs").querySelectorAll("paper-tab"));o.tabContainer=document.createElement("paper-tabs"),o.tabContainer.setAttribute("scrollable",""),o.tabContainer.setAttribute("dir","ltr"),o.tabContainer.style.width="100%",o.tabContainer.style.marginLeft="0",i.forEach(t=>{const r=i.indexOf(t),a=(t=t.cloneNode(!0)).querySelector("ha-icon");a&&a.setAttribute("icon",e.config.views[r].icon),t.addEventListener("click",()=>{n.querySelector("paper-tabs").querySelectorAll("paper-tab")[r].dispatchEvent(new MouseEvent("click",{bubbles:!1,cancelable:!0}))}),o.tabContainer.appendChild(t)}),o.tabs=o.tabContainer.querySelectorAll("paper-tab");const r=(e,t,i)=>{if("options"==e){o[e]=n.querySelector(i).cloneNode(!0),o[e].setAttribute("vertical-align","bottom"),o[e].removeAttribute("horizontal-offset"),o[e].querySelector("paper-icon-button").style.height="48px";const t=Array.from(o[e].querySelectorAll("paper-item"));t.forEach(e=>{const o=t.indexOf(e);e.addEventListener("click",()=>{n.querySelector(i).querySelectorAll("paper-item")[o].dispatchEvent(new MouseEvent("click",{bubbles:!1,cancelable:!0}))})})}else o[e]=document.createElement("paper-icon-button"),o[e].addEventListener("click",()=>{n.querySelector(i).shadowRoot.querySelector("paper-icon-button").dispatchEvent(new MouseEvent("click",{bubbles:!1,cancelable:!0}))});o[e].setAttribute("icon",t),o[e].style.flexShrink="0",o[e].style.height="48px"};return r("menu","mdi:menu","ha-menu-button"),r("voice","mdi:microphone","ha-start-voice-button"),r("options","mdi:dots-vertical","paper-menu-button"),o.container=document.createElement("cch-header"),o.menu&&o.container.appendChild(o.menu),o.tabContainer&&o.container.appendChild(o.tabContainer),o.voice&&o.container.appendChild(o.voice),o.options&&o.container.appendChild(o.options),n.querySelector("ha-app-layout").appendChild(o.container),o}(),n=t.shadowRoot;n.querySelector("app-header").style.visibility="hidden";const o=getComputedStyle(n.querySelector("app-header")).getPropertyValue("height");let i=document.createElement("style");i.setAttribute("id","cch_header_style"),i.innerHTML=`\n              cch-header {\n                width:100%;\n                display:flex;\n                justify-content: center;\n                position:sticky; bottom:0;\n              }\n              hui-view {\n                margin-top: -${o};\n                margin-bottom: -48px;\n                padding-top: 0;\n                padding-bottom: 48px;\n              }\n              hui-panel-view {\n                margin-top: -${o};\n                margin-bottom: -48px;\n                padding-top: 0;\n                padding-bottom: 48px;\n              }\n              #view {\n                min-height: calc(100vh - 160px) !important;\n              }\n            `,n.appendChild(i),(i=document.createElement("style")).setAttribute("id","cch_chevron"),i.innerHTML='\n              .not-visible[icon*="chevron"] {\n                display:none;\n              }\n            ',e.tabContainer.shadowRoot.appendChild(i);const r=n.querySelector("ha-menu-button"),a=()=>{r.style.display="none","hidden"==r.style.visibility?(e.menu.style.display="none",e.menu.style.visibility="hidden",e.menu.style.marginRight="33px"):(e.menu.style.visibility="initial",e.menu.style.display="initial",e.menu.style.marginRight="")};a(),new MutationObserver(()=>{a()}).observe(r,{attributes:!0,attributeFilter:["style"]})}n(),(()=>{const e=t.shadowRoot;new MutationObserver(t=>{t.forEach(({addedNodes:t,target:o})=>{"edit-mode"==o.className&&t.length?(e.querySelector("app-header").style.visibility="initial",e.querySelector("cch-header").remove(),e.querySelector("#cch_header_style").remove()):"APP-HEADER"==o.nodeName&&t.length&&n()})}).observe(e.querySelector("app-header"),{childList:!0})})();
