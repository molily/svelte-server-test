import { render } from 'svelte/server';
import SvelteTestComp from './SvelteTestComp.svelte';

const { head, body } = render(SvelteTestComp, { props: {} });

console.log('body', body);
console.log('head', head);
