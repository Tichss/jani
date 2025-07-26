<script lang="ts">
    import Background from '$lib/components/Background.svelte';

    interface Props {}

    let {}: Props = $props();
</script>

<div class="card">
    <div class="flex">
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

    <Background
        zIndex={1}
        position="absolute"
        fill
        gradient={{
            display: true,
            opacity: 1,
            x: 50,
            y: 0,
            width: 100,
            height: 100,
            colorStart: '#d5d1fb',
            colorEnd: 'transparent',
        }}
        dots={{
            display: true,
            color: 'white',
            size: '0.25rem',
        }}
    />
</div>

<style lang="scss">
    .card {
        padding: 5rem;
        border-radius: 1rem;
        overflow: hidden;
        position: relative;
        background-color: white;
        border: 1px solid var(--neutral-alpha-weak);

        .flex {
            position: relative;
            display: flex;
            align-items: center;
            flex-direction: column;

            z-index: 2;
        }

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
