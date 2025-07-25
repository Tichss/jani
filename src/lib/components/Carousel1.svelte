<script lang="ts">
	interface Props {
		imgWidth: number;
		imgHeight: number;
		imgSet: { src: string; alt?: string; onClick?: () => any }[];
	}

	let { imgWidth, imgHeight, imgSet = [] }: Props = $props();

	let ratio = $derived(imgWidth / imgHeight);

	let width = $state(0);
	let height = $derived(width / ratio);

	let visibleIndex = $state(0);
</script>

<div class="ct" bind:clientWidth={width} style:height={height + 'px'}>
	{#each imgSet as img, i}
		{#if visibleIndex == i}
			<img src={img.src} alt={img.alt} />
		{/if}
	{/each}
</div>

<div class="buttons">
	{#each imgSet as img, i}
		<button onclick={() => (visibleIndex = i)}>
			<div class="div" class:active={visibleIndex == i}></div>
		</button>
	{/each}
</div>

<style lang="scss">
	.ct {
		width: 100%;
		border-radius: 16px;
		overflow: hidden;
	}

	img {
		display: block;
		height: 100%;
		width: 100%;
		object-fit: contain;
	}

	.buttons {
		margin-top: 8px;
		display: flex;
		gap: 2px;
	}

	button {
		padding: unset;
		border: unset;
		background-color: unset;
		height: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		cursor: pointer;

		.div {
			height: 2px;
			width: 100%;
			background: var(--neutral-alpha-medium);
			display: block;
			border-radius: 100px;

			&.active {
				background: var(--neutral-on-background-strong);
			}
		}
	}
</style>
