// --- 1. DATA TEMPLATES ---
const unitTemplates = {
    "human_infantry": { 
        name: "ME Infantry", hp: 100, speed: 0.8, range: 35, damage: 6, 
        radius: 14, color: '#3498db', 
        spriteSrc: "images/me_infantry.png", 
        portraitSrc: "images/me_infantry_detail.png", 
        attackType: "single" 
    },
	"floppa_infantry": { 
        name: "Floppa Infantry", hp: 115, speed: 1, range: 28, damage: 9, 
        radius: 10, color: '#3498db', 
        spriteSrc: "images/me_infantry.png", 
        portraitSrc: "images/me_infantry_detail.png", 
        attackType: "single" 
    },
    "floppa_cavalry": { 
        name: "Floppa Rider", hp: 80, speed: 1.5, range: 25, damage: 9, 
        radius: 15, color: '#e67e22', spriteSrc: "images/floppa_cavalry.png", portraitSrc: "images/floppa_cavalry.png", attackType: "single" 
    },
    "caracal_artillery": { 
        name: "Caracal Mortar", hp: 50, speed: 0.5, range: 180, damage: 13, 
        radius: 14, color: 'rgb(225,200,150)', spriteSrc: "", portraitSrc: "", attackType: "aoe" 
    },
    "human_GEF_artillery": { 
        name: "Blitz artillery", hp: 170, speed: 0.7, range: 180, damage: 6, 
        radius: 19, color: 'rgb(200,200,200)', spriteSrc: "images/human_GEF_artillery", portraitSrc: "images/human_GEF_artillery_detail", attackType: "aoe" 
    },
    "sphynx_infantry": { 
        name: "Sphynx Infantry Forces of Great Empire of Faces", hp: 65, speed: 1.1, range: 30, damage: 10, 
        radius: 10, color: 'rgb(220,220,150)', spriteSrc: "images/sphynx_infantry.png", portraitSrc: "images/sphynx_infantry_detail.png", attackType: "single" 
    },
	"beaver_infantry": { 
        name: "Empire of Beavers Infantry Forces", hp: 60, speed: 0.9, range: 28, damage: 14, 
        radius: 10, color: 'rgb(220,220,150)', spriteSrc: "images/beaver_infantry.png", portraitSrc: "images/beaver_infantry_detail.png", attackType: "single" 
    },    "anprim_militia": { 
        name: "Anprim Militia", 
        hp: 60, speed: 2.4, range: 20, damage: 16, 
        radius: 13, color: '#8b4513', // Brown color
        spriteSrc: "", portraitSrc: "", attackType: "single" 
    },
    "memerooms_monster": { 
        name: "Cringe Anomaly", 
        hp: 40, speed: 3.2, range: 20, damage: 28, // Glass cannon: fast, high damage, very low HP
        radius: 16, color: '#ffcc00', // Sickly yellow
        spriteSrc: "", portraitSrc: "", attackType: "single" 
    },
    "floppa_medium_tank": { 
        name: "Floppa Medium Tank", hp: 190, speed: 0.6, range: 25, damage: 6, 
        radius: 27, color: 'rgb(200,200,200)', spriteSrc: "images/floppa_medium_tank.png", portraitSrc: "images/floppa_medium_tank.png", attackType: "single" 
    },
"snus_tank": { 
        name: "Snus tank", hp: 240, speed: 0.6, range: 25, damage: 6, 
        radius: 34, color: 'rgb(200,200,200)', spriteSrc: "images/maxo_blaster.png", portraitSrc: "images/snus_tank_detail.png", attackType: "aoe" 
    },
"maxo_blaster": { 
        name: "Maxo-Blaster", hp: 22, speed: 5, range: 300, damage: 27, 
        radius: 28, color: 'rgb(200,200,200)', spriteSrc: "images/maxo_blaster.png", portraitSrc: "images/maxo_blaster_detail.png", attackType: "aoe" 
    },
"cre_infantry": { 
name: "Cat-Egyptian infantry", hp: 60, speed: 0.8, range: 30, damage: 9, 
radius: 15, color: 'rgb(200,200,150)', spriteSrc: "", portraitSrc: "", attackType: "single" 
},
"cre_armored_car": { 
name: "Cat-Egyptian armored car 'Sisisís I' ", hp: 200, speed: 1.4, range: 30, damage: 11, 
radius: 15, color: 'rgb(200,200,150)', spriteSrc: "", portraitSrc: "", attackType: "single" 
},"human_GEF_infantry": { 
        name: "Human Infantry of GEF", hp: 75, speed: 0.4, range: 30, damage: 4, 
        radius: 22, color: 'rgb(200,200,150)', spriteSrc: "", portraitSrc: "", attackType: "single" 
    },
"cat_GEF_artillery": { 
        name: "Cat Blitz artillery", hp: 30, speed: 1.2, range: 140, damage: 20, 
        radius: 6, color: 'rgb(200,200,150)', spriteSrc: "", portraitSrc: "", attackType: "aoe" 
    },
"khuietatar_cavalry": { 
        name: "Khuietatar Cavalry", hp: 130, speed: 1.2, range: 140, damage: 13, 
        radius: 23, color: 'rgb(200,200,150)', spriteSrc: "", portraitSrc: "", attackType: "single" 
    },
"gef_armored_car": { 
        name: "Armored car of GEF 'Dægê I'", hp: 160, speed: 2, range: 30, damage: 23, 
        radius: 22, color: 'rgb(200,200,150)', spriteSrc: "", portraitSrc: "", attackType: "single" 
    },
"gef_light_tank": { 
        name: "Light tank of GEF Ùzbék I", hp: 300, speed: 1.4, range: 30, damage: 35, 
        radius: 22, color: 'rgb(200,200,150)', spriteSrc: "", portraitSrc: "", attackType: "single" 
    },
"gef_heavy_tank": { 
        name: "Heavy tank of GEF 'Bråtán I'", hp: 500, speed: 0.6, range: 30, damage: 40, 
        radius: 37, color: 'rgb(200,200,150)', spriteSrc: "", portraitSrc: "", attackType: "single" 
    }
};

// --- 2. TILE MAP SYSTEM ---
const TILE_SIZE = 30;
const TILE_LAND = 0;
const TILE_WATER = 1;
const TILE_CITY = 2;
const TILE_TRENCH = 3;

const mapLayouts = {
    "default": [
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLCCCCCCCCCCLLLLLLLLLLLL",
        "LLLLLLLLCCCCCCCCCCLLLLLLLLLLLL",
        "LLLLLLLLCCCCCCCCCCLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLWWWWWWWLLLLLLLLLLLLLLLLLLL",
        "LLLLWWWWWWWLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLTTTTTTTTTTTTTTTTLLLLLL",
        "LLLLLLLLTTTTTTTTTTTTTTTTLLLLLL",
        "LLLLLLLLLLLLLLLLLLCCCCCCLLLLLL",
        "LLLLLLLLLLLLLLLLLLCCCCCCLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL"
    ],
        "memerooms_campaign": [
        "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWW",
        "WLLLLLLLLLLLLLLLLLLLLLLLLLLLLW",
        "WLLLLLLLLLLLLLLLLLLLLLLLLLLLLW",
        "WLLLLLLWWWWWLLLLLLLLWWWWWLLLLW",
        "WLLLLLLWWWWWLLLLLLLLWWWWWLLLLW",
        "WLLLLLLWWWWWLLLLLLLLWWWWWLLLLW",
        "WLLLLLLLLLLLLLLLLLLLLLLLLLLLLW",
        "WLLLLLLLLLLLLLLLLLLLLLLLLLLLLW",
        "WLLLLWWWWWLLLLLLLLLLLLLLWWWLW",
        "WLLLLWWWWWLLLLLLLLLLLLLLWWWLW",
        "WLLLLWWWWWLLLLLLLLLLLLLLWWWLW",
        "WLLLLLLLLLLLLLLLLLLLLLLLLLLLLW",
        "WLLLLLLLLLLLLLLLLLLLLLLLLLLLLW",
        "WLLLLLLLLLLLWWWWWWWWLLLLLLLLW",
        "WLLLLLLLLLLLWWWWWWWWLLLLLLLLW",
        "WLLLLLLLLLLLWWWWWWWWLLLLLLLLW",
        "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWW"
    ],

    // 2. Shapi Desert (Mostly open, tiny oasis in the middle)
    "shapi_desert": [
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLWWLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLWWLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL"
    ],
	"memiga": [
        "WWLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "WWLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "WWLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "WWLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "WWLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "WWWWWWWWWWWWWWWWWWWWLWWWWLLLLL",
        "WWLLLLLLLLLLCCCCCCCCCCCLWWWLLL",
        "WLLLLLLLLLLCCCCCCCCCCCCLLLWWWW",
        "LLLLLLLLLLLCCCCCCCCCCCCLLLLLLL",
        "LLLLLLLLLLLLCCCCCCCCCCCLLLLLLL",
        "LLLLLLLLLLLLCCCCCCCCCCCLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL"
    ],

    // 3. Pelmenorezh Palace (Heavy city fortress on the right)
    "pelmenorezh": [
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLCCCCCCCCCC",
        "LLLLLLLLLLLLLLLLLLLLCCCCCCCCCC",
        "LLLLLLLLLLLLLLLLLLLLCCCCCCCCCC",
        "LLLLLLLLLLLLLLLLLLLLCCCCCCCCCC",
        "LLLLLLLLLLLLLLLLLLLLCCCCCCCCCC",
        "LLLLLLLLLLLLLLLLLLLLCCCCCCCCCC",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLTTTTTTTTTT",
        "LLLLLLLLLLLLLLLLLLLLTTTTTTTTTT",
        "LLLLLLLLLLLLLLLLLLLLTTTTTTTTTT",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL"
    ],
"bobrinsk": [
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLTTTTTLLLLLLLLLLLLLLL",
        "LLLLLLLTTTTTLLTTTTTLTTTTTLLLLL",
        "LLTTTTTLLCCCCCCCCCCLLLTTTTTLLL",
        "LTTTTTLCCCCCCCCCCCCLLLTTTTTLLL",
        "LLLTTTTTLCCCCCCCCCCCLLTTTTTLL",
        "LLLTTTTTLCCCCCCCCCCLLLTTTTTLLL",
        "LLLTTTTTLCCCCCCCCCCLLLTTTTTLLL",
        "LLTTTTTLLLLLLLLLCCCLLLTTTTTLLL",
        "LLLLLLLTTTTTTTTTTTTTTTTTTTTLLL",
        "LLLLLLLLLLTTTTTLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL"
    ]
};

let parsedMap = [];

function parseMap(layoutData) {
    parsedMap = [];
    for (let y = 0; y < layoutData.length; y++) {
        let row = [];
        for (let x = 0; x < layoutData[y].length; x++) {
            let char = layoutData[y][x];
            if (char === 'W') row.push(TILE_WATER);
            else if (char === 'C') row.push(TILE_CITY);
            else if (char === 'T') row.push(TILE_TRENCH);
            else row.push(TILE_LAND);
        }
        parsedMap.push(row);
    }
}

function getTileAt(x, y) {
    let gridX = Math.floor(x / TILE_SIZE);
    let gridY = Math.floor(y / TILE_SIZE);
    if (gridY < 0 || gridY >= parsedMap.length || gridX < 0 || gridX >= parsedMap[0].length) return TILE_WATER;
    return parsedMap[gridY][gridX];
}

// --- 3. DOM ELEMENTS & GAME STATE ---
const canvas = document.getElementById('battlefield');
const ctx = canvas.getContext('2d');
const statsPanel = document.getElementById('stats-panel');
const battleTitle = document.getElementById('battle-title');
const portraitImg = document.getElementById('unit-portrait');
const aiToggleBtn = document.getElementById('global-ai-toggle'); // NEW

const images = {};
const portraits = {};
for (let key in unitTemplates) {
    images[key] = new Image();
    images[key].src = unitTemplates[key].spriteSrc;
    portraits[key] = new Image();
    portraits[key].src = unitTemplates[key].portraitSrc;
}

let units = [];
let gameState = 'menu'; 
let currentAIBehavior = 'aggressive'; // Enemy AI
let playerAIBehavior = 'defense'; // NEW: Player AI

let mouseX = 0, mouseY = 0;
let isDragging = false;
let dragStartX = 0, dragStartY = 0, dragEndX = 0, dragEndY = 0;

function getPointerPos(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
    };
}

// --- 4. UNIT CLASS ---
class Unit {
    constructor(x, y, faction, templateKey) {
        this.x = x; this.y = y;
        this.faction = faction; 
        
        const template = unitTemplates[templateKey];
        this.type = template.name;
        this.key = templateKey;
        this.maxHp = template.hp; this.hp = this.maxHp;
        this.speed = template.speed;
        this.attackRange = template.range;
        this.attackDamage = template.damage;
        this.radius = template.radius;
        
        if (faction === 'player') this.fallbackColor = '#3498db'; 
        else if (faction === 'ally') this.fallbackColor = '#2ecc71'; 
        else this.fallbackColor = '#c0392b'; 

        this.attackType = template.attackType;
        this.targetX = x; this.targetY = y;
        this.selected = false;
        this.attackCooldown = 0;
        this.isRetreating = false;
        this.hasMoveOrder = false;
        this.trenchDamageTimer = 0; 
    }

    draw() {
        if (this.selected) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius + 4, 0, Math.PI * 2);
            ctx.strokeStyle = '#f1c40f'; ctx.lineWidth = 2; ctx.stroke();
        }

        const img = images[this.key];
        if (img && img.complete && img.naturalWidth > 0) {
            ctx.drawImage(img, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
        } else {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.fallbackColor;
            ctx.fill(); ctx.strokeStyle = '#000'; ctx.lineWidth = 2; ctx.stroke();
            ctx.fillStyle = '#fff'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
            ctx.fillText(this.type.charAt(0), this.x, this.y + 4);
        }

        const hpWidth = (this.hp / this.maxHp) * 25;
        ctx.fillStyle = '#000'; ctx.fillRect(this.x - 12.5, this.y - this.radius - 8, 25, 4);
        ctx.fillStyle = this.hp > (this.maxHp * 0.4) ? '#2ecc71' : '#e74c3c';
        ctx.fillRect(this.x - 12.5, this.y - this.radius - 8, hpWidth, 4);

        ctx.fillStyle = '#fff'; ctx.font = '10px Courier New'; ctx.textAlign = 'center';
        ctx.strokeStyle = '#000'; ctx.lineWidth = 3;
        ctx.strokeText(this.type, this.x, this.y + this.radius + 12); 
        ctx.fillText(this.type, this.x, this.y + this.radius + 12); 
    }

    update(allUnits) {
        if (this.attackCooldown > 0) this.attackCooldown--;
        if (this.trenchDamageTimer > 0) this.trenchDamageTimer--;

        let currentTile = getTileAt(this.x, this.y);
        if (currentTile === TILE_TRENCH && this.trenchDamageTimer <= 0) {
            this.hp -= 2; this.trenchDamageTimer = 60; 
        }

        if (this.hp <= this.maxHp * 0.4 && !this.isRetreating) {
            this.isRetreating = true; this.hasMoveOrder = false;
        }

        let targetEnemy = null;
        let closestDist = Infinity;

        for (let u of allUnits) {
            if (u.hp > 0) {
                let isEnemy = false;
                if (this.faction === 'enemy' && (u.faction === 'player' || u.faction === 'ally')) isEnemy = true;
                else if (this.faction !== 'enemy' && u.faction === 'enemy') isEnemy = true;

                if (isEnemy) {
                    let dist = Math.hypot(u.x - this.x, u.y - this.y);
                    if (dist < closestDist) { closestDist = dist; targetEnemy = u; }
                }
            }
        }

        let moveX = 0, moveY = 0, isMoving = false;

        if (this.isRetreating && targetEnemy) {
            let dx = this.x - targetEnemy.x, dy = this.y - targetEnemy.y;
            let dist = Math.hypot(dx, dy);
            if (dist > 0) { moveX = (dx / dist) * this.speed; moveY = (dy / dist) * this.speed; isMoving = true; }
        } else if (this.hasMoveOrder && this.faction === 'player') {
            let dx = this.targetX - this.x, dy = this.targetY - this.y;
            let dist = Math.hypot(dx, dy);
            if (dist > this.speed) { moveX = (dx / dist) * this.speed; moveY = (dy / dist) * this.speed; isMoving = true; }
            else { this.hasMoveOrder = false; }
        } else if (targetEnemy) {
            // NEW: Check Player/Enemy AI behaviors to see if they should hold ground
            let isHoldingGround = false;
            if (this.faction === 'player' && playerAIBehavior === 'defense') isHoldingGround = true;
            if (this.faction === 'enemy' && currentAIBehavior === 'defensive') isHoldingGround = true;

            if (!isHoldingGround && closestDist > this.attackRange) {
                let dx = targetEnemy.x - this.x, dy = targetEnemy.y - this.y;
                let dist = Math.hypot(dx, dy);
                if (dist > 0) { moveX = (dx / dist) * this.speed; moveY = (dy / dist) * this.speed; isMoving = true; }
            }
        }

        if (isMoving) this.moveWithPathfinding(moveX, moveY);

        if (targetEnemy && closestDist <= this.attackRange && !this.isRetreating) {
            if (this.attackCooldown <= 0) {
                this.performAttack(targetEnemy, allUnits);
                this.attackCooldown = 60; 
            }
        }
    }

        moveWithPathfinding(moveX, moveY) {
        // Try moving on the X axis
        let nextX = this.x + moveX;
        let tileX = getTileAt(nextX, this.y);
        
        let canMoveX = true;
        if (tileX === TILE_WATER) canMoveX = false;
        if (tileX === TILE_CITY && !this.key.includes('infantry')) canMoveX = false;

        if (canMoveX) {
            let speedModifier = 1.0;
            if (tileX === TILE_CITY) speedModifier = 0.5;
            if (tileX === TILE_TRENCH) speedModifier = 0.3;
            this.x += moveX * speedModifier;
        }

        // Try moving on the Y axis
        let nextY = this.y + moveY;
        let tileY = getTileAt(this.x, nextY);
        
        let canMoveY = true;
        if (tileY === TILE_WATER) canMoveY = false;
        if (tileY === TILE_CITY && !this.key.includes('infantry')) canMoveY = false;

        if (canMoveY) {
            let speedModifier = 1.0;
            if (tileY === TILE_CITY) speedModifier = 0.5;
            if (tileY === TILE_TRENCH) speedModifier = 0.3;
            this.y += moveY * speedModifier;
        }
    }

    performAttack(primaryTarget, allUnits) {
        ctx.beginPath(); ctx.moveTo(this.x, this.y); ctx.lineTo(primaryTarget.x, primaryTarget.y);
        ctx.strokeStyle = this.attackType === 'aoe' ? 'rgba(155, 89, 182, 0.8)' : 'rgba(255, 255, 255, 0.5)';
        ctx.lineWidth = this.attackType === 'aoe' ? 3 : 1; ctx.stroke();

        if (this.attackType === 'single') {
            primaryTarget.hp -= this.attackDamage;
        } else if (this.attackType === 'aoe') {
            for (let u of allUnits) {
                if (u.faction !== this.faction && u.hp > 0) {
                    let distToTarget = Math.hypot(u.x - primaryTarget.x, u.y - primaryTarget.y);
                    if (distToTarget <= 60) u.hp -= this.attackDamage * 0.6; 
                }
            }
            primaryTarget.hp -= this.attackDamage;
        }
    }
}

// --- 5. SPAWNING & SCENARIOS ---
function addLine(unitList, type, faction, count, startX, startY, endX, endY) {
    for (let i = 0; i < count; i++) {
        let t = count === 1 ? 0 : i / (count - 1);
        unitList.push(new Unit(startX + (endX - startX) * t, startY + (endY - startY) * t, faction, type));
    }
}

function startBattle(scenarioKey) {
    units = []; 
    let selectedLayout = mapLayouts[scenarioKey] || mapLayouts["default"];
    parseMap(selectedLayout); 
    currentAIBehavior = 'aggressive'; 
    
    // Reset Player AI to Defense on start
    playerAIBehavior = 'defense';
    aiToggleBtn.textContent = 'Defense Mode';
    aiToggleBtn.classList.remove('attack');
    aiToggleBtn.classList.add('defense');

    if (scenarioKey === 'july_pelmensk') {
	currentAIBehavior = 'defensive';
        battleTitle.textContent = "I Battle for P'el'm'ensk";
        addLine(units, "caracal_artillery", "player", 2, 150, 250, 150, 350);
        addLine(units, "human_infantry", "player", 16, 50, 450, 870, 450);
        addLine(units, "caracal_artillery", "enemy", 8, 700, 150, 100, 100);
	addLine(units, "floppa_infantry", "enemy", 8, 700, 150, 100, 150);
	addLine(units, "floppa_infantry", "enemy", 8, 700, 100, 100, 100);
        addLine(units, "human_infantry", "player", 6, 50, 400, 50, 400);
        addLine(units, "human_infantry", "player", 16, 50, 480, 870, 480);
        addLine(units, "human_infantry", "player", 16, 50, 410, 870, 410);
        addLine(units, "human_infantry", "player", 16, 50, 410, 870, 410);
        addLine(units, "human_infantry", "player", 16, 50, 390, 870, 390);
    } else if (scenarioKey === 'bobrinsk'){
	battleTitle.textContent = "Siege of Bobrinsk - Third/Fourth Memeworld War";
	addLine(units, "sphynx_infantry", "enemy", 10, 30, 460, 850, 460);
	addLine(units, "sphynx_infantry", "enemy", 10, 30, 420, 850, 420);
	addLine(units, "sphynx_infantry", "enemy", 10, 30, 480, 850, 480);
	addLine(units, "human_GEF_artillery", "enemy", 5, 30, 480, 850, 480);
	addLine(units, "sphynx_infantry", "enemy", 10, 30, 20, 30, 300);
	addLine(units, "sphynx_infantry", "enemy", 10, 30, 30, 450, 30);
	addLine(units, "sphynx_infantry", "enemy", 10, 30, 50, 450, 50);
	addLine(units, "sphynx_infantry", "enemy", 10, 30, 50, 450, 50);
	addLine(units, "sphynx_infantry", "enemy", 10, 30, 20, 30, 300);
	addLine(units, "sphynx_infantry", "enemy", 10, 850, 20, 850, 300);
	addLine(units, "beaver_infantry", "player", 10, 250, 137, 600, 137);
	addLine(units, "beaver_infantry", "player", 10, 250, 180, 600, 180);
	addLine(units, "beaver_infantry", "player", 10, 250, 165, 600, 160);
	addLine(units, "beaver_infantry", "player", 10, 250, 200, 600, 200);
	addLine(units, "beaver_infantry", "player", 10, 250, 260, 600, 260);
	addLine(units, "beaver_infantry", "player", 10, 600, 137, 600, 260);
	addLine(units, "beaver_infantry", "player", 10, 500, 137, 500, 260);
	addLine(units, "beaver_infantry", "player", 10, 500, 137, 500, 260);
	addLine(units, "beaver_infantry", "player", 10, 500, 137, 400, 260);
	addLine(units, "beaver_infantry", "player", 10, 550, 137, 550, 260);
	addLine(units, "beaver_infantry", "player", 10, 279, 137, 279, 260);
	addLine(units, "beaver_infantry", "player", 10, 230, 137, 230, 260);
	addLine(units, "beaver_infantry", "player", 10, 145, 137, 145, 260);
	addLine(units, "beaver_infantry", "player", 10, 190, 137, 190, 260);
	addLine(units, "beaver_infantry", "player", 10, 190, 400, 190, 400);
	

}
else if (scenarioKey === 'memiga'){
	battleTitle.textContent = "Siege of Bobrinsk - Third/Fourth Memeworld War";
	addLine(units, "human_infantry", "player", 17, 30, 50, 850, 50);
	addLine(units, "human_infantry", "player", 17, 30, 100, 850, 100);
	addLine(units, "human_infantry", "player", 17, 30, 120, 850, 120);
	addLine(units, "human_infantry", "player", 17, 30, 140, 850, 140);
	addLine(units, "beer_lover_infantry", "enemy", 6, 200, 230, 350, 230);
	addLine(units, "beer_lover_infantry", "enemy", 6, 200, 260, 350, 260);
	addLine(units, "beer_lover_infantry", "enemy", 6, 200, 350, 350, 350);
	addLine(units, "beer_lover_infantry", "enemy", 6, 200, 260, 370, 260);
	addLine(units, "beer_lover_infantry", "enemy", 6, 200, 360, 360, 360);
	addLine(units, "beer_lover_infantry", "enemy", 6, 200, 380, 380, 380);
	addLine(units, "human_infantry", "player", 9, 500, 50, 850, 50);
	addLine(units, "human_infantry", "player", 7, 500, 100, 850, 100);
	addLine(units, "human_infantry", "player", 8, 500, 120, 850, 120);
	addLine(units, "human_infantry", "player", 6, 500, 140, 850, 140);
	addLine(units, "ukr_infantry", "ally", 6, 200, 420, 380, 420);
	addLine(units, "ukr_infantry", "ally", 6, 200, 440, 380, 440);
	
	

}  else if (scenarioKey === 'memerooms_campaign') {
        battleTitle.textContent = "Memerooms Campaign";
        currentAIBehavior = 'aggressive'; // The monsters will rush you immediately!
        
        // Player starts in the top-left corner
        addLine(units, "human_infantry", "player", 4, 60, 60, 120, 60);
        addLine(units, "caracal_artillery", "player", 1, 60, 120, 60, 120);

        // Anprims (Allies) start in the bottom-right
        addLine(units, "anprim_militia", "ally", 5, 800, 450, 800, 500);

        // Memerooms Monsters (Enemies) spawn scattered in the maze
        addLine(units, "memerooms_monster", "enemy", 3, 400, 250, 450, 250);
        addLine(units, "memerooms_monster", "enemy", 2, 600, 150, 650, 150);
        addLine(units, "memerooms_monster", "enemy", 3, 250, 400, 300, 400);
        addLine(units, "memerooms_monster", "enemy", 3, 650, 400, 700, 400);
    }
else {
        battleTitle.textContent = scenarioKey.toUpperCase().replace('_', ' ');
        addLine(units, "human_infantry", "player", 6, 50, 200, 50, 400);
        addLine(units, "floppa_cavalry", "enemy", 6, 700, 200, 700, 400);

    }

    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('game-ui').style.display = 'flex';
    gameState = 'playing';
}

function returnToMenu() {
    gameState = 'menu';
    document.getElementById('game-ui').style.display = 'none';
    document.getElementById('main-menu').style.display = 'flex';
    units = []; portraitImg.style.display = 'none';
}

// --- 6. AI TOGGLE BUTTON LOGIC ---
aiToggleBtn.addEventListener('click', () => {
    if (playerAIBehavior === 'defense') {
        playerAIBehavior = 'attack';
        aiToggleBtn.textContent = 'Attack Mode';
        aiToggleBtn.classList.remove('defense');
        aiToggleBtn.classList.add('attack');
    } else {
        playerAIBehavior = 'defense';
        aiToggleBtn.textContent = 'Defense Mode';
        aiToggleBtn.classList.remove('attack');
        aiToggleBtn.classList.add('defense');
    }
});

// --- 7. INPUT HANDLING ---
canvas.addEventListener('pointerdown', (e) => {
    if (gameState !== 'playing') return;
    e.preventDefault(); 

    const pos = getPointerPos(e);
    mouseX = pos.x; mouseY = pos.y;

    if (e.button === 2) {
        let targetEnemy = null;
        for (let u of units) {
            if (u.faction === 'enemy' && u.hp > 0 && Math.hypot(u.x - mouseX, u.y - mouseY) < u.radius + 10) {
                targetEnemy = u; break;
            }
        }

        units.forEach(u => {
            if (u.selected && u.faction === 'player') {
                u.hasMoveOrder = true;
                if (targetEnemy) {
                    u.targetX = targetEnemy.x; u.targetY = targetEnemy.y;
                } else {
                    u.targetX = mouseX + (Math.random() * 20 - 10); u.targetY = mouseY + (Math.random() * 20 - 10);
                }
            }
        });
        return;
    }

    if (e.button === 0 || e.pointerType === 'touch') {
        isDragging = true;
        dragStartX = mouseX; dragStartY = mouseY; dragEndX = mouseX; dragEndY = mouseY;
    }
});

canvas.addEventListener('pointermove', (e) => {
    if (gameState !== 'playing') return;
    const pos = getPointerPos(e);
    mouseX = pos.x; mouseY = pos.y;
    if (isDragging) { dragEndX = mouseX; dragEndY = mouseY; }
});

canvas.addEventListener('pointerup', (e) => {
    if (gameState !== 'playing') return;
    
    if (e.button === 0 || e.pointerType === 'touch') {
        isDragging = false;
        const dragDist = Math.hypot(dragEndX - dragStartX, dragEndY - dragStartY);
        const minX = Math.min(dragStartX, dragEndX), maxX = Math.max(dragStartX, dragEndX);
        const minY = Math.min(dragStartY, dragEndY), maxY = Math.max(dragStartY, dragEndY);

        let selectedCount = 0; 
        let lastSelected = null;
        let hadPreviousSelection = units.some(u => u.selected && u.faction === 'player');

        if (dragDist >= 10) {
            units.forEach(u => u.selected = false);
            units.forEach(u => {
                if (u.faction === 'player' && u.hp > 0 && u.x >= minX && u.x <= maxX && u.y >= minY && u.y <= maxY) {
                    u.selected = true; selectedCount++; lastSelected = u;
                }
            });
        } else {
            let tappedUnit = null;
            for (let u of units) {
                if (u.hp > 0 && Math.hypot(u.x - mouseX, u.y - mouseY) < u.radius + 15) {
                    tappedUnit = u; break;
                }
            }

            if (tappedUnit) {
                if (tappedUnit.faction === 'player') {
                    units.forEach(u => u.selected = false);
                    tappedUnit.selected = true;
                    selectedCount = 1; lastSelected = tappedUnit;
                } else if (tappedUnit.faction === 'enemy' && hadPreviousSelection) {
                    units.forEach(u => {
                        if (u.selected && u.faction === 'player') {
                            u.hasMoveOrder = true;
                            u.targetX = tappedUnit.x; u.targetY = tappedUnit.y;
                        }
                    });
                    selectedCount = units.filter(u => u.selected).length;
                    lastSelected = units.find(u => u.selected);
                }
            } else {
                if (hadPreviousSelection) {
                    units.forEach(u => {
                        if (u.selected && u.faction === 'player') {
                            u.hasMoveOrder = true;
                            u.targetX = mouseX + (Math.random() * 20 - 10);
                            u.targetY = mouseY + (Math.random() * 20 - 10);
                        }
                    });
                    selectedCount = units.filter(u => u.selected).length;
                    lastSelected = units.find(u => u.selected);
                } else {
                    selectedCount = 0;
                }
            }
        }

        if (selectedCount === 1 && lastSelected) {
            statsPanel.innerHTML = `<p><strong>${lastSelected.type}</strong></p><p>HP: ${lastSelected.hp.toFixed(0)}/${lastSelected.maxHp}</p>`;
            const portraitObj = portraits[lastSelected.key];
            if (portraitObj && portraitObj.complete && portraitObj.naturalWidth > 0) {
                portraitImg.src = portraitObj.src;
                portraitImg.style.display = 'block'; 
            } else {
                portraitImg.style.display = 'none'; 
            }
        } else if (selectedCount > 1) {
            statsPanel.innerHTML = `<p><strong>${selectedCount} Units Selected</strong></p><p>Tap ground to move.</p>`;
            portraitImg.style.display = 'none'; 
        } else {
            statsPanel.innerHTML = `<p>Select units to command.</p>`;
            portraitImg.style.display = 'none'; 
        }
    }
});

canvas.addEventListener('contextmenu', (e) => e.preventDefault());

// --- 8. GAME LOOP & DRAWING ---
function drawMap() {
    for (let y = 0; y < parsedMap.length; y++) {
        for (let x = 0; x < parsedMap[y].length; x++) {
            let tile = parsedMap[y][x];
            if (tile === TILE_LAND) ctx.fillStyle = '#4a5d23'; 
            else if (tile === TILE_WATER) ctx.fillStyle = '#2980b9'; 
            else if (tile === TILE_CITY) ctx.fillStyle = '#7f8c8d'; 
            else if (tile === TILE_TRENCH) ctx.fillStyle = '#5c4033'; 
            
            ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
            ctx.strokeStyle = 'rgba(0,0,0,0.1)';
            ctx.strokeRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);

            if (tile === TILE_TRENCH) {
                ctx.strokeStyle = '#3e2723';
                ctx.beginPath();
                ctx.moveTo(x * TILE_SIZE + 5, y * TILE_SIZE); ctx.lineTo(x * TILE_SIZE + 5, y * TILE_SIZE + TILE_SIZE);
                ctx.moveTo(x * TILE_SIZE + 15, y * TILE_SIZE); ctx.lineTo(x * TILE_SIZE + 15, y * TILE_SIZE + TILE_SIZE);
                ctx.moveTo(x * TILE_SIZE + 25, y * TILE_SIZE); ctx.lineTo(x * TILE_SIZE + 25, y * TILE_SIZE + TILE_SIZE);
                ctx.stroke();
            }
        }
    }
}

function gameLoop() {
    if (gameState === 'playing') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawMap();

        for (let i = units.length - 1; i >= 0; i--) {
            if (units[i].hp <= 0) { units.splice(i, 1); continue; }
            units[i].update(units);
            units[i].draw();
        }

        units.forEach(u => {
            if (u.selected) {
                ctx.beginPath(); ctx.moveTo(u.x, u.y); ctx.lineTo(u.targetX, u.targetY);
                ctx.strokeStyle = 'rgba(241, 196, 15, 0.4)'; ctx.setLineDash([5, 5]); ctx.stroke(); ctx.setLineDash([]); 
            }
        });

        if (isDragging) {
            ctx.fillStyle = 'rgba(52, 152, 219, 0.3)'; ctx.strokeStyle = 'rgba(52, 152, 219, 1)'; ctx.lineWidth = 1;
            ctx.fillRect(dragStartX, dragStartY, dragEndX - dragStartX, dragEndY - dragStartY);
            ctx.strokeRect(dragStartX, dragStartY, dragEndX - dragStartX, dragEndY - dragStartY);
        }

        if (units.length > 0) {
            let playerAlive = units.some(u => u.faction === 'player');
            let enemyAlive = units.some(u => u.faction === 'enemy');

            if (!enemyAlive) { gameState = 'gameover'; setTimeout(() => { alert("VICTORY!"); returnToMenu(); }, 100); }
            else if (!playerAlive) { gameState = 'gameover'; setTimeout(() => { alert("DEFEAT!"); returnToMenu(); }, 100); }
        }
    }
    requestAnimationFrame(gameLoop);
}

gameLoop();
