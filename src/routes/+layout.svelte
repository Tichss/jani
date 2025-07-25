<script lang="ts">
	import type { Snippet } from 'svelte';
	import '$lib/app.scss';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="bg">
	<header>header</header>
	<div class="body">
		{@render children?.()}
	</div>
	<footer>footer</footer>
</div>

<style lang="scss">
	.body {
		margin-inline: auto;
		padding: 40px;
		max-width: 1024px;
	}
	.bg {
		/* min-height: 100vh;
		background-image: radial-gradient(rgb(9, 64, 116) 1px, rgba(0, 0, 0, 0) 1px);
		background-size: 2px 2px;
		mask-size: 100% 100%; */
	}
</style>
