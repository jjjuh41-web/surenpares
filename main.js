const STORE = {
  progress: 'surEnPares.progress.v3',
  settings: 'surEnPares.settings.v3'
};

const ASSETS = {
  cardBack: 'multimedia_surenpares/imagen_partetraseradelascartas.png',
  menuMusic: 'multimedia_surenpares/Sonido_Musica_FondoMENUS_SURENPARES.wav',
  gameMusic: {
    guerrero: 'multimedia_surenpares/musica_nivelGuerrero_facil_normal_dificil_secreto.mp3',
    oaxaca: 'multimedia_surenpares/musica_nivelOaxaca_facil_normal_dificil_secreto.mp3',
    chiapas: 'multimedia_surenpares/musica_nivelChiapas_facil_normal_dificil_secreto.mp3',
    yucatan: 'multimedia_surenpares/musica_nivelYucatan_facil_normal_dificil_secreto.mp3',
    quintanaRoo: 'multimedia_surenpares/musica_nivelQuintanaroo_facil_normal_dificil_secreto.mp3'
  },
  sfx: {
    click: 'multimedia_surenpares/Sonido_ClickUniversal.wav',
    pause: 'multimedia_surenpares/Sonido_BotonPausa_Presionado.wav',
    resume: 'multimedia_surenpares/Sonido_BotonPausa_Reanudar_Menudeinicio.wav',
    flip: 'multimedia_surenpares/sonido_carta_volteadauniversal.wav',
    match: 'multimedia_surenpares/Sonido_Carta_VolteadaCorrectamente.wav',
    miss: 'multimedia_surenpares/Sonido_Carta_VolteadaMal.wav',
    win: 'multimedia_surenpares/Sonido_Nivelcompletado.wav',
    lose: 'multimedia_surenpares/Sonido_JuegoTiempoAgotado.wav'
  }
};

const CHARACTER_ASSETS = {
  start: {
    image: 'nojoli_assets/01_feliz_boca_abierta_iniciandonivel.png',
    text: 'Estoy lista para acompanarte en este nivel.'
  },
  match: {
    image: 'nojoli_assets/01_feliz_boca_abierta_iniciandonivel.png',
    text: 'Muy bien, encontraste un par. Sigue asi.'
  },
  miss: {
    image: 'nojoli_assets/03_llorando_perdiste.png',
    text: 'Casi. Mira bien las cartas y prueba otra vez.'
  },
  win: {
    image: 'nojoli_assets/07_guino_ganaste.png',
    text: 'Ganaste el nivel. Excelente memoria.'
  },
  lose: {
    image: 'nojoli_assets/03_llorando_perdiste.png',
    text: 'Se acabo el tiempo, pero puedes intentarlo otra vez.'
  },
  unlock: {
    image: 'nojoli_assets/05_sorpresa_desbloqueada_primeravez.png',
    text: 'Me desbloqueaste para este estado. Ahora puedo acompanarte.'
  }
};
const CHARACTER_BOARD_SIZE = 'clamp(300px, calc(100vh - 400px), 650px)';
const CHARACTER_MULTI_BOARD_SIZE = 'clamp(260px, calc(100vh - 500px), 560px)';

const DEFAULT_BOARD_SIZE = 'clamp(300px, calc(100vh - 210px), 820px)';
const MULTI_BOARD_SIZE = 'clamp(240px, calc(100vh - 325px), 700px)';
const LEVELS = {
  easy: { label: 'Facil', pairs: 4, seconds: 45, cols: 4, info: '8 cartas - 45 segundos', image: '', boardSize: 'clamp(260px, calc(100vh - 300px), 430px)', multiBoardSize: 'clamp(240px, calc(100vh - 345px), 390px)' },
  normal: { label: 'Normal', pairs: 8, seconds: 90, cols: 4, info: '16 cartas - 1 minuto y medio', image: '' },
  hard: { label: 'Dificil', pairs: 12, seconds: 120, cols: 6, info: '24 cartas - 2 minutos', image: '', boardSize: 'clamp(430px, calc(100vh - 145px), 900px)', multiBoardSize: 'clamp(360px, calc(100vh - 245px), 760px)', characterBoardSize: 'clamp(420px, calc(100vh - 230px), 760px)', characterMultiBoardSize: 'clamp(340px, calc(100vh - 330px), 650px)' },
  secret: { label: 'Secreto', pairs: 12, seconds: 120, cols: 6, info: '24 cartas - 2 minutos', locked: 'Supera el reto de Dificil para descubrir este nivel', image: '', boardSize: 'clamp(430px, calc(100vh - 145px), 900px)', multiBoardSize: 'clamp(360px, calc(100vh - 245px), 760px)', characterBoardSize: 'clamp(420px, calc(100vh - 230px), 760px)', characterMultiBoardSize: 'clamp(340px, calc(100vh - 330px), 650px)' }
};

const LEVEL_ORDER = ['easy', 'normal', 'hard', 'secret'];
const SECRET_LIMIT_MS = 60000;

const CARD_IMAGES = {
  guerrero: {
    "Taxco": ""
  },
  oaxaca: {
    "Monte Alban": "",
    "Alebrijes": ""
  },
  chiapas: {
    "Palenque": ""
  },
  yucatan: {
    "Chichen Itza": ""
  },
  quintanaRoo: {
    "Tulum": ""
  }
};

const FACT_IMAGES = (typeof window !== 'undefined' && window.SUR_EN_PARES_FACT_IMAGES) || {
  guerrero: {
    "Taxco y la plata": ""
  },
  oaxaca: {
    "Monte Alban": "",
    "Artesania viva": ""
  },
  chiapas: {
    "Canon del Sumidero": ""
  },
  yucatan: {
    "Cenotes": ""
  },
  quintanaRoo: {
    "Laguna de Bacalar": ""
  }
};

const parseList = (text) => text.split('|').map((item) => item.split('~'));
const STATE_DATA = {
  guerrero: ["Guerrero","Estado","#bd5d43","assets/datos/guerrero/la_quebrada.jpg","","Taxco|Acapulco|Pozole|Chilate|La Quebrada|Zihuatanejo|Plata|Palma|Chilpancingo|Costa Chica|Grutas|Ixtapa|Artesania|Tecuanes|Montanas|Mezcal","Taxco y la plata~Taxco es reconocido por su trabajo de plateria y por sus calles empedradas.|La Quebrada~En Acapulco, los clavados de La Quebrada son una tradicion ligada al paisaje rocoso.|Costa Chica~La Costa Chica conserva expresiones afromexicanas, musica, danzas y cocina.|Pozole guerrerense~En Guerrero, el pozole es una comida muy presente en reuniones familiares.|Chilate~El chilate es una bebida tradicional preparada con cacao, arroz y canela.|Acapulco historico~Acapulco fue un puerto clave para el comercio con Asia en la Colonia.|Fuerte de San Diego~El Fuerte de San Diego resguarda parte de la historia maritima de Acapulco.|Ixtapa~Ixtapa nacio como un destino turistico planeado frente al Pacifico.|Zihuatanejo~Zihuatanejo conserva una bahia tranquila ligada a la pesca y al turismo.|Triangulo del Sol~Acapulco, Taxco e Ixtapa-Zihuatanejo forman el Triangulo del Sol.|Olinala~Olinala es famosa por cajas y artesanias decoradas con laca tradicional.|Santa Prisca~La parroquia de Santa Prisca es uno de los simbolos de Taxco.|Jumil~En Taxco existe una tradicion gastronomica relacionada con el insecto llamado jumil.|Grutas de Cacahuamilpa~Las Grutas de Cacahuamilpa son conocidas por sus enormes formaciones de roca.|Palma artesanal~En varias comunidades se elaboran piezas con palma tejida a mano.|Danza de Tecuanes~La danza de Tecuanes representa escenas de caza con musica y mascaras.|Chilpancingo~Chilpancingo es la capital del estado y centro politico de Guerrero.|Iguala~Iguala es recordada por su relacion historica con la bandera mexicana.|La Montana~La region de La Montana conserva lenguas y tradiciones originarias.|Sierra Madre del Sur~La Sierra Madre del Sur atraviesa Guerrero con montanas y bosques.|Pie de la Cuesta~Pie de la Cuesta es conocido por sus atardeceres frente al mar.|Barra de Potosi~Barra de Potosi combina playa, laguna, aves y vida costera.|Cocina de costa~La costa guerrerense destaca por pescados, mariscos y sabores tropicales.|Mezcal de Guerrero~El mezcal guerrerense se produce en comunidades con gran tradicion magueyera.|Xochistlahuaca~Xochistlahuaca es reconocida por textiles amuzgos hechos en telar."],
  oaxaca: ["Oaxaca","Estado","#b88616","assets/datos/oaxaca/monte_alban.jpg","","Guelaguetza|Monte Alban|Mole negro|Alebrijes|Arbol del Tule|Mezcal|Hierve el Agua|Teotitlan|Tlayudas|Barro negro|Mitla|Huatulco|Mazunte|Sierra Norte|Chocolate|Tapetes","La Guelaguetza~La Guelaguetza celebra la diversidad cultural de las regiones oaxaquenas.|Monte Alban~Monte Alban fue una de las grandes ciudades mesoamericanas del valle de Oaxaca.|Artesania viva~Oaxaca destaca por alebrijes, barro negro, textiles y tapetes tradicionales.|Alebrijes~Los alebrijes oaxaquenos son figuras coloridas talladas y pintadas a mano.|Barro negro~San Bartolo Coyotepec es famoso por su ceramica de barro negro.|Arbol del Tule~El Arbol del Tule es un ahuehuete enorme y muy antiguo.|Hierve el Agua~Hierve el Agua tiene formaciones minerales que parecen cascadas petrificadas.|Mitla~Mitla destaca por grecas de piedra y arquitectura zapoteca.|Teotitlan del Valle~Teotitlan del Valle es reconocido por tapetes tejidos en telar.|Mole negro~El mole negro combina chiles, especias y chocolate en una salsa tradicional.|Tlayudas~La tlayuda es una tortilla grande con frijol, queso y otros ingredientes.|Mezcal~Oaxaca es uno de los estados mas asociados con la produccion de mezcal.|Huatulco~Huatulco es conocido por sus bahias y playas del Pacifico.|Puerto Escondido~Puerto Escondido es famoso por olas grandes y ambiente costero.|Mazunte~Mazunte es un poblado costero ligado a la conservacion de tortugas.|Sierra Norte~La Sierra Norte ofrece bosques, senderos y proyectos de ecoturismo comunitario.|Chocolate oaxaqueno~El chocolate de Oaxaca suele prepararse con cacao, canela y azucar.|Santo Domingo~El templo de Santo Domingo es un icono del centro historico.|Valles Centrales~Los Valles Centrales concentran pueblos, mercados y zonas arqueologicas.|Danza de la Pluma~La Danza de la Pluma es una representacion ceremonial muy conocida.|Istmo de Tehuantepec~El Istmo destaca por trajes, musica y fiestas tradicionales.|Huipiles~En Oaxaca se elaboran huipiles con bordados de gran colorido.|Mercados~Los mercados oaxaquenos reunen comida, artesanias, pan y chocolate.|Ruta del Mezcal~La Ruta del Mezcal conecta palenques y pueblos productores.|Yagul~Yagul conserva restos arqueologicos en los Valles Centrales de Oaxaca."],
  chiapas: ["Chiapas","Estado","#2f7d50","assets/datos/chiapas/canon_del_sumidero.jpg","","Palenque|Sumidero|Lacandona|San Cristobal|Ambar|Cafe|Marimba|Bonampak|Agua Azul|Tuxtla|Lagos|Zinacantan|Cascadas|Tapachula|Selva|Textiles","Canon del Sumidero~El Canon del Sumidero tiene paredes muy altas y un rio entre paisajes verdes.|Ambar chiapaneco~El ambar de Chiapas es una resina fosil muy apreciada en artesanias.|Palenque~Palenque combina arquitectura maya, selva y relieves historicos.|Agua Azul~Agua Azul recibe su color por minerales y corrientes entre cascadas.|San Cristobal~San Cristobal de las Casas conserva calles, templos y ambiente colonial.|Selva Lacandona~La Selva Lacandona resguarda gran biodiversidad y comunidades mayas.|Bonampak~Bonampak es famoso por murales mayas conservados en sus edificios.|Yaxchilan~Yaxchilan se ubica junto al rio Usumacinta, rodeado de selva.|Lagos de Montebello~Montebello destaca por lagunas de tonos verdes y azules.|Misol-Ha~Misol-Ha es una cascada alta rodeada de vegetacion tropical.|Marimba~La marimba es un instrumento muy ligado a la musica chiapaneca.|Cafe de Chiapas~El cafe chiapaneco se cultiva en zonas de montana y clima humedo.|Zinacantan~Zinacantan es conocido por textiles florales y cultivo de flores.|San Juan Chamula~San Juan Chamula conserva ceremonias y costumbres tzotziles.|Chiapa de Corzo~Chiapa de Corzo es famosa por sus fiestas y sus Parachicos.|Tuxtla Gutierrez~Tuxtla Gutierrez es la capital de Chiapas.|Comitan~Comitan conserva arquitectura colonial y tradiciones de frontera.|El Chiflon~El Chiflon tiene cascadas de agua clara entre montanas.|Tapachula~Tapachula es una ciudad importante de la region del Soconusco.|Soconusco~El Soconusco es conocido por cacao, cafe y clima tropical.|Montes Azules~Montes Azules es una reserva importante dentro de la Selva Lacandona.|Tonina~Tonina fue una ciudad maya ubicada en la zona de Ocosingo.|Rio Grijalva~El rio Grijalva atraviesa paisajes emblematicos de Chiapas.|Textiles mayas~Los textiles chiapanecos muestran colores, simbolos y trabajo comunitario.|Cacao chiapaneco~El cacao forma parte de la historia agricola del sureste mexicano."],
  yucatan: ["Yucatan","Estado","#11747d","assets/datos/yucatan/chichen_itza.jpg","","Chichen Itza|Cenote|Henequen|Merida|Cochinita|Vaqueria|Izamal|Uxmal|Panuchos|Sisal|Flamingos|Trova|Hamacas|Valladolid|Mayapan|Jarana","Cenotes~Los cenotes son entradas naturales a sistemas de agua subterranea.|Chichen Itza~Chichen Itza es famosa por el templo de Kukulcan y su arquitectura maya.|Henequen~El henequen marco la historia economica de muchas haciendas yucatecas.|Merida~Merida es conocida por su arquitectura, plazas y vida cultural.|Uxmal~Uxmal es una ciudad maya representativa del estilo Puuc.|Izamal~Izamal es llamada ciudad amarilla por el color de muchas fachadas.|Valladolid~Valladolid conserva calles coloniales cerca de cenotes y zonas mayas.|Mayapan~Mayapan fue una importante ciudad maya del Posclasico.|Cenote Sagrado~El Cenote Sagrado de Chichen Itza fue un lugar ceremonial maya.|Cochinita pibil~La cochinita pibil se cocina tradicionalmente con achiote y naranja agria.|Panuchos~Los panuchos son tortillas rellenas de frijol con guisos encima.|Poc chuc~El poc chuc combina carne asada con sabores citricos.|Jarana~La jarana es un baile tradicional en fiestas yucatecas.|Vaqueria~La vaqueria es una celebracion con musica, baile y trajes tipicos.|Trova yucateca~La trova yucateca es una expresion musical romantica de la region.|Flamingos~En Celestun y Rio Lagartos se pueden observar flamingos.|Sisal~Sisal fue un puerto importante para el comercio del henequen.|Dzibilchaltun~Dzibilchaltun es una zona maya cerca de Merida.|Hamacas~Las hamacas yucatecas son parte de la vida cotidiana y artesanal.|Xtabentun~El xtabentun es un licor regional elaborado con miel y anis.|Haciendas~Muchas haciendas yucatecas estuvieron ligadas al auge henequenero.|Mani~Mani conserva historia colonial y cocina tradicional yucateca.|Las Coloradas~Las Coloradas es conocida por salinas de tonos rosados.|Ruta Puuc~La Ruta Puuc conecta varios sitios arqueologicos del sur yucateco.|Chaya~La chaya es una planta usada en platillos y bebidas regionales."],
  quintanaRoo: ["Quintana Roo","Estado","#3d6fb6","assets/datos/quintanaRoo/tulum.jpg","","Tulum|Bacalar|Arrecife|Chetumal|Holbox|Cozumel|Mahahual|Cenote Azul|Sian Kaan|Playa|Isla Mujeres|Akumal|Manglar|Manati|Caribe|Coral","Laguna de Bacalar~Bacalar es conocida por sus tonos de agua y su paisaje lagunar.|Sian Kaan~Sian Kaan protege selvas, humedales, playas y arrecifes del Caribe.|Arrecife mesoamericano~Frente a Quintana Roo vive parte del Sistema Arrecifal Mesoamericano.|Tulum~Tulum combina ruinas mayas con acantilados frente al mar Caribe.|Cozumel~Cozumel es reconocido por sus arrecifes y actividades de buceo.|Holbox~Holbox es una isla famosa por arena clara y aguas tranquilas.|Isla Mujeres~Isla Mujeres tiene playas caribenas y tradicion pesquera.|Akumal~Akumal es conocido por sus aguas claras y vida marina.|Mahahual~Mahahual conserva ambiente costero cerca de arrecifes del sur.|Chetumal~Chetumal es la capital del estado de Quintana Roo.|Banco Chinchorro~Banco Chinchorro es un atolon coralino frente a la costa sur.|Xcalak~Xcalak es un poblado costero ligado al arrecife y la pesca.|Cenote Azul~El Cenote Azul de Bacalar es profundo y de agua dulce.|Manglares~Los manglares protegen costas y sirven de refugio para especies.|Manaties~La Bahia de Chetumal es importante para la conservacion del manati.|Coba~Coba fue una ciudad maya conectada por antiguos caminos blancos.|Kohunlich~Kohunlich es conocido por mascarones mayas de gran tamano.|Chacchoben~Chacchoben conserva templos mayas entre vegetacion tropical.|Muyil~Muyil es una zona maya cercana a lagunas y canales naturales.|Playa del Carmen~Playa del Carmen crecio como punto central de la Riviera Maya.|Puerto Morelos~Puerto Morelos protege un arrecife cercano a la costa.|Isla Contoy~Isla Contoy es refugio de aves y vida marina.|Cancun~Cancun es uno de los destinos turisticos mas conocidos de Mexico.|Laguna Nichupte~La Laguna Nichupte tiene manglares junto a la zona hotelera.|Corales~Los corales forman habitats esenciales para peces y otras especies marinas."],
};

const STATES = Object.fromEntries(Object.entries(STATE_DATA).map(([key, data]) => [key, { name: data[0], region: data[1], color: data[2], menuImage: data[3], summary: data[4], cards: parseList(data[5]), facts: parseList(data[6]) }]));

const STATE_KEYS = Object.keys(STATES);
const STATE_IMAGES = Object.fromEntries(STATE_KEYS.map((key) => [key, '']));
const LEVEL_STATE_IMAGES = {
  guerrero: 'estados/guerrero-estado-imagen.webp',
  oaxaca: 'estados/oaxaca-estado-imagen.png',
  chiapas: 'estados/chiapas-estado-imagen.webp',
  yucatan: 'estados/yucatan-estado-imagen.webp',
  quintanaRoo: 'estados/quintanaroo-estado-imagen.webp'
};

const $ = (id) => document.getElementById(id);

const ids = 'startScreen mainHeader appMain stateScreen levelScreen gameScreen stateGrid levelGrid board levelHint selectedStateImage selectedStateRegion selectedStateName gameStateLabel gameLevelLabel matchesText movesText timerText multiPanel turnText playerOneScore playerTwoScore characterPanel characterImage characterText instructionsModal creditsModal playersModal pauseModal factModal resultModal factImage factPlaceholder factStateLabel factTitle factText resultStateLabel resultTitle resultText soundToggle vibrationToggle characterToggle menuMusic gameMusic startButton multiplayerButton instructionsButton creditsButton startSoundToggle stateSoundToggle levelSoundToggle closeInstructionsButton closeCreditsButton playersStartButton playersCancelButton playerOneInput playerTwoInput homeFromStatesButton backToStatesButton backToLevelsButton pauseButton resumeButton pauseLevelsButton pauseHomeButton factContinueButton replayButton resultStatesButton resultHomeButton'.split(' ');

const ui = Object.fromEntries(ids.map((id) => [id, $(id)]));

let selectedState = null;
let playMode = 'single';
let players = ['Jugador 1', 'Jugador 2'];
let progress = loadProgress();
let settings = loadSettings();
let factIndex = Object.fromEntries(STATE_KEYS.map((key) => [key, 0]));
let factDecks = {};
let sfx = {};
let game = freshGame();

function freshGame() {
  return { state: null, level: null, deck: [], first: null, second: null, moves: 0, matches: 0, totalMs: 0, elapsedMs: 0, startedAt: 0, timer: null, flipBackTimer: null, locked: false, pause: null, pendingWin: false, active: false, mode: playMode, turn: 0, scores: [0, 0], characterMood: 'start' };
}

function init() {
  setupAssets();
  bindButtons();
  renderStates();
  syncToggles();
  showScreen('start');
  openModal(ui.instructionsModal);
}

function setupAssets() {
  if (ASSETS.cardBack) document.documentElement.style.setProperty('--card-back-image', `url("${ASSETS.cardBack}")`);
  if (ASSETS.menuMusic) ui.menuMusic.src = ASSETS.menuMusic;
  sfx = Object.fromEntries(Object.entries(ASSETS.sfx).map(([key, src]) => [key, new Audio(src)]));
  ui.menuMusic.volume = 0.45;
  ui.gameMusic.volume = 0.38;
  Object.values(sfx).forEach((audio) => {
    audio.volume = 0.72;
    audio.preload = 'auto';
  });
}

function bindButtons() {
  [
    [ui.startButton, startSinglePlayer],
    [ui.multiplayerButton, openPlayers],
    [ui.instructionsButton, () => openModal(ui.instructionsModal)],
    [ui.creditsButton, () => openModal(ui.creditsModal)],
    [ui.startSoundToggle, toggleSound],
    [ui.stateSoundToggle, toggleSound],
    [ui.levelSoundToggle, toggleSound],
    [ui.closeInstructionsButton, () => closeModal(ui.instructionsModal)],
    [ui.closeCreditsButton, () => closeModal(ui.creditsModal)],
    [ui.playersStartButton, startMultiplayer],
    [ui.playersCancelButton, () => closeModal(ui.playersModal)],
    [ui.homeFromStatesButton, goHome],
    [ui.backToStatesButton, goStates],
    [ui.backToLevelsButton, goLevels],
    [ui.pauseButton, openPause, 'pause'],
    [ui.resumeButton, closePause, 'resume'],
    [ui.pauseLevelsButton, goLevels, 'resume'],
    [ui.pauseHomeButton, confirmHomeFromPause, 'resume'],
    [ui.factContinueButton, closeFact],
    [ui.replayButton, () => startLevel(game.level)],
    [ui.resultStatesButton, goStates],
    [ui.resultHomeButton, goHome],
    [ui.soundToggle, toggleSound],
    [ui.vibrationToggle, toggleVibration],
    [ui.characterToggle, toggleCharacter]
  ].forEach(([node, fn, sound = 'click']) => node.addEventListener('click', () => {
    playSfx(sound);
    fn();
  }));
}

function startSinglePlayer() { playMode = 'single'; showScreen('states'); }

function openPlayers() {
  ui.playerOneInput.value = players[0];
  ui.playerTwoInput.value = players[1];
  openModal(ui.playersModal);
  ui.playerOneInput.focus();
}

function startMultiplayer() {
  players = [
    ui.playerOneInput.value.trim() || 'Jugador 1',
    ui.playerTwoInput.value.trim() || 'Jugador 2'
  ];
  playMode = 'multi';
  closeModal(ui.playersModal);
  showScreen('states');
}

function make(tag, className = '', text = '') {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function renderStates() {
  ui.stateGrid.innerHTML = '';
  STATE_KEYS.forEach((key) => {
    const state = STATES[key];
    const done = Object.values(progress[key].done).filter(Boolean).length;
    const button = tile(state.name, state.summary, state.color, () => chooseState(key), false, STATE_IMAGES[key]);
    const badges = make('div', 'badges');
    badges.append(badge(`${done}/4 completados`), badge(progress[key].secret ? 'Secreto desbloqueado' : 'Secreto bloqueado', !progress[key].secret));
    button.appendChild(badges);
    ui.stateGrid.appendChild(button);
  });
}

function renderLevels() {
  const state = STATES[selectedState];
  const stateImage = LEVEL_STATE_IMAGES[selectedState];
  ui.levelGrid.innerHTML = '';
  ui.selectedStateImage.src = stateImage;
  ui.selectedStateImage.alt = state.name;
  ui.selectedStateImage.classList.toggle('hidden', !stateImage);
  ui.selectedStateRegion.textContent = 'Seleccion de niveles';
  ui.selectedStateName.textContent = state.name;
  ui.levelHint.textContent = progress[selectedState].secret ? 'Nivel secreto desbloqueado' : 'Completa el reto de Dificil para revelar un nivel secreto.';
  LEVEL_ORDER.forEach((key) => {
    const level = LEVELS[key];
    const unlocked = key !== 'secret' || progress[selectedState].secret;
    const button = tile(level.label, unlocked ? level.info : level.locked, state.color, () => startLevel(key), !unlocked, level.image);
    const badges = make('div', 'badges');
    badges.append(badge(progress[selectedState].done[key] ? 'Completado' : 'No completado'));
    button.appendChild(badges);
    ui.levelGrid.appendChild(button);
  });
}

function badge(text, locked = false) { return make('span', locked ? 'badge locked' : 'badge', text); }

function tile(title, text, color, onClick, disabled = false, image = '') {
  const button = make('button', 'tile');
  button.type = 'button';
  button.disabled = disabled;
  button.style.setProperty('--color', color);
  button.addEventListener('click', () => {
    playSfx('click');
    onClick();
  });
  if (image) {
    const img = make('img', 'tile-img');
    img.src = image;
    img.alt = title;
    button.appendChild(img);
  }
  button.appendChild(make('strong', '', title));
  if (text) button.appendChild(make('span', '', text));
  return button;
}

function chooseState(key) { selectedState = key; renderLevels(); showScreen('levels'); }

function startLevel(levelKey) {
  if (!selectedState || (levelKey === 'secret' && !progress[selectedState].secret)) return;
  stopGame();
  const level = LEVELS[levelKey];
  game = freshGame();
  Object.assign(game, { state: selectedState, level: levelKey, deck: createDeck(selectedState, level.pairs), totalMs: level.seconds * 1000, active: true });
  if (ASSETS.gameMusic[selectedState]) ui.gameMusic.src = ASSETS.gameMusic[selectedState];
  factDecks[selectedState] = [...STATES[selectedState].facts].sort(() => Math.random() - 0.5);
  factIndex[selectedState] = 0;
  ui.board.style.setProperty('--cols', level.cols);
  ui.board.style.setProperty('--rows', Math.ceil((level.pairs * 2) / level.cols));
  ui.gameStateLabel.textContent = STATES[selectedState].name;
  ui.gameLevelLabel.textContent = `${level.label} - ${level.info}`;
  setCharacterMood('start');
  updateBoardSize();
  renderBoard();
  updateStats();
  showScreen('game');
  startTimer();
}

function isMultiplayer() { return game.mode === 'multi'; }

function isCharacterUnlocked(stateKey = game.state) {
  return Boolean(stateKey && progress[stateKey] && progress[stateKey].done.secret);
}

function canShowCharacter() {
  return Boolean(settings.character && isCharacterUnlocked());
}

function boardSizeFor(level) {
  const base = isMultiplayer() ? (level.multiBoardSize || MULTI_BOARD_SIZE) : (level.boardSize || DEFAULT_BOARD_SIZE);
  if (!canShowCharacter()) return base;
  return isMultiplayer()
    ? (level.characterMultiBoardSize || level.multiBoardSize || CHARACTER_MULTI_BOARD_SIZE)
    : (level.characterBoardSize || level.boardSize || CHARACTER_BOARD_SIZE);
}

function updateBoardSize() {
  if (!game.level) return;
  ui.board.style.setProperty('--board-size', boardSizeFor(LEVELS[game.level]));
}

function refreshCharacterPanel() {
  const visible = canShowCharacter();
  ui.characterPanel.classList.toggle('hidden', !visible);
  ui.gameScreen.classList.toggle('character-visible', visible);
  updateBoardSize();
}

function setCharacterMood(mood) {
  game.characterMood = mood;
  const data = CHARACTER_ASSETS[mood] || CHARACTER_ASSETS.start;
  if (ui.characterImage) {
    ui.characterImage.src = data.image;
    ui.characterImage.alt = `Nojoli - ${mood}`;
  }
  if (ui.characterText) ui.characterText.textContent = data.text;
  refreshCharacterPanel();
}

function createDeck(stateKey, pairs) {
  const state = STATES[stateKey];
  let numeros = Array.from({ length: pairs }, (_, i) => [i + 1, i + 1]).flat();
  numeros = numeros.sort(() => Math.random() - 0.5);
  console.log(numeros);
  return numeros.map((id) => {
    const data = state.cards[id - 1];
    const [label] = Array.isArray(data) ? data : [data];
    return { id, label, image: imageFor(CARD_IMAGES, stateKey, label) };
  });
}

function renderBoard() {
  ui.board.innerHTML = '';
  game.deck.forEach((card, index) => {
    const button = make('button', 'card');
    button.type = 'button';
    button.dataset.index = index;
    button.addEventListener('click', onCardClick);
    ui.board.appendChild(button);
  });
}

function setCardText(button, text) {
  button.innerHTML = '';
  button.appendChild(make('span', 'card-label', text));
}

function onCardClick(event) {
  if (!game.active || game.locked || game.pause) return;
  const button = event.currentTarget;
  const card = game.deck[Number(button.dataset.index)];
  if (!card || button.classList.contains('revealed') || button.classList.contains('matched')) return;
  const firstPick = !game.first;
  reveal(button, card);
  if (firstPick) {
    playSfx('flip');
    game.first = { button, card };
    return;
  }
  game.second = { button, card };
  game.moves += 1;
  updateStats();
  game.first.card.id === game.second.card.id ? matchPair(card) : missPair();
}

function reveal(button, card) {
  button.disabled = true;
  button.classList.add('revealed');
  button.innerHTML = '';
  if (!card.image) return void setCardText(button, card.label);
  const img = make('img');
  img.src = card.image;
  img.alt = card.label;
  button.appendChild(img);
}

function hide(button) {
  button.disabled = false;
  button.className = 'card';
  button.innerHTML = '';
}

function matchPair(card) {
  playSfx('match');
  game.first.button.classList.add('matched');
  game.second.button.classList.add('matched');
  game.matches += 1;
  if (isMultiplayer()) game.scores[game.turn] += 2;
  game.pendingWin = game.matches === LEVELS[game.level].pairs;
  feedback(true);
  setCharacterMood('match');
  clearPick();
  updateStats();
  openFact(card);
}

function missPair() {
  game.locked = true;
  playSfx('miss');
  feedback(false);
  setCharacterMood('miss');
  game.flipBackTimer = setTimeout(() => {
    hide(game.first.button);
    hide(game.second.button);
    clearPick();
    if (isMultiplayer()) switchTurn();
    game.locked = false;
    updateStats();
  }, 850);
}

function clearPick() { game.first = null; game.second = null; }

function switchTurn() { game.turn = game.turn === 0 ? 1 : 0; }

function openFact(card) {
  const state = STATES[game.state];
  const fact = nextFact(game.state);
  game.locked = true;
  game.pause = 'fact';
  pauseTimer();
  ui.factStateLabel.textContent = `${state.name} - ${card.label}`;
  ui.factTitle.textContent = fact[0];
  ui.factText.textContent = fact[1];
  showFactImage(imageFor(FACT_IMAGES, game.state, fact[0]), state.name, fact[0]);
  openModal(ui.factModal);
  updateMusic();
}

function nextFact(stateKey) {
  if (!factDecks[stateKey] || factIndex[stateKey] >= factDecks[stateKey].length) {
    factDecks[stateKey] = [...STATES[stateKey].facts].sort(() => Math.random() - 0.5);
    factIndex[stateKey] = 0;
  }
  return factDecks[stateKey][factIndex[stateKey]++];
}

function imageFor(group, stateKey, label) { return group[stateKey] && group[stateKey][label] ? group[stateKey][label] : ''; }

function showFactImage(src, stateName, alt) {
  if (!ui.factImage || !ui.factPlaceholder) return;
  ui.factImage.classList.toggle('hidden', !src);
  ui.factPlaceholder.classList.toggle('hidden', Boolean(src));
  if (src) {
    ui.factImage.src = src;
    ui.factImage.alt = alt;
  } else {
    ui.factImage.removeAttribute('src');
    ui.factPlaceholder.textContent = `Imagen de ${stateName}`;
  }
}

function closeFact() {
  closeModal(ui.factModal);
  game.pause = null;
  game.locked = false;
  game.pendingWin ? finishLevel() : startTimer();
}

function startTimer() {
  if (!game.active || game.pause || game.timer) return;
  game.startedAt = Date.now();
  game.timer = setInterval(updateTimer, 250);
  updateTimer();
  updateMusic();
}

function pauseTimer() {
  if (game.timer) {
    game.elapsedMs += Date.now() - game.startedAt;
    clearInterval(game.timer);
  }
  game.timer = null;
  game.startedAt = 0;
  updateTimer();
}

function elapsedMs() { return game.timer ? game.elapsedMs + Date.now() - game.startedAt : game.elapsedMs; }

function remainingMs() { return Math.max(0, game.totalMs - elapsedMs()); }

function updateTimer() {
  ui.timerText.textContent = formatTime(remainingMs());
  if (game.active && remainingMs() <= 0) loseLevel();
}

function updateStats() {
  ui.matchesText.textContent = `${game.matches}/${game.level ? LEVELS[game.level].pairs : 0}`;
  ui.movesText.textContent = String(game.moves);
  ui.timerText.textContent = formatTime(remainingMs());
  ui.multiPanel.classList.toggle('hidden', !isMultiplayer());
  if (isMultiplayer()) {
    ui.turnText.textContent = `Turno: ${players[game.turn]}`;
    ui.playerOneScore.textContent = `${players[0]}: ${game.scores[0]} tarjetas`;
    ui.playerTwoScore.textContent = `${players[1]}: ${game.scores[1]} tarjetas`;
  }
}

function formatTime(ms) {
  const total = Math.ceil(ms / 1000);
  return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
}

function finishLevel() {
  const ms = elapsedMs();
  const seconds = Math.ceil(ms / 1000);
  let extra = '';
  const unlockedCharacter = game.level === 'secret' && !isCharacterUnlocked();
  game.active = false;
  pauseTimer();
  if (isMultiplayer()) {
    playSfx('win');
    setCharacterMood('win');
    showResult('Partida terminada', multiplayerResultText());
    return;
  }
  progress[game.state].done[game.level] = true;
  if (game.level === 'hard' && ms <= SECRET_LIMIT_MS) {
    progress[game.state].secret = true;
    extra = ' Nivel secreto desbloqueado.';
  }
  saveProgress();
  renderStates();
  renderLevels();
  playSfx('win');
  setCharacterMood(unlockedCharacter ? 'unlock' : 'win');
  if (unlockedCharacter) extra += ' Nojoli desbloqueada para este estado.';
  showResult('Nivel completado', `${LEVELS[game.level].label} terminado en ${seconds === 1 ? '1 segundo' : `${seconds} segundos`} con ${game.moves} movimientos.${extra}`);
}

function loseLevel() {
  game.active = false;
  pauseTimer();
  playSfx('lose');
  setCharacterMood('lose');
  showResult('Tiempo agotado', isMultiplayer() ? multiplayerResultText('Se acabo el tiempo.') : 'Se acabo el tiempo. Puedes intentarlo otra vez o volver a seleccionar estado.');
}

function showResult(title, text) {
  ui.resultStateLabel.textContent = isMultiplayer() ? `Multijugador - ${STATES[game.state].name}` : STATES[game.state].name;
  ui.resultTitle.textContent = title;
  ui.resultText.textContent = text;
  openModal(ui.resultModal);
  updateMusic();
}

function multiplayerResultText(prefix = '') {
  const [one, two] = game.scores;
  const score = `${players[0]}: ${one} tarjetas. ${players[1]}: ${two} tarjetas.`;
  const winner = one === two ? 'Empate.' : `Gana ${one > two ? players[0] : players[1]}.`;
  return `${prefix ? `${prefix} ` : ''}${score} ${winner}`;
}

function openPause() {
  if (!game.active || game.pause) return;
  game.pause = 'menu';
  game.locked = true;
  pauseTimer();
  openModal(ui.pauseModal);
  updateMusic();
}

function closePause() {
  closeModal(ui.pauseModal);
  game.pause = null;
  game.locked = false;
  startTimer();
}

function confirmHomeFromPause() { if (confirm('Continuar al menu de inicio?')) goHome(); }

function stopGame() {
  closeModal(ui.playersModal);
  closeModal(ui.pauseModal);
  closeModal(ui.factModal);
  closeModal(ui.resultModal);
  game.active = false;
  pauseTimer();
  clearTimeout(game.flipBackTimer);
  updateMusic();
}

function goLevels() { stopGame(); renderLevels(); showScreen('levels'); }

function goStates() { stopGame(); renderStates(); showScreen('states'); }

function goHome() {
  stopGame();
  playMode = 'single';
  selectedState = null;
  renderStates();
  closeModal(ui.instructionsModal);
  closeModal(ui.creditsModal);
  showScreen('start');
}

function showScreen(name) {
  const start = name === 'start';
  const cleanHeader = start || name === 'states' || name === 'game';
  ui.startScreen.classList.toggle('hidden', !start);
  ui.mainHeader.classList.toggle('hidden', cleanHeader);
  ui.appMain.classList.toggle('hidden', start);
  ui.stateScreen.classList.toggle('hidden', name !== 'states');
  ui.levelScreen.classList.toggle('hidden', name !== 'levels');
  ui.gameScreen.classList.toggle('hidden', name !== 'game');
  document.body.dataset.screen = name;
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  updateMusic();
}

function openModal(modal) { modal.classList.remove('hidden'); }

function closeModal(modal) { modal.classList.add('hidden'); }

function defaultProgress() { return Object.fromEntries(STATE_KEYS.map((key) => [key, { secret: false, done: { easy: false, normal: false, hard: false, secret: false } }])); }

function loadProgress() {
  const base = defaultProgress();
  const saved = loadJson(STORE.progress, {});
  STATE_KEYS.forEach((key) => {
    base[key].secret = Boolean(saved[key] && saved[key].secret);
    base[key].done = { ...base[key].done, ...(saved[key] ? saved[key].done : {}) };
  });
  return base;
}

function saveProgress() { localStorage.setItem(STORE.progress, JSON.stringify(progress)); }

function loadSettings() { return { sound: true, vibration: true, character: true, ...loadJson(STORE.settings, {}) }; }

function saveSettings() { localStorage.setItem(STORE.settings, JSON.stringify(settings)); }

function loadJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch (error) {
    return fallback;
  }
}

function toggleSound() {
  settings.sound = !settings.sound;
  saveSettings();
  syncToggles();
  updateMusic();
}

function toggleVibration() {
  settings.vibration = !settings.vibration;
  saveSettings();
  syncToggles();
}

function toggleCharacter() {
  settings.character = !settings.character;
  saveSettings();
  syncToggles();
  refreshCharacterPanel();
}

function syncToggles() {
  ui.soundToggle.textContent = settings.sound ? 'Activado' : 'Desactivado';
  ui.soundToggle.setAttribute('aria-pressed', String(settings.sound));
  [ui.startSoundToggle, ui.stateSoundToggle, ui.levelSoundToggle].forEach((button) => {
    button.textContent = settings.sound ? 'Silenciar juego' : 'Activar sonido';
    button.setAttribute('aria-pressed', String(settings.sound));
  });
  ui.vibrationToggle.textContent = settings.vibration ? 'Activada' : 'Desactivada';
  ui.vibrationToggle.setAttribute('aria-pressed', String(settings.vibration));
  ui.characterToggle.textContent = settings.character ? 'Activada' : 'Desactivada';
  ui.characterToggle.setAttribute('aria-pressed', String(settings.character));
}

function updateMusic() {
  if (!settings.sound) return pauseBoth();
  const screen = document.body.dataset.screen;
  const inGame = screen === 'game' && game.active && game.pause !== 'menu';
  if (inGame) {
    pauseAudio(ui.menuMusic);
    playAudio(ui.gameMusic);
  } else if (['start', 'states', 'levels'].includes(screen)) {
    pauseAudio(ui.gameMusic);
    playAudio(ui.menuMusic);
  } else {
    pauseBoth();
  }
}

function playAudio(audio) { if (audio.src) audio.play().catch(() => {}); }

function playSfx(key) {
  if (!settings.sound || !sfx[key]) return;
  sfx[key].currentTime = 0;
  sfx[key].play().catch(() => {});
}

function pauseAudio(audio) { audio.pause(); }

function pauseBoth() { pauseAudio(ui.menuMusic); pauseAudio(ui.gameMusic); }

function feedback(success) {
  if (!settings.vibration) return;
  const className = success ? 'feedback-good' : 'feedback-bad';
  document.body.classList.remove('feedback-good', 'feedback-bad');
  requestAnimationFrame(() => {
    document.body.classList.add(className);
    setTimeout(() => document.body.classList.remove(className), 280);
  });
  if (navigator.vibrate) navigator.vibrate(success ? [40] : [35, 40, 35]);
}

window.addEventListener('DOMContentLoaded', init);

