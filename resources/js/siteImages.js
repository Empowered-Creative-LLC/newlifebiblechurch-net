import { siteImage } from '@/utils/siteImage';

/** Labeled folders under public/images — matches design exports per page.
 * Page photos in images/album/ are the church's own photos (ticket #10024). */
export const home = {
    hero: siteImage('album/home-hero.jpg'),
    joinSunday: siteImage('album/home-join-sunday.jpg'),
    kids: siteImage('album/home-kids.jpg'),
    youth: siteImage('album/home-youth.jpg'),
    whatToExpect: siteImage('album/home-what-to-expect.jpg'),
    getConnected: siteImage('album/home-get-connected.jpg'),
    meetTeam: siteImage('album/home-worship-team.jpg'),
    footerCta: siteImage('album/home-footer.jpg'),
};

/** Start Here page image map */
export const startHere = {
    hero: siteImage('album/start-here-hero.jpg'),
    joinSunday: siteImage('Start Here/ESC.jpg'),
    whatToExpect: siteImage('album/start-here-what-to-expect.jpg'),
    ministryKids: siteImage('album/home-kids.jpg'),
    ministryYouth: siteImage('album/start-here-youth.jpg'),
    ministryAdult: siteImage('album/start-here-hero.jpg'),
    walkAlone: siteImage('album/start-here-walk-alone.jpg'),
};

export const connect = {
    hero: siteImage('album/connect-hero.jpg'),
    comeAsYouAre: siteImage('Connect/Untitled design (36).png'),
};

export const whoWeAre = {
    hero: siteImage('album/who-we-are-hero.jpg'),
    purpose: siteImage('album/who-we-are-purpose.jpg'),
    mission: siteImage('album/who-we-are-mission.jpg'),
    vision: siteImage('album/who-we-are-vision.jpg'),
    welcome: siteImage('album/who-we-are-welcome.jpg'),
    elderNate: siteImage('Who We Are/4I3A9394.jpg'),
    elderJeff: siteImage('Who We Are/Jeff Marble.jpg'),
    elderJohn: siteImage('Who We Are/Goasdone, John.jpg'),
};

export const ministryTeam = [
    { name: 'Justin Dunning', title: 'Youth Ministry', photo: siteImage('Who We Are/4I3A9373.jpg') },
    { name: 'Noelle Hobson', title: 'First Impressions', photo: siteImage('Who We Are/4I3A9376.jpg') },
    { name: 'Neil Mohler', title: 'Worship Ministry', photo: siteImage('Who We Are/4I3A9380.jpg') },
    { name: 'Tyler Paulson', title: 'Children\'s Ministry', photo: siteImage('Who We Are/Tyler Paulson.jpg') },
    { name: 'Maddie Sager', title: 'Administrative Assistant', photo: siteImage('Who We Are/4I3A9390.jpg') },
    { name: 'Bob Searer', title: 'Adult Groups', photo: siteImage('Who We Are/4I3A9386.jpg') },
    { name: 'Connor Umholtz', title: 'Operations Manager', photo: siteImage('Who We Are/4I3A4809.png') },
];

export const ministries = {
    hero: siteImage('album/ministries-hero.jpg'),
    kids: siteImage('album/home-kids.jpg'),
    youth: siteImage('album/home-youth.jpg'),
    adults: siteImage('album/home-get-connected.jpg'),
    youBelong: siteImage('Ministries Landing/Untitled design (27).png'),
};

export const kidsMinistry = {
    hero: siteImage('album/kids-hero.jpg'),
    /** Add `public/images/Kids Ministry/CBC Jr Camp promo.png` when artwork is ready. */
    cbcJrCampPromo: siteImage('Kids Ministry/CBC Jr Camp promo.png'),
    intro: siteImage('album/kids-intro.jpg'),
    whatToExpect: siteImage('album/kids-what-to-expect.jpg'),
    cta: siteImage('album/kids-cta.jpg'),
    experience: [
        siteImage('Kids Ministry/Bible.png'),
        siteImage('Kids Ministry/Leader.png'),
        siteImage('Kids Ministry/Friendships.png'),
        siteImage('Kids Ministry/Faith.png'),
    ],
};

export const adultGroups = {
    hero: siteImage('album/adults-hero.jpg'),
    intro: siteImage('album/adults-intro.jpg'),
    whatToExpect: siteImage('album/adults-what-to-expect.jpg'),
    cta: siteImage('album/adults-cta.jpg'),
    experience: [
        siteImage('Adult Groups/Relationships.png'),
        siteImage('Adult Groups/Bible .png'),
        siteImage('Adult Groups/Encouragement.png'),
        siteImage('Adult Groups/Belonging.png'),
    ],
};

export const youthMinistry = {
    hero: siteImage('album/youth-hero.jpg'),
    intro: siteImage('album/youth-intro.jpg'),
    whatToExpect: siteImage('album/youth-what-to-expect.jpg'),
    cta: siteImage('album/youth-cta.jpg'),
    experience: [
        siteImage('Youth Ministry/Community.png'),
        siteImage('Youth Ministry/Bible .png'),
        siteImage('Youth Ministry/Encouragement.png'),
        siteImage('Youth Ministry/Leadership Ops.png'),
    ],
};

export const media = {
    hero: siteImage('album/media-hero.jpg'),
    /** Latest message placeholder (“coming soon” graphic). */
    featured: siteImage('Media/Untitled design (35).png'),
    /** Building / exterior — only two files in Media; use general photo for Sunday section. */
    joinSunday: siteImage('photos/nlbc-3.jpg'),
    comeAsYouAre: siteImage('Connect/Untitled design (36).png'),
};
