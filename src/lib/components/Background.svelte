<script lang="ts">
    import { mapValue } from '$lib/functions';

    interface Props {
        fill?: boolean;
        height?: string;
        position?: 'absolute' | 'relative' | 'fixed';
        zIndex?: number;
        gradient?: {
            display?: boolean;
            opacity?: number;
            x?: number;
            y?: number;
            width?: number;
            height?: number;
            colorStart: string;
            colorEnd: string;
        };
        dots?: {
            display?: boolean;
            opacity?: number;
            size?: string;
            color?: string;
        };
    }

    let {
        fill = true,
        height,
        position = 'relative',
        zIndex = -1,
        gradient: gd,
        dots: dt,
    }: Props = $props();

    const gradient = $derived({
        display: false,
        opacity: 1,
        x: 50,
        y: 0,
        width: 100,
        height: 100,
        colorStart: '#dedefd',
        colorEnd: 'transparent',
        ...gd,
    });

    const dots = $derived({
        display: false,
        opacity: 1,
        size: '0.25rem',
        color: 'page-background',
        ...dt,
    });

    const ySzazalek = $derived(mapValue(gradient.y, 0, 100, 37.5, 62.5));
    const width = $derived(gradient.width / 4);
    const heightSzazalek = $derived(gradient.height / 4);
</script>

<div class="wr" style:height style:position style:z-index={zIndex}>
    <div
        class="gradient"
        style="--gradient-tilt: 0deg"
        style:--gradient-position-x="{gradient.x}%"
        style:--gradient-position-y="{ySzazalek}%"
        style:--gradient-width="{width}%"
        style:--gradient-height="{heightSzazalek}%"
        style:--gradient-color-start={gradient.colorStart}
        style:--gradient-color-end={gradient.colorEnd}
        style:opacity={gradient.opacity}
    ></div>
    <div
        class="dots"
        style:--dots-color={dots.color}
        style:--dots-size={dots.size}
        style:opacity={dots.opacity}
    ></div>
</div>

<style lang="scss">
    .wr {
        display: flex;
        overflow: hidden;
        width: 100%;
        height: 100%;
        min-height: 0;
        min-width: 0;
        left: 0;
        top: 0;
        /* z-index: 1; */
    }

    .gradient {
        display: flex;
        pointer-events: none;
        position: absolute;
        background: radial-gradient(
            ellipse var(--gradient-width) var(--gradient-height) at var(--gradient-position-x)
                var(--gradient-position-y),
            var(--gradient-color-start),
            var(--gradient-color-end)
        );
        width: 400%;
        height: 400%;
        left: -150%;
        top: -150%;
        transform: rotate(var(--gradient-tilt));
        transform-origin: center;
    }

    .dots {
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        opacity: 1;
        width: 100%;
        height: 100%;
        min-height: 0;
        min-width: 0;
        background-image: radial-gradient(var(--dots-color) 1px, transparent 1px);
        background-size: var(--dots-size) var(--dots-size);
    }
</style>
