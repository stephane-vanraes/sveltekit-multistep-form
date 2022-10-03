<script>
	export let hidden;
	export let label;
	export let name;
	export let value;
</script>

{#if hidden}
	<input type="hidden" {name} {value} />
{:else}
	<label>
		<span>{label}</span>
		<input {name} {value} />
	</label>
{/if}

<style>
	span {
		display: block;
		font-weight: 600;
		margin-block-end: 0.25rem;
	}
	input {
		border: 0;
		padding: 0.25rem 0.5rem;
		width: 100%;
	}
</style>
