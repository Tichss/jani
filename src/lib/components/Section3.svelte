<script lang="ts">
	interface Props {}

	let {}: Props = $props();
</script>

<section>
	<div class="s1">Building Once UI, a Customizable Design System</div>
	<div class="s2">
		<div class="fl">
			<img src="/jani.jpg" alt="" />
			<img src="/jani.jpg" alt="" />
		</div>

		<div class="body">
			Development of a flexible and highly customizable design system using Next.js for front-end
			and Figma for design collaboration.
		</div>

		<a href="">Read case study </a>
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		gap: 2.5rem;
		padding: 1rem;
		padding: 0.75rem;
		padding: 1.25rem;

		.s1 {
			flex: 5 1;
			font-size: calc(var(--font-size-heading-xl) * var(--font-size-heading-multiplier));
			line-height: calc(var(--line-height-heading-xl) * var(--line-height-heading-multiplier));
			font-weight: var(--font-weight-heading-strong);
			color: var(--neutral-on-background-strong);
			text-wrap: balance;
		}
		.s2 {
			flex: 7 1;
			display: flex;
			flex-direction: column;
			gap: 1rem;

			.fl {
				display: flex;

				img {
					display: block;
					width: 30px;
					height: 30px;
					border-radius: 100px;
					border: 1px solid var(--neutral-border-strong);
					z-index: 10;

					&:not(:first-of-type) {
						margin-left: -8px;
						z-index: 1;
					}
				}
			}

			.body {
				text-wrap: balance;
				font-size: calc(var(--font-size-body-s) * var(--font-size-body-multiplier));
				line-height: calc(var(--line-height-body-s) * var(--line-height-body-multiplier));
				font-weight: var(--font-weight-body-default);
				font-family: var(--font-body);
				color: var(--neutral-on-background-weak);
			}

			a {
				all: unset;
				color: var(--brand-on-background-medium);

				font-size: calc(var(--font-size-body-s) * var(--font-size-body-multiplier));
				cursor: pointer;
				transition: 0.15s;

				&:hover {
					color: var(--brand-on-background-strong);
				}
			}
		}
	}
</style>
