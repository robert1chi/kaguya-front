<script lang="ts" setup>
const display = ref<boolean>(false)
const dropdown = ref<HTMLInputElement | null>(null)
const dropButton = ref<HTMLInputElement | null>(null)
const night = ref<string>('winter')
const notFocus = () => {
    dropButton.value?.focus()
}
const onFocus = () => {
    display.value = true
}
const buttonClick = () => {
    display.value = !display.value
    display.value ? dropButton.value?.focus() : dropButton.value?.blur()
}
const buttonBlur = () => {
    display.value = false
}
watch(display, (count, oldCount) => {
    count ? dropdown.value?.focus() : dropdown.value?.blur()
    count ? dropButton.value?.focus() : dropButton.value?.blur()
})
onMounted(() => {
    night.value = window.matchMedia('(prefers-color-scheme: light)').matches ? 'winter' : 'dark'
})
</script>
<template>
    <div class="flex flex-col min-h-screen justify-between bg-base-200">
        <div class="navbar bg-base-100">
            <div class="flex-1">
                <a class="btn btn-ghost normal-case text-xl">Picoaoi Works</a>
            </div>
            <div :data-theme="night" class="flex-none dropdown dropdown-end">
                <button tabIndex="0" class="btn btn-ghost swap swap-rotate" ref="dropButton" @blur="buttonBlur"
                    @click="buttonClick">

                    <!-- this hidden checkbox controls the state -->
                    <input type="checkbox" v-bind:checked="display" />

                    <!-- hamburger icon -->
                    <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                        viewBox="0 0 512 512">
                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                    </svg>

                    <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                        viewBox="0 0 330 330">
                        <path xmlns="http://www.w3.org/2000/svg" id="XMLID_225_"
                            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                    </svg>

                </button>
                <ul tabIndex="0" class="dropdown-content menu shadow bg-base-100 rounded-box w-52" ref="dropdown"
                    @blur="notFocus" @focus="onFocus">
                    <li class="hover-bordered"><a href="https://picoaoi.com" target="_blank"><font-awesome-icon
                                icon="fa-house" />Home Page</a></li>
                    <li class="hover-bordered"><a href="https://blog.picoaoi.com" target="_blank"><font-awesome-icon
                                icon="fa-pen-to-square" />Blog</a></li>
                    <li class="hover-bordered"><a href="https://github.com/robert1chi" target="_blank"><font-awesome-icon
                                icon="fa-brands fa-github" />GitHub</a></li>
                </ul>
            </div>
        </div>
        <slot />
        <footer class="footer items-center p-4 bg-neutral text-neutral-content">
            <div class="items-center grid-flow-col">
                <svg width="36" height="36" viewBox="0 0 135 90" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                    clip-rule="evenodd" class="fill-current">
                    <title>Nuxt logo</title>
                    <path
                        d="M74.2284 87.8731H123.414C124.977 87.8733 126.511 87.4745 127.864 86.7167C129.217 85.959 130.341 84.869 131.121 83.5565C131.902 82.244 132.313 80.7552 132.312 79.2398C132.312 77.7245 131.899 76.2361 131.118 74.9242L98.0856 19.4276C97.3048 18.1154 96.1817 17.0257 94.829 16.2681C93.4764 15.5105 91.942 15.1116 90.38 15.1116C88.8181 15.1116 87.2836 15.5105 85.931 16.2681C84.5784 17.0257 83.4552 18.1154 82.6745 19.4276L74.2284 33.6272L57.7148 5.86031C56.9334 4.54821 55.8097 3.45868 54.4567 2.70119C53.1037 1.9437 51.569 1.54492 50.0068 1.54492C48.4446 1.54492 46.9099 1.9437 45.5569 2.70119C44.2039 3.45868 43.0803 4.54821 42.2989 5.86031L1.1947 74.9242C0.41273 76.2361 0.000680577 77.7245 8.42355e-07 79.2398C-0.000678893 80.7552 0.410035 82.244 1.19083 83.5565C1.97163 84.869 3.09498 85.959 4.44789 86.7167C5.80081 87.4745 7.33558 87.8733 8.89785 87.8731H39.7727C52.0057 87.8731 61.0271 82.661 67.2346 72.4925L82.3054 47.1759L90.3776 33.6272L114.604 74.3244H82.3054L74.2284 87.8731ZM39.2694 74.3105L17.7227 74.3058L50.0212 20.046L66.1369 47.1759L55.3468 65.309C51.2244 71.9067 46.5411 74.3105 39.2694 74.3105Z">
                    </path>
                </svg>
                <p>Copyright © 2023 Picoaoi - All right reserved<br />Powered by <a href="https://nuxt.com"
                        target="_blank">Nuxt 3 <font-awesome-icon icon="arrow-up-right-from-square" /></a></p>
            </div>
            <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a href="https://github.com/robert1chi" target="_blank">
                    <font-awesome-icon class="inline-block text-2xl stroke-current" :icon="['fab', 'square-github']" />
                </a>
            </div>
        </footer>
    </div>
</template>
