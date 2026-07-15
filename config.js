// Supabase browser configuration.
// Fill in the Project URL and Publishable/Anon key from your Supabase dashboard.
// Never put a service_role key or sb_secret key in this browser file.
window.APP_CONFIG = {
  supabaseUrl: "https://tzxtltedbrdxjwtkffnw.supabase.co",
  supabaseAnonKey: "sb_publishable_PEBpUvEezI33Mfy_s4gU1Q_tcS20UlV",
  planId: "david-28",

  theme: {
    name: "Editorial Beige",
    primary: "#7c5a3a",
    background: "#e9e0d8",
    accent: "#9b7628"
  },

  invitation: {
    sender: "Zahra",
    recipient: "Bagas",
    age: 28,
    dateLabel: "Saturday, July 25, 2026",
    timeLabel: "10:00 AM"
  },

  slides: [
    {
      type: "single",
      image: "./assets/slide-1-david.JPG",
      imageAlt: "David sitting behind a bouquet of flowers",
      from: "Zahra",
      to: "Bagas",
      text: "Happy birthday love, terima kasih udah selalu sama aku yaa bub, terima kasih kamu udah selalu berusaha jadi yang terbaik. Semoga di tahun ini dan seterusnya kita bisa selalu diberkahi kesehatan dan kebahagiaan, dilancarkan rezekinya."
    },
    {
      type: "collage",
      images: [
        "./assets/slide-2-couple-red.JPG",
        "./assets/slide-2-couple-casual.JPG"
      ],
      imageAlts: [
        "Zahra and David posing together in front of a red background",
        "Zahra and David standing together during a casual outing"
      ],
      text: "To the one who makes my heart skip a beat every single day: Happy birthday! Let’s make more beautiful memories this year."
    },
    {
      type: "single",
      image: "./assets/slide-4-david-sculpture.JPG",
      imageAlt: "David standing in front of a giant sculpture outdoors",
      text: "A little snapshot of you that I adore — calm, handsome, and always making my heart feel at home."
    },
    {
      type: "single",
      image: "./assets/slide-5-david-funny.JPG",
      imageAlt: "A playful close-up of David making a funny expression",
      text: "And of course... your cute, silly side will always be one of my favorite things about you hehe ♡"
    },
    {
      type: "single",
      image: "./assets/slide-6-couple-field.JPG",
      imageAlt: "Zahra and David standing together outdoors in a field",
      text: "Us, in one more sweet little memory. Semoga tahun ini dan seterusnya kita punya lebih banyak kebahagiaan ❤️"
    },
    {
      type: "single",
      image: "./assets/slide-3-david.JPG",
      imageAlt: "David wearing traditional formal attire at night",
      text: "Kalau udah baca ini, lanjut isi form-nya yaa bub hehe ❤️",
      cta: "Open Invitation 💌"
    }
  ]
};
