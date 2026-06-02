<script setup>
import HeroSection from '@/Components/HeroSection.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import PublicLayout from '@/Layouts/PublicLayout.vue';
import SectionContainer from '@/Components/SectionContainer.vue';
import { media } from '@/siteImages';
import { PlayCircleIcon } from '@heroicons/vue/24/solid';
import { Head, Link } from '@inertiajs/vue3';
import { route } from 'ziggy-js';

const youtubeChannelUrl = 'https://www.youtube.com/@NewLifeBibleChurchPA';

const props = defineProps({
    sermons: {
        type: Array,
        default: () => [],
    },
});
</script>

<template>
    <PublicLayout>
        <Head title="Media" />

        <HeroSection
            :image-src="media.hero"
            eyebrow="Messages at New Life Bible Church"
            title="Biblical Teaching for Everyday Life"
            subtitle="We teach Scripture with clarity and conviction—so you can know Jesus and follow Him in the rhythms of daily life."
        >
            <div>
                <PrimaryButton :href="youtubeChannelUrl" target="_blank" rel="noopener noreferrer">Watch Online</PrimaryButton>
            </div>
        </HeroSection>

        <section class="bg-white py-16">
            <SectionContainer>
                <div v-if="sermons.length" class="grid gap-8 md:grid-cols-3">
                    <Link
                        v-for="item in sermons"
                        :key="item.slug"
                        :href="route('media.show', item.slug)"
                        :aria-label="`Open message: ${item.title}`"
                        class="group block overflow-hidden border border-neutral-tan/50 bg-white shadow-sm transition hover:border-accent/40 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    >
                        <article class="h-full">
                            <div class="relative aspect-video w-full overflow-hidden bg-slate-900">
                                <img
                                    v-if="item.posterUrl"
                                    :src="item.posterUrl"
                                    alt=""
                                    class="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                                    loading="lazy"
                                />
                                <div v-else class="absolute inset-0 bg-slate-800" />
                                <div
                                    class="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/30 transition group-hover:bg-black/40"
                                    aria-hidden="true"
                                >
                                    <span
                                        class="flex rounded-full bg-white/95 p-2 text-accent shadow-md ring-2 ring-white/50 transition group-hover:scale-105"
                                    >
                                        <PlayCircleIcon class="h-10 w-10 md:h-12 md:w-12" />
                                    </span>
                                </div>
                            </div>
                            <div class="p-5">
                                <h3 class="font-bold text-primary group-hover:text-accent">{{ item.title }}</h3>
                                <p class="mt-2 text-sm text-slate-600">{{ item.description }}</p>
                            </div>
                        </article>
                    </Link>
                </div>
            </SectionContainer>
        </section>
    </PublicLayout>
</template>
