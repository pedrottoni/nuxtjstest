<template>
    <div>
        <MetaTags/>
        <div class="flex flex-col bg-white text-neutral-900">
            <NavBar class="border-info-100 fixed navbar z-10"/>
            <slot/>
            <TheFooter/>
        </div>
    </div>
</template>
<style></style>
