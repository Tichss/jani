<script lang="ts">
	interface Props {}

	let {}: Props = $props();
</script>

<div class="card">
	<div class="title">Subscribe to Selene's Newsletter</div>
	<div class="desc">
		I occasionally write about design, technology, and share thoughts on the intersection of
		creativity and engineering.
	</div>

	<div class="ui">
		<input type="text" name="" id="" placeholder="Email" />
		<button onclick={() => {}}>Subscribe</button>
	</div>
</div>

<style lang="scss">
	.card {
		padding: 5rem;
		display: flex;
		align-items: center;
		flex-direction: column;
		border: 1px solid var(--neutral-alpha-weak);
		border-radius: 1rem;

		.title {
			font-size: 2rem;
			margin-bottom: 1rem;
			text-wrap: balance;
			text-align: center;
			font-weight: 600;
		}
		.desc {
			margin-bottom: 40px;
			color: var(--neutral-on-background-medium);
			text-wrap: balance;
			text-align: center;
		}

		.ui {
			max-width: 24rem;
			width: 100%;
			display: flex;
			gap: 0.5rem;
			height: 40px;

			input {
				flex: 1;
			}

			button {
				display: block;
				height: 100%;
				all: unset;
				padding-inline: 1.5rem;
				background-color: black;
				color: white;
				cursor: pointer;
				border-radius: 1rem;
			}
		}
	}
</style>
