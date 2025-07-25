<script lang="ts">
	const janiUrl =
		'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-1/67739623_2588995291162597_4777773125318213632_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_ohc=StL_K8Agd60Q7kNvwGC3rzU&_nc_oc=AdnXFelio9S2kQLxieWkY1RXSDsz0eJjLF1oGgOByJ0Ceb1vvDxR4FbCNYBFtXh_1ZgpVNDaqmPO4wP4CSKnxAUx&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent-vie1-1.xx&_nc_gid=W86PvQyzvu31olChr0f8OA&oh=00_AfTmj_U-Lsy0f4_5LFff1IdaWFa4KZ5FkP7n_Wy4DlwT1A&oe=68AB1158';
</script>

<section>
	<h1>Building bridges between design and code</h1>
	<div class="sub-title">
		I'm Selene, a design engineer at onceui, where I craft intuitive user experiences. After hours,
		I build my own projects.
	</div>

	<div class="about">
		<img src={janiUrl} alt="" />
		<div class="szoveg">About – Jani</div>
	</div>
</section>

<style lang="scss">
	section {
		padding-block: 24px;
		max-width: 768px;

		h1 {
			letter-spacing: -0.04em;
			text-wrap: balance;
			font-size: 52px;
			font-weight: 600;
			line-height: 68px;
			margin: unset;
			padding-bottom: 1rem;
			color: var(--neutral-on-background-strong);
			font-size: calc(var(--font-size-display-l) * var(--font-size-heading-multiplier));
			line-height: calc(var(--line-height-display-l) * var(--line-height-heading-multiplier));
		}

		.sub-title {
			color: var(--neutral-on-background-weak);
			text-wrap: balance;
			font-size: calc(var(--font-size-heading-xl) * var(--font-size-heading-multiplier));
			line-height: calc(var(--line-height-heading-xl) * var(--line-height-heading-multiplier));
			padding-bottom: 2rem;
		}

		.about {
			background: var(--neutral-alpha-weak);
			border-color: var(--neutral-alpha-weak);
			border: 1px solid var(--neutral-alpha-weak);
			width: max-content;
			height: 40px;

			padding: 5px;
			border-radius: 100px;
			display: flex;
			align-items: center;
			padding: 5px;

			img {
				height: 30px;
				width: 30px;
				display: block;
				border-radius: 100px;
			}

			.szoveg {
				padding-left: 12px;
				padding-right: 18px;
			}
		}
	}
</style>
