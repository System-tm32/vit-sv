<script lang="ts">
  import { useMachine } from '@xstate/svelte';
  import { fade } from 'svelte/transition';
  import machine from './state/machine';
  import Button from './components/buttons/default.svelte';

  const { state, send } = useMachine(machine);

  let time = null;
  let disabledButton = false;

  const clickButtonHandler = () => {
    send('toggle button state');
    time = new Date();
  };
</script>

<div class="bg">
  <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
      >
        <a href="/" class="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            >W-Slide</span
          >
        </a>
      </div>
    </nav>
  </header>
  <div class="relative isolate px-6 pt-14 lg:px-8">
    <div
      class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true"
    >
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      />
    </div>
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Welcome-Slider
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Welcome to Interactive Slide
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <Button on:clickButton={clickButtonHandler} disabled={disabledButton}>
            {$state.value === 'inactive'
              ? 'Click to activate'
              : 'Active! Click to deactivate'}
          </Button>
        </div>

        {#if $state.value !== 'inactive'}
          <div
            in:fade
            out:fade
            on:introstart={() => (disabledButton = true)}
            on:outrostart={() => (disabledButton = true)}
            on:introend={() => (disabledButton = false)}
            on:outroend={() => (disabledButton = false)}
          >
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Time</div>
                <p class="text-gray-700 text-base">
                  {time}
                </p>
              </div>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
</style>
