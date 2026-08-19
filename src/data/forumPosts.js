// src/data/forumPosts.js
//
// FAKE DATA — this whole file gets replaced by a Firestore fetch later.
// Every other page reads from this file, so when we add Firebase, we only
// change THIS file's export, not the pages that use it.

export const forumPosts = [
  {
    slug: "marcus-first-date-jitters",
    name: "Marcus",
    age: 29,
    category: "First Date",
    tagline: "Overthinking a coffee date tomorrow, tell me I'm not crazy",
    bio: "Bronx born and raised, work in construction, been out the game for a minute after a long relationship ended last year. Got a coffee date lined up for tomorrow with someone I matched with two weeks ago and I've rewritten my 'what am I gonna wear' text four times already. Not looking for anything rushed, just want to show up as myself.",
    tags: ["First Date", "Nerves", "Starting Over"],
    coSigns: 41,
    social: {
      instagram: "https://instagram.com",
      meetup: "https://meetup.com",
    },
    comments: [
      {
        author: "DeeFromTheBx",
        text: "Bro just be early, be present, put the phone away. That's 90% of it.",
        coSigns: 12,
      },
      {
        author: "Solange_K",
        text: "Coffee dates are low pressure on purpose. You already did the hard part by asking.",
        coSigns: 7,
      },
    ],
  },
  {
    slug: "jazmine-red-flag-or-nah",
    name: "Jazmine",
    age: 26,
    category: "Red Flag or Nah?",
    tagline: "He cancelled twice but says he's 'just busy' — red flag or nah?",
    bio: "Been talking to this guy for about a month, conversation is great when we actually talk, but he's cancelled plans twice now, both times same-day. Says work's been crazy. I don't wanna be that person who overreacts but I also don't wanna waste time. Curious what the Cypher thinks.",
    tags: ["Red Flag?", "Texting", "Should I Stay"],
    coSigns: 58,
    social: {
      instagram: "https://instagram.com",
      tiktok: "https://tiktok.com",
    },
    comments: [
      {
        author: "KMC_1983",
        text: "Once is life happening. Twice same-day is a pattern. Watch what he does next, not what he says.",
        coSigns: 22,
      },
      {
        author: "AutumnInTheBoogieDown",
        text: "Ask him to pick the next date and time himself. If he goes quiet, you got your answer.",
        coSigns: 15,
      },
    ],
  },
  {
    slug: "andre-success-story",
    name: "Andre",
    age: 34,
    category: "Success Story",
    tagline: "Met her at a Meetup hiking group, six months in now",
    bio: "Wanted to drop a good news post since this forum's usually where people vent. Joined a Bronx hiking Meetup back in the spring just to get out the house more, wasn't even thinking about dating. Met someone on the second hike. We just hit six months. Point is, sometimes it happens when you're not chasing it.",
    tags: ["Success Story", "Meetup", "Advice"],
    coSigns: 103,
    social: {
      instagram: "https://instagram.com",
      meetup: "https://meetup.com",
      spotify: "https://open.spotify.com",
    },
    comments: [
      {
        author: "TashaWrites",
        text: "This is what I needed to read today, thank you for coming back to share it.",
        coSigns: 19,
      },
      {
        author: "BigJ_Uptown",
        text: "Which Meetup group?? Asking for research purposes obviously",
        coSigns: 31,
      },
    ],
  },
  {
    slug: "priya-introduce-yourself",
    name: "Priya",
    age: 31,
    category: "Introduce Yourself",
    tagline: "New here — nurse, plant mom, terrible at small talk",
    bio: "Figured I'd introduce myself since I've been lurking for a week. Work nights at a hospital in the Bronx, spend my off days keeping about 30 plants alive and pretending I'll finish the book I started in March. Looking to meet people the old fashioned way, not just swiping. Open to Meetup groups if anyone's got recs.",
    tags: ["Introduce Yourself", "Meetup", "New Here"],
    coSigns: 27,
    social: {
      instagram: "https://instagram.com",
    },
    comments: [
      {
        author: "KMC_1983",
        text: "Welcome to the Cypher. Check the events tag, a few plant-swap Meetups get posted there.",
        coSigns: 9,
      },
    ],
  },
];

export function getPostBySlug(slug) {
  return forumPosts.find((post) => post.slug === slug);
}
