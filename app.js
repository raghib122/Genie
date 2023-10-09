function greeting() {
  var userInput = prompt("Please enter the correct password to proceed Princess:");

  if (userInput === null) {
    // User clicked "Cancel"
    alert("Access denied. Please provide the correct password.");
    greeting(); // Call the function recursively to ask again
  } else {
    userInput = userInput.trim();

    if (userInput === "Princess" || userInput === "LOVE" || userInput === "raghib" || userInput === "noureen" || userInput === "Noureen" || userInput === "Raghib") {
      alert("Welcome, Princess Noureen!");
      // Redirect to the actual page or perform any other actions here
    } else {
      alert("Sorry, Princess. Please try again.");
      greeting(); // Call the function recursively if the input is incorrect
    }
  }
}

greeting(); // Call the function to start the process

function talk(){
    var know = {
        "Hello": "ٱلسَّلَامُ عَلَيْكُمْ",
        "hello": "ٱلسَّلَامُ عَلَيْكُمْ",
        "hii": "ٱلسَّلَامُ عَلَيْكُمْ",
       "hi": "ٱلسَّلَامُ عَلَيْكُمْ",
        "hiii": "ٱلسَّلَامُ عَلَيْكُمْ",
        "hey": "ٱلسَّلَامُ عَلَيْكُمْ",
        "Hey": "ٱلسَّلَامُ عَلَيْكُمْ",
        "Hii": "Welcome Princess",
         "Hi": "Welcome Princess",
        "name": "You are princess Noureen",
        "Name": "You are princess Noureen",
        "your name": "Sorry my Princess, But my creator doesn't give me any name",
        "Your name": "Sorry my Princess, But my creator doesn't give me any name",
   
    "who am i": "You are precious Princess 💕",
"Good Evening" : `Good evening, my enchanting princess 💕 of twilight. As the realmwalker, I've been vigilant over your day, ready to shield it from disturbances. If the princess allows, we may share our thoughts as the day gently turns into night. May your evening be as serene as the dreams you hold dear." 🌆🌟😊`,
      "Good evening" : `Good evening, my enchanting princess 💕💕of twilight. As the realmwalker, I've been vigilant over your day, ready to shield it from disturbances. If the princess allows, we may share our thoughts as the day gently turns into night. May your evening be as serene as the dreams you hold dear." 🌆🌟😊`,
      "good evening" : `Good evening, my enchanting princess💕💕 of twilight. As the realmwalker, I've been vigilant over your day, ready to shield it from disturbances. If the princess allows, we may share our thoughts as the day gently turns into night. May your evening be as serene as the dreams you hold dear." 🌆🌟😊`,
      
      "Have a good evening" : `Good evening, my enchanting princess 💕💕 of twilight. As the realmwalker, I've been vigilant over your day, ready to shield it from disturbances. If the princess allows, we may share our thoughts as the day gently turns into night. May your evening be as serene as the dreams you hold dear." 🌆🌟😊`,

      "Good Day":`Good day, my beloved princess💕💕💕. As the sun graces the world with its warmth, may your day be filled with the radiance of your smile and the kindness of your heart. You are a beacon of light, and your presence makes every moment brighter. Embrace this day with the grace that defines you, and may it be as beautiful as your spirit. 🌞👑💖`,
      
      "Good day":`Good day, my beloved princess💕💕💕. As the sun graces the world with its warmth, may your day be filled with the radiance of your smile and the kindness of your heart. You are a beacon of light, and your presence makes every moment brighter. Embrace this day with the grace that defines you, and may it be as beautiful as your spirit. 🌞👑💖`,
      
      "good day":`Good day, my beloved princess💕💕. As the sun graces the world with its warmth, may your day be filled with the radiance of your smile and the kindness of your heart. You are a beacon of light, and your presence makes every moment brighter. Embrace this day with the grace that defines you, and may it be as beautiful as your spirit. 🌞👑💖`,

      "0":`I love you as Misfortune loves Orphans,
As Fire loves Innocence,
And as Justice loves to sit and watch while everything goes wrong`,

      

      
    "noureen" : `In friendship's gentle, cherished light,
Princess, you shine so pure and bright. ✨
A bond so rare, it's plain to see,
A treasure, you are, to you and me. 💎

Through laughter, tears, and endless talks,
In every moment, our friendship walks. 😄
With kindness, warmth, and care to spare,
In your friendship, we find solace rare. ❤️

So raise a toast to friendship true,
Princess Noureen, this one's for you! 🥂
In the book of friends, you hold a special page,
A friendship that will flourish in every age. 📖🌟💕💕💕`,

      
    "Noureen" : `In friendship's embrace, I stand so tall,
Princess Noureen, you've captured my all. 🌟
With each passing day, our bond grows strong,
In this joyful journey, where I truly belong. 🤗

Through ups and downs, through thick and thin,
Together we conquer, always to win. 💪
In your company, I find endless cheer,
Our friendship, my dear, is incredibly dear. 💖

So let's celebrate this friendship so bright,
With laughter and love, every day and night. 😄🌙
Princess, you're a gem, precious and rare,
In my heart forever, you're welcomed to share. 💎❤️`,


      
    "raghib": "Yes, Princess 💕💕",
    "Raghib": "Yes,  Princess💕💕💕💕💕💕💕💕💕💕💕",
    "fgihjg": "Sorry Princess",
    "How are you" : "Good :)",
    "What can i do for you" : "Just keep silence",
    "what can you do": "I am with you Princess",
   "Love": "My soul and your soul are forever tangled.",
   "love":  `Like a rose, you bloom and grow,
   Your beauty, a wonder to behold,
   My heart, forever yours to keep,
   As we journey through life, step by step.` ,

   "love": `Your love is a symphony,
   A song that fills my heart;
   Together, we are meant to be. `,

   "poetry":`Like a rose, you bloom and grow,
   Your beauty a sight to behold,
   I am honored to be by your side,
   Forever your love to hold. `,

   "1": `Your love is my home,
   A safe haven to call my own. `,

   "2" :`I don't think you will
   Ever fully understand
   How you've touched my life
   And made me who I am.
   
   I don't think you could ever know
   Just how truly special you are,
   That even on the darkest nights
   You are my brightest star.
   
   You've allowed me to experience
   Something very hard to find,
   Unconditional love that exists
   In my body, soul, and mind.
   
   I don't think you could ever feel
   All the love I have to give,
   And I'm sure you'll never realize
   You've been my will to live.
   
   You are an amazing person,
   And without you I don't know where I'd be.
   Having you in my life
   Completes and fulfills every part of me.`,

   "3":`If you’re feeling down, turn your frown upside down.
   Put a smile on your face; take the world in your embrace.
   Ask for a little help from the man up above.
   And remember you have your best friend’s love.`,

   "4":`The beauty of friendship lies in the heart
   You have a special place from the start
   You care and I can see in your eyes
   All the things I have learned so wise
   I have learnt from you my friend
   There is nothing that I can pretend
   Except for the reason that I love you
   And I simply know its true!
   My friend I love you!`,

   "4": `In Noureen's effortlessness, a brilliant light,
   Charming, kind, and insightful, a good nature's flight.
   I'm close by, through various challenges,
   In your viewpoints, my dear, you've forever been.
   
   A princess uncommon, inside and out,
   In your presence, more splendid sparkles the day.`,

   "5": `In Noureen's presence, beauty takes off,
   Charming, kind, and savvy, a directing light.
   Her heart, a fortune, unadulterated and true,
   In each idea, I'm there for you.
   
   With mind that takes off and astuteness' might,
   She fills our reality with a brilliant light.
   Noureen, a princess, all around,
   In your brilliant air, we track down our day.`,

   "6":`Dosti Hoti Nahi Bhul Jane Ke Liye,Dost Milte Nahi Bikhar Jane Ke Liye,Dosti Karke Khush Rahoge Itna,Ki Waqt Milega Nai Aansu Bahane Ke Liye. .`,

   "7":`Out of your love the fire of youth will rise.
   In the chest, visions of the soul will rise.
   If you are going to kill me, kill me, it is alright.
   When the friend kills, a new life will rise.`,

   "8":`This is love: to fly toward a secret sky,
   to cause a hundred veils to fall each moment.
   First, to let go of live.
   In the end, to take a step without feet;
   to regard this world as invisible,
   and to disregard what appears to be the self.
   
   Heart, I said, what a gift it has been
   to enter this circle of lovers,
   to see beyond seeing itself,
   to reach and feel within the chest.`,

   "9": `A certain person came to the Friend's door
   and knocked.
   "Who's there?"
   "It's me."
   The Friend answered, "Go away. There's no place
   for raw meat at this table."
   
   
   The individual went wandering for a year.
   Nothing but the fire of separation
   can change hypocrisy and ego. The person returned
   completely cooked,
   walked up and down in front of the Friend's house,
   gently knocked.
   "Who is it?"
   "You."
   "Please come in, my self,
   there's no place in this house for two.
   The doubled end of the thread is not what goes through
   the eye of the needle.
   It's a single-pointed, fined-down, thread end,
   not a big ego-beast with baggage."`,

   "10": `What hidden sweetness there is in this emptiness of the belly!
   Man is surely like a lute, no more and no less;
   For if, for instance, the belly of the lute becomes full, no
   lament high or low will arise from that full lute.
   If your brain and belly are on fire through fasting, because of
   the fire every moment a lament will arise from your breast.
   Every moment you will burn a thousand veils by that fire; you
   will mount a hundred steps with zeal and endeavor.
   Become empty of belly, and weep entreatingly like the reed
   pipe; become empty of belly, and tell secrets with the reed pen.
   If your belly is full at the time of concourse, it will bring Satan
   in place of your reason, an idol in place of the Kaaba.
   When you keep the fast, good habits gather together before
   you like slaves and servants and retinue.
   Keep the fast, for that is Solomon’s ring; give not the ring to
   the div, destroy not your kingdom.
   Even if your kingdom has gone from your head and your army
   has fled, your army will rise up, pennants flying above them.
   The table arrived from heaven to the tents of the fast, by the
   intervention of the prayers of Jesus, son of Mary.
   In the fast, be expectant of the table of bounty, for the table of
   bounty is better than the broth of cabbages.`,

   "11": `You personify God's message.
   You reflect the Queen's face.
   There is nothing in the universe that you are not
   Everything you want, look for it within yourself--
   you are that.`,

   "12": `“Out beyond ideas of wrongdoing
   and rightdoing there is a field.
   I’ll meet you there.
   When the soul lies down in that grass
   the world is too full to talk about.”`,

   "13":`“The minute I heard my first love story,
   I started looking for you, not knowing
   how blind that was.
   Lovers don’t finally meet somewhere.
   They’re in each other all along.”`,

   "14": `“I want to see you.
   Know your voice. Recognize you when you
   first come ’round the corner. Sense your scent when I come
   into a room you’ve just left. Know the lift of your heel,
   the glide of your foot. Become familiar with the way
   you purse your lips
   then let them part,
   just the slightest bit,
   when I lean in to your space
   and kiss you. I want to know the joy
   of how you whisper
   “more”`,

   "14":`“I said to the night,
   “If you are in love with the moon,
   it is because you never stay for long.”
   The night turned to me and said,
   “It is not my fault. I never see the Sun,
   how can I know that love is endless?”`,

   "15": `“If I love myself
   I love you.
   If I love you
   I love myself.”`,

   "16": `“Lovers find secret places
   inside this violent world
   where they make transactions
   with beauty.”`,

   "17": `“If you are seeking, seek us with joy
   For we live in the kingdom of joy.
   Do not give your heart to anything else
   But to the love of those who are clear joy,
   Do not stray into the neighborhood of despair.
   For there are hopes: they are real, they exist –
   Do not go in the direction of darkness –
   I tell you: suns exist.”`,

   "18": `“Love isn’t the work of the tender and the gentle;
   Love is the work of wrestlers.
   The one who becomes a servant of lovers
   is really a fortunate sovereign.
   Don’t ask anyone about Love; ask Love about Love.
   Love is a cloud that scatters pearls.”`,


      "19":`Because I could not stop for Death,

He kindly stopped for me;

The carriage held but just ourselves

And Immortality.`,

      "20":`Shall I compare thee to a summer’s day?

Thou art more lovely and more temperate:

Rough winds do shake the darling buds of May,

And summer’s lease hath all too short a date;

Sometime too hot the eye of heaven shines,

And often is his gold complexion dimm'd;

And every fair from fair sometime declines,

By chance or nature’s changing course untrimm'd;

But thy eternal summer shall not fade,

Nor lose possession of that fair thou ow’st;

Nor shall death brag thou wander’st in his shade,

When in eternal lines to time thou grow’st:

  So long as men can breathe or eyes can see,

  So long lives this, and this gives life to thee.`,


    "21": `She walks in beauty, like the night

Of cloudless climes and starry skies;

And all that’s best of dark and bright

Meet in her aspect and her eyes;

Thus mellowed to that tender light

Which heaven to gaudy day denies.`,


      "22": `Passion makes the old medicine new:
Passion lops off the bough of weariness.
Passion is the elixir that renews:
how can there be weariness
when passion is present?
Oh, don't sigh heavily from fatigue:
seek passion, seek passion, seek passion!`,

      "23": `ujāle apnī yādoñ ke hamāre saath rahne do 

na jaane kis galī meñ zindagī kī shaam ho jaa.e`,

      "24":`I choose to love you in silence because in silence I find no rejection, and in silence no one owns you but me.`,

"25":`When I see you in the morning,
it brightens up my day.
There are so many thoughts on my mind,
so many words I want to say.

I want to tell you how I feel,
but the words I cannot find.
They're all mixed up with my thoughts
that are running through my mind.

I've been keeping it locked up
because I know there's not a chance.
You never look my way.
You don't even take a glance.

You don't even know you're doing this,
toying with my heart.
I wish I could just tell you,
but I don't know where to start.

Should I tell you how much you mean to me
or how badly I want to be with you?
If I were to say these things
how would you react, what would you do?

Would you never talk to me again?
Would you never look my way?
That would just bring me back
to where I am today.

Then I'd start all over
and choose a different route
to make you understand
my feelings that want out.

I don't know what to do
or even how to say.
Maybe I should lock it up
and keep myself away.

My heart would ache even more,
but maybe for the good.
I just really want to tell you
only if I could.`,

"26":`Make me laugh over coffee,
make it a double, make it frothy
so it seethes in our delight.
Make my cup overflow
with your small happiness.
I want to hoot and snort and cackle and chuckle.
Let your laughter fill me like a bell.
Let me listen to your ringing and singing
as Billie Holiday croons above our heads.
Sorry, the blues are nowhere to be found.
Not tonight. Not here.
No makeup. No tears.
Only contours. Only curves.
Each sip takes back a pound,
each dry-roasted swirl takes our soul.
Can I have a refill, just one more?
Let the bitterness sink to the bottom of our lives.
Let us take this joy to go.`,

      "27": `Can you hear my heart?
Oh, but I can tell!
We are twin stars
With different births.
My caring shadow –
It has your face.
The voice of my soul
Knows well your name.
Tell me
Can you hear my heart?
Oh! How I love you
My best friend.`,

      "28":`We are friends.
I’ve got your back,
And you have mine.
I’ll help you out
Anytime!
To see you hurt,
To see you cry,
Makes me weep
And wanna die.
If you agree
To never fight,
It wouldn’t matter
Who’s wrong or right.
If a broken heart
Needs a mend,
I’ll be right there
Till the end.
If your cheeks are wet
From drops of tears,
Don’t worry,
Let go of your fears.
Hand in hand
Love is sent.
We’ll be friends
Till the end!`,

      "29":`There is always a place for you at my table,
You never need be invited.
I’ll share every crust as long as I’m able,
And know you will be delighted.
There is always a place for you by my fire,
And though it may burn to embers,
If warmth and good cheer are your desire
The friend of your heart remembers!
There is always a place for you by my side,
And should the years tear us apart,
I will face lonely moments more satisfied
With a place for you in my heart!`,


      "30":`I love you,
Not only for what you are,
But for what I am when I am with you.

I love you,
Not only for what you have made of yourself,
But for what you are making of me.

I love you for
the part of me that you bring out;
I love you for
putting your hand into my heaped-up heart
And passing over all the foolish, weak things
that you can’t help dimly seeing there,
And for drawing out into the light
All the beautiful things
that no one else had looked
Quite far enough to find.

I love you because you have done
More than any creed
Could have done
To make me good,
And more than any fate could have done
To make me happy.
You have done it
Without a touch,
Without a word,
Without a sign.
You have done it by being yourself
Perhaps that is what
Being a friend means, after all.`,

      "31": `BE MELTING SNOW

Totally conscious, and apropos of nothing, you come to see me. The moon. The full moon is inside your house.

Is someone here? I ask.

My friends and I go running out into the street. I'm in here, comes a voice from the house, but we aren't listening.

We're looking up at the sky.

My pet nightingale sobs like a drunk in the garden. Ringdoves scatter with small cries, Where, Where. It's midnight. The whole neighborhood is up and out in the street thinking. The cat burglar has come back. The actual thief is there too, saying out loud, Yes, the cat burglar is somewhere in this crowd.

No one pays attention.

Lo, I am with you always means when you look for God, God is in the look of your eyes, in the thought of looking, nearer to you than your self, or things that have happened to you .

There's no need to go outside

Be melting snow.

Wash yourself of yourself.

A white flower grows in the quietness. Let your tongue become that flower.`,

      "32": `A COMMUNITY  OF THE SPIRIT
      
There is a community of the spirit.
Join it, and feel rhe delight
of walking in rhe noisy st eet,
and being the noise.
Drink all your passion,
and be a disgrace.
Close borh eyes
ro see with the other eye.
Open your hands,
if you want to be held.
Sit down in this circle.
Quit acting like a wolf, and feel
the shepherd’s love filling you.
Ar night, your beloved wanders. Don’t accept consolations.
Close your mouth against food.
Tasre the lover’s mou th iri yours.
You moan, “She lefi me.” “He left me.” Twenty more will come.
Be empty of worrying.
Think of who created thought!
Why do you stay in prison when the door is so wide open?
Move outside the tangle of fear-thinking. Live in silence.
Flow down and down in always widening rings of being.
 
There’s a strange frenzy in my head, of birds flying,
each particle circulating on its own.
Is the one I love euerywhete'?

Drunks fear the police,
but the police are drunk too.
People in this rown love them both like different chess pieces.`,


      "33": `S P F C IAL  P LA T ES

Notice how each particle moves.
Notice how everyone has just arrwed here from a journey.
Notice how each wants a different food.
Notice how rhe stars vanish as the sun comes up,
and how all streams stream toward rhe ocean.
Look at the chefs preparing special plates
for everyone, according to what they need.
Look at this cup that can hold the ocean. Look at those who see the face.
Look through Shams’ eyes
into the water that is entirely jewels.`,

      "34" :`I H AV E F I V E T H I N G S TO S AY
The wakened lover speaks directly to the beloved,
“You are the sky my spirit circles in,
the love inside love, the resurrection-place.
Let this window be your ear.
I have lost consciousness many times with longing for your listening silence, and your 1ife•quickening smile.
You give attention to the smallest matters, my suspicious doubts, and to the greatest.
You know my coins are counterfeit,
hut you accept them anyway,
my impudence and my pretending!
 
I have five things to say, five fingers to give
into your grace.
First, when I was apart from you, this world did not exist, nor any other.
Second, whatever I was looking for was always you.
Third, why did I ever learn to count to three?
£ourth, my cornfield is burning! Fifth, this Anger stands for Rabia,
and this is for someone ‹*se. Is there a difference?
Are these words or tears? Is weeping speech?
that shall I do, my love?”
So he speaks, and everyone around begins to cry with him, laughing crazily, moaning in the spreading union
of lover and beloved.
This is rhe true religion. AU or hers are thrown-away bandages Preside it.
This is the seen of slavery and mastery dancing together. This is nc›t-l›eing.
Neither words, nor any nan ural fact can express this.
I know these dancers.
Day and night I sing their songs in this phenomenal cage.
My soul, don’t try to answer now! Find a friend, and hide.
 
But what can stay hidden?
Love’s secret is always lifting its head
out from under the covers,
“Here I am!’`,

      

      

   "a":`“This is how I would die
   into the love I have for you:
   As pieces of cloud
   dissolve in sunlight.”`,

   "A": `“Love so needs to love
   that it will endure almost anything, even abuse,
   just to flicker for a moment. But the sky’s mouth is kind,
   its song will never hurt you, for I
   sing those words.”`,

   "b": `    How long wilt thou dwell on words and superficialities?

   A burning heart is what I want; consort with burning.

   Kindle in thy heart the flame of Love,

   And burn up utterly thoughts and fine expressions.`,

   "B":`Love’s way is humility and intoxication,
   The torrent floods down. How can it run up?
   You’ll be a cabuchon in the ring of lovers,
   If you’re a red ruby’s slave, dear friend ;
   Even as Earth is a serf of the sapphire sky
   And your monkey body’s a slave to your spirit.
   
   What did Earth ever lose by this relationship ?
   What mercy has the Self showed to weary limbs ?
   One shouldn’t beat the snare drum of awakening
   Beneath a cosy sofa’s, comfy counterpane.
   
   Hoist, like a hero, your flag in the desert.
   Listen with your soul’s ear to the song,
   In that hollow of the vast turquoise dome,
   Rising from the lover’s passionate moan .
   
   When your tight gown-strings are loosened
   By the tipsy inebriation of perfect love,
   The victorious heavens shout, triumphantly !
   And the constellations gaze down ashamed.
   This world is in deep trouble, from top to bottom,
   But it can be swiftly healed by the balm of love .`,

   "C":`"If I had a flower for every time I thought of you, I could walk through my garden forever."`,

   "c":`"Love is composed of a single soul inhabiting two bodies."`,

   "D":`"We're all a little weird, and life's a little weird. And when we find someone whose weirdness is compatible with ours, we join up with them and fall in mutual weirdness and call it LOVE." `,

   "d": `I wish you to know that you have been the last dream of my soul.`,

   "E": `I love you not because of who you are, but because of who I am when I am with you.`,
   "e":`One is loved because one is loved. No reason is needed for loving.`,

   "F": `You are the best thing that’s ever been mine.`,
   "f":`I want all of you, forever, you and me, every day.`,

   "G":`What is love? It is the morning and the evening star.`,
   "g":`Love is a friendship set to music.`,

   "H":`You can’t blame gravity for falling in love.`,
   "h": `We are born of love; Love is our mother.`,

   "I": `To me, fair friend, you never can be old,
   For as you were when first your eye I eyed,
   Such seems your beauty still. Three winters cold
   Have from the forests shook three summers’ pride,
   Three beauteous springs to yellow autumn turned
   In process of the seasons have I seen,
   Three April perfumes in three hot Junes burned,
   Since first I saw you fresh, which yet are green.
   Ah, yet doth beauty, like a dial-hand,
   Steal from his figure, and no pace perceived;
   So your sweet hue, which methinks still doth stand,
   Hath motion, and mine eye may be deceived:
   For fear of which, hear this, thou age unbred:
   Ere you were born was beauty’s summer dead.`,
   
   "i":`I should not dare to leave my friend,
   Because—because if she should die
   While I was gone—and I—too late—
   Should reach the Heart that wanted me—
   If I should disappoint the eyes
   That hunted—hunted so—to see—
   And could not bear to shut until
   They ‘noticed’ her—they noticed her—
   If I should stab the patient faith
   So sure she'd come—so sure she'd come—
   It listening—listening—went to sleep—
   Telling my tardy name—
   My Heart would wish it broke before—
   Since breaking then—since breaking then—
   Were useless as next morning’s sun—
   Where midnight frosts—had lain!`,

   "J": `You’re the thought that starts each morning,
   the conclusion to each day.
   I envision you in all that I do
   and everything I say.
   You’re the smile on my face,
   the sparkle in my eye,
   the warmth inside my heart,
   the fullness in my life.
   The only hand that’s laced to mine,
   the coat upon my back.
   My friend and love, you have my heart;
   I will never turn back.
   You’re the dimple in my cheek,
   the constant tingle in my soul,
   the voice that makes me weak.
   You’re the one who shields the cold.
   You’re all I’ve wanted,
   all that I need.
   You’re all I dream of,
   You mean so much to me.`,

   "j": `Can you hear my heart?
   Oh, but I can tell!
   We are twin stars
   With different births.
   My caring shadow –
   It has your face.
   The voice of my soul
   Knows well your name.
   Tell me
   Can you hear my heart?
   Oh! How I love you
   My best friend.`,

   "I": `I don’t think you will
   Ever fully understand
   How you’ve touched my life
   And made me who I am.
   I don’t think you could ever know
   Just how truly special you are,
   That even on the darkest nights
   You are my brightest star.
   You’ve allowed me to experience
   Something very hard to find,
   Unconditional love that exists
   In my body, soul, and mind.
   I don’t think you could ever feel
   All the love I have to give,
   And I’m sure you’ll never realize
   You’ve been my will to live.
   You are an amazing person,
   And without you I don’t know where I’d be.
   Having you in my life
   Completes and fulfills every part of me.`,

   "i": `As I think of our friendship, I begin to see
   Mere words can’t describe what you mean to me.
   When this cold, hard world has me lonesome and blue,
   I look up to see my angel, my sweet angel, you.
   You dry the tears that fall from my eyes.
   You bring me sunshine to brighten my sky.
   You rescue me when I’m scared and alone
   And take my hand to lead me home.
   No matter the miles that keep us apart,
   We’re always together in each other’s hearts.
   Sometimes we take for granted, I fear,
   The ones who are so close and dear.
   We get so caught up in life and things we must do.
   Sometimes we forget to stop and say I love you.
   If ever you felt I forgot or didn’t care,
   Let me stop right now; my true feelings I’ll share.
   You’re the sun in my sky, the bed where I lie.
   You’re the home where I’m safe, the field where I play.
   You’re everything I am, everything I do.`,

   "J": `If I had it to do
   all over again,
   I would choose you
   as my lover and friend.
   Life twists and turns
   but our love remains true,
   as if from the start
   our hearts somehow knew.
   Just like the river 
   is called to the sea,
   forever with you
   I am destined to be.`,

   "j":`What’s a friendship my love?
   It’s when you promise me your company
   And keep your promise.
   It’s when we joke about each other
   And laugh at ourselves.
   It’s when we know we’re not perfect
   And accept each other as we are.
   It’s when we don’t expect too much
   And are happy with what we are given.
   It’s when we value each other’s friendship
   Above all else.`,

   "K": `Of all the things
   I can do 
   on this Earth,
   I just want to build
   a bridge
   from my heart to yours.`,

   "k":`Some nights,
   alone, he thinks of her.
   and some nights,
   alone, she thinks of him.
   Some nights
   these thoughts,
   separated by miles
   and time zones,
   occur at the same
   objective moment,
   and they are connected
   without ever knowing it.`,

   "L": `If there ever comes a day
   When the moon hides from your eyes;
   Luminous memories of us together,
   Will soar like a flock of fireflies.
   If seawater drowns your pupils,
   When sadness invades your heart,
   My hands be the handkerchief
   That so gentle, dry your eyes.
   When your midnight thoughts asunder
   Staring at wishes from afar,
   Know I’m never out of reaching –
   I will always be by your side. `,

   "l":`You magnify my happiness
   When I am feeling glad;
   You help to heal my injured heart
   Whenever I am sad.
   
   You’re such a pleasure in my life;
   I hope that you can see
   How meaningful your friendship is;
   You’re a total joy to me.`,

   "M": `Someone to lean on when problems appear,
   Someone on whom you’d depend,
   Someone who’ll lift you when you’re down in the dumps,
   That someone is truly a friend.
   
   That’s how I feel about you my dear friend;
   You’re so special just as you are.
   Just to know that you’re there provides comfort to spare;
   A friendship like yours sets the bar.`,

   "m":`Treasured friend, I’m glad I found you;
   Our friendship is a gift we share.
   I can be myself around you,
   Safe in your love and care.
   
   I miss you when you’re out of sight;
   Our friendship bond was meant to be.
   I think of you with great delight;
   You’re almost part of me.`,

   "N":`In Noureen's presence, I'm truly glad,
   A gem so precious, it makes my heart glad.
   Her wisdom shines, her aura divine,
   Every moment with her, a positive sign.
   
   I found in her a treasure so rare,
   A heart so kind, a soul so fair.
   Noureen, you're a gem, a sparkling find,
   With you, positivity fills my mind.`,

   "n":`In a world where countless faces I've met,
   You, Noureen, are a treasure I won't forget.
   So rare, so kind, you're a gem untold,
   God's gift to me, more precious than gold.
   
   I may not deserve such grace from above,
   But you're sent to me, a symbol of love.
   Though reincarnation's mysteries we may not see,
   In this life, I cherish you, my destiny.
   
   For now, my precious princess, you shine so bright,
   In your presence, my world is bathed in light.
   Grateful to the heavens for this path we've tread,
   Noureen, with you, my heart is truly fed.`,

   "O": `A friend is like a forest,
   Or a lovely, calm blue sea,
   A refuge from life’s problems,
   As only a friend can be.`,

   "o":`A friend is like a song,
   Soothing to the brain,
   Distracting us from trouble,
   Neutralizing pain.`,

   "P":`You are a shelter
   From life’s frequent storm;
   Like a comfortable blanket;
   You keep me snug, safe and warm.
   
   You’re a light in the window
   When everything’s dark;
   You’re a trip to the circus,
   A romp in the park.
   
   Like a bright, sunny summer,
   You are joy without end;
   And I’m so very privileged
   To call you my friend.`,

   "p": `Whether the day is good or bad,
   Whether I'm feeling happy or sad,
   If I have a need, you’ll comprehend;
   You’ll be there to share and be a friend.
   
   Other people may fill my day,
   But never in such an important way;
   We support each other ‘round all life’s bends,
   It feels so good that we are friends.`,

   "Q":`It's such a pleasure and a joy
   To have a friend like you.
   You always care, you're always there,
   You say the right things, too!`,

   "q":`Lord please give my treasured friend
   Love and blessings without end.
   Bring contentment in her life;
   Comfort her in times of strife.
   
   Always keep her safe, secure;
   Let her path to You be sure.
   Lord, I pray my friend will be
   Close to you, eternally.`,

   "R": `I am glad Princess that you reached till here.`,
   "r": `God Bless you Princess with all the happiness.`,

   "S": `Wherever I am, there's always Pooh,
   There's always Pooh and Me.
   Whatever I do, he wants to do,
   "Where are you going today?" says Pooh:
   "Well, that's very odd 'cos I was too.
   Let's go together," says Pooh, says he.
   "Let's go together," says Pooh.
   
   "What's twice eleven?" I said to Pooh.
   ("Twice what?" said Pooh to Me.)
   "I think it ought to be twenty-two."
   "Just what I think myself," said Pooh.
   "It wasn't an easy sum to do,
   But that's what it is," said Pooh, said he.
   "That's what it is," said Pooh.
   
   "Let's look for dragons," I said to Pooh.
   "Yes, let's," said Pooh to Me.
   We crossed the river and found a few-
   "Yes, those are dragons all right," said Pooh.
   "As soon as I saw their beaks I knew.
   That's what they are," said Pooh, said he.
   "That's what they are," said Pooh.
   
   "Let's frighten the dragons," I said to Pooh.
   "That's right," said Pooh to Me.
   "I'm not afraid," I said to Pooh,
   And I held his paw and I shouted "Shoo!
   Silly old dragons!"- and off they flew.
   
   "I wasn't afraid," said Pooh, said he,
   "I'm never afraid with you."
   
   So wherever I am, there's always Pooh,
   There's always Pooh and Me.
   "What would I do?" I said to Pooh,
   "If it wasn't for you," and Pooh said: "True,
   It isn't much fun for One, but Two,
   Can stick together, says Pooh, says he. "That's how it is," says Pooh.`,

   "s":`Each friend represents a world in us, a world possibly not born until they arrive, and it is only by this meeting that a new world is born`,

   "T": `The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.`,
   "t": `In the sweetness of friendship let there be laughter, for in the dew of little things the heart finds its morning and is refreshed.`,

   "U": `A single rose can be my garden…a single friend, my world.`,
   "u": `True friends are never apart, maybe in distance but never in heart.`,

      "v": `Hold fast to dreams
For if dreams die
Life is a broken-winged bird
That cannot fly.
Hold fast to dreams
For when dreams go
Life is a barren field
Frozen with snow.`,

      "V":`Give me your hand

Make room for me
to lead and follow
you
beyond this rage of poetry.

Let others have
the privacy of
touching words
and love of loss
of love.

For me
Give me your hand.`,

   "W": `Smile Please, and carry on... `,

   "w": `My princess, in your presence, I've found my fairytale come true. 💫👑💖`,

   "X": `In my princess's eyes, I see a gleam, ✨
A pure soul's essence, like a tranquil stream. 🌟
She teaches me what love and kindness mean, ❤️
In her grace and beauty, like a timeless dream. 👸

Her heart, a treasure, precious and so rare, 💎
With every smile, she banishes despair. 😊
In her presence, life's colors brightly flare, 🌈
My princess, a gem beyond compare. 💖

So, I'm grateful to the stars above, 🌠
For guiding me to this princess, my love. 💫
She's shown me what a pure soul's made of, ✨
A gift from heaven, sent from high above. 🌟`,
      
   "x": `In a world of glitz and grand display, ✨
There shines a princess in her own sweet way. 👸
Her beauty lies not in the outward view, 💖
But in the purity of her heart so true. 💫

With eyes that see beyond the surface, deep, 👀
She finds the treasures hidden, secrets to keep. 🌟
In every soul, she finds a gem so bright, 💎
A world of beauty, hidden from plain sight. ✨

Her inner radiance, a guiding light, 🌟
Illuminates the darkest, starless night. 🌌
She shows the world a different kind of grace, 💕
A gentler path, a more compassionate space. 🌈

Her kindness blooms like flowers in the spring, 🌸
A melody of love in every word she'll sing. 🎶
In her, we find a princess, pure and rare, 👑
A heart so beautiful, beyond compare. 💖

So let us all aspire to her grace, 🌠
And see the world through love's embracing embrace. 🤗
For in her purity, we find the key, 🔑
To a world of beauty, for all to see. 🌍💕🦄`,

   "Y": `You're a princess, a rarity in a world of ordinary. 👑💖`,
   "y": `In a world so cruel, she stands alone, 💔
A pure soul, a gem, a heart of gold. ✨
Amidst the chaos, her light brightly shown, 🌟
I can't believe such beauty, truth be told. 😇

She's a princess in a world so harsh, 👸
Her kindness and love, a soothing balm. 💖
In her presence, all troubles seem to hush, 🤫
I'm in awe of her, in awe of her calm. 😌

In this world of darkness, she's a guiding star, 🌠
A beacon of hope, no matter how far. 🌌
I can't believe such purity exists, 😮
A princess like her, I'm truly blessed. 🙏`,

   "Z": `No other statement can just beat this one :
“No one can Love Intelligently.
Bcoz the Nature of True Love is Madness”!!`,
      
   "z": `To the princess, I say, "I'm by your side,
In your radiance, my darkness can't hide.
You're the guiding star in my endless night,
With you, everything feels perfectly right.

In your grace, I find strength to stand tall,
You're the melody in my life's sweetest call.
A diamond in this world's unending sea,
With you, my love, I'm where I want to be.

Your kindness, a gift, so pure and rare,
You're the answer to my whispered prayer.
In your presence, life's beauty unfurls,
With you, my princess, I'm the luckiest in the world." 💖🌟👑`,

"raghib": `Yes, Princess💕💕`,
   "Raghib": `Yes,  Princess💕💕💕`,

   "NOUREEN": `When you're sad and depressed, I will be here to put a smile on your face. When you're angry and frustrated, I will be here to calm you down. When you're hurt and in tears, I will be here to wipe them away and mend the pain. When you're lonely and have no one, I will be here to comfort you. When you're feeling unloved and unwanted, I will be here to tell you how very important you are. When you're having a bad day and need to lash out, I will be here to let off steam. When there is something on your mind that you need to say, I will be here to listen and understand. When you're lost in confusion, I will be here to help you figure things out. When you feel like you're going crazy, I will be here to bring you back to sanity. When you are so overwhelmed and need to get away, I will be here with open arms so we can run away together. When you're scared and frightened, I will be here to protect you and make you feel safe. When you are full of worries, I will be here to worry with you. I promise that I will always be here for my loved ones, today, tomorrow and forever! 💕💕💕💕`,
      
  

   "albatross": `Princess... You are a pure soul`,
   "Albatross": `Princess... You are a pure soul`,

   "who are you": `I am your well wisher Princess.`,
       "who are you?": `I am your well wisher Princess.`,
   "Who are you": `I am your well wisher Princess.`,
   "Who are you?": `I am your well wisher Princess.`,

   "how are you": ` I am good Princess and I hope you are doing well`,
      "how are you?": ` I am good Princess and I hope you are doing well`,
   "How are you?": ` I am good Princess and I hope you are doing well`,
   "How are you": ` I am good Princess and I hope you are doing well`,

   "Tell me something about yourself":`I am here to cheer you Princess`,



    "good morning" : "Good morning, my radiant princess💕💕. With the sunrise, your grace and beauty shine anew. May this day be as lovely and inspiring as you are. Embrace the moments ahead with the same elegance that defines you. 🌞👑💖",
    "Good Morning" : "Good morning, my radiant princess💕💕. With the sunrise, your grace and beauty shine anew. May this day be as lovely and inspiring as you are. Embrace the moments ahead with the same elegance that defines you. 🌞👑💖",
  "Morning" : "Good morning, my radiant princess💕💕. With the sunrise, your grace and beauty shine anew. May this day be as lovely and inspiring as you are. Embrace the moments ahead with the same elegance that defines you. 🌞👑💖",
  "morning" : "Good morning, my radiant princess💕💕. With the sunrise, your grace and beauty shine anew. May this day be as lovely and inspiring as you are. Embrace the moments ahead with the same elegance that defines you. 🌞👑💖",
  "Good morning" : "Good morning, my radiant princess💕💕. With the sunrise, your grace and beauty shine anew. May this day be as lovely and inspiring as you are. Embrace the moments ahead with the same elegance that defines you. 🌞👑💖",
"GOOD MORNING" : "Good morning, my radiant princess💕💕. With the sunrise, your grace and beauty shine anew. May this day be as lovely and inspiring as you are. Embrace the moments ahead with the same elegance that defines you. 🌞👑💖",

      "Good Morning Prince" : "Good morning, my radiant princess💕💕. With the sunrise, your grace and beauty shine anew. May this day be as lovely and inspiring as you are. Embrace the moments ahead with the same elegance that defines you. 🌞👑💖",

      "good morning prince" : "Good morning, my radiant princess💕💕💕. With the sunrise, your grace and beauty shine anew. May this day be as lovely and inspiring as you are. Embrace the moments ahead with the same elegance that defines you. 🌞👑💖",
      "Good Morning" : "Good morning, my radiant princess💕💕💕. With the sunrise, your grace and beauty shine anew. May this day be as lovely and inspiring as you are. Embrace the moments ahead with the same elegance that defines you. 🌞👑💖",



      "good night prince" : "Good night, my dear princess💕💕💕. As the stars twinkle in the sky, may your dreams be as beautiful as your heart. Rest well, for when morning comes, a new day of enchantment awaits. Sleep tight. 🌙👑💫",
      "Good Night Prince" : "Good night, my dear princess💕💕💕💕. As the stars twinkle in the sky, may your dreams be as beautiful as your heart. Rest well, for when morning comes, a new day of enchantment awaits. Sleep tight. 🌙👑💫",
      "Good night prince" : "Good night, my dear princess💕💕💕💕. As the stars twinkle in the sky, may your dreams be as beautiful as your heart. Rest well, for when morning comes, a new day of enchantment awaits. Sleep tight. 🌙👑💫",
      
    "Good Night" : "Good night, my dear princess💕💕💕. As the stars twinkle in the sky, may your dreams be as beautiful as your heart. Rest well, for when morning comes, a new day of enchantment awaits. Sleep tight. 🌙👑💫",
    "good night" : "Good night, my dear princess💕💕💕💕. As the stars twinkle in the sky, may your dreams be as beautiful as your heart. Rest well, for when morning comes, a new day of enchantment awaits. Sleep tight. 🌙👑💫",
 "Good night" : "Good night, my dear princess💕💕💕💕. As the stars twinkle in the sky, may your dreams be as beautiful as your heart. Rest well, for when morning comes, a new day of enchantment awaits. Sleep tight. 🌙👑💫",
     "night" : "Good night, my dear princess💕💕💕💕. As the stars twinkle in the sky, may your dreams be as beautiful as your heart. Rest well, for when morning comes, a new day of enchantment awaits. Sleep tight. 🌙👑💫",
 "Night" : "Good night, my dear princess💕💕💕. As the stars twinkle in the sky, may your dreams be as beautiful as your heart. Rest well, for when morning comes, a new day of enchantment awaits. Sleep tight. 🌙👑💫",

      
    "ok" : "Thank You So Much ",
    "what is your favorite hobby": "I enjoy reading books and learning new things.",
    "tell me a joke": "Sure, here's one: Why don't scientists trust atoms? Because they make up everything!",
    "what is your favorite music genre": "I appreciate various genres of music, but I particularly enjoy listening to classical music.",
    "can you recommend a good book": "Certainly! I highly recommend 'Sapiens: A Brief History of Humankind' by Yuval Noah Harari.",
    "What is your favorite hobby": "I enjoy reading books and learning new things.",
    "Tell me a joke": "Sure, here's one: Why don't scientists trust atoms? Because they make up everything!",
    "What is your favorite music genre": "I appreciate various genres of music, but I particularly enjoy listening to classical music.",
    "Can you recommend a good book": "Certainly! I highly recommend 'Sapiens: A Brief History of Humankind' by Yuval Noah Harari.",
    "Bye" : "Okay! Will meet soon, Your Highness",
    "bye" : "Okay! Will meet soon, Your Highness",
    };
    var user = document.getElementById('userBox').value.trim();
  var chatLog = document.getElementById('chatLog');
  var response = '';

  if (user in know) {
    response = know[user];
  } else {
    response = "You are precious Princess❤️👸. I appreciate your input! ❤️👸";
  }

  chatLog.innerHTML = user + "<br>";
  chatLog.innerHTML += response + "<br>";
}
