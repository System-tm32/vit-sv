<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let disabled: boolean = false;

  const dispatch = createEventDispatcher();
  const click = () => dispatch('clickButton');
</script>

<button
  on:click={click}
  class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  class:disable={disabled}><slot><em>no content was provided</em></slot></button
>

<style>
  .disable {
    @apply bg-gray-500;
  }
</style>
