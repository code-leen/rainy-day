<template>
    <div class="h-screen">
        <UHorizontalNavigation :links="links" class="h-[5%] border-b border-gray-200 lowercase dark:border-gray-800" />
        <slot />
    </div>
</template>

<script setup lang="ts">
const links = [[
    {
        label: 'About',
        icon: 'ri:home-smile-2-fill',
        to: '/'
    },
    {
        label: 'Breathe',
        icon: 'mdi:pine-tree-variant',
        to: '/breathe'
    },
    // {
    //     label: 'Dad jokes'
    // },
    // {
    //     label: 'Wisdom'
    // }
], [{
    title: 'View on GitHub',
    icon: 'mdi:github',
    to: 'https://github.com/code-leen/rainy-day'
}]
]
</script>