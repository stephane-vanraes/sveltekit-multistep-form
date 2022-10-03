<script>
	import '../app.css';
</script>

<header>
	<nav>
		<h1>Demo Page</h1>
		<a href="/">Home</a>
		<a href="https://github.com/stephane-vanraes/sveltekit-multistep-form" target="_blank">Github</a
		>
	</nav>
</header>
<main>
	<slot />
</main>

<style>
	header {
		background-color: var(--primary);
		color: white;
	}
	main,
	nav {
		margin: auto;
		max-width: 96ch;
		padding: 0.5rem;
		width: 100%;
	}
	nav {
		align-items: center;
		display: flex;
		gap: 1rem;
	}
	h1 {
		font-size: 1.5rem;
		font-weight: 500;
		margin-inline-end: auto;
	}
	a {
		font-size: 1.125rem;
		font-weight: 500;
		padding: 0.25rem 0.5rem;
	}
	a:is(:active, :focus, :hover) {
		background-color: white;
		color: var(--primary);
	}
</style>
