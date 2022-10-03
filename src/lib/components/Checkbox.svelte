<script>
	export let checked;
	export let hidden;
	export let label;
	export let name;
</script>

{#if hidden}
	<input type="hidden" {name} value={checked} />
{:else}
	<label>
		<input type="checkbox" {name} {checked} />
		<span>{label}</span>
	</label>
{/if}

<style>
	label {
		align-items: center;
		display: flex;
		gap: 1ch;
	}
	span {
		font-weight: 600;
	}
	input {
		accent-color: var(--primary);
		height: 1.25em;
		width: 1.25em;
	}
</style>
