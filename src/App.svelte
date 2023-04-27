<script lang="ts">
  import { useMachine } from '@xstate/svelte';
  import machine from './state/machine';
  import Header from './components/header/index.svelte';
  import MainContainer from './components/core/mainContainer.svelte';
  import LogoSvg from './logoSvg.svelte';

  const { state, send } = useMachine(machine);
</script>

<MainContainer>
  <Header />
  <svelte:component this={LogoSvg} />
</MainContainer>

<style>
</style>
