<script setup lang="ts"></script>
<template>
    <section class="bg-slate-100">
        <div class="container flex flex-col mx-auto place-items-center px-4 py-32 md:py-40">
            <div class="mb-16 text-center flex-col w-12/12 lg:flex lg:w-6/12 lg:place-items-center">
                <h3>Diferencial</h3>
                <h2>A velocidade dos ATS com a eficiência dos mercados de balcão</h2>
                <h4>
          Após anos desenvolvendo uma solução que combina o melhor dos dois
          sistemas, surgiu a EXE Auctions. Corsini se uniu a Adolpho Naves </h4>
                <UButton to="https://pinegrow.com/docs/vue/support/" external target="_blank" variant="link" class="text-primary-500" trailing-icon="i-material-symbols-open-in-new">Veja como funciona</UButton>
            </div>
            <div class="gap-6 grid place-items-center sm:grid-cols-1 lg:grid-cols-3">
                <UCard class="h-fit p-8 shadow-md shadow-slate-300">
                    <template #header>
                        <h5 class="text-center">Calls</h5>
                    </template>
                    <template #default>
                        <div class="border-gray-50 border-t-2 flex flex-col gap-6 mt-8 pt-8">
                            <div>
                                <h6 class="flex flex-row gap-2 mb-1 place-items-center text-gray-500"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" fill="none">
                                        <g stroke="#A2CF66" filter="url(#a)">
                                            <path fill="#A2CF66" stroke-width=".5" d="M9.4 18.3c.5.5 1.2.5 1.7 0l8.4-8.3A1.2 1.2 0 0 0 18 8.3l-7.1 7c-.3.4-.8.4-1 0L7 12.9a1.2 1.2 0 1 0-1.6 1.7l3.9 3.8Z"/>
                                            <rect width="22" height="22" x="1.5" y="2.3" stroke-width="3" rx="11"/>
                                        </g>
                                        <defs>
                                            <filter id="a" width="25" height="25.7" x="0" y=".8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                                <feOffset dy=".7"/>
                                                <feGaussianBlur stdDeviation=".5"/>
                                                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
                                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"/>
                                                <feBlend in2="shape" result="effect1_innerShadow_293_904"/>
                                            </filter>
                                        </defs>
                                    </svg>
                  Método de precificação </h6>
                                <p class="ml-8">
                  Definido pela atual oferta e demanda para o respectivo volume.
                  Teoricamente o preço ótimo </p>
                            </div>
                            <div>
                                <h6 class="flex flex-row gap-2 mb-1 place-items-center text-gray-500"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" fill="none">
                                        <g stroke="#D03435" filter="url(#a)">
                                            <path fill="#D03435" stroke-width=".5" d="m10.2 14.3-2.4 2.4A1 1 0 0 0 9.2 18l2.3-2.3c.6-.6 1.4-.6 2 0l2.3 2.3a1 1 0 0 0 1.4-1.3l-2.4-2.4c-.5-.5-.5-1.4 0-1.9l2.4-2.4a1 1 0 1 0-1.4-1.3L13.5 11c-.6.6-1.4.6-2 0L9.2 8.7A1 1 0 1 0 7.8 10l2.4 2.4c.5.5.5 1.4 0 1.9Z"/>
                                            <rect width="22" height="22" x="1.5" y="2.3" stroke-width="3" rx="11"/>
                                        </g>
                                        <defs>
                                            <filter id="a" width="25" height="26.2" x="0" y=".8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                                <feOffset dy="1.2"/>
                                                <feGaussianBlur stdDeviation=".8"/>
                                                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
                                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"/>
                                                <feBlend in2="shape" result="effect1_innerShadow_420_289"/>
                                            </filter>
                                        </defs>
                                    </svg>
                  Processo de Negociação </h6>
                                <p class="ml-8">Lento e paulatino</p>
                            </div>
                            <div>
                                <h6 class="flex flex-row gap-2 mb-1 place-items-center text-gray-500"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" fill="none">
                                        <g stroke="#D03435" filter="url(#a)">
                                            <path fill="#D03435" stroke-width=".5" d="m10.2 14.3-2.4 2.4A1 1 0 0 0 9.2 18l2.3-2.3c.6-.6 1.4-.6 2 0l2.3 2.3a1 1 0 0 0 1.4-1.3l-2.4-2.4c-.5-.5-.5-1.4 0-1.9l2.4-2.4a1 1 0 1 0-1.4-1.3L13.5 11c-.6.6-1.4.6-2 0L9.2 8.7A1 1 0 1 0 7.8 10l2.4 2.4c.5.5.5 1.4 0 1.9Z"/>
                                            <rect width="22" height="22" x="1.5" y="2.3" stroke-width="3" rx="11"/>
                                        </g>
                                        <defs>
                                            <filter id="a" width="25" height="26.2" x="0" y=".8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                                <feOffset dy="1.2"/>
                                                <feGaussianBlur stdDeviation=".8"/>
                                                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
                                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"/>
                                                <feBlend in2="shape" result="effect1_innerShadow_420_289"/>
                                            </filter>
                                        </defs>
                                    </svg>
                  Ordens de Troca </h6>
                                <p class="ml-8">Não permite ordens de troca</p>
                            </div>
                        </div>
                    </template>
                </UCard>
                <UCard class="h-fit p-8 shadow-md shadow-slate-300">
                    <template #header>
                        <h5 class="text-center">ATS/Dark pools</h5>
                    </template>
                    <template #default>
                        <div class="border-gray-50 border-t-2 flex flex-col gap-6 mt-8 pt-8">
                            <div>
                                <h6 class="flex flex-row gap-2 mb-1 place-items-center text-gray-500"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" fill="none">
                                        <g stroke="#D03435" filter="url(#a)">
                                            <path fill="#D03435" stroke-width=".5" d="m10.2 14.3-2.4 2.4A1 1 0 0 0 9.2 18l2.3-2.3c.6-.6 1.4-.6 2 0l2.3 2.3a1 1 0 0 0 1.4-1.3l-2.4-2.4c-.5-.5-.5-1.4 0-1.9l2.4-2.4a1 1 0 1 0-1.4-1.3L13.5 11c-.6.6-1.4.6-2 0L9.2 8.7A1 1 0 1 0 7.8 10l2.4 2.4c.5.5.5 1.4 0 1.9Z"/>
                                            <rect width="22" height="22" x="1.5" y="2.3" stroke-width="3" rx="11"/>
                                        </g>
                                        <defs>
                                            <filter id="a" width="25" height="26.2" x="0" y=".8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                                <feOffset dy="1.2"/>
                                                <feGaussianBlur stdDeviation=".8"/>
                                                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
                                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"/>
                                                <feBlend in2="shape" result="effect1_innerShadow_420_289"/>
                                            </filter>
                                        </defs>
                                    </svg>
                  Método de precificação </h6>
                                <p class="ml-8">
                  Predefinido pelo broker. Baseado em alguma referencia de
                  mercado ou critério subjetivo, não necessariamente o preço
                  ótimo </p>
                            </div>
                            <div>
                                <h6 class="flex flex-row gap-2 mb-1 place-items-center text-gray-500"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" fill="none">
                                        <g stroke="#A2CF66" filter="url(#a)">
                                            <path fill="#A2CF66" stroke-width=".5" d="M9.4 18.3c.5.5 1.2.5 1.7 0l8.4-8.3A1.2 1.2 0 0 0 18 8.3l-7.1 7c-.3.4-.8.4-1 0L7 12.9a1.2 1.2 0 1 0-1.6 1.7l3.9 3.8Z"/>
                                            <rect width="22" height="22" x="1.5" y="2.3" stroke-width="3" rx="11"/>
                                        </g>
                                        <defs>
                                            <filter id="a" width="25" height="25.7" x="0" y=".8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                                <feOffset dy=".7"/>
                                                <feGaussianBlur stdDeviation=".5"/>
                                                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
                                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"/>
                                                <feBlend in2="shape" result="effect1_innerShadow_293_904"/>
                                            </filter>
                                        </defs>
                                    </svg>
                  Processo de Negociação </h6>
                                <p class="ml-8">
                  Bastante rápido, com ordens seladas e anônimas </p>
                            </div>
                            <div>
                                <h6 class="flex flex-row gap-2 mb-1 place-items-center text-gray-500"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" fill="none">
                                        <g stroke="#D03435" filter="url(#a)">
                                            <path fill="#D03435" stroke-width=".5" d="m10.2 14.3-2.4 2.4A1 1 0 0 0 9.2 18l2.3-2.3c.6-.6 1.4-.6 2 0l2.3 2.3a1 1 0 0 0 1.4-1.3l-2.4-2.4c-.5-.5-.5-1.4 0-1.9l2.4-2.4a1 1 0 1 0-1.4-1.3L13.5 11c-.6.6-1.4.6-2 0L9.2 8.7A1 1 0 1 0 7.8 10l2.4 2.4c.5.5.5 1.4 0 1.9Z"/>
                                            <rect width="22" height="22" x="1.5" y="2.3" stroke-width="3" rx="11"/>
                                        </g>
                                        <defs>
                                            <filter id="a" width="25" height="26.2" x="0" y=".8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                                <feOffset dy="1.2"/>
                                                <feGaussianBlur stdDeviation=".8"/>
                                                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
                                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"/>
                                                <feBlend in2="shape" result="effect1_innerShadow_420_289"/>
                                            </filter>
                                        </defs>
                                    </svg>
                  Ordens de Troca </h6>
                                <p class="ml-8">Não permite ordens de troca</p>
                            </div>
                        </div>
                    </template>
                </UCard>
                <UCard class="border-2 border-green-500 border-solid flex flex-col p-8 place-items-center shadow-lg shadow-slate-200">
                    <template #header>
                        <svg xmlns="http://www.w3.org/2000/svg" width="112" height="72" fill="none" viewBox="0 0 92 52">
                            <path fill="#1F4386" d="M28.62 3.2H5.46v9.65h17.89v3.2H5.46v9.52h23.16v3.2H0V0h28.62v3.2ZM63.13 0v3.2h23.15v9.65H68.4v3.2h17.88v9.52H63.13v3.2h28.62V0H63.13ZM52.94 10.69 63.13 0l-7.21.1-6.45 6.95 3.47 3.64Z"/>
                            <path fill="#1F4386" d="M49.4 14.55 35.6 0h-7.02l13.6 14.64-13.35 14.13h7.12L49.4 14.55Zm13.1 13.76-9.52-10.1-3.68 3.84 6.41 6.72h7.22l-.41-.46h-.02Z"/>
                            <path fill="#58595B" d="M7.77 41.57c.72.68 1.08 1.68 1.08 3v6.44H7.52v-1.62a3.2 3.2 0 0 1-1.39 1.26c-.6.3-1.33.45-2.17.45a4.25 4.25 0 0 1-2.74-.82 2.68 2.68 0 0 1-1.02-2.2c0-.9.31-1.58.95-2.12.63-.54 1.64-.81 3.03-.81h3.28v-.63c0-.9-.25-1.58-.75-2.05-.5-.46-1.22-.7-2.18-.7A5.43 5.43 0 0 0 1.1 43l-.63-1.05a5.42 5.42 0 0 1 1.88-1.03 7.3 7.3 0 0 1 2.32-.37c1.34 0 2.38.34 3.1 1.02ZM6.2 49.46a3.3 3.3 0 0 0 1.26-1.57v-1.7H4.22c-1.77 0-2.65.62-2.65 1.86 0 .6.23 1.08.69 1.43.45.35 1.1.52 1.92.52.82 0 1.46-.18 2.02-.54Zm17-8.83v10.38h-1.34v-1.9a3.82 3.82 0 0 1-1.5 1.47c-.65.35-1.38.52-2.2.52a4.38 4.38 0 0 1-3.2-1.13c-.77-.76-1.16-1.86-1.16-3.32v-6.02h1.39v5.88c0 1.09.27 1.91.8 2.48.54.57 1.3.85 2.3.85 1.09 0 1.94-.33 2.57-1 .63-.66.94-1.58.94-2.77v-5.44h1.4Zm6.7 9.81a4.85 4.85 0 0 1-1.9-1.89 5.46 5.46 0 0 1-.69-2.73c0-1.01.23-1.92.7-2.72a4.85 4.85 0 0 1 1.89-1.88c.8-.44 1.71-.67 2.73-.67.9 0 1.69.18 2.39.53.7.35 1.25.86 1.66 1.53l-1.04.7c-.34-.5-.78-.9-1.3-1.15a3.84 3.84 0 0 0-1.7-.38c-.75 0-1.42.17-2.02.5-.6.34-1.06.81-1.39 1.43-.33.62-.5 1.32-.5 2.11 0 .8.17 1.51.5 2.12.33.62.8 1.09 1.4 1.42.59.34 1.26.5 2 .5.62 0 1.19-.12 1.71-.37s.96-.63 1.3-1.14l1.04.7c-.4.68-.96 1.19-1.67 1.54-.7.35-1.5.52-2.38.52a5.52 5.52 0 0 1-2.73-.67Zm16.2-.07a2.6 2.6 0 0 1-.98.55 3.9 3.9 0 0 1-1.2.18c-.97 0-1.72-.26-2.24-.78a3.04 3.04 0 0 1-.78-2.23V41.8h-1.85v-1.18h1.85v-2.27h1.39v2.27h3.14v1.18h-3.14V48c0 .62.15 1.09.46 1.41.3.32.75.48 1.32.48a2.29 2.29 0 0 0 1.54-.53l.49 1Zm3.76-12.3a.97.97 0 0 1-.3-.71c0-.28.1-.5.3-.7.2-.2.44-.29.73-.29a1 1 0 0 1 1.02.97 1 1 0 0 1-.3.73c-.2.2-.43.3-.72.3a.98.98 0 0 1-.73-.3Zm.02 2.56h1.4v10.38h-1.4V40.63Zm8.07 9.8a4.97 4.97 0 0 1-1.89-1.89 5.4 5.4 0 0 1-.68-2.72c0-1.01.23-1.92.68-2.72a4.87 4.87 0 0 1 1.89-1.88 5.4 5.4 0 0 1 2.69-.67c.99 0 1.89.23 2.68.67a4.8 4.8 0 0 1 1.88 1.88c.45.8.68 1.7.68 2.72 0 1.01-.23 1.92-.68 2.72a4.88 4.88 0 0 1-1.88 1.89c-.8.45-1.7.68-2.68.68-1 0-1.9-.23-2.7-.68Zm4.66-1.07a3.5 3.5 0 0 0 1.36-1.43c.33-.62.5-1.32.5-2.1 0-.8-.17-1.5-.5-2.12a3.49 3.49 0 0 0-1.36-1.43 3.89 3.89 0 0 0-1.97-.5 3.9 3.9 0 0 0-1.98.5 3.5 3.5 0 0 0-1.37 1.43c-.33.62-.5 1.32-.5 2.11 0 .8.17 1.5.5 2.11.33.62.79 1.1 1.37 1.43.58.34 1.24.5 1.98.5a3.9 3.9 0 0 0 1.97-.5Zm15.72-7.67c.76.75 1.15 1.85 1.15 3.3v6.02h-1.4v-5.88c0-1.08-.27-1.9-.8-2.47a3.04 3.04 0 0 0-2.3-.85c-1.11 0-1.99.34-2.64 1a3.77 3.77 0 0 0-.97 2.75v5.45h-1.4V40.63h1.34v1.92c.38-.64.9-1.13 1.58-1.47a5.02 5.02 0 0 1 2.35-.53c1.3 0 2.32.38 3.09 1.14Zm6.55 9.05a5.09 5.09 0 0 1-1.8-.92l.64-1.1c.43.34.97.62 1.62.84a6.7 6.7 0 0 0 2.04.32 3.9 3.9 0 0 0 2.1-.44c.45-.3.67-.71.67-1.26 0-.38-.12-.68-.37-.9a2.5 2.5 0 0 0-.94-.49 13.5 13.5 0 0 0-1.51-.32c-.84-.16-1.51-.32-2.02-.49a2.95 2.95 0 0 1-1.3-.83c-.37-.4-.55-.95-.55-1.64 0-.87.36-1.58 1.08-2.13a4.82 4.82 0 0 1 3-.83 7.53 7.53 0 0 1 3.66.97l-.61 1.12a5.18 5.18 0 0 0-3.04-.88c-.9 0-1.56.15-2.02.47-.45.32-.67.73-.67 1.24 0 .4.12.71.38.95.25.24.57.41.95.52.38.12.9.23 1.57.35.82.16 1.49.31 1.98.47.5.16.93.43 1.28.81.36.38.53.9.53 1.58 0 .9-.37 1.63-1.13 2.16-.75.53-1.8.8-3.13.8-.84 0-1.63-.12-2.4-.36v-.01Z"/>
                        </svg>
                    </template>
                    <template #default>
                        <div class="border-gray-50 border-t-2 flex flex-col gap-6 mt-8 pt-8">
                            <div>
                                <h6 class="flex flex-row gap-2 mb-1 place-items-center text-gray-500"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" fill="none">
                                        <g stroke="#A2CF66" filter="url(#a)">
                                            <path fill="#A2CF66" stroke-width=".5" d="M9.4 18.3c.5.5 1.2.5 1.7 0l8.4-8.3A1.2 1.2 0 0 0 18 8.3l-7.1 7c-.3.4-.8.4-1 0L7 12.9a1.2 1.2 0 1 0-1.6 1.7l3.9 3.8Z"/>
                                            <rect width="22" height="22" x="1.5" y="2.3" stroke-width="3" rx="11"/>
                                        </g>
                                        <defs>
                                            <filter id="a" width="25" height="25.7" x="0" y=".8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                                <feOffset dy=".7"/>
                                                <feGaussianBlur stdDeviation=".5"/>
                                                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
                                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"/>
                                                <feBlend in2="shape" result="effect1_innerShadow_293_904"/>
                                            </filter>
                                        </defs>
                                    </svg>
                  Método de precificação </h6>
                                <p class="ml-8">
                  Definido pela atual oferta e demanda para o respectivo volume.
                  Teoricamente o preço ótimo </p>
                            </div>
                            <div>
                                <h6 class="flex flex-row gap-2 mb-1 place-items-center text-gray-500"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" fill="none">
                                        <g stroke="#A2CF66" filter="url(#a)">
                                            <path fill="#A2CF66" stroke-width=".5" d="M9.4 18.3c.5.5 1.2.5 1.7 0l8.4-8.3A1.2 1.2 0 0 0 18 8.3l-7.1 7c-.3.4-.8.4-1 0L7 12.9a1.2 1.2 0 1 0-1.6 1.7l3.9 3.8Z"/>
                                            <rect width="22" height="22" x="1.5" y="2.3" stroke-width="3" rx="11"/>
                                        </g>
                                        <defs>
                                            <filter id="a" width="25" height="25.7" x="0" y=".8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                                <feOffset dy=".7"/>
                                                <feGaussianBlur stdDeviation=".5"/>
                                                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
                                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"/>
                                                <feBlend in2="shape" result="effect1_innerShadow_293_904"/>
                                            </filter>
                                        </defs>
                                    </svg>
                  Processo de Negociação </h6>
                                <p class="ml-8">
                  Bastante rápido, com ordens seladas e anônimas </p>
                            </div>
                            <div>
                                <h6 class="flex flex-row gap-2 mb-1 place-items-center text-gray-500"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" fill="none">
                                        <g stroke="#A2CF66" filter="url(#a)">
                                            <path fill="#A2CF66" stroke-width=".5" d="M9.4 18.3c.5.5 1.2.5 1.7 0l8.4-8.3A1.2 1.2 0 0 0 18 8.3l-7.1 7c-.3.4-.8.4-1 0L7 12.9a1.2 1.2 0 1 0-1.6 1.7l3.9 3.8Z"/>
                                            <rect width="22" height="22" x="1.5" y="2.3" stroke-width="3" rx="11"/>
                                        </g>
                                        <defs>
                                            <filter id="a" width="25" height="25.7" x="0" y=".8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                                <feOffset dy=".7"/>
                                                <feGaussianBlur stdDeviation=".5"/>
                                                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
                                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"/>
                                                <feBlend in2="shape" result="effect1_innerShadow_293_904"/>
                                            </filter>
                                        </defs>
                                    </svg>
                  Ordens de Troca </h6>
                                <p class="ml-8">Sim, permite ordens de troca</p>
                            </div>
                        </div>
                    </template>
                </UCard>
            </div>
        </div>
    </section>
</template>
<style scoped></style>
