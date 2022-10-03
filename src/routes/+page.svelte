<script>
	import { parseFormData } from './helpers';
	import { enhance } from '$app/forms';
	import Checkbox from '$lib/components/Checkbox.svelte';
	import Input from '$lib/components/Input.svelte';

	export let form;
	$: form_step = form?.step || 1;
	$: form_so_far = form?.data || {
		name: '',
		items: {
			test: '456'
		},
		accept: true
	};

	function handleEnhance({ data, action, cancel }) {
		const { search } = action;

		// We block all calls to the backend until the final step
		if (search != '?/final') {
			cancel();
			form_so_far = parseFormData(data);
			if (search == '?/add_item') {
				const id = crypto.randomUUID();
				form_so_far.items[id] = '';
			} else if (search.includes('back')) {
				form_step--;
			} else {
				form_step++;
			}
		}
	}
</script>

<form method="POST" use:enhance={handleEnhance}>
	<Input hidden={form_step != 1} label="Name" name="name" value={form_so_far.name} />
	{#each Object.entries(form_so_far.items) as [key, value], i}
		<Input hidden={form_step != 2} label="Comment {i}" name="items+{key}" {value} />
	{/each}
	{#if form_step == 3}
		<p>Do you accept the terms and conditions not outlined anywhere ?</p>
	{/if}
	<Checkbox hidden={form_step != 3} label="Accept" name="accept" checked={form_so_far.accept} />
	{#if form?.error}
		<p>You kind of have to accept</p>
	{/if}

	<div>
		{#if form_step == 1}
			<button type="submit" formaction="?/step_1">Next</button>
		{/if}
		{#if form_step == 2}
			<button type="submit" formaction="?/add_item">Add</button>
			<button type="submit" formaction="?/step_2_back">Previous</button>
			<button type="submit" formaction="?/step_2">Next</button>
		{/if}
		{#if form_step == 3}
			<button type="submit" formaction="?/step_3_back">Previous</button>
			<button type="submit" formaction="?/final">Finish</button>
		{/if}
	</div>
</form>

<style>
	form {
		background-color: #eee;
		border-inline-start: 4px solid var(--primary);
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
	}
</style>
