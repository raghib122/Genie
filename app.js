// Password prompt
function greeting() {
    var userInput = prompt("Please enter the correct password to proceed Baby❤️❤️:");
    
    if (userInput === null) {
      // User clicked "Cancel"
      alert("Access denied. Please provide the correct password.");
      greeting(); // Call the function recursively to ask again
    } else {
      userInput = userInput.trim();
    
      if (userInput === "LOVE" || userInput === "raghib" || userInput === "Pramila" || userInput === "pramila" || userInput === "Raghib") {
        alert("Welcome, Baby!");
        startMessages(); // Start showing alert messages
      } else {
        alert("Sorry, my Wife. Please try again.");
        greeting(); // Call the function recursively if the input is incorrect
      }
    }
  }
  
  // Function to start the alert messages after password validation
  function startMessages() {
    // Show care message after 9 seconds
    setTimeout(() => {
      alert("My wife❤️👸, you are a precious gem in this vast universe. Take good care of yourself, and remember that I'm with you in every situation.😊🌹💕");
    }, 9000);
  
    // Show greeting message based on time
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
  
    var greetingMessage;
    if (currentHour >= 0 && currentHour < 12) {
      greetingMessage = "Good morning, my wife❤️. As the sun rises, I want you to know that your well-being is always on my mind. Take care and embrace the day with a smile. 🌞💖😊";
    } else if (currentHour >= 12 && currentHour < 18) {
      greetingMessage = "Good afternoon, my wife ❤️. I hope your day is going well. Take a moment to relax and recharge, and remember, I'm here for you if you need anything. 🌼💖😊";
    } else {
      greetingMessage = "Good evening, my wife❤️. I just wanted to send some positive energy your way as the day unfolds into a peaceful evening. 🌆😊❤️🦄💖";
    }
  
    alert(greetingMessage);
  
    // Start periodic alerts
    wish();
    love();
  }
  
  // Periodic care messages
  function wish() {
    setInterval(() => {
      alert("Baby❤️, Take care of yourself.");
    }, 300000); // Every 5 minutes
  }
  
  // Periodic love message
  function love() {
    setInterval(() => {
      alert(`And I'd choose you; in a hundred lifetimes, in a hundred worlds, in any version of reality, I'd find you and I'd choose you.`);
    }, 120000); // Every 2 minutes
  }
  
  // Chat function to respond to user inputs
  function talk() {
    var know = {
      "Hello": "ٱلسَّلَامُ عَلَيْكُمْ",
      "hello": "ٱلسَّلَامُ عَلَيْكُمْ",
      "hii": "ٱلسَّلَامُ عَلَيْكُمْ",
      "hi": "ٱلسَّلَامُ عَلَيْكُمْ",
      "hiii": "ٱلسَّلَامُ عَلَيْكُمْ",
      "hey": "ٱلسَّلَامُ عَلَيْكُمْ",
      "Hey": "ٱلسَّلَامُ عَلَيْكُمْ",
    };
  
    var poetry = {
      "0": "In the quiet, there is zero, no sound to be found,\nYet in silence, love can truly abound. ❤️👸",
      "1": "One is the start of all things anew,\nJust like my love, forever true. ❤️🌹",
      "2": "Two hearts that beat as one,\nOur love story has just begun. ❤️💞",
      "3": `For My Wife, My Eternal Love💖

      In the vast expanse of life’s endless sea, 🌊  
      I found a gem, a light that shone on me. ✨  
      You, my love, came like a gift from above, 🎁  
      And with every beat, my heart whispers love. 💞
      
      I thank the divine, the stars, and the skies, 🌟  
      For guiding me to you, for your love that never dies. 🙏  
      I promise you this, as long as I breathe, 🌬️  
      My love will be yours, in every word, every deed. ❤️
      
      Forever, my darling, our love will stay strong, 💪  
      In this world, and beyond, where we both belong. 🌍  
      Though mistakes I may make, and at times, I may fall, 😔  
      You forgive with grace, you forgive it all. 💌
      
      I’m sorry, my love, for the times I’ve been wrong, 😢  
      But I vow to you now, where I belong. 💍  
      I’ll love you, cherish you, hold you so near, 🤗  
      Through every joy, through every tear. 😘
      
      Your love, my darling, is a treasure so rare, 💎  
      Even the heavens can’t compare. 🌌  
      Your beauty, my love, it’s beyond any sight, 👑  
      More radiant than the stars in the darkest night. 🌙
      
      Your kindness is boundless, like an endless sea, 🌊  
      I strive to be worthy, to love you endlessly. ♾️  
      Though I can’t match the care you’ve shown, 🤲  
      I promise to love you, as my very own. 💞
      
      I’ll keep you happy, through all of our days, ☀️  
      Through the ups and downs, through life’s winding ways. 🌈  
      For as long as my heart continues to beat, 💓  
      It will beat for you, in rhythm, so sweet. 🎶
      
      You are mine, and I am yours, 👫  
      Together forever, through every door. 🚪  
      Your beauty, your kindness, your love so divine, 💫  
      I’m blessed every day that you are mine. 🙌
      
      So here's to forever, my love, my queen, 👑  
      To a love so deep, so pure, and serene. 🌸  
      I love you, my baby, my heart’s delight, 🌹  
      Forever and always, you are my light. 🔥`,

      "4": `In the garden of my heart, you bloom so bright,
      A radiant star in the depths of night.
      Your laughter is the music, my sweetest song,
      With you by my side, where I belong.
      
      Your love, my anchor, in stormy seas,
      A gentle whisper in the evening breeze.
      With every sunrise, I fall anew,
      My dearest love, my wife, I cherish you.
      
      In every moment, with every breath,
      Your love is a treasure, deep as the depths.
      Forever bound, our souls in flight,
      My heart, my home, my guiding light.`,

      "5": `In the garden of life, where stars brightly gleam,
      I found my treasure, my heart's sweetest dream.
      Your kindness a beacon, your beauty divine,
      In the tapestry of fate, our souls intertwine.
      
      With intelligence that sparkles, a light so true,
      Every day I’m grateful for the wonder of you.
      You’re my precious gem, my life’s delight,
      In your love’s gentle embrace, everything feels right.
      
      Thankful am I for each moment, each day,
      Your presence a blessing in every way.
      In this life’s journey, with you by my side,
      I’ve found my heaven, my love, my bride.`,

      "6": `In every sunrise, I see your light,
      A beauty so pure, so warm, so bright.
      With strength and grace, you conquer each day,
      Hardworking and bold in every way.
      
      Intelligence gleams in your thoughtful eyes,
      A brilliance that lifts, that soars, that flies.
      Yet with all that wisdom, you're gentle and kind,
      And in your laughter, my peace I find.
      
      You're cute in ways that words can't define,
      A gift so rare, and best of all, you're mine.
      In this world of wonders, none compare,
      To the love we share, to the bond we bear.
      
      I thank the stars for your sweet existence,
      For your love, your heart, your gentle persistence.
      You're my dream, my joy, my perfect part,
      I love you deeply, with all my heart.`,

      "7": `In the quiet of dawn, when the world is still,
      I marvel at you, with a heart so filled.
      Hardworking hands that craft our days,
      Yet tender enough in the gentlest ways.
      
      Your beauty, my love, is more than skin deep,
      It’s in the kindness you sow, the promises you keep.
      In the light of your smile, I find my way,
      In your warmth, I long forever to stay.
      
      Intelligence shines in all that you do,
      A mind so sharp, so wise, so true.
      Yet within that brilliance, there's a softness, too,
      A balance so perfect, found only in you.
      
      Cute as the dawn, you brighten my soul,
      With you, my love, I am made whole.
      In a world so vast, I'm blessed you're mine,
      A love like ours, nothing can define.
      
      I cherish your being, your essence so rare,
      For your presence on Earth, a silent prayer.
      I thank the heavens for each day by your side,
      In your love, forever, I’ll abide.`

      
    };
  
    var user = document.getElementById('userBox').value.trim();
    var chatLog = document.getElementById('chatLog');
    var response = '';
  
    if (user in know) {
      response = know[user];
    } else if (user in poetry) {
      response = poetry[user];
    } else if (!isNaN(user)) {
      response = "You entered the number: " + user + ". Numbers have their own beauty in this world! ❤️👸";
    } else {
      response = "You are precious, my Wife❤️👸. I appreciate your input! ❤️👸";
    }
  
    chatLog.innerHTML = user + "<br>";
    chatLog.innerHTML += response + "<br>";
  }
  
  // Start with the password prompt
  greeting();
  
