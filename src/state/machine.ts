import { createMachine } from 'xstate';

type Context = { state: 0 };

type Events = { type: 'toggle button state' } | { type: 'toggle main scene' };

type Actions = { type: 'increase count' };

type Guards = { type: 'is all' };

const machine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBcD2UoBswDoCWAdgIYDGyeAbmAMRobYAEARgK7JoEOzJHJgDaABgC6iUAAdUsPOVQExIAB6JBAGhABPFQF9t6ullylyVWukPM2HLjz5DRSEJOmz5j5QjWadekAew4EHiwREzYEGb0YJbscja8AiIKzjJ4cgoeXlqeuvrmASSoAE5FYGSRFgC2RIRcJGAEiQ4SUqnp7irq2YK6vgSoEHAK-mDJra4ZiAC0AEwAzAAsOIsAbHMArACMC3ObAJwLgnvrXdObK0tHABybMzMLAOwLe4Lre7l++biExpSjjikJh0EFNNlcVssFmstjt9odjqcQQ8ISswcd1k81g89jMHh8RjhflQxi40m5QB5QeDIdDtrsDkcTt4EJsHjh1o8HndXutBFdBJtNut8V9AsFQuESW1yUoztTVhs6XCjjNEfd1ssbtcVoJsa85isRVEcIUSmVkFKgRS5RCFTD6fCmdk5ticFcHoIVlc5jMjgaHldetogA */
  predictableActionArguments: true,
  tsTypes: {} as import('./machine.typegen').Typegen0,
  schema: {
    context: {} as Context,
    events: {} as Events,
    actions: {} as Actions,
    guards: {} as Guards
  },
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: { 'toggle button state': 'active' }
    },
    active: {
      on: { 'toggle button state': 'inactive' }
    },
    disabled: {
      on: { 'toggle button state': 'inactive' }
    },
    correct: {
      on: { 'toggle main scene': 'active' }
    }
  }
});

export default machine;
