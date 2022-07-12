//Dog quizzes

const quiz1 = {
    title:"Intressant fakta om hundar",
    description:"I detta quizet får du lära dig massor av intressant fakta om hundar.",
    questions: [
        {
            text:"Hur många tänder har en vuxen hund?",
            options:[16,21,32,42],
            correctAnswerIndex:3
        },
        {
            text:"Sant eller falskt: Hundar kan endast se svart- och vitt",
            options:["SANT","FALSKT"],
            correctAnswerIndex:3

        },
        {
            text:"Vilket är det vanligaste träningskommandot som lärs ut till hundar?",
            options:["Sitt","Ligg","Stanna","Gå"],
            correctAnswerIndex:0
        },
        {
            text:"Vilket är en hunds mest utvecklade sinne?",
            options:["Smak","Lukt","Synen","Känsel"],
            correctAnswerIndex:1
        },
        {
            text:"Vilken hundras är den minsta i världen?",
            options:["Dachshund","Shih Tzu","Pomeranian","Chihuahua"],
            correctAnswerIndex:3
        },
        {
            text:"Hur gammal blev den äldsta hunden i världen?",
            options:["19","24","29","34"],
            correctAnswerIndex:2
        },
        {
            text:"Vilket är det vanligaste hundnamnet i Sverige för tikar?",
            options:["Molly","Bella","Sally","Luna"],
            correctAnswerIndex:0
        },
        {
            text:"Vilken är den vanligaste hundrasen i Sverige?",
            options:["Tysk schäferhund","Jämthund","Labrador retriever","Golden retriever"],
            correctAnswerIndex:3
        },
        {
            text:"Vad är hopprekordet i höjd för en hund?",
            options:["173.7 cm","182.4 cm","191.7 cm","197.7 cm"],
            correctAnswerIndex:2
        },
        {
            text:"Vilken är den största hundrasen i världen?",
            options:["Leonberger","Grand Danois","Skotsk hjorthund","Sankt bernhardshund"],
            correctAnswerIndex:1
        }
    ]
}


const quiz2 = {
    title:"Så sköter du din hund (Jordbruksverket)",
    description:"Testa dina kunskaper kring hundens grundläggande behov och de regler som finns för att ha hand om hundar. Quizet är baserat på regler från Jordbruksverket.",
    questions: [
        {
            text:"Hur ofta ska man rasta sin hund enligt Jordbruksverket?",
            options:["minst varannan timme","minst var 4e timme","minst var 6e timme","minst var 8e timme"],
            correctAnswerIndex:2
        },
        {
            text:"När får man skilja hundvalpen från tiken som tidigast?",
            options:["6 veckor","8 veckor","10 veckor","12 veckor"],
            correctAnswerIndex:1
        },
        {
            text:"Hur ofta ska man byta vatten per dag?",
            options:["1 gång","2 gånger","3 gånger","4 gånger"],
            correctAnswerIndex:0
        },
        {
            text:"Måste man märka och registera sin hund?",
            options:["JA","NEJ"],
            correctAnswerIndex:0
        },
        {
            text:"Vilken vaccination behöver hunden fått om ni ska åka utomlands?",
            options:["Brucellos","Hakmask","Rabies","Kennelhosta"],
            correctAnswerIndex:2
        },
        {
            text:"Hur länge får en hund vara ensam?",
            options:["2 timmar","4 timmar","5 timmar","6 timmar"],
            correctAnswerIndex:3
        },
        {
            text:"Mellan vilka datum får hundar inte vara där det finns vilda djur?",
            options:["1 mars - 1 augusti","1 mars - 20 augusti","1 april - 1 augusti","1 april - 20 augusti"],
            correctAnswerIndex:1
        },
        {
            text:"Vilken är den lägsta åldern för en valp på hunddagis?",
            options:["10 veckor","12 veckor","16 veckor","Det finns ingen"],
            correctAnswerIndex:3
        }
    ]
}

const quiz3 = {
    title:"Så sköter du din hund (Tandvård)",
    description:"I detta quizet får du lära dig mer om tandvård för hundar.",
    questions: [
        {
            text:"Rekommenderas det att borsta tänderna på sin hund?",
            options:["JA","NEJ"],
            correctAnswerIndex:0
        },
        {
            text:"Kan man borsta tänderna med vanlig tandkräm för hund?",
            options:["JA","NEJ"],
            correctAnswerIndex:1
        },
        {
            text:"När brukar en valp ha tappat sina valptänder?",
            options:["3 mån","4 mån","6 mån","8 mån"],
            correctAnswerIndex:2
        },
        {
            text:"Vilken sorts tandkräm rekommenderas ofta till hundar?",
            options:["Enzymtandkräm","Flortandkräm","Koltandkräm","Natriumtandkräm"],
            correctAnswerIndex:0
        },
        {
            text:"Hur ofta ska man minst försöka borsta tänderna på en hund?",
            options:["1 gång/månad","2 gånger/vecka","1 gång/vecka","3 gånger/vecka"],
            correctAnswerIndex:2
        },
        {
            text:"Vad kan hunden få om man inte borstar hundens tänder?",
            options:["Magsjuka","Kennelhosta","Bandmask","Tandsten"],
            correctAnswerIndex:3
        },
        {
            text:"Från vad bildas tandsten för hundar?",
            options:["bakterier och saliv","gamla matrester","hundgodis","bakterier och virus"],
            correctAnswerIndex:0
        },
        {
            text:"Vad kan vara en konsekvens av tandsten för hundar?",
            options:["Isospora","Tandförlust","Hepatozoonos","Tuberkulos"],
            correctAnswerIndex:1
        },
        {
            text:"Kan man använda vilken tandborste som helst för hundar?",
            options:["JA","NEJ"],
            correctAnswerIndex:0
        },
    ]
}


const quiz4 = {
    title:"Så sköter du din hund (hundmat och foder)",
    description:"I detta quizet får du lära dig mer om hundmat och kostvanor för hundar.",
    questions: [
        {
            text:"Ungefär hur mycket av sin kroppsvikt ska en vuxen hund äta?",
            options:["1-2%","2-3%","4-5%","7-8%"],
            correctAnswerIndex:1
        },
        {
            text:"Ungefär hur mycket av sin kroppsvikt ska en valp  äta?",
            options:["2-3%","3-8%","5-10%","10-15%"],
            correctAnswerIndex:2
        },
        {
            text:"Hur ofta ska en vuxen hund äta?",
            options:["1 gång per dag","2 gånger per dag","3 gånger per dag","4 gånger per dag"],
            correctAnswerIndex:1
        },
        {
            text:"Kan min hund äta för mycket mat?",
            options:["Ja","Nej"],
            correctAnswerIndex:0
        },
        {
            text:"Vad händer om hunden äter för mycket mat?",
            options:["Hunden kan gå upp i vikt","Hunden kan bli trött","Hunden kan gå ner i vikt"],
            correctAnswerIndex:0
        },
        {
            text:"När brukar man byta från valp- till vuxenfoder?",
            options:["vid 4–6 månader","vid 6–8 månader","vid 8–12 månader","över 12 månader"],
            correctAnswerIndex:2
        },
        {
            text:"Hur skiljer sig valpfoder från vuxenfoder?",
            options:["Valpfoder innehåller mer socker","Valpfoder innehåller mer fett","Valpfoder innehåller mer kolhydrater","Valpfoder innehåller mer fett och protein"],
            correctAnswerIndex:3
        },
        {
            text:"Varför behöver valpar ett mer energirikt foder?",
            options:["de inte kan äta lika mycket per gång","för att de växer","för att de är trötta annars","för att de inte kan lagra energi"],
            correctAnswerIndex:1
        }
    ]
}

const quiz5 = {
    title:"Vad kan hundar äta och inte äta?",
    description:"Har du koll på vad hundar inte får äta? Gör detta quizet för att lära dig mer.",
    questions: [
        {
            text:"Kan hundar äta vindruvor?",
            options:["Nej, det är giftigt","Ja det kan de"],
            correctAnswerIndex:0
        },
        {
            text:"Kan hundar äta banan?",
            options:["Nej, det är giftigt","Ja det kan de"],
            correctAnswerIndex:1
        },
        {
            text:"Kan hundar äta choklad?",
            options:["Nej, det är giftigt","Ja det kan de"],
            correctAnswerIndex:0
        },
        {
            text:"Kan hundar äta nötter?",
            options:["Nej, hundar ska inte äta nötter","Ja det kan de"],
            correctAnswerIndex:0
        },
        {
            text:"Kan hundar äta jordgubbar",
            options:["Nej, det är giftigt","Ja det kan de"],
            correctAnswerIndex:1
        },
        {
            text:"Kan hundar äta avokado?",
            options:["Nej, det är inte bra","Ja det kan de"],
            correctAnswerIndex:0
        },
        {
            text:"Kan hundar äta lök?",
            options:["Nej, det är giftigt","Ja det kan de"],
            correctAnswerIndex:0
        },
        {
            text:"Kan hundar äta chips",
            options:["Nej, det är giftigt","Ja, men det är inte rekommenderat"],
            correctAnswerIndex:1
        },
        {
            text:"Kan hundar äta saffran?",
            options:["Nej, det är giftigt","Ja det kan de"],
            correctAnswerIndex:0
        },
        {
            text:"Kan hundar äta kyckling?",
            options:["Nej, det är giftigt","Ja det kan de"],
            correctAnswerIndex:1
        },
    ]
}

const quiz6 = {
    title:"Olika hundsjukdomar och andra hälsoproblem",
    description:"I detta quizet får du lära dig mer om olika hundsjukdomar och hälsoproblem som du ibland kan stöta på.",
    questions: [
        {
            text:"Vad kan vara tre akuta syptom på förgiftning?",
            options:["kräkningar,diarré och hastig andning",""],
            correctAnswerIndex:1
        },
        {
            text:"Ungefär 20% av hundar kommer till veterinären av denna anledningen, vilken?",
            options:["Hudproblem eller klåda","Ormbett","Druckit salt","Ont i ryggen"],
            correctAnswerIndex:0
        },
        {
            text:"Kan hundar bli förkylda?",
            options:["Ja","Nej"],
            correctAnswerIndex:0
        },
        {
            text:"Kan en förkyld hund smitta människor?",
            options:["Ja, det kan den","Nej, det kan den inte"],
            correctAnswerIndex:1
        },
        {
            text:"Vad kan vara en anledning till att hunden är stel eller hälta?",
            options:["Förgiftning","Tränat dåligt","Valpsjuka","Atros"],
            correctAnswerIndex:3
        },
        {
            text:"Vilket ämne i choklad är det som är giftigt för hundar?",
            options:["Xylitol","Alkohol","Teobromin","Alicin"],
            correctAnswerIndex:2
        },
        {
            text:"Vad kan vara ett tecken på öroninflammation hos hund?",
            options:["kliar sig mycket i örat","örat är gulfärgat","örat är fuktigt","hunden ylar"],
            correctAnswerIndex:0
        },
        {
            text:"Kan byte av foder orsaka kräkningar och diarré?",
            options:["Nej, det kan det inte","Ja, men det är inte så vanligt"],
            correctAnswerIndex:1
        },
    ]
}



module.exports = [quiz1,quiz2,quiz3,quiz4,quiz5,quiz6];