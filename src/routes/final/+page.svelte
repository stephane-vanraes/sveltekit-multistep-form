<script>
	import { confetti } from '@neoconfetti/svelte';
</script>

<p use:confetti />
<div>Great Job</div>

<style>
	div {
		background-color: var(--primary);
		color: white;
		display: grid;
		font-size: 4rem;
		height: 20rem;
		place-items: center;
	}
</style>
