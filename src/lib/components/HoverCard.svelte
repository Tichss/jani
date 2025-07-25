<script lang="ts">
	interface Props {
		title: string;
		desc: string;
	}

	let { title, desc }: Props = $props();
</script>

<div class="card">
	<div class="title">{title}</div>
	<div class="desc">{desc}</div>
</div>

<style lang="scss">
	.card {
		padding: 1.5rem;
		border-radius: 1rem;
		border: 1px solid var(--static-transparent);
		width: 100%;

		&:hover {
			border: 1px solid var(--neutral-alpha-medium);
		}

		.title {
			text-wrap: balance;
			font-size: calc(var(--font-size-heading-l) * var(--font-size-heading-multiplier));
			line-height: calc(var(--line-height-heading-l) * var(--line-height-heading-multiplier));
			font-weight: 600;
		}
		.desc {
			text-wrap: balance;
			font-size: calc(var(--font-size-label-s) * var(--font-size-label-multiplier));
			line-height: calc(var(--line-height-label-s) * var(--line-height-label-multiplier));
			color: var(--neutral-on-background-weak);
		}
	}
</style>
