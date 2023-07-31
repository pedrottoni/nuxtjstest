<template>
    <div>
        <MetaTags/>
        <div class="flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
            <NavBar class="border-info-100 dark:bg-neutral-950 fixed navbar z-10"/>
            <slot/>
            <TheFooter/>
        </div>
    </div>
</template>
<style></style>
