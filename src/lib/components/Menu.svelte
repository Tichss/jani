<script lang="ts">
    interface Props {}

    let {}: Props = $props();
    import HomeFilled from 'svelte-google-materialdesign-icons/Home.svelte';
    import Profile from 'svelte-google-materialdesign-icons/Account_circle.svelte';
    import Work from 'svelte-google-materialdesign-icons/Space_dashboard.svelte';
</script>

<div class="atmenet"></div>
<header>
    <div class="menu">
        <a class="item active">
            <HomeFilled size="16" variation="two-tone" />
        </a>
        <div class="line"></div>
        <a href="about" class="item"><Profile size="16" variation="two-tone" /> About</a>
        <a class="item">
            <Work size="16" variation="two-tone" /> Work
        </a>
        <a class="item">
            <Work size="16" variation="two-tone" /> Work
        </a>
        <a class="item">
            <Work size="16" variation="two-tone" /> Work
        </a>
        <div class="line"></div>
        <a class="item">
            <HomeFilled size="16" variation="two-tone" />
        </a>
    </div>
</header>

<style lang="scss">
    .atmenet {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 80px;
        backdrop-filter: blur(0.5rem);
        background: linear-gradient(180deg, white, transparent);
        mask-image: linear-gradient(180deg, black 20%, transparent 100%);
        mask-size: 100% 100%;

        z-index: 1;
    }

    header {
        padding: 0.5rem;
        position: sticky;
        top: 0;
        z-index: 2;

        .menu {
            width: fit-content;
            padding: 0.25rem;
            border: 1px solid var(--neutral-alpha-weak);
            border-radius: 100px;
            margin-inline: auto;
            box-shadow: var(--shadow-l);
            display: flex;
            align-items: center;
            gap: 0.25rem;
            background-color: white;

            .item {
                text-decoration: unset;
                height: 32px !important;
                line-height: 10px;
                max-height: 32px;
                padding: 0.25rem 0.75rem;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                cursor: pointer;
                border: 1px solid transparent;
                border-radius: 100px;
                transition: 0.15s;
                font-size: 0.825rem;
                color: var(--neutral-on-background-strong);
                font-weight: 400;

                &:hover {
                    background: var(--neutral-alpha-weak);
                    border: 1px solid var(--neutral-alpha-weak);
                }

                &.active {
                    background-color: var(--neutral-alpha-medium);
                    border: 1px solid var(--neutral-alpha-weak);
                }
            }

            .line {
                width: 1px;
                min-width: 1px;
                height: 1.5rem;
                background-color: var(--neutral-alpha-medium);
            }
        }
    }
</style>
