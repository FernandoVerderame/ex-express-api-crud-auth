const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const posts = [
    {
        id: 1,
        title: "Recensione di The Legend of Zelda: Breath of the Wild",
        slug: "recensione-zelda-breath-wild",
        image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58",
        content: "The Legend of Zelda: Breath of the Wild è un'esperienza epica che ha ridefinito il genere action-adventure. Ambientato in un vasto mondo aperto pieno di misteri e avventure, ti catapulta in un viaggio emozionante per salvare il regno di Hyrule dalla minaccia del male. Con un gameplay innovativo che offre una libertà senza precedenti e una narrazione coinvolgente che cattura l'immaginazione, Breath of the Wild è senza dubbio uno dei migliori giochi di tutti i tempi.",
        published: true,
        categoryId: 1,
        tags: [1, 4],
        userId: 1
    },
    {
        id: 2,
        title: "Guida a Red Dead Redemption 2",
        slug: "guida-red-dead-redemption-2",
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg?t=1714055653",
        content: "Red Dead Redemption 2 ti trasporta nel selvaggio west con una profondità e un realismo senza precedenti. Nel ruolo di Arthur Morgan, un fuorilegge in fuga, devi sopravvivere in un mondo implacabile popolato da banditi, cacciatori di taglie e avventurieri. Con una vasta mappa da esplorare, missioni avvincenti e un dettaglio incredibile, Red Dead Redemption 2 è una vera e propria epopea western che non potrai fare a meno di amare.",
        published: true,
        categoryId: 2,
        tags: [2, 3],
        userId: 2
    },
    {
        id: 3,
        title: "Le Migliori Mod di Minecraft",
        slug: "migliori-mod-minecraft",
        image: "https://www.minecraft.net/content/dam/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Trails-and-Tales_1280x768.jpg",
        content: "Minecraft è un gioco incredibilmente flessibile che può essere ulteriormente arricchito con l'aggiunta di mod. Dalle mod che aggiungono nuovi elementi e creature al gioco, a quelle che trasformano completamente l'esperienza di gioco, c'è una vasta gamma di mod disponibili per tutti i gusti. Scopri le mod più popolari e utili per migliorare la tua esperienza di gioco in Minecraft e trasforma il tuo mondo in qualcosa di veramente unico.",
        published: false,
        categoryId: 3,
        tags: [4, 6],
        userId: 3
    },
    {
        id: 4,
        title: "Introduzione a Fortnite",
        slug: "introduzione-fortnite",
        image: "https://cdn1.epicgames.com/offer/fn/Blade_2560x1440_2560x1440-95718a8046a942675a0bc4d27560e2bb",
        content: "Fortnite è diventato rapidamente uno dei giochi più popolari al mondo grazie alla sua combinazione unica di combattimento, costruzione e creatività. In questo gioco di sopravvivenza online, affronti altri giocatori in battaglie frenetiche per essere l'ultimo in piedi. Con una serie di modalità di gioco e eventi in continuo cambiamento, Fortnite offre un'esperienza di gioco sempre fresca e coinvolgente che ti terrà incollato allo schermo per ore.",
        published: true,
        categoryId: 1,
        tags: [5, 7],
        userId: 1
    },
    {
        id: 5,
        title: "I Migliori Giochi Indie del 2024",
        slug: "migliori-giochi-indie-2024",
        image: "https://images.everyeye.it/img-notizie/un-mondo-creativitA-migliori-giochi-indie-2024-ps4-ps5-v6-721726-1280x720.webp",
        content: "Il mondo dei giochi indie è in costante crescita, con una miriade di titoli innovativi e creativi che vengono rilasciati ogni anno. Dal platforming alla simulazione, dall'avventura alla strategia, ci sono giochi indie per ogni tipo di giocatore. Scopri i migliori giochi indie rilasciati nel 2024 e preparati a immergerti in esperienze di gioco uniche e indimenticabili che provengono da alcuni dei migliori talenti indipendenti dell'industria videoludica.",
        published: true,
        categoryId: 2,
        tags: [1, 8],
        userId: 2
    },
    {
        id: 6,
        title: "Guida Completa a Cyberpunk 2077",
        slug: "guida-cyberpunk-2077",
        image: "https://www.cyberpunk.net/build/images/social-thumbnail-en-ddcf4d23.jpg",
        content: "Cyberpunk 2077 è un'avventura open-world ambientata in un futuro distopico in cui la tecnologia e il potere si scontrano. Nel ruolo di V, un mercenario in cerca di un impianto di immortalità, ti immergerai in un mondo vibrante e pericoloso pieno di personaggi memorabili e intrighi oscuri. Con una storia ramificata, una grafica mozzafiato e un'ambientazione unica, Cyberpunk 2077 è un'esperienza di gioco che non potrai fare a meno di provare.",
        published: true,
        categoryId: 1,
        tags: [2, 3],
        userId: 3
    },
    {
        id: 7,
        title: "Come Diventare un Pro Gamer",
        slug: "diventare-pro-gamer",
        image: "https://www.teknosassociates.com/wp-content/uploads/2020/03/teknos-associates-gamers-make-money-image001.jpg",
        content: "Diventare un Pro Gamer richiede più di talento e abilità nei videogiochi. È un impegno che richiede dedizione, pratica e una comprensione approfondita del mondo del gioco competitivo. In questa guida, esploreremo i passaggi necessari per trasformare la tua passione per i videogiochi in una carriera redditizia. Dalla costruzione di un solido portfolio di giochi alla promozione della tua immagine online, imparerai tutto ciò che c'è da sapere per diventare un Pro Gamer di successo.",
        published: false,
        categoryId: 4,
        tags: [5, 9],
        userId: 1
    },
    {
        id: 8,
        title: "Recensione di Assassin's Creed Valhalla",
        slug: "recensione-assassins-creed-valhalla",
        image: "https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC%20KINGDOM%20PREORDER_STANDARD%20EDITION_EPIC_Key_Art_Wide_3840x2160-3840x2160-485fe17203671386c71bde8110886c7d.jpg",
        content: "Assassin's Creed Valhalla ti porta nell'epoca vichinga con un'esperienza epica di azione e avventura. Nel ruolo di Eivor, un guerriero vichingo in cerca di gloria, ti impegnerai in battaglie epiche, esplorazioni audaci e alleanze intricate mentre cerchi di guadagnarti un posto al Valhalla. Con una mappa enorme da esplorare, una storia avvincente e un gameplay coinvolgente, Assassin's Creed Valhalla è un'aggiunta degna alla celebre serie di Assassin's Creed.",
        published: true,
        categoryId: 2,
        tags: [1, 7],
        userId: 2
    },
    {
        id: 9,
        title: "I Migliori Accessori per il Gaming",
        slug: "migliori-accessori-gaming",
        image: "https://innovazionetech.altervista.org/wp-content/uploads/2023/07/I-migliori-accessori-per-il-gaming-cuffie-tastiere-mouse-e-tappetini-per-mouse-foto-in-evidenza2-jpg.webp",
        content: "Giocare ai videogiochi è molto più di premere i pulsanti sul controller. Per massimizzare la tua esperienza di gioco, hai bisogno dei migliori accessori disponibili sul mercato. Dalle cuffie con audio surround alle tastiere meccaniche, dai mouse ad alta sensibilità ai monitor ad alta definizione, ci sono una miriade di accessori che possono fare la differenza tra la vittoria e la sconfitta. In questa guida, esploreremo i migliori accessori per il gaming e ti aiuteremo a scegliere quelli giusti per te.",
        published: true,
        categoryId: 5,
        tags: [4, 6],
        userId: 3
    },
    {
        id: 10,
        title: "Introduzione ai Giochi di Strategia",
        slug: "introduzione-giochi-strategia",
        image: "https://gaming-cdn.com/images/products/5450/orig/imperium-romanum-gold-edition-gold-edition-pc-gioco-steam-cover.jpg?v=1712760598",
        content: "I giochi di strategia sono un genere amato da milioni di giocatori in tutto il mondo. Con una miriade di titoli che spaziano dall'antichità alla fantascienza, dalla strategia in tempo reale alla strategia a turni, c'è un gioco di strategia per ogni tipo di giocatore. In questa introduzione, esploreremo i principi fondamentali dei giochi di strategia e ti presenteremo alcuni dei migliori titoli disponibili sul mercato.",
        published: false,
        categoryId: 1,
        tags: [2, 8],
        userId: 1
    },
    {
        id: 11,
        title: "Guida ai MMORPG",
        slug: "guida-mmorpg",
        image: "https://beebom.com/wp-content/uploads/2018/11/Best-mmorpg-featured.jpg",
        content: "I MMORPG (Massively Multiplayer Online Role-Playing Games) sono un genere di videogiochi che permettono a migliaia di giocatori di interagire e competere in un mondo virtuale persistente. Con una vasta gamma di mondi da esplorare, classi da giocare e missioni da completare, i MMORPG offrono un'esperienza di gioco senza pari. In questa guida, esploreremo tutto ciò che c'è da sapere sui MMORPG, dalle loro origini alla loro attuale popolarità, e ti forniremo consigli e strategie per goderti al meglio questo genere di giochi.",
        published: true,
        categoryId: 2,
        tags: [5, 9],
        userId: 2
    },
    {
        id: 12,
        title: "Le Novità di Call of Duty 2024",
        slug: "novita-call-of-duty-2024",
        image: "https://game-experience.it/wp-content/uploads/2023/10/call-of-duty-2024-includera-mappe-dei-giochi-black-ops-secondo-un-report.jpg",
        content: "Call of Duty è una delle serie di videogiochi più popolari al mondo, con milioni di giocatori che competono online ogni giorno. Con l'uscita di ogni nuovo capitolo, i fan si chiedono sempre quali novità porterà. In questa anteprima, esploreremo le ultime novità introdotte nell'ultimo titolo di Call of Duty, dalle nuove mappe e modalità di gioco alle aggiunte alla personalizzazione del personaggio. Preparati a un'esperienza di gioco esplosiva e piena d'azione con Call of Duty 2024.",
        published: true,
        categoryId: 1,
        tags: [1, 7],
        userId: 3
    },
    {
        id: 13,
        title: "Come Costruire un PC da Gaming",
        slug: "costruire-pc-gaming",
        image: "https://www.assistenzainformaticasalerno.it/wp-content/uploads/2020/09/Assemblaggio-PC.jpg",
        content: "Costruire il tuo PC da gaming può sembrare una sfida spaventosa, ma con la giusta guida e un po' di pazienza, è un progetto gratificante che può portare a una macchina potente e personalizzata. In questa guida, ti guideremo attraverso i passaggi necessari per assemblare il tuo PC da gaming ideale, dalla scelta dei componenti alla fase di montaggio. Con le giuste conoscenze e gli strumenti giusti, sarai in grado di costruire un PC da gaming che soddisfi le tue esigenze e ti dia anni di divertimento senza problemi.",
        published: false,
        categoryId: 5,
        tags: [4, 6],
        userId: 1
    },
    {
        id: 14,
        title: "Le Migliori Esclusive per PlayStation 5",
        slug: "migliori-esclusive-ps5",
        image: "https://www.tomshw.it/storage/wp/new-images/2023/04/esclusive-274498.jpg",
        content: "La PlayStation 5 è la console di nuova generazione di Sony, e offre una vasta gamma di giochi esclusivi che non troverai su altre piattaforme. Da titoli di azione e avventura a giochi di ruolo e sparatutto, ci sono esclusive per tutti i gusti. In questa lista, esploreremo i migliori giochi disponibili esclusivamente per PlayStation 5 e ti aiuteremo a decidere quali valgono la pena di giocare.",
        published: true,
        categoryId: 2,
        tags: [2, 3],
        userId: 2
    },
    {
        id: 15,
        title: "I Segreti di The Witcher 3",
        slug: "segreti-the-witcher-3",
        image: "https://gaming-cdn.com/images/products/268/orig/the-witcher-3-wild-hunt-pc-gioco-gog-com-cover.jpg?v=1710174099",
        content: "The Witcher 3 è uno dei giochi di ruolo più amati e acclamati dalla critica degli ultimi anni, ma anche i giocatori più esperti possono non essere a conoscenza di tutti i suoi segreti. In questa guida, esploreremo i segreti più oscuri e nascosti di The Witcher 3, dalle missioni secondarie più elusive alle armi e alle armature più potenti. Preparati a scoprire tutto ciò che c'è da sapere su questo incredibile gioco e a prendere il controllo del mondo di The Witcher 3 come mai prima d'ora.",
        published: true,
        categoryId: 1,
        tags: [1, 7],
        userId: 3
    },
    {
        id: 16,
        title: "Introduzione ai Giochi VR",
        slug: "introduzione-giochi-vr",
        image: "https://www.smartworld.it/wp-content/uploads/2020/03/10-giochi-VR-con-cui-allenarsi-in-casa-1280x853.jpg",
        content: "I giochi in realtà virtuale (VR) offrono un'esperienza di gioco immersiva e coinvolgente che ti trasporta in mondi virtuali al di là della tua immaginazione. Con dispositivi come Oculus Rift, HTC Vive e PlayStation VR, puoi esplorare mondi fantastici, partecipare a avventure epiche e sperimentare giochi come mai prima d'ora. In questa introduzione, esploreremo i fondamenti dei giochi VR e ti presenteremo alcuni dei migliori titoli disponibili sul mercato.",
        published: true,
        categoryId: 5,
        tags: [4, 6],
        userId: 1
    },
    {
        id: 17,
        title: "Le Migliori App di Fitness per Gamers",
        slug: "migliori-app-fitness-gamers",
        image: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/337308636/original/f000254237c45aaff3eb73829756a799816c208e/health-and-fitness-gym-app-workout-app-health-app-fitness-app.png",
        content: "Mentre i videogiochi possono essere un'esperienza divertente e coinvolgente, è importante anche mantenere un equilibrio di vita sana. Fortunatamente, ci sono molte app di fitness disponibili che sono state progettate appositamente per i gamers. Da app che ti incoraggiano a muoverti di più durante le pause di gioco a quelle che ti aiutano a monitorare la tua salute generale, queste app possono aiutarti a mantenere uno stile di vita attivo anche mentre giochi. In questa lista, esploreremo le migliori app di fitness per gamers e ti daremo consigli su come integrarle nella tua routine quotidiana.",
        published: true,
        categoryId: 7,
        tags: [5, 8],
        userId: 2
    },
    {
        id: 18,
        title: "Guida a League of Legends",
        slug: "guida-league-of-legends",
        image: "https://www.ilvideogioco.com/wp-content/uploads/2019/10/league-of-legends.jpg",
        content: "League of Legends è uno dei giochi online più popolari al mondo, con milioni di giocatori che competono in battaglie epiche ogni giorno. Ma diventare un giocatore di League of Legends di successo richiede più di abilità e reattività. In questa guida, esploreremo tutto ciò che c'è da sapere su League of Legends, dalle sue origini umili alla sua attuale popolarità globale. Con consigli e strategie per giocare, ti aiuteremo a migliorare le tue abilità e a dominare il campo di battaglia come un vero campione.",
        published: true,
        categoryId: 2,
        tags: [1, 9],
        userId: 3
    },
    {
        id: 19,
        title: "Recensione di God of War: Ragnarok",
        slug: "recensione-god-of-war-ragnarok",
        image: "https://images2-wpc.corriereobjects.it/2j_wcsRoJZr0Wk1WhhtGrU9_p1E=/fit-in/1280x720/style.corriere.it/assets/uploads/2022/07/god-of-war-ragnarok.jpg",
        content: "God of War: Ragnarok è uno dei giochi più attesi del prossimo anno, con una storia epica che porta i giocatori nell'universo della mitologia norrena. Nel ruolo di Kratos, un dio guerriero in cerca di redenzione, ti impegnerai in una missione per sconfiggere gli dei e impedire la fine del mondo. Con una grafica spettacolare, un gameplay avvincente e una trama avvincente, God of War: Ragnarok è destinato a diventare un classico istantaneo.",
        published: true,
        categoryId: 1,
        tags: [2, 7],
        userId: 1
    },
    {
        id: 20,
        title: "Come Trasmettere su Twitch",
        slug: "come-trasmettere-twitch",
        image: "https://www.finson.com/news/2021/1029152653095/twitch.jpg",
        content: "Trasmettere le tue sessioni di gioco su Twitch è diventato un passatempo popolare per molti giocatori, ma può essere un po' intimidatorio per chi è nuovo alla piattaforma. In questa guida, ti guideremo attraverso i passaggi necessari per iniziare a trasmettere su Twitch, dalla configurazione del tuo account alla scelta del software di streaming giusto per te. Con consigli pratici e trucchi del mestiere, sarai in grado di creare un canale Twitch di successo e condividere le tue avventure di gioco con il mondo intero.",
        published: false,
        categoryId: 4,
        tags: [4, 5],
        userId: 2
    }
];

// const categories = [
//     { id: 1, name: "Recensioni" },
//     { id: 2, name: "Guide" },
//     { id: 3, name: "Mods" },
//     { id: 4, name: "Carriere nel Gaming" },
//     { id: 5, name: "Hardware" }
// ];

// const tags = [
//     { id: 1, name: "Action" },
//     { id: 2, name: "Adventure" },
//     { id: 3, name: "RPG" },
//     { id: 4, name: "FPS" },
//     { id: 5, name: "MOBA" },
//     { id: 6, name: "Simulation" },
//     { id: 7, name: "Open World" },
//     { id: 8, name: "Strategy" },
//     { id: 9, name: "Multiplayer" },
//     { id: 10, name: "Esports" }
// ];

// const users = [
//     { id: 1, email: "fernando@example.com", name: "Fernando Verderame", password: "password1" },
//     { id: 2, email: "santi@example.com", name: "Santi Galvan", password: "password2" },
//     { id: 3, email: "marco@example.com", name: "Marco Lanci", password: "password3" }
// ];

// // // Categorie
// prisma.category.createMany({
//     data: categories
// })
//     .then()
//     .catch(err => console.error(err));

// // Tag
// prisma.tag.createMany({
//     data: tags
// })
//     .then()
//     .catch(err => console.error(err));

// // Utenti
// prisma.user.createMany({
//     data: users
// })
//     .then()
//     .catch(err => console.error(err));


// Posts
posts.forEach(post => {

    const { id, title, slug, image, content, categoryId, userId, published, tags } = post;

    const data = {
        id,
        title,
        slug,
        image,
        content,
        categoryId,
        userId,
        published,
        tags: { connect: tags.map(id => ({ id })) }
    }

    prisma.post.create({ data }).then().catch(err => console.error(err));

})
