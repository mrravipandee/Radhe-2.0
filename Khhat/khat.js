document.addEventListener("DOMContentLoaded", function () {
    const letterDate = document.getElementById("letter-date");


    // Iterate through the collections and find elements by ID
    const mypassage1 = document.getElementById("pTag1");
    const mypassage2 = document.getElementById("pTag2");
    const mypassage3 = document.getElementById("pTag3");

    const khats = [
        {
            title:`तुम्हारे बिन में नहीं`,
            date: `17/10/2023`,
            passage1: `कैसे हो राधे, आशा करता हूं कि तुम एक दम मस्त हो. तोह हमारी दोस्ती को आज पुरे 242  दिन हो गई है मतलब की 8  महीने. आगे भी हमें ऐसे हे रहना है, मुज्झे आपको परेशन करना है आपसे बहोत सारी बाते करनी है और भी बहोत कुछ आपको 2 3 थप्पड़ मारना है. `,
            passage2: `आज तक मैंने जितना आपको परेशान किया है अगर कोई होता तोह छोड़ के कब का चला गया होता लेकिन आप मुझे समझ सकती हो बस मुझे एक ऐसा ही दोस्त हमेशा से चाहिए था। और कितने ख़ुशी की बात है मुझे आप मिल गई हो, कास इस जनम में हमारी शादी हो पाती लेकिन क्या ही कर सक्ते है. मुझे एक आछा आप के जैसा दोस्त मिल गई है अब और कुछ नहीं। में तोह अब आपका ही हु, अगले जनम तक इंतज़ार कर लूंगा लेकिन आपकी जगह किसी और को नहीं दे पाउँगा, बस आपका ही इंतज़ार रहेगा हर जनम में.`,
            passage3: `आपकी दोस्ती के लिए पूरे दिल से शुक्रिया। में आपसे प्रॉमिस करता हु यह जो आपका TRUST ना वह कभी टूटने नहीं दूंगा कभी भी नहीं। मानता हु में आपको बहोत परेशां. करता हु लेकिन एक आप ही तोह हो Bhuddhu जिससे बात करने आचा लगता है और पहिली लड़की हॉ इतने कम समय में अपने जैसी लगने लगी हो. Thank You  इतनी सारी खुशिया देने के लिए। `,
        },
    ];

    letterDate.innerText = khats[0].date;
    localStorage.setItem("itemTitle", khats[0].title);
    mypassage1.innerText = khats[0].passage1;
    mypassage2.innerText = khats[0].passage2;
    mypassage3.innerText = khats[0].passage3;
});
