class compositor{
    constructor(nome,era,desc,imageSrc,soundScr){
        this.nome = nome
        this.era = era
        this.desc = desc
        this.imageSrc = imageSrc
        this.soundScr = soundScr
    }

    loadIn(doc,card){
        // Image
        let img = String("img"+card)
        doc.getElementById(img).src = this.imageSrc
        // Nome
        let nome = String("nome"+card)
        doc.getElementById(nome).innerHTML = this.nome
        // Era
        let era = String("periodo"+card)
        doc.getElementById(era).innerHTML = this.era
        // Description
        let desc = String("caracteristica"+card)
        doc.getElementById(desc).innerHTML = this.desc
    }

    loadAudio(doc){
        doc.getElementById("audio").src = this.soundScr
        document.getElementById('audio').load
    }
}



// ----Carregando Compositores-----
let bach = new compositor(
    "Bach",
    "Barroco",
    "Bach enriqueceu os estilos alemães estabelecidos através de seu domínio da organização contraponto, harmônica e motivacional, e sua adaptação de ritmos, formas e texturas do exterior, particularmente da Itália e da França.",
    "../assets/sprite/Bach.png",
    "../assets/music/Bach/Aaron_Dunn_-_Goldberg_Variations_BWV_988_-_Aria.mp3"
)

let beethoven = new compositor(
    "Beethoven",
    "Classico/Romantico",
    "Traços da personalidade musical de Beethoven: grande energia e força, dinâmico, quase nunca sentimental, senso especial de humor.",
    "../assets/sprite/Beethoven.png",
    "../assets/music/Beethoven/Beethoven-5th-symphony-piano.mp3"
)

let brahms = new compositor(
    "Johannes Brahms",
    "Romantico",
    "Brahms manteve um senso clássico de forma e ordem em suas obras, em contraste com a opulência da música de muitos de seus contemporâneos. Assim, muitos admiradores (embora não necessariamente o próprio Brahms) o viam como o campeão das formas tradicionais e da 'música pura', em oposição ao abraço 'Novo Alemão' da música do programa.",
    "../assets/sprite/Brahms.png",
    "../assets/music/Brahms/Hungarian-dance-no-5-piano.mp3"
)

let chopin = new compositor(
    "Frédéric Chopin",
    "Romantico",
    "Todas as composições de Chopin incluem o piano. A maioria é para piano solo, embora ele também tenha escrito dois concertos de piano, algumas peças de câmara e algumas músicas com letras polonesas. Seu estilo de teclado é altamente individual e muitas vezes tecnicamente exigente; suas próprias performances foram notadas por suas nuances e sensibilidade.",
    "../assets/sprite/Chopin.png",
    "../assets/music/Chopin/Chopin-nocturne-op-9-no-1.mp3"
)

let handel = new compositor(
    "George Frideric Handel",
    "Barroco",
    "As composições de Handel são consideradas referências da música barroca. Entre suas características estão:Simplicidade enganosa, efeitos dramáticos e um ouvido para mimetismo",
    "../assets/sprite/Handel.png",
    "assets/music/Handel/Advent_Chamber_Orchestra_-_04_-_Handel_-_Entrance_to_the_Queen_of_Sheba_for_Two_Oboes_Strings_and_Continuo_allegro.mp3"
)

let liszt = new compositor(
    "Franz Liszt",
    "Romantico",
    "Dois traços formais dão um selo pessoal às composições de Liszt: experimentar estruturas de grande escala (estender a forma tradicional de sonata, unificar obras multimovimentos) e transformação temática, ou submeter uma única ideia curta a mudanças de modo, ritmo, metro, ritmo ou acompanhamento para formar a base temática de uma obra inteira.",
    "../assets/sprite/Liszt.png",
    "../assets/music/Liszt/[Free-scores.com]_liszt-franz-liebestraum-503.mp3"
)

let mozart = new compositor(
    "Wolfgang A. Mozart",
    "Classico",
    "Os traços centrais do estilo clássico estão todos presentes na música de Mozart. Clareza, equilíbrio e transparência são as características de seu trabalho, mas noções simplistas de sua delicadeza mascaram o poder excepcional de suas melhores obras-primas.",
    "../assets/sprite/Mozart.png",
    "../assets/music/Mozart/Piano-sonata-no-11.mp3"
)

let paganini = new compositor(
    "Niccolò Paganini",
    "Classico",
    "As composições de Paganini foram imaginativas do ponto de vista técnico. Suas obras expandiram muito a gama tonal de instrumentos que ele utilizou. Ele também incorporou os sons dos animais em sua música.",
    "../assets/sprite/Paganini.png",
    "../assets/music/Paganini/daily_download_20210914_128.mp3"
)

let rachmaninoff = new compositor(
    "Sergei Rachmaninoff",
    "Romantico",
    "Sua música geralmente soa russa e a influência de compositores russos como Tchaikovsky, Mussorgsky, Rimsky-Korsakov e Balakirev é clara. O romantismo de seu som também é claro em algumas das melodias exuberantes de suas Sinfonias e Concertos.",
    "../assets/sprite/Rachmaninoff.png",
    "../assets/music/Rachmaninoff/daily_download_20180622_128.mp3"
)

let tchailovski = new compositor(
    "Pyotr Ilyich Tchaikovsky",
    "Romantico",
    "Sua música sempre teve grande apelo para o público em geral em virtude de suas melodias e de coração aberto, harmonias impressionantes e orquestração colorida e pitoresca, todas as quais evocam uma profunda resposta emocional.",
    "../assets/sprite/Tchaikovski.png",
    "../assets/music/Tchaikovski/Swan-lake-music.mp3"
)

let vivaldi = new compositor(
    "Antonio Vivaldi",
    "Barroco",
    "Qualidades tão características de Vivaldi são: temas concisos, clareza de forma, vitalidade rítmica, implicando continuidade lógica no fluxo de ideias musicais. Ele pensa instrumentalmente e gosta de padrões repetidos (geralmente de acordes quebrados) com mudanças harmônicas lentas.",
    "../assets/sprite/Vivaldi.png",
    "../assets/music/Vivaldi/Vivaldi-four-seasons-summer-presto.mp3"
)