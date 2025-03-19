// svelte-render-server.js
import { render } from "svelte/server";

// SvelteTestComp.svelte
import * as $2 from "svelte/internal/server";

// Child.svelte
import * as $ from "svelte/internal/server";
var $$css = {
  hash: "svelte-t13rfg",
  code: ".svelte-t13rfg {border:2px solid blue;padding:1em;}"
};
function Child($$payload, $$props) {
  $$payload.css.add($$css);
  let hello = $$props["hello"];
  $$payload.out += `<p class="svelte-t13rfg">Child.svelte hello: ${$.escape(hello)}</p>`;
  $.bind_props($$props, { hello });
}

// SvelteTestComp.svelte
var $$css2 = {
  hash: "svelte-1d6hxxn",
  code: ".svelte-1d6hxxn {border:2px solid red;padding:1em;}"
};
function SvelteTestComp($$payload) {
  $$payload.css.add($$css2);
  let hello = "hello";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<p class="svelte-1d6hxxn">SvelteTestComp.svelte</p> `;
    Child($$payload2, {
      get hello() {
        return hello;
      },
      set hello($$value) {
        hello = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!---->`;
  }
  ;
  do {
    $$settled = true;
    $$inner_payload = $2.copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  $2.assign_payload($$payload, $$inner_payload);
}

// svelte-render-server.js
var { head, body } = render(SvelteTestComp, { props: {} });
console.log("body", body);
console.log("head", head);
