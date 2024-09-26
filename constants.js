const chars = [
    { name: "Marco", type: "dima", dates: ["09-08-2024", "26-04-2024"], image: "Img/Medals/Marco.png", class: ["Especialista", "Lutador", "Suporte", "Fruta do Diabo"] },
    { name: "Uta", type: "dima", dates: ["30-08-2024", "19-04-2024"], image: "Img/Medals/Uta.png", class: ["Especialista", "DPS", "Fruta do Diabo"] },
    { name: "Scratchmen Apoo", type: "gold", dates: ["27-09-2024", "06-09-2024", "28-06-2024", "10-05-2024"], image: "Img/Medals/Apoo.png", class: ["Atirador", "Suporte", "Supernova", "Fruta do Diabo"] },
    { name: "Baby 5", type: "gold", dates: ["06-09-2024", "12-07-2024", "31-05-2024"], image: "Img/Medals/Baby5.png", class: ["DPS", "Atirador", "Cortante", "Fruta do Diabo", "Mulher"] },
    { name: "Bartolomeo", type: "gold", dates: ["30-08-2024", "05-07-2024", "26-04-2024", "24-05-2024"], image: "Img/Medals/Bartolomeo.png", class: ["Especialista", "DPS", "Fruta do Diabo"] },
    { name: "Bastille", type: "gold", dates: ["06-09-2024", "19-07-2024", "17-05-2024"], image: "Img/Medals/Bastille.png", class: ["Cortante", "Tanque", "Marinheiro"] },
    { name: "Bellamy", type: "gold", dates: ["13-09-2024", "14-06-2024", "17-05-2024"], image: "Img/Medals/Bellamy.png", class: ["Lutador", "DPS", "Fruta do Diabo"] },
    { name: "Jewelry Bonney", type: "gold", dates: ["27-09-2024", "06-09-2024", "12-07-2024", "31-05-2024"], image: "Img/Medals/Bonney.png", class: ["Lutador", "Suporte", "Fruta do Diabo", "Supernova", "Mulher", "Realeza"] },
    { name: "Brook", type: "gold", dates: ["16-08-2024", "14-06-2024", "10-05-2024"], image: "Img/Medals/Brook.png", class: ["Cortante", "Suporte", "Fruta do Diabo", "Chapéu de Palha"] },
    { name: "Capone Gang Bege", type: "gold", dates: ["13-09-2024", "28-06-2024", "07-06-2024", "26-04-2024"], image: "Img/Medals/Capone.png", class: ["Atirador", "DPS", "Supernova", "Fruta do Diabo"] },
    { name: "Carrot", type: "gold", dates: ["16-08-2024", "21-06-2024", "31-05-2024", "26-04-2024"], image: "Img/Medals/Carrot.png", class: ["Cortante", "Especialista", "DPS", "Mulher"] },
    { name: "Tony Tony Chopper", type: "gold", dates: ["13-09-2024", "02-08-2024", "28-06-2024", "17-05-2024"], image: "Img/Medals/Chopper.png", class: ["Lutador", "Suporte", "Fruta do Diabo", "Chapéu de Palha"] },
    { name: "Crocodile", type: "gold", dates: ["27-09-2024", "16-08-2024", "26-07-2024", "24-05-2024"], image: "Img/Medals/Crocodile.png", class: ["Especialista", "Tanque", "Fruta do Diabo", "Shichibukai"] },
    { name: "Dalmatian", type: "gold", dates: ["23-08-2024", "19-07-2024", "07-06-2024", "22-03-2024"], image: "Img/Medals/Dalmatian.png", class: ["Cortante", "Bruiser", "Marinheiro", "Fruta do Diabo"] },
    { name: "X Drake", type: "gold", dates: ["02-08-2024", "26-07-2024", "03-05-2024"], image: "Img/Medals/Drake.png", class: ["Lutador", "Bruiser", "Fruta do Diabo", "Supernova", "Marinheiro"] },
    { name: "Franky", type: "gold", dates: ["13-09-2024", "30-08-2024", "05-07-2024", "24-05-2024"], image: "Img/Medals/Franky.png", class: ["Atirador", "Bruiser", "Chapéu de Palha"] },
    { name: "Basil Hawkins", type: "gold", dates: ["09-08-2024", "12-07-2024", "10-05-2024"], image: "Img/Medals/Hawkins.png", class: ["Especialista", "Bruiser", "Fruta do Diabo", "Supernova"] },
    { name: "Hina", type: "gold", dates: ["30-08-2024", "21-06-2024", "24-05-2024"], image: "Img/Medals/Hina.png", class: ["Lutador", "Bruiser", "Fruta do Diabo", "Marinheiro", "Mulher"] },
    { name: "Vinsmoke Ichiji", type: "gold", dates: ["16-08-2024", "03-05-2024"], image: "Img/Medals/Ichiji.png", class: ["Bruiser", "Lutador", "Realeza"] },
    { name: "Jesus Burgess", type: "gold", dates: ["20-09-2024", "02-08-2024", "28-06-2024", "10-05-2024"], image: "Img/Medals/Jesus.png", class: ["Lutador", "Tanque"] },
    { name: "Eustass Kid", type: "gold", dates: ["20-09-2024", "30-08-2024", "12-07-2024", "07-06-2024", "15-03-2024"], image: "Img/Medals/Kid.png", class: ["Atirador", "Tanque", "Fruta do Diabo", "Supernova"] },
    { name: "Killer", type: "gold", dates: ["20-09-2024", "09-08-2024", "21-06-2024", "03-05-2024"], image: "Img/Medals/Killer.png", class: ["Cortante", "DPS", "Supernova"] },
    { name: "Koala", type: "gold", dates: ["30-08-2024", "14-06-2024", "31-05-2024"], image: "Img/Medals/Koala.png", class: ["Lutador", "DPS", "Mulher"] },
    { name: "Trafalgar Law", type: "gold", dates: ["27-09-2024", "23-08-2024", "05-07-2024", "17-05-2024"], image: "Img/Medals/Law.png", class: ["Cortante", "Especialista", "DPS", "Supernova", "Fruta do Diabo"] },
    { name: "Leo e Mansherry", type: "gold", dates: ["02-08-2024", "05-07-2024", "14-06-2024", "19-04-2024"], image: "Img/Medals/Leo.png", class: ["Especialista", "Suporte", "Realeza", "Fruta do Diabo", "Mulher"] },
    { name: "Monkey D. Luffy", type: "gold", dates: ["27-09-2024", "23-08-2024", "28-06-2024", "03-05-2024"], image: "Img/Medals/Luffy.png", class: ["Bruiser", "Lutador", "Fruta do Diabo", "Chapéu de Palha"] },
    { name: "Gecko Moria", type: "gold", dates: ["13-10-2023"], image: "Img/Medals/Moria.png", class: ["noRot", "Cortante", "Suporte", "Fruta do Diabo", "Shichibukai"] },
    { name: "Nami", type: "gold", dates: ["27-09-2024", "02-08-2024", "21-06-2024", "17-05-2024"], image: "Img/Medals/Nami.png", class: ["Especialista", "DPS", "Chapéu de Palha", "Mulher"] },
    { name: "Vinsmoke Niji", type: "gold", dates: ["02-08-2024", "19-07-2024", "24-05-2024", "26-04-2024"], image: "Img/Medals/Niji.png", class: ["Atirador", "DPS", "Realeza"] },
    { name: "Perona", type: "gold", dates: ["16-08-2024", "05-07-2024", "07-06-2024", "22-03-2024"], image: "Img/Medals/Perona.png", class: ["Especialista", "Suporte", "Fruta do Diabo", "Mulher"] },
    { name: "Rebecca", type: "gold", dates: ["09-08-2024", "19-07-2024", "07-06-2024", "05-04-2024"], image: "Img/Medals/Rebecca.png", class: ["Cortante", "Tanque", "Realeza", "Mulher"] },
    { name: "Vinsmoke Reiju", type: "gold", dates: ["13-09-2024", "06-09-2024", "12-07-2024", "10-05-2024"], image: "Img/Medals/Reiju.png", class: ["Suporte", "Especialista", "Realeza", "Mulher"] },
    { name: "Nico Robin", type: "gold", dates: ["20-09-2024", "09-08-2024", "21-06-2024", "10-05-2024", "26-04-2024"], image: "Img/Medals/Robin.png", class: ["Especialista", "DPS", "Fruta do Diabo", "Chapéu de Palha", "Mulher"] },
    { name: "Ryuma", type: "gold", dates: ["26-07-2024", "21-06-2024", "14-06-2024", "12-04-2024"], image: "Img/Medals/Ryuma.png", class: ["Cortante", "DPS"] },
    { name: "Vinsmoke Sanji", type: "gold", dates: ["16-08-2024", "26-07-2024", "24-05-2024"], image: "Img/Medals/Sanji.png", class: ["Lutador", "DPS", "Chapéu de Palha", "Realeza"] },
    { name: "Smoker", type: "gold", dates: ["13-09-2024", "23-08-2024", "12-07-2024", "03-05-2024"], image: "Img/Medals/Smoker.png", class: ["Lutador", "Tanque", "Fruta do Diabo", "Marinheiro"] },
    { name: "Urouge", type: "gold", dates: ["06-09-2024", "26-07-2024", "31-05-2024"], image: "Img/Medals/Urouge.png", class: ["Lutador", "Tanque", "Fruta do Diabo", "Supernova"] },
    { name: "Usopp", type: "gold", dates: ["26-07-2024", "14-06-2024", "03-05-2024"], image: "Img/Medals/Usopp.png", class: ["Atirador", "DPS", "Chapéu de Palha"] },
    { name: "Van Augur", type: "gold", dates: ["23-08-2024", "05-07-2024", "17-05-2024"], image: "Img/Medals/Van_augur.png", class: ["Atirador", "DPS"] },
    { name: "Vinsmoke Yonji", type: "gold", dates: ["20-09-2024", "09-08-2024", "19-07-2024", "28-06-2024", "07-06-2024", "22-03-2024"], image: "Img/Medals/Yonji.png", class: ["Lutador", "Tanque", "Realeza"] },
    { name: "Roronoa Zoro", type: "gold", dates: ["20-09-2024", "23-08-2024", "19-07-2024", "31-05-2024"], image: "Img/Medals/Zoro.png", class: ["Cortante", "Bruiser", "Chapéu de Palha"] },
]

const lastDate = "27-09-2024";

function getRotationChars(rotation) {
    return chars.filter(char => rotation.includes(char.name));
}

const rotationOne = getRotationChars(['Nami', 'Jewelry Bonney', 'Scratchmen Apoo']);
const rotationTwo = getRotationChars(['Monkey D. Luffy', 'Crocodile', 'Trafalgar Law']);

const foods = [
    { name: "Bife Wagyu", img: "Img/Food/BifeWagyu.png", lvl: 110, TankHp: 28050, DpsHp: 18150, SupHp: 11550, cd: 180, ing: [{ "Bife Cru Premium": 6, "Sal": 4, "Pimenta": 3, "Azeite": 6, "Folhas Verdes": 4, "Cebola": 3, "Alho": 2, "Cogumelo": 5, "Limão": 2, "Vinho Branco": 1, "Trufa Branca": 2 }] },
    { name: "Atum Grelhado", img: "Img/Food/AtumGrelhado.png", lvl: 110, TankHp: 28050, DpsHp: 18150, SupHp: 11550, cd: 300, ing: [{ "Azeite": 2, "Limão": 2, "Alho": 2, "Atum": 5, "Pimenta": 2, "Folhas Verdes": 2, "Alface": 4, "Vinho Branco": 1, "Manteiga": 2 }] },
    { name: "Paella de Frutos do Mar", img: "Img/Food/PaellaFrutos.png", lvl: 100, TankHp: 25500, DpsHp: 16500, SupHp: 10500, cd: 180, ing: [{ "Camarão Cru": 5, "Lagosta Cru": 3, "Arroz": 2, "Folhas Verdes": 1, "Tomates": 1, "Peixe Cru": 1, "Azeite": 1, "Pimenta": 1, "Água": 3, "Sal": 1 }] },
    { name: "Ensopado de Ostra", img: "Img/Food/EnsopadoOstra.png", lvl: 100, TankHp: 25500, DpsHp: 16500, SupHp: 10500, cd: 300, ing: [{ "Ostra": 3, "Creme de Leite": 1, "Sal": 2, "Pimenta": 2, "Manteiga": 2, "Cebola": 1, "Alho": 1 }] },
    { name: "Camarões Salteados", img: "Img/Food/CamarãoSalteado.png", lvl: 90, TankHp: 22950, DpsHp: 13500, SupHp: 13500, cd: 180, ing: [{ "Camarão Cru": 4, "Manteiga": 1, "Azeite": 3, "Vinho branco": 1, "Alho": 4, "Pimenta": 2, "Limão": 2, "Sal": 1, "Folhas Verdes": 2, "Trufa Branca": 1 }] },
    { name: "Curry de Coelho", img: "Img/Food/CurryCoelho.png", lvl: 90, TankHp: 22950, DpsHp: 13500, SupHp: 13500, cd: 300, ing: [{ "Carne Crua de Coelho": 5, "Ovos": 1, "Azeite": 2, "Sal": 2, "Pimenta": 2, "Alho": 1, "Cebola": 1, "Tomates": 2 }] },
    { name: "Espeto de Carne Gourmet", img: "Img/Food/EspetoCarneGourmet.png", lvl: 80, TankHp: 20400, DpsHp: 12000, SupHp: 8400, cd: 180, ing: [{ "Bife Cru Premium": 4, "Sal": 2, "Pimenta": 3, "Azeite": 3, "Bacon": 5, "Cebola": 4, "Folhas Verdes": 3, "Vinho Branco": 1 }] },
    { name: "Medalhão de Carne", img: "Img/Food/MedalhaoCarne.png", lvl: 80, TankHp: 20400, DpsHp: 12000, SupHp: 8400, cd: 300, ing: [{ "Bife Cru Premium": 3, "Bacon": 8, "Azeite": 3, "Folhas Verdes": 1, "Alho": 1, "Sal": 2, "Batata": 4, "Água": 4, "Limão": 2 }] },
    { name: "Salada Italiana", img: "Img/Food/SaladaItaliana.png", lvl: 70, TankHp: 17850, DpsHp: 9450, SupHp: 7349, cd: 180, ing: [{ "Alface": 5, "Trufa Branca": 5, "Folhas Verdes": 1, "Tomates": 3, "Azeite": 1, "Batata": 2, "Sal": 1 }] },
    { name: "Bife e Ovo de Frigideira", img: "Img/Food/BifeOvoFrigideira.png", lvl: 70, TankHp: 17850, DpsHp: 9450, SupHp: 7349, cd: 300, ing: [{ "Bife Cru Premium": 3, "Ovos": 2, "Pimenta": 2, "Azeite": 1, "Folhas Verdes": 1, "Sal": 4 }] },
]

const ingredients = [
    { name: "Bife Cru Premium", cost: 200, img: "Img/Food/Ingredientes/BifeCruPremium.png" },
    { name: "Lagosta Crua", cost: 370, img: "Img/Food/Ingredientes/LagostaCrua.png" },
    { name: "Camarão Cru", cost: 240, img: "Img/Food/Ingredientes/CamarãoCru.png" },
    { name: "Carne Crua de Coelho", cost: 240, img: "Img/Food/Ingredientes/CarneCruaCoelho.png" },
    { name: "Peixe Cru", cost: 50, img: "Img/Food/Ingredientes/PeixeCru.png" },
    { name: "Atum", cost: 86, img: "Img/Food/Ingredientes/Atum.png" },
    { name: "Ostra", cost: 360, img: "Img/Food/Ingredientes/Ostra.png" },
    { name: "Bacon", cost: 10, img: "Img/Food/Ingredientes/Bacon.png" },
    { name: "Ovos", cost: 10, img: "Img/Food/Ingredientes/Ovos.png" },
    { name: "Manteiga", cost: 40, img: "Img/Food/Ingredientes/Manteiga.png" },
    { name: "Folhas Verdes", cost: 15, img: "Img/Food/Ingredientes/FolhasVerdes.png" },
    { name: "Alface", cost: 20, img: "Img/Food/Ingredientes/Alface.png" },
    { name: "Tomates", cost: 10, img: "Img/Food/Ingredientes/Tomates.png" },
    { name: "Limão", cost: 10, img: "Img/Food/Ingredientes/Limao.png" },
    { name: "Água", cost: 5, img: "Img/Food/Ingredientes/Agua.png" },
    { name: "Vinho Branco", cost: 700, img: "Img/Food/Ingredientes/VinhoBranco.png" },
    { name: "Cogumelo", cost: 20, img: "Img/Food/Ingredientes/Cogumelo.png" },
    { name: "Trufa Branca", cost: 250, img: "Img/Food/Ingredientes/TrufaBranca.png" },
    { name: "Sal", cost: 10, img: "Img/Food/Ingredientes/Sal.png" },
    { name: "Pimenta", cost: 15, img: "Img/Food/Ingredientes/Pimenta.png" },
    { name: "Arroz", cost: 10, img: "Img/Food/Ingredientes/Arroz.png" },
    { name: "Alho", cost: 10, img: "Img/Food/Ingredientes/Alho.png" },
    { name: "Batata", cost: 10, img: "Img/Food/Ingredientes/Batata.png" },
    { name: "Azeite", cost: 15, img: "Img/Food/Ingredientes/Azeite.png" },
    { name: "Cebola", cost: 10, img: "Img/Food/Ingredientes/Cebola.png" },
    { name: "Creme de Leite", cost: 20, img: "Img/Food/Ingredientes/CremeLeite.png" },
]

const worldBosses = [
    {
        name: "Marineford", img: "Img/Wb/Marineford.png", dates: [
            {
                date: "13/09/2024",
                ranking: [
                    {
                        "rank": 1,
                        "players": ["Batskillua", "Malvo", "Desalmed", "Embu", "Lipesz", "Lerc"],
                        "wave": 60,
                        "time": "01:11:16"
                    },
                    {
                        "rank": 2,
                        "players": ["My Sweet Namii", "Saeko Kamijo", "Luppzy", "Moita", "Nagashi", "Sidneirodrigues"],
                        "wave": 60,
                        "time": "01:11:37"
                    },
                    {
                        "rank": 3,
                        "players": ["Kamez", "Don Bronky", "Beetlejuice", "King Fofao", "O B A N A I", "Bosterman"],
                        "wave": 60,
                        "time": "01:15:52"
                    },
                    {
                        "rank": 4,
                        "players": ["Pykezin", "Taca Maeno", "Lord Zona Norte", "Wisce", "Sudden", "Raingard"],
                        "wave": 60,
                        "time": "01:16:44"
                    },
                    {
                        "rank": 5,
                        "players": ["Miwa San", "Quebra Mundos", "Tenz", "Zoroi", "The Lions", "Artur"],
                        "wave": 60,
                        "time": "01:17:71"
                    },
                    {
                        "rank": 6,
                        "players": ["Imaim", "Menelzinho", "Lightzin", "Falconns", "Don Ronin", "Mr Patolino"],
                        "wave": 45,
                        "time": "00:45:12"
                    },
                    {
                        "rank": 7,
                        "players": ["Kizaru Agiota", "Don Shuri", "Yash", "Don Vitu", "Pelota", "Ayase Chihaya"],
                        "wave": 45,
                        "time": "00:52:47"
                    },
                    {
                        "rank": 8,
                        "players": ["Kyav", "Phynx", "Jnrzerah", "Yamato", "Ycaro D Silva", "A B B A"],
                        "wave": 45,
                        "time": "00:52:51"
                    },
                    {
                        "rank": 9,
                        "players": ["Xtein", "CrossD", "Alucard", "Hayasaka", "Tifa Lockhart", "Xuemba"],
                        "wave": 45,
                        "time": "00:54:44"
                    },
                    {
                        "rank": 10,
                        "players": ["Emperor Azir", "Oru Maiito", "Usop Trezentos", "Mimi Shizumi", "Pirataqueestica", "Ayase Momo"],
                        "wave": 45,
                        "time": "00:54:50"
                    },
                    {
                        "rank": 11,
                        "players": ["Snake Torment", "Exquil", "Khannz", "Sukuna", "Kael Nortn", "Red Velvet"],
                        "wave": 45,
                        "time": "00:56:10"
                    },
                    {
                        "rank": 12,
                        "players": ["Sance Nikeboy", "Baianin Soberbo", "Houdini Nikeboy", "Ryan Nikeboy", "Abraaon", "Victin Nikeboy"],
                        "wave": 45,
                        "time": "00:56:36"
                    },
                    {
                        "rank": 13,
                        "players": ["Homem Borboleto", "Fluminense", "Hordes Marley", "Lukz", "Turner", "Oldhawk"],
                        "wave": 45,
                        "time": "00:59:44"
                    },
                    {
                        "rank": 14,
                        "players": ["Bantex", "Lalf", "Heisenberg", "Vito O Mod", "Zokres Nikeboy", "Asura"],
                        "wave": 43,
                        "time": "00:48:02"
                    },
                    {
                        "rank": 15,
                        "players": ["Paranoises", "Neowz", "Rowlet", "Feelsrainman", "Risinng", "Loxinho"],
                        "wave": 43,
                        "time": "00:52:19"
                    },
                    {
                        "rank": 16,
                        "players": ["The Petermann", "Miguelandia", "Romance", "Easy Money", "Chonicks", "O Robi"],
                        "wave": 43,
                        "time": "00:55:56"
                    },
                    {
                        "rank": 17,
                        "players": ["Lord Joao Pedro", "Revolt", "Lucifer", "Proenca", "Grio", "Linner"],
                        "wave": 43,
                        "time": "00:56:28"
                    },
                    {
                        "rank": 18,
                        "players": ["Les Ayverman", "Pocotojuliano", "Soyeon", "Rotevis", "Johnny D Brabo", "Dark Nth"],
                        "wave": 37,
                        "time": "00:39:21"
                    },
                    {
                        "rank": 19,
                        "players": ["Jaiminho", "Aeros", "Tumgemas", "Heido", "Enriq Fmz", "Levi"],
                        "wave": 31,
                        "time": "00:34:29"
                    },
                    {
                        "rank": 20,
                        "players": ["Sigzarus", "Don Junior", "Patin", "Yami Hikari", "Reyna", "Japeize"],
                        "wave": 30,
                        "time": "00:27:12"
                    },
                ]
            },
        ]
    },
    {
        name: "Bananawani", img: "Img/Wb/bananawani.png", dates: [
            {
                date: "A ser adicionado",
                ranking: [
                    {
                        "rank": 1,
                        "players": ["", "", "", "", "", ""],
                        "wave": 0,
                        "time": "00:00:00"
                    },
                ]
            },
        ]
    },
    {
        name: "Plesiosaur", img: "Img/Wb/plesiosaur.png", dates: [
            {
                date: "A ser adicionado",
                ranking: [
                    {
                        "rank": 1,
                        "players": ["", "", "", "", "", ""],
                        "wave": 0,
                        "time": "00:00:00"
                    },
                ]
            },
        ]
    },
    {
        name: "Hiking Bear", img: "Img/Wb/hikingbear.png", dates: [
            {
                date: "A ser adicionado",
                ranking: [
                    {
                        "rank": 1,
                        "players": ["", "", "", "", "", ""],
                        "wave": 0,
                        "time": "00:00:00"
                    },
                ]
            },
        ]
    },
    {
        name: "Shai-Hulud", img: "Img/Wb/shaihulud.png", dates: [
            {
                date: "A ser adicionado",
                ranking: [
                    {
                        "rank": 1,
                        "players": ["", "", "", "", "", ""],
                        "wave": 0,
                        "time": "00:00:00"
                    },
                ]
            },
        ]
    },
    {
        name: "Byakko", img: "Img/Wb/mihawk.png", dates: [
            {
                date: "A ser adicionado",
                ranking: [
                    {
                        "rank": 1,
                        "players": ["", "", "", "", "", ""],
                        "wave": 0,
                        "time": "00:00:00"
                    },
                ]
            },
        ]
    },
    {
        name: "Aokiji", img: "Img/Wb/aokiji.png", dates: [
            {
                date: "A ser adicionado",
                ranking: [
                    {
                        "rank": 1,
                        "players": ["", "", "", "", "", ""],
                        "wave": 0,
                        "time": "00:00:00"
                    },
                ]
            },
        ]
    },
]