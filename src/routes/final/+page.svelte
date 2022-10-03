<script>
	import { confetti } from '@neoconfetti/svelte';
</script>

<p use:confetti />
<div>Great Job</div>

<style>
	div {
		background-color: #eee;
		border: 4px solid var(--primary);
		display: grid;
		font-size: 4rem;
		height: 20rem;
		place-items: center;
	}
</style>
