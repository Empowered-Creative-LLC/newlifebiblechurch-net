<script setup>
import HeroSection from '@/Components/HeroSection.vue';
import PublicLayout from '@/Layouts/PublicLayout.vue';
import SectionContainer from '@/Components/SectionContainer.vue';
import { whoWeAre } from '@/siteImages';
import { Head } from '@inertiajs/vue3';

const beliefs = [
    {
        title: 'The Bible',
        text: 'We believe the Bible is the inspired, infallible, and authoritative Word of God. It is without error in all that it affirms and is sufficient for all matters of faith and practice.'
    },
    {
        title: 'The Triune God',
        text: 'We believe in one God, eternally existing in three persons—Father, Son, and Holy Spirit—co-equal in being, co-eternal in nature, yet distinct in person and function.'
    },
    {
        title: 'Jesus Christ',
        text: 'We believe in the deity of Jesus Christ, His virgin birth, His sinless life, His miracles, His substitutionary death on the cross, His bodily resurrection, His ascension to the right hand of the Father, and His personal return in power and glory.'
    },
    {
        title: 'The Holy Spirit',
        text: 'We believe in the Holy Spirit who convicts, regenerates, indwells, baptizes, seals, and empowers believers for godly living and service. We believe in the present ministry of the Spirit and in the exercise of all biblical spiritual gifts.'
    },
    {
        title: 'Humanity and Sin',
        text: 'We believe that all people are created in the image of God but are sinners by nature and choice, separated from God and subject to His righteous judgment.'
    },
    {
        title: 'Salvation',
        text: 'We believe that salvation is the free gift of God, brought to us by grace and received through personal faith in Jesus Christ alone. Those who repent and believe are born again by the Holy Spirit and become children of God.'
    },
    {
        title: 'The Church',
        text: 'We believe in the universal Church, the body of Christ, composed of all who have placed their faith in Jesus Christ. We believe in the local church as a gathering of believers for worship, instruction, fellowship, and service.'
    },
    {
        title: 'Baptism and Communion',
        text: 'We believe in water baptism by immersion as a public declaration of faith and in the Lord\'s Supper as a memorial of Christ\'s death and a proclamation of His return.'
    },
    {
        title: 'Eternal Life',
        text: 'We believe in the resurrection of both the saved and the lost: the saved to eternal life in the presence of God, and the lost to eternal separation from God.'
    },
    {
        title: 'The Great Commission',
        text: 'We believe that Christ has commissioned the Church to go into all the world and make disciples, baptizing them and teaching them to obey all He has commanded.'
    }
];
</script>

<template>
    <PublicLayout>
        <Head title="Statement of Faith" />

        <HeroSection
            :image-src="whoWeAre.hero"
            eyebrow="What We Believe"
            title="Statement of Faith"
            subtitle="We are a community anchored in the unchanging truth of Scripture and the gospel of Jesus Christ"
        />

        <section class="bg-white py-16">
            <SectionContainer>
                <div class="mx-auto max-w-4xl">
                    <div class="text-center">
                        <h2 class="text-3xl font-bold text-primary md:text-4xl">Our Foundational Beliefs</h2>
                        <p class="mx-auto mt-6 max-w-3xl leading-relaxed text-slate-700">
                            At New Life Bible Church, our beliefs are rooted in the historic Christian faith as revealed in the Bible. 
                            These foundational truths guide our teaching, our worship, and our life together as a church family.
                        </p>
                    </div>

                    <div class="mt-12 space-y-8">
                        <div
                            v-for="belief in beliefs"
                            :key="belief.title"
                            class="rounded-sm border border-neutral-tan/30 bg-white p-6 shadow-sm"
                        >
                            <h3 class="text-lg font-bold text-primary">{{ belief.title }}</h3>
                            <p class="mt-3 leading-relaxed text-slate-700">{{ belief.text }}</p>
                        </div>
                    </div>

                    <div class="mt-12 rounded-sm bg-surface-light p-8 text-center">
                        <h3 class="text-xl font-bold text-primary">Questions About What We Believe?</h3>
                        <p class="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-700">
                            We would love to talk with you about the faith we hold and how it shapes our life together. 
                            Please don't hesitate to reach out to our pastoral team or connect with us on a Sunday morning.
                        </p>
                    </div>
                </div>
            </SectionContainer>
        </section>
    </PublicLayout>
</template>
