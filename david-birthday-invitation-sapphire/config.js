// Supabase browser configuration.
// Fill in the Project URL and Publishable/Anon key from your Supabase dashboard.
// Never put a service_role key or sb_secret key in this browser file.
window.APP_CONFIG = {
  supabaseUrl: "https://tzxtltedbrdxjwtkffnw.supabase.co",
  supabaseAnonKey: "sb_publishable_PEBpUvEezI33Mfy_s4gU1Q_tcS20UlV",
  planId: "david-28",

  theme: {
    name: "Sapphire",
    primary: "#0c3477",
    background: "#020817",
    accent: "#d6b45a"
  },

  invitation: {
    sender: "Zahra",
    recipient: "David",
    age: 28,
    dateLabel: "Saturday, July 25, 2026",
    timeLabel: "1:00 PM"
  },

  slides: [
    {
      type: "single",
      image: "./assets/slide-1-david.JPG",
      imageAlt: "David sitting behind a bouquet of flowers",
      from: "Zahra",
      to: "David",
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
      image: "./assets/slide-3-david.JPG",
      imageAlt: "David wearing traditional formal attire at night",
      text: "Kalau udah baca ini, lanjut isi form-nya yaa bub hehe ❤️",
      cta: "Open Invitation 💌"
    }
  ]
};
