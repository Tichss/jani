<script lang="ts">
	import HoverCard from '$lib/components/HoverCard.svelte';

	interface Props {}

	let {}: Props = $props();
</script>

<div class="ct">
	<div class="title">Latest from the blog</div>
	<div class="others">
		<HoverCard title="Quick start with Magic Portfolio" desc="April 23, 2025" />
		<HoverCard title="Quick start with Magic Portfolio" desc="April 22, 2025" />
	</div>
</div>

<style lang="scss">
	.ct {
		display: flex;
		padding-left: 2.5rem;
		padding-top: 1.5rem;

		.title {
			flex: 1 1;
			font-size: calc(var(--font-size-display-xs) * var(--font-size-heading-multiplier));
			line-height: calc(var(--line-height-display-xs) * var(--line-height-heading-multiplier));
			text-wrap: balance;
			font-weight: var(--font-weight-display-strong);
		}
		.others {
			flex: 3 1;
			display: flex;
			gap: 1rem;
			padding-inline: 1rem;
		}
	}
</style>
