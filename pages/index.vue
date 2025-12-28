<script lang="ts" setup>
useHead({
    title: 'Picoaoi Works',
    meta: [
        { name: 'description', content: 'Picoaoi works site.' }
    ]
})

const stars = ref<Number>(0)
fetch('https://api.github.com/repos/mirai-mamori/Sakurairo').then((res) => res.json()).then((data) => stars.value = data.stargazers_count)
</script>
<template>
    <div class="flex gap-y-10 flex-col max-w-screen-2xl min-w-[80%] my-5 mx-auto font-serif xl:m-auto">
        <div class="flex flex-col gap-y-5 items-center xl:items-start">
            <div class="font-semibold text-4xl w-96">
                <h2>Existing Projects</h2>
            </div>
            <div
                class="flex flex-col space-y-4 justify-center items-center space-x-0 xl:space-y-0 xl:items-stretch xl:justify-start xl:flex-row xl:space-x-4">
                <div id="card-0" class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title justify-between">
                            Plant Database
                            <a role="button" class="btn btn-sm gap-2" href="https://plant.kaguyasama.moe" target="_blank">
                                <font-awesome-icon icon="arrow-up-right-from-square" />
                            </a>
                        </h2>
                        <p>A group project of CRUD, just a demo</p>
                        <div class="card-actions justify-end">
                            <div data-theme="mytheme" class="badge badge-accent">JavaScript</div>
                            <div data-theme="mytheme" class="badge badge-neutral">PHP</div>
                        </div>
                    </div>
                </div>
                <div id="card-1" class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title justify-between">
                            NO Track b23.tv
                            <a role="button" class="btn btn-sm gap-2" href="https://github.com/robert1chi/bili-shortlink" target="_blank">
                                <font-awesome-icon icon="arrow-up-right-from-square" />
                            </a>
                        </h2>
                        <p>Change your Bilibili short link to the normal one, and remove track details.</p>
                        <div class="card-actions justify-end">
                            <div data-theme="mytheme" class="badge badge-accent">JavaScript</div>
                            <div data-theme="mytheme" class="badge badge-neutral">PHP</div>
                        </div>
                    </div>
                </div>
                <div id="card-2" class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title justify-between">
                            Sakurairo
                            <div class="gap-2">
                                <div class="btn-group">
                                    <a role="button" class="btn btn-sm gap-2"
                                        href="https://github.com/mirai-mamori/Sakurairo" target="_blank">
                                        <font-awesome-icon icon="fa-brands fa-github" />
                                        <div class="badge badge-accent gap-2 font-sans">
                                            <font-awesome-icon icon="fa-star" />{{ stars.toLocaleString() }}
                                        </div>
                                    </a>
                                    <a role="button" class="btn btn-sm gap-2" href="https://docs.fuukei.org/"
                                        target="_blank">
                                        <font-awesome-icon icon="arrow-up-right-from-square" />
                                    </a>
                                </div>
                            </div>
                        </h2>
                        <p>mirai-mamori/Sakurairo is a blog theme maintained by the Fuukei project team.</p>
                        <p>Demo: <a class="link link-primary" href="https://docs.fuukei.org/demo/" target="_blank">使用本主题的博客</a></p>
                        <div class="card-actions justify-end">
                            <div data-theme="mytheme" class="badge badge-accent">JavaScript</div>
                            <div data-theme="mytheme" class="badge badge-secondary">TypeScript</div>
                            <div data-theme="mytheme" class="badge badge-neutral">PHP</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-y-5 items-center xl:items-start">
            <div class="font-semibold text-4xl w-96">
                <h2>
                    Under Development
                </h2>
            </div>
            <div
                class="flex flex-col space-y-4 justify-center items-center space-x-0 xl:space-y-0 xl:items-stretch xl:justify-start xl:flex-row xl:space-x-4">
                <div id="card-3" class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title justify-between">
                            Docker Packer
                            <a role="button" class="btn btn-sm gap-2" href="https://github.com/robert1chi/dockerpacker-web"
                                target="_blank">
                                <font-awesome-icon icon="arrow-up-right-from-square" />
                            </a>
                        </h2>
                        <p>Help to deploy your Node.js project with docker</p>
                        <div class="card-actions justify-end">
                            <div data-theme="mytheme" class="badge badge-secondary">TypeScript</div>
                            <div data-theme="mytheme" class="badge badge-primary">Golang</div>
                        </div>
                    </div>
                </div>
                <div id="card-4" class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title justify-between">
                            SeqHunter-Node
                        </h2>
                        <p>A bioinformatics program. The prototype is based on <a class="font-extrabold">SeqHunter</a> which
                            is developed by my
                            undergraduate mentor <a class="link link-primary"
                                href="https://plant-en.njau.edu.cn/info/1010/1056.htm" target="_blank">Wenwu
                                Ye</a>.</p>
                        <p class="text-xs">References: 叶文武, 王源超,and 窦道龙."SeqHunter:序列搜索与分析的生物信息学软件包." 生物信息学
                            8.04(2010):364-367+377.</p>
                        <div class="card-actions justify-end">
                            <div data-theme="mytheme" class="badge badge-secondary">TypeScript</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
