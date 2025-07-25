<script lang="ts">
	import Carousel1 from '$lib/components/Carousel1.svelte';
	import NewsLetter from '$lib/components/NewsLetter.svelte';
	import Section1 from '$lib/components/Section1.svelte';
	import Section3 from '$lib/components/Section3.svelte';
	import Section4 from '$lib/components/Section4.svelte';

	interface Props {
		class?: string;
	}

	let { class: _class }: Props = $props();
</script>

<Section1></Section1>

<Carousel1
	imgWidth={1440}
	imgHeight={810}
	imgSet={[
		{ src: '/cover-01.jpg', alt: 'valami' },
		{ src: '/cover-02.jpg', alt: 'valami' },
		{ src: '/cover-03.jpg', alt: 'valami' },
		{ src: '/cover-04.jpg', alt: 'valami' }
	]}
/>

<Section3 />

<Section4 />

<div style="padding-top: 2rem;">
	<NewsLetter />
</div>

<style lang="scss">
</style>
