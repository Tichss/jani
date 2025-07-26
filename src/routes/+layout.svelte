<script lang="ts">
    import type { Snippet } from 'svelte';
    import '$lib/app.scss';
    import Menu from '$lib/components/Menu.svelte';
    import Background from '$lib/components/Background.svelte';

    interface Props {
        children?: Snippet;
    }

    let { children }: Props = $props();
</script>

<Background
    zIndex={-1}
    position="fixed"
    gradient={{
        display: true,
        opacity: 1,
        x: 50,
        y: 25,
        width: 100,
        height: 50,
        tilt: 0,
        colorStart: '#e8e6fc',
        colorEnd: 'transparent',
    }}
    dots={{
        display: true,
        opacity: 40,
        size: '2',
        color: 'brand-background-strong',
    }}
    mask={{
        cursor: false,
        x: 50,
        y: 0,
        radius: 100,
    }}
    grid={{
        display: false,
        opacity: 100,
        color: 'neutral-alpha-medium',
        width: '0.25rem',
        height: '0.25rem',
    }}
    lines={{
        display: false,
        opacity: 100,
        color: 'neutral-alpha-weak',
        size: '16',
        thickness: 1,
        angle: 45,
    }}
/>

<div class="bg">
    <Menu></Menu>
    <div class="body">
        {@render children?.()}
    </div>
    <footer>footer</footer>
</div>

<style lang="scss">
    .asd {
        background-color: #e8e6fc;
    }
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
