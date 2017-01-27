var quote;

var RQG = {

    quotes: [
        "The stomach is the source of energy in your body. It is called the sea of chi. Only in my case, it is more like a vast ocean.",
        "Hmm. Old friends that don't want to attack me...",
        "Sharing tea with a fascinating stranger is one of life's true delights.",
        "You have light and peace inside of you. If you let it out, you can change the world around you.",
        "Sometimes the best way to solve your own problems is to help someone else.",
        "Even in the material world, you will find that if you look for the light, you can often find it. But if you look for the dark, that is all you will ever see.",
        "Many things that seem threatening in the dark Become welcoming when we shine light on them.",
        "Is it your own destiny? Or is it a destiny someone else has tried to force on you?",
        "It is usually best to admit mistakes when they occur, and to seek to restore honor.",
        "A man needs his rest.",
        "I know your not supposed to cry over spilled tea, but \[cries\] it's just so sad!",
        "There is nothing wrong with letting people who love you, help you. Not that I love you. I just met you.",
        "You sound like my nephew. Always thinking you need to do things on your own without anyone's support.",
        "You are going through a metamorphosis, my nephew. It will not be a pleasant experience but when you come out of it. You will be the beautiful prince you were always meant to be.",
        "No! Zuko! You must never give into dispair. Allow yourself to slip down that road and you surrender to your lowest instincts. In the darkest times, hope is something you give yourself. That is the meaning of inner strength.",
        "\[to Zuko\] It's a lovely night for a walk. Why don't you join me? It would clear your head. \[no response\] Or, just stay in your room and sit in the dark. Whatever makes you happy.",
        "Be careful what you wish for, Admiral. History is not always kind to its subjects.",
        "Are you so busy fighting you cannot see your own ship has set sail?",
        "So this is how the great commander Zhao acts in defeat... disgraceful! Even in exile my nephew is more honorable then you. Thanks again for the tea. It was delicious.",
        "\[getting a massage\] Aahh... this is what I've been missing. Who knew floating on a piece of driftwood for three weeks, with no food or water, and sea vultures waiting to pluck out your liver, could make one SO tense!",
        "I\'M BEGGING YOU, PRINCE ZUKO! It's time for you to look inward and start asking yourself the big question: who are you and what do YOU want?",
        "There's nothing wrong with a life of peace and prosperity. I suggest you think about what it is that you want from your life, and why.",
        "We have a chance for a new life here. If you start stirring up trouble, we could lose all the good things that are happening for us.",
        "\[smiling\] At my age, there is really only one big surprise left, and I'd just as soon leave it a mystery.",
        "You know, Prince Zuko, destiny is a funny thing. You never know how things are going to work out. But if you keep an open mind and an open heart, I promise you will find your own destiny someday.",
        "Goodbye everyone. Today, destiny is our friend. I know it.",
        "Even if I did defeat Ozai, and I don't know if I could, it would be the wrong way to end the war. History would see it as just more senseless violence. A brother killing a brother to grab power. The only way for this was to end peacefully is for the Avatar to defeat the Fire Lord.",
        "\[crying\] I was never angry with you. I was sad, because I was afraid you'd lost your way.",
        "Happy birthday, my son. If only I could have helped you.",
        "While it is always best to believe in one's self, a little help from others can be a great blessing.",
        "Euch! This tea is nothing more than hot leaf juice!",
        "Life happens wherever you are, whether you make it or not.",
        "I always tried to tell you that Pai Sho is more than just a game.",
        "Prince Zuko, pride is not the opposite of shame, but it's source. True humility is the only antidote to shame.",
        "It is important to draw wisdom from different places. If you take it from only one place it become rigid and stale.",
        "Sometimes life is like this dark tunnel, you can't always see the light at the end of the tunnel, but if you just keep moving, you will come to a better place.",
        "Protection and power are overrated. I think you are very wise to choose happiness and love. There are reasons each of us are born. we have to find those reasons.",
        "You are not the man you used to be. You are stronger and wiser and freer than you ever used to be. And now you have come at the crossroads of the destiny. Its time for you to choose. Its time for you to choose good."
    ],

    getNewQuote: function() {
        var randNum = Math.floor(Math.random() * this.quotes.length);
        quote = this.quotes[randNum];
        var quoteBox = document.getElementById("quoteBox");
        quoteBox.innerHTML = quote;
    },

    tweetQuote: function() {
        var tweetUrl = 'https://twitter.com/intent/tweet?text=';
        var tweetText = encodeURIComponent('"' + quote + '"' + ' - Uncle Iroh' + ' #Avatar #Quotes');
        var winFeatures = 'toolbar=0,status=0,width=600,height=400';
        window.open(tweetUrl + tweetText, 'share', winFeatures);
    }

}

window.onload(RQG.getNewQuote());