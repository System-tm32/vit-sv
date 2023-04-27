<script lang="ts">
  import { useMachine } from '@xstate/svelte';
  import machine from './state/machine';
  import Header from './components/header/index.svelte';
  import MainContainer from './components/core/mainContainer.svelte';

  const { state, send } = useMachine(machine);
</script>

<MainContainer>
  <Header />
</MainContainer>

<style>
</style>
