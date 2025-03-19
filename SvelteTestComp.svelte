<script>
  import Child from './Child.svelte';

  let hello = 'hello';
</script>

<p>SvelteTestComp.svelte</p>

<Child bind:hello />

<style>
  * {
    border: 2px solid red;
    padding: 1em;
  }
</style>
