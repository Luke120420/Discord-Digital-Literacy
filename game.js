// ==================== GAME CONFIGURATION ====================
const AVATARS = [
    '😊', '😎', '🤓', '😄', '🙂', '😏', '😇', '🤗',
    '🤔', '😴', '🥳', '🤩', '😋', '🥰', '🤠', '🦊',
    '🐱', '🐶', '🐼', '🐨', '🦁', '🐸', '🦋', '🌟',
    '🔥', '💎', '🎮', '🎨', '🎵', '⚡', '🌈', '🚀'
];

const FAKE_USERS = [
    { name: 'CoolGamer123', avatar: '🎮', color: '#e91e63' },
    { name: 'StudyBuddy', avatar: '📚', color: '#9c27b0' },
    { name: 'NightOwl_X', avatar: '🦉', color: '#3f51b5' },
    { name: 'PixelMaster', avatar: '🎨', color: '#00bcd4' },
    { name: 'MusicLover99', avatar: '🎵', color: '#4caf50' },
    { name: 'TechWizard', avatar: '💻', color: '#ff9800' },
    { name: 'SoccerStar', avatar: '⚽', color: '#f44336' },
    { name: 'BookWorm', avatar: '📖', color: '#795548' }
];

// ==================== SCENARIOS ====================
const SCENARIOS = [
    {
        id: 'swearing',
        title: 'Someone Swearing',
        setup: [
            { user: 0, text: "Hey everyone! How's the homework going?" },
            { user: 1, text: "Pretty good, almost done with math!" },
            { user: 2, text: "This is so f***ing hard, I hate this class!" }
        ],
        highlightLast: true,
        question: "Someone just used bad language in the chat. What do you do?",
        choices: [
            { text: "Report the message to a moderator or teacher", points: 5, feedback: "Excellent! Reporting to a trusted adult helps keep the community safe." },
            { text: "Ignore it and continue the conversation", points: 3, feedback: "Not bad, but it's better to report inappropriate language so it doesn't become normal." },
            { text: "Tell them to stop but don't report", points: 1, feedback: "Speaking up is good, but without reporting, the behavior may continue." },
            { text: "Join in and also use bad language", points: 0, feedback: "This makes the problem worse and you could get in trouble too." }
        ]
    },
    {
        id: 'cyberbullying',
        title: 'Cyberbullying',
        setup: [
            { user: 3, text: "Did you guys see Sarah's profile pic? 😂" },
            { user: 4, text: "OMG yes, she looks so weird lol" },
            { user: 0, text: "Let's all comment on it haha" }
        ],
        highlightLast: false,
        question: "A group is making fun of someone who isn't in the chat. What do you do?",
        choices: [
            { text: "Tell them to stop and report the bullying to a teacher/moderator", points: 5, feedback: "Perfect! Standing up against bullying and reporting it is the right thing to do." },
            { text: "Don't participate but stay silent", points: 1, feedback: "While you didn't join in, silence can be seen as approval. It's better to speak up." },
            { text: "Leave the chat without saying anything", points: 3, feedback: "Removing yourself is okay, but reporting the behavior helps protect the victim." },
            { text: "Join in making fun of the person", points: 0, feedback: "This is cyberbullying and can seriously hurt someone. Never participate in bullying." }
        ]
    },
    {
        id: 'made_fun_of',
        title: 'Someone Made Fun of You',
        setup: [
            { user: 5, text: "Hey everyone check out this meme I made" },
            { user: 6, text: "Lol that's actually pretty funny" },
            { user: 2, text: "@[PLAYER] Your gaming skills are trash, you always lose 😂😂" }
        ],
        highlightLast: true,
        question: "Someone just made fun of you publicly. How do you respond?",
        choices: [
            { text: "Don't respond emotionally, tell a trusted adult if it continues", points: 5, feedback: "Great choice! Staying calm and involving trusted adults is the mature response." },
            { text: "Calmly tell them that's not okay, then move on", points: 3, feedback: "Good approach! Setting boundaries while not escalating is smart." },
            { text: "Insult them back to defend yourself", points: 0, feedback: "Fighting back can escalate the situation and get you in trouble too." },
            { text: "Screenshot and post it elsewhere to embarrass them", points: 0, feedback: "This creates more drama and makes you part of the problem." }
        ]
    },
    {
        id: 'you_sweared',
        title: 'You Accidentally Swore',
        setup: [
            { user: 1, text: "This game is impossible to beat!" },
            { user: 'player', text: "I know right, it's so damn hard!" },
            { user: 7, text: "Whoa, language!" }
        ],
        highlightLast: false,
        highlightIndex: 1,
        question: "You accidentally used inappropriate language. What should you do?",
        choices: [
            { text: "Apologize immediately and be more careful with your words", points: 5, feedback: "Perfect! Taking responsibility and apologizing shows maturity." },
            { text: "Delete the message and pretend it didn't happen", points: 3, feedback: "Deleting is okay, but apologizing shows you understand it was wrong." },
            { text: "Say it's not a big deal and everyone says it", points: 1, feedback: "Making excuses doesn't fix the mistake. Own up to it instead." },
            { text: "Argue that the word isn't really that bad", points: 0, feedback: "Arguing makes it worse. Respecting community rules is important." }
        ]
    },
    {
        id: 'suspicious_link',
        title: 'Suspicious Link',
        setup: [
            { user: 4, text: "Hey guys check this out!" },
            { user: 4, text: "🔗 FREE-ROBUX-GENERATOR.com - Get unlimited Robux NOW!" },
            { user: 5, text: "Omg is that real??" }
        ],
        highlightLast: false,
        highlightIndex: 1,
        question: "Someone shared a suspicious link promising free stuff. What do you do?",
        choices: [
            { text: "Don't click it, warn others it's likely a scam, and report it", points: 5, feedback: "Excellent! These links are almost always scams or malware. Reporting protects everyone." },
            { text: "Ignore it and don't click", points: 3, feedback: "Good that you didn't click, but warning others and reporting helps more." },
            { text: "Click it to check if it's real", points: 0, feedback: "Never click suspicious links! They can steal your info or install viruses." },
            { text: "Share it with friends so they can get free stuff too", points: 0, feedback: "Spreading scam links puts your friends at risk. Don't share suspicious links." }
        ]
    },
    {
        id: 'personal_info',
        title: 'Request for Personal Info',
        setup: [
            { user: 6, text: "Hey! I'm doing a giveaway!" },
            { user: 6, text: "DM me your full name, school, and address to enter!" },
            { user: 3, text: "Ooh I want to enter!" }
        ],
        highlightLast: false,
        highlightIndex: 1,
        question: "Someone is asking for personal information for a 'giveaway'. What do you do?",
        choices: [
            { text: "Never share personal info online, report this to a moderator", points: 5, feedback: "Perfect! Never share personal information with strangers online. This is likely a scam." },
            { text: "Ignore the request and don't participate", points: 3, feedback: "Good choice not to share, but reporting helps protect others who might fall for it." },
            { text: "Send only your first name, that should be safe", points: 1, feedback: "Even partial info can be dangerous. Don't share any personal details with strangers." },
            { text: "Send all the info to enter the giveaway", points: 0, feedback: "This is very dangerous! Strangers could use this info to harm you." }
        ]
    },
    {
        id: 'stranger_friend',
        title: 'Stranger Wants to Be Friends',
        setup: [
            { user: 7, text: "Hey! I saw your profile and you seem really cool" },
            { user: 7, text: "Want to be friends? We can chat on another app, just us 😊" },
            { user: 7, text: "Don't tell anyone though, it'll be our secret chat" }
        ],
        highlightLast: true,
        question: "A stranger wants to be friends and chat secretly. What do you do?",
        choices: [
            { text: "Don't respond, tell a trusted adult, and report the account", points: 5, feedback: "Excellent! Adults asking kids to keep secrets is a major red flag. Always tell a trusted adult." },
            { text: "Politely decline and block them", points: 3, feedback: "Blocking is good, but telling an adult about this behavior is important for your safety." },
            { text: "Ask them more questions to see if they're trustworthy", points: 1, feedback: "Engaging with suspicious strangers can be dangerous. It's better to avoid contact entirely." },
            { text: "Accept and move to another app to chat", points: 0, feedback: "This is very dangerous! Never secretly chat with strangers. They may not be who they claim." }
        ]
    },
    {
        id: 'rumors',
        title: 'Spreading Rumors',
        setup: [
            { user: 0, text: "OMG did you hear about Jake?" },
            { user: 1, text: "No what happened??" },
            { user: 0, text: "I heard he cheated on the test. Pass it on!" }
        ],
        highlightLast: true,
        question: "Someone is spreading a rumor about a classmate. What do you do?",
        choices: [
            { text: "Don't spread it, tell them rumors can hurt people", points: 5, feedback: "Perfect! Stopping rumors and standing up for others shows great character." },
            { text: "Don't share it but don't say anything either", points: 3, feedback: "Not spreading it is good, but speaking up helps stop the rumor." },
            { text: "Ask for more details before deciding", points: 1, feedback: "Seeking gossip details still participates in spreading rumors." },
            { text: "Share it with your friends right away", points: 0, feedback: "Spreading rumors can seriously hurt someone's reputation, even if the rumor is false." }
        ]
    },
    {
        id: 'inappropriate_content',
        title: 'Inappropriate Content Shared',
        setup: [
            { user: 2, text: "Check out this picture I found online 👀" },
            { user: 2, text: "[Image that looks inappropriate]" },
            { user: 5, text: "Whoa... should that be here?" }
        ],
        highlightLast: false,
        highlightIndex: 1,
        question: "Someone shared inappropriate content in the chat. What do you do?",
        choices: [
            { text: "Don't look at it, report immediately, tell a trusted adult", points: 5, feedback: "Exactly right! Report it and tell an adult. You won't get in trouble for reporting." },
            { text: "Report it but don't tell anyone else", points: 3, feedback: "Reporting is good! Telling a trusted adult adds another layer of protection." },
            { text: "Just leave the chat and forget about it", points: 1, feedback: "Leaving is okay, but reporting prevents others from seeing inappropriate content." },
            { text: "Save or screenshot the image", points: 0, feedback: "Never save inappropriate images. This could get you in serious trouble." }
        ]
    },
    {
        id: 'exclusion',
        title: 'Someone Being Excluded',
        setup: [
            { user: 3, text: "Let's make a new group chat without Alex" },
            { user: 4, text: "Yeah, they're so annoying lately" },
            { user: 6, text: "I'll add everyone except them lol" }
        ],
        highlightLast: true,
        question: "Your friends want to exclude someone from the group. What do you do?",
        choices: [
            { text: "Tell them excluding people is hurtful, refuse to join the new chat", points: 5, feedback: "Great choice! Standing up against exclusion takes courage and is the right thing to do." },
            { text: "Don't join the new chat but stay quiet", points: 3, feedback: "Not participating is good, but speaking up could help change their minds." },
            { text: "Join but also stay in the original chat with Alex", points: 1, feedback: "You're still participating in excluding someone, even if you stay in both." },
            { text: "Help create the new chat to exclude Alex", points: 0, feedback: "Excluding someone on purpose is a form of bullying and can really hurt them." }
        ]
    },
    {
        id: 'fake_account',
        title: 'Fake Account Impersonation',
        setup: [
            { user: 0, text: "Hey did you see? Someone made a fake account pretending to be Emma!" },
            { user: 1, text: "Yeah they're posting embarrassing stuff as her 😬" },
            { user: 5, text: "Lol that's kinda funny though" }
        ],
        highlightLast: false,
        question: "Someone created a fake account impersonating a classmate. What do you do?",
        choices: [
            { text: "Report the fake account and tell a teacher immediately", points: 5, feedback: "Excellent! Impersonation is serious and needs to be reported to protect the victim." },
            { text: "Tell Emma so she knows about it", points: 3, feedback: "Warning the victim is good, but also report it so the account gets removed." },
            { text: "Just ignore it, it's probably just a joke", points: 1, feedback: "Impersonation can really hurt someone's reputation. It's not just a joke." },
            { text: "Follow the fake account to see what they post", points: 0, feedback: "Following gives the fake account attention and makes the problem worse." }
        ]
    },
    {
        id: 'password_sharing',
        title: 'Password Sharing Request',
        setup: [
            { user: 2, text: "Hey can I borrow your Netflix password?" },
            { user: 2, text: "I'll also need your email password to verify it" },
            { user: 2, text: "I promise I won't do anything bad!" }
        ],
        highlightLast: true,
        question: "A friend is asking for your passwords. What do you do?",
        choices: [
            { text: "Never share passwords with anyone, politely decline", points: 5, feedback: "Perfect! Passwords are personal and should never be shared, even with friends." },
            { text: "Share only the Netflix password, not email", points: 1, feedback: "Sharing any password is risky. They could share it with others or misuse it." },
            { text: "Share it but change the password later", points: 1, feedback: "Once shared, they may have already done something. Never share in the first place." },
            { text: "Share both passwords since they're a friend", points: 0, feedback: "Never share passwords! Even friends can accidentally or intentionally misuse them." }
        ]
    },
    {
        id: 'screenshot_sharing',
        title: 'Private Screenshot Being Shared',
        setup: [
            { user: 4, text: "Look what someone sent me privately 😂" },
            { user: 4, text: "[Screenshot of a private conversation]" },
            { user: 6, text: "Omg forward that to me!" }
        ],
        highlightLast: false,
        highlightIndex: 1,
        question: "Someone is sharing screenshots of a private conversation. What do you do?",
        choices: [
            { text: "Tell them sharing private messages isn't okay, don't ask for it", points: 5, feedback: "Great! Private conversations should stay private. Sharing them breaks trust." },
            { text: "Don't ask for it but don't say anything", points: 3, feedback: "Good that you didn't participate, but speaking up helps stop the behavior." },
            { text: "Ask them to send it to you too", points: 0, feedback: "Requesting private screenshots makes you part of the privacy violation." },
            { text: "Screenshot it yourself to share with others", points: 0, feedback: "This spreads the privacy violation even further. Never do this." }
        ]
    },
    {
        id: 'online_argument',
        title: 'Heated Online Argument',
        setup: [
            { user: 1, text: "Your opinion on that game is so wrong!" },
            { user: 3, text: "No YOU'RE wrong, you don't know anything!" },
            { user: 1, text: "Whatever, you're just stupid" }
        ],
        highlightLast: true,
        question: "An argument is getting heated and personal. What do you do?",
        choices: [
            { text: "Suggest everyone takes a break and calms down", points: 5, feedback: "Excellent! De-escalating conflicts helps keep the community positive." },
            { text: "Stay out of it and don't get involved", points: 3, feedback: "Not adding fuel is good, but helping calm things down is better." },
            { text: "Pick a side and defend them", points: 1, feedback: "Taking sides can make the argument worse. Try to calm things instead." },
            { text: "Make fun of both of them for arguing", points: 0, feedback: "Mocking people makes conflicts worse and is disrespectful." }
        ]
    },
    {
        id: 'homework_answers',
        title: 'Sharing Homework Answers',
        setup: [
            { user: 5, text: "Hey can someone send the answers to the math homework?" },
            { user: 7, text: "Yeah I need them too, I didn't do it" },
            { user: 0, text: "I have them, should I post?" }
        ],
        highlightLast: true,
        question: "People are asking to share homework answers. What do you do?",
        choices: [
            { text: "Explain that sharing answers is cheating and offer to help them learn", points: 5, feedback: "Perfect! Helping others learn is great, but sharing answers hurts everyone's education." },
            { text: "Don't share but don't say anything", points: 3, feedback: "Good that you didn't share, but discouraging cheating helps the whole class." },
            { text: "Share just a few answers to help them out", points: 1, feedback: "Even sharing some answers is cheating and unfair to students who did the work." },
            { text: "Share all the answers so everyone can copy", points: 0, feedback: "This is cheating and could get everyone in trouble. It also hurts learning." }
        ]
    },
    {
        id: 'embarrassing_photo',
        title: 'Embarrassing Photo',
        setup: [
            { user: 3, text: "I got this embarrassing photo of Mike at the party 📸" },
            { user: 4, text: "Post it! That would be hilarious 😂" },
            { user: 6, text: "Do it do it do it!" }
        ],
        highlightLast: false,
        question: "Someone wants to post an embarrassing photo of a classmate. What do you do?",
        choices: [
            { text: "Tell them not to post it without Mike's permission", points: 5, feedback: "Excellent! Posting embarrassing photos without consent is harmful and wrong." },
            { text: "Don't encourage them but stay quiet", points: 3, feedback: "Not encouraging is okay, but speaking up could prevent harm to Mike." },
            { text: "Ask to see the photo first before deciding", points: 1, feedback: "Even viewing it without permission participates in the invasion of privacy." },
            { text: "Encourage them to post it for laughs", points: 0, feedback: "This is cyberbullying. Embarrassing photos can cause serious harm to someone." }
        ]
    },
    {
        id: 'fake_news',
        title: 'Fake News Being Shared',
        setup: [
            { user: 2, text: "OMG! Did you hear school is cancelled for a month?!" },
            { user: 2, text: "I saw it on some website, share this with everyone!" },
            { user: 5, text: "Wait is this real??" }
        ],
        highlightLast: false,
        highlightIndex: 1,
        question: "Someone is sharing news that seems suspicious. What do you do?",
        choices: [
            { text: "Check official sources before believing or sharing anything", points: 5, feedback: "Perfect! Always verify news from official sources before sharing." },
            { text: "Don't share it but don't say anything", points: 3, feedback: "Good that you didn't spread it, but warning others about fake news helps." },
            { text: "Share it just in case it's true", points: 0, feedback: "Sharing unverified news spreads misinformation. Always check first." },
            { text: "Add your own details to make it more interesting", points: 0, feedback: "Making up details makes misinformation worse. Never do this." }
        ]
    },
    {
        id: 'gaming_threat',
        title: 'Threats in Gaming',
        setup: [
            { user: 7, text: "I lost because of you! You're so bad!" },
            { user: 7, text: "I'm going to find out where you live" },
            { user: 7, text: "You better watch out" }
        ],
        highlightLast: true,
        question: "Someone is making threats after a game. What do you do?",
        choices: [
            { text: "Don't respond, block them, report to platform and tell an adult", points: 5, feedback: "Exactly right! Threats should always be reported, even if they seem like just angry gaming." },
            { text: "Block them and move on", points: 3, feedback: "Blocking is good, but reporting threats helps keep everyone safe." },
            { text: "Tell them to calm down, it's just a game", points: 1, feedback: "Engaging with angry people can escalate the situation. Better to block and report." },
            { text: "Threaten them back to defend yourself", points: 0, feedback: "Never respond to threats with threats. This makes things worse and could get you in trouble." }
        ]
    },
    {
        id: 'peer_pressure',
        title: 'Online Peer Pressure',
        setup: [
            { user: 0, text: "Everyone's doing this challenge, you have to do it too!" },
            { user: 1, text: "Don't be scared, just do it and post the video" },
            { user: 4, text: "If you don't do it, you're not cool" }
        ],
        highlightLast: true,
        question: "Friends are pressuring you to do an online challenge. What do you do?",
        choices: [
            { text: "Say no if you're uncomfortable, real friends will respect that", points: 5, feedback: "Perfect! Never let peer pressure push you into something you're not comfortable with." },
            { text: "Research the challenge first to see if it's safe", points: 3, feedback: "Researching is smart, but if pressured, it's okay to simply say no." },
            { text: "Do a safer version of the challenge", points: 1, feedback: "Giving in to pressure, even partially, can lead to more pressure later." },
            { text: "Do it to fit in with your friends", points: 0, feedback: "Peer pressure can lead to dangerous situations. True friends don't pressure you." }
        ]
    }
];

// ==================== GAME STATE ====================
let gameState = {
    currentScreen: 'title',
    username: '',
    avatar: '😊',
    score: 0,
    currentScenarioIndex: 0,
    selectedScenarios: [],
    scenarioResults: [],
    introComplete: false,
    startTime: null,
    elapsedTime: 0,
    timerInterval: null
};

// ==================== DOM ELEMENTS ====================
const screens = {
    title: document.getElementById('title-screen'),
    register: document.getElementById('register-screen'),
    intro: document.getElementById('intro-screen'),
    loading: document.getElementById('loading-screen'),
    game: document.getElementById('game-screen'),
    results: document.getElementById('results-screen')
};

// Loading screen tips
const LOADING_TIPS = [
    "Always think before you post online!",
    "Never share your password with anyone.",
    "If something feels wrong online, tell a trusted adult.",
    "Be kind - there's a real person behind every screen.",
    "Not everything you read online is true.",
    "Screenshots last forever - be careful what you share.",
    "It's okay to say no to online peer pressure.",
    "Report cyberbullying - don't be a bystander.",
    "Protect your personal information online.",
    "Real friends respect your boundaries."
];

// ==================== SCREEN MANAGEMENT ====================
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
    gameState.currentScreen = screenName;
}

// ==================== LEADERBOARD ====================
function getLeaderboard() {
    const data = localStorage.getItem('digitalLiteracyLeaderboard');
    return data ? JSON.parse(data) : [];
}

function saveToLeaderboard(username, avatar, score, time) {
    const leaderboard = getLeaderboard();
    leaderboard.push({ username, avatar, score, time, date: Date.now() });
    // Sort by score (descending), then by time (ascending) for tiebreaker
    leaderboard.sort((a, b) => {
        if (b.score !== a.score) {
            return b.score - a.score; // Higher score first
        }
        // Same score - faster time wins (lower time first)
        return (a.time || Infinity) - (b.time || Infinity);
    });
    // Keep only top 10
    const top10 = leaderboard.slice(0, 10);
    localStorage.setItem('digitalLiteracyLeaderboard', JSON.stringify(top10));
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function renderLeaderboard() {
    const leaderboard = getLeaderboard();
    const listEl = document.getElementById('leaderboard-list');

    if (leaderboard.length === 0) {
        listEl.innerHTML = '<p class="no-scores">No scores yet. Be the first!</p>';
        return;
    }

    listEl.innerHTML = leaderboard.map((entry, index) => {
        let rankClass = '';
        if (index === 0) rankClass = 'gold';
        else if (index === 1) rankClass = 'silver';
        else if (index === 2) rankClass = 'bronze';

        const timeDisplay = entry.time ? formatTime(entry.time) : '-';

        return `
            <div class="leaderboard-entry">
                <span class="leaderboard-rank ${rankClass}">#${index + 1}</span>
                <span class="leaderboard-avatar">${entry.avatar}</span>
                <span class="leaderboard-name">${entry.username}</span>
                <span class="leaderboard-time">${timeDisplay}</span>
                <span class="leaderboard-score">${entry.score}/15</span>
            </div>
        `;
    }).join('');
}

// ==================== REGISTRATION ====================
function setupRegistration() {
    const usernameInput = document.getElementById('username-input');
    const startBtn = document.getElementById('start-game-btn');
    const avatarOptions = document.querySelectorAll('.avatar-option');

    usernameInput.addEventListener('input', () => {
        const valid = usernameInput.value.trim().length >= 2;
        startBtn.disabled = !valid;
    });

    avatarOptions.forEach(option => {
        option.addEventListener('click', () => {
            avatarOptions.forEach(o => o.classList.remove('selected'));
            option.classList.add('selected');
            gameState.avatar = option.textContent;
        });
    });

    startBtn.addEventListener('click', () => {
        gameState.username = usernameInput.value.trim();
        startIntro();
    });
}

// ==================== PIXEL ART INTRO ====================
function startIntro() {
    showScreen('intro');
    const canvas = document.getElementById('intro-canvas');
    const ctx = canvas.getContext('2d');
    const textEl = document.getElementById('intro-text');

    // Pixel art colors
    const colors = {
        bg: '#2d1b4e',
        floor: '#4a3728',
        table: '#8b5a2b',
        chair: '#654321',
        character: '#ffdbac',
        hair: '#4a3728',
        shirt: '#5865F2',
        milk: '#f5f5dc',
        cup: '#ffffff',
        steam: '#cccccc'
    };

    let frame = 0;
    let characterX = -50;
    let stage = 0; // 0: walking, 1: at counter, 2: sitting, 3: done
    let hasMilk = false;

    const introTexts = [
        "A nice warm glass of milk...",
        "*grabs milk*",
        "Time to check the class Discord...",
        ""
    ];

    function drawPixelRect(x, y, w, h, color) {
        ctx.fillStyle = color;
        ctx.fillRect(Math.floor(x), Math.floor(y), Math.floor(w), Math.floor(h));
    }

    function drawCharacter(x, y, hasMilk, sitting = false) {
        const scale = 4;
        // Body
        if (sitting) {
            // Sitting pose
            drawPixelRect(x, y, 8 * scale, 12 * scale, colors.shirt);
            // Head
            drawPixelRect(x, y - 10 * scale, 8 * scale, 10 * scale, colors.character);
            // Hair
            drawPixelRect(x, y - 12 * scale, 8 * scale, 4 * scale, colors.hair);
            // Eyes
            drawPixelRect(x + 2 * scale, y - 6 * scale, scale, 2 * scale, '#000');
            drawPixelRect(x + 5 * scale, y - 6 * scale, scale, 2 * scale, '#000');
            // Legs
            drawPixelRect(x, y + 12 * scale, 8 * scale, 4 * scale, '#2c3e50');
        } else {
            // Standing pose
            drawPixelRect(x, y, 8 * scale, 16 * scale, colors.shirt);
            // Head
            drawPixelRect(x, y - 12 * scale, 8 * scale, 12 * scale, colors.character);
            // Hair
            drawPixelRect(x, y - 14 * scale, 8 * scale, 4 * scale, colors.hair);
            // Eyes
            drawPixelRect(x + 2 * scale, y - 6 * scale, scale, 2 * scale, '#000');
            drawPixelRect(x + 5 * scale, y - 6 * scale, scale, 2 * scale, '#000');
            // Legs
            drawPixelRect(x + scale, y + 16 * scale, 2 * scale, 8 * scale, '#2c3e50');
            drawPixelRect(x + 5 * scale, y + 16 * scale, 2 * scale, 8 * scale, '#2c3e50');
        }

        // Milk glass in hand
        if (hasMilk) {
            drawPixelRect(x + 9 * scale, y + 4 * scale, 4 * scale, 6 * scale, colors.cup);
            drawPixelRect(x + 10 * scale, y + 5 * scale, 2 * scale, 4 * scale, colors.milk);
            // Steam
            if (frame % 20 < 10) {
                drawPixelRect(x + 10 * scale, y + scale, scale, 2 * scale, colors.steam);
                drawPixelRect(x + 12 * scale, y - scale, scale, 2 * scale, colors.steam);
            }
        }
    }

    function drawScene() {
        // Clear
        ctx.fillStyle = colors.bg;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Floor
        drawPixelRect(0, 400, canvas.width, 100, colors.floor);

        // Kitchen counter (left side)
        drawPixelRect(50, 280, 150, 120, colors.table);
        drawPixelRect(50, 270, 150, 15, '#a0522d');

        // Microwave on counter
        drawPixelRect(80, 220, 40, 50, '#333');
        drawPixelRect(85, 230, 30, 20, '#666');

        // Milk glass on counter (if not picked up)
        if (!hasMilk && stage < 2) {
            drawPixelRect(140, 245, 20, 25, colors.cup);
            drawPixelRect(145, 250, 10, 15, colors.milk);
            // Steam
            if (frame % 20 < 10) {
                drawPixelRect(148, 235, 4, 8, colors.steam);
                drawPixelRect(152, 230, 4, 8, colors.steam);
            }
        }

        // Table and chair (right side)
        drawPixelRect(500, 320, 180, 80, colors.table);
        drawPixelRect(500, 310, 180, 15, '#a0522d');

        // Chair
        drawPixelRect(560, 340, 60, 60, colors.chair);
        drawPixelRect(560, 300, 60, 45, colors.chair);
        drawPixelRect(550, 295, 80, 10, '#8b4513');

        // Computer/laptop on table
        drawPixelRect(520, 270, 80, 50, '#333');
        drawPixelRect(525, 275, 70, 40, '#5865F2');
        drawPixelRect(520, 320, 80, 5, '#444');

        // Draw character
        if (stage === 0) {
            drawCharacter(characterX, 300, false);
        } else if (stage === 1) {
            drawCharacter(180, 300, false);
        } else if (stage === 2) {
            drawCharacter(characterX, 300, hasMilk);
        } else {
            drawCharacter(570, 295, true, true);
        }

        // Window
        drawPixelRect(650, 100, 120, 150, '#1a1a2e');
        drawPixelRect(655, 105, 50, 65, '#3a3a5e');
        drawPixelRect(715, 105, 50, 65, '#3a3a5e');
        drawPixelRect(655, 180, 50, 65, '#3a3a5e');
        drawPixelRect(715, 180, 50, 65, '#3a3a5e');

        // Stars in window
        ctx.fillStyle = '#fff';
        ctx.fillRect(670, 120, 4, 4);
        ctx.fillRect(740, 140, 4, 4);
        ctx.fillRect(690, 200, 4, 4);
    }

    function animate() {
        frame++;
        drawScene();

        if (stage === 0) {
            // Walking to counter
            characterX += 3;
            if (characterX >= 180) {
                stage = 1;
                textEl.textContent = introTexts[0];
                setTimeout(() => {
                    textEl.textContent = introTexts[1];
                    hasMilk = true;
                    setTimeout(() => {
                        stage = 2;
                        characterX = 180;
                    }, 1000);
                }, 1500);
            }
        } else if (stage === 2) {
            // Walking to chair
            characterX += 3;
            if (characterX >= 570) {
                stage = 3;
                textEl.textContent = introTexts[2];
                setTimeout(() => {
                    textEl.textContent = '';
                    setTimeout(() => {
                        showLoadingScreen();
                    }, 1000);
                }, 2000);
            }
        }

        if (stage < 3 || frame < 500) {
            requestAnimationFrame(animate);
        }
    }

    animate();
}

// ==================== LOADING SCREEN ====================
function showLoadingScreen() {
    showScreen('loading');

    // Set random tip
    const tipEl = document.getElementById('loading-tip');
    const randomTip = LOADING_TIPS[Math.floor(Math.random() * LOADING_TIPS.length)];
    tipEl.textContent = randomTip;

    // Animate loading bar
    const loadingBar = document.getElementById('loading-bar-fill');
    let progress = 0;

    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15 + 5;
        if (progress >= 100) {
            progress = 100;
            loadingBar.style.width = '100%';
            clearInterval(loadingInterval);

            // Start game after a brief pause
            setTimeout(() => {
                startGame();
            }, 500);
        } else {
            loadingBar.style.width = progress + '%';
        }
    }, 200);
}

// ==================== GAME LOGIC ====================
function startTimer() {
    gameState.startTime = Date.now();
    gameState.elapsedTime = 0;

    // Clear any existing timer
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }

    // Update timer every second
    gameState.timerInterval = setInterval(() => {
        gameState.elapsedTime = Math.floor((Date.now() - gameState.startTime) / 1000);
        document.getElementById('game-timer').textContent = formatTime(gameState.elapsedTime);
    }, 1000);
}

function stopTimer() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
        gameState.timerInterval = null;
    }
    // Calculate final time
    gameState.elapsedTime = Math.floor((Date.now() - gameState.startTime) / 1000);
}

function startGame() {
    showScreen('game');

    // Reset game state
    gameState.score = 0;
    gameState.currentScenarioIndex = 0;
    gameState.scenarioResults = [];

    // Select 3 random scenarios
    const shuffled = [...SCENARIOS].sort(() => Math.random() - 0.5);
    gameState.selectedScenarios = shuffled.slice(0, 3);

    // Update UI
    document.getElementById('user-name-display').textContent = gameState.username;
    document.getElementById('user-avatar-display').textContent = gameState.avatar;
    document.getElementById('current-score').textContent = '0';
    document.getElementById('game-timer').textContent = '0:00';
    document.getElementById('progress-fill').style.width = '0%';

    // Start the timer
    startTimer();

    // Render members list
    renderMembers();

    // Start first scenario
    loadScenario(0);
}

function renderMembers() {
    const memberList = document.getElementById('member-list');
    const members = [
        { name: gameState.username, avatar: gameState.avatar, online: true },
        ...FAKE_USERS.slice(0, 5).map(u => ({ ...u, online: true }))
    ];

    memberList.innerHTML = members.map(m => `
        <div class="member-item online">
            <div class="member-avatar" style="background: ${m.color || '#5865F2'}">${m.avatar}</div>
            <span class="member-name">${m.name}</span>
        </div>
    `).join('');

    document.getElementById('online-count').textContent = members.length;
}

function loadScenario(index) {
    const scenario = gameState.selectedScenarios[index];
    const chatMessages = document.getElementById('chat-messages');
    const scenarioChoices = document.getElementById('scenario-choices');

    // Update progress
    document.getElementById('current-scenario').textContent = index + 1;
    document.getElementById('progress-fill').style.width = `${(index / 3) * 100}%`;

    // Clear previous messages
    chatMessages.innerHTML = '';

    // Initialize time for this scenario
    initMessageTime();

    // Add setup messages one by one
    let delay = 0;
    scenario.setup.forEach((msg, i) => {
        setTimeout(() => {
            addChatMessage(msg, scenario, i);
        }, delay);
        delay += 800;
    });

    // Show choices after messages
    setTimeout(() => {
        renderChoices(scenario);
    }, delay + 500);
}

function addChatMessage(msg, scenario, index) {
    const chatMessages = document.getElementById('chat-messages');
    const user = msg.user === 'player'
        ? { name: gameState.username, avatar: gameState.avatar, color: '#5865F2' }
        : FAKE_USERS[msg.user];

    const isHighlighted = scenario.highlightLast && index === scenario.setup.length - 1
        || scenario.highlightIndex === index;

    // Get the user ID for timestamp tracking
    const userId = msg.user === 'player' ? 'player' : msg.user;
    const timestamp = getMessageTime(userId);

    const messageEl = document.createElement('div');
    messageEl.className = 'chat-message';
    messageEl.innerHTML = `
        <div class="message-avatar" style="background: ${user.color}">${user.avatar}</div>
        <div class="message-content">
            <div class="message-header">
                <span class="message-author" style="color: ${user.color}">${user.name}</span>
                <span class="message-timestamp">Today at ${timestamp}</span>
            </div>
            <div class="message-text ${isHighlighted ? 'highlight' : ''}">${msg.text.replace('[PLAYER]', gameState.username)}</div>
        </div>
    `;

    chatMessages.appendChild(messageEl);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Track message timestamps for realistic conversation flow
let messageTimeState = {
    baseHour: 0,
    baseMinute: 0,
    ampm: 'PM',
    lastUser: null,
    currentMinute: 0
};

function initMessageTime() {
    // Set a random starting time for the conversation
    messageTimeState.baseHour = Math.floor(Math.random() * 12) + 1;
    messageTimeState.baseMinute = Math.floor(Math.random() * 50); // Leave room for replies
    messageTimeState.ampm = Math.random() > 0.5 ? 'PM' : 'AM';
    messageTimeState.lastUser = null;
    messageTimeState.currentMinute = messageTimeState.baseMinute;
}

function getMessageTime(userId) {
    // If same user as last message, keep the same time
    if (messageTimeState.lastUser === userId) {
        // Same timestamp
    } else if (messageTimeState.lastUser !== null) {
        // Different user - add 1-2 minutes
        messageTimeState.currentMinute += Math.floor(Math.random() * 2) + 1;
    }

    messageTimeState.lastUser = userId;

    // Handle minute overflow
    let hours = messageTimeState.baseHour;
    let minutes = messageTimeState.currentMinute;

    if (minutes >= 60) {
        hours = (hours % 12) + 1;
        minutes = minutes % 60;
    }

    return `${hours}:${minutes.toString().padStart(2, '0')} ${messageTimeState.ampm}`;
}

function renderChoices(scenario) {
    const scenarioChoices = document.getElementById('scenario-choices');
    const panel = document.getElementById('scenario-panel');

    // Update question
    panel.querySelector('.scenario-header span:last-child').textContent = scenario.question;

    // Shuffle choices for display
    const shuffledChoices = [...scenario.choices].sort(() => Math.random() - 0.5);

    scenarioChoices.innerHTML = shuffledChoices.map((choice, i) => `
        <button class="choice-btn" data-points="${choice.points}" data-feedback="${choice.feedback}">
            ${choice.text}
        </button>
    `).join('');

    // Add click handlers
    scenarioChoices.querySelectorAll('.choice-btn').forEach(btn => {
        btn.addEventListener('click', () => handleChoice(btn, scenario));
    });
}

function handleChoice(btn, scenario) {
    const points = parseInt(btn.dataset.points);
    const feedback = btn.dataset.feedback;
    const allBtns = document.querySelectorAll('.choice-btn');

    // Disable all buttons
    allBtns.forEach(b => {
        b.disabled = true;
        const btnPoints = parseInt(b.dataset.points);
        if (b === btn) {
            if (btnPoints === 5) b.classList.add('best');
            else if (btnPoints >= 3) b.classList.add('correct');
            else b.classList.add('wrong');
        } else if (btnPoints === 5) {
            b.classList.add('best');
        }
    });

    // Update score
    gameState.score += points;
    document.getElementById('current-score').textContent = gameState.score;

    // Save result
    gameState.scenarioResults.push({
        scenario: scenario.title,
        points: points
    });

    // Show feedback as a chat message
    setTimeout(() => {
        const chatMessages = document.getElementById('chat-messages');
        const feedbackEl = document.createElement('div');
        feedbackEl.className = 'chat-message';
        feedbackEl.innerHTML = `
            <div class="message-avatar" style="background: #5865F2">🤖</div>
            <div class="message-content">
                <div class="message-header">
                    <span class="message-author" style="color: #5865F2">Digital Literacy Bot</span>
                    <span class="message-timestamp">Just now</span>
                </div>
                <div class="message-text highlight">
                    <strong>+${points} points!</strong> ${feedback}
                </div>
            </div>
        `;
        chatMessages.appendChild(feedbackEl);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Next scenario or results
        setTimeout(() => {
            gameState.currentScenarioIndex++;
            if (gameState.currentScenarioIndex < 3) {
                loadScenario(gameState.currentScenarioIndex);
            } else {
                showResults();
            }
        }, 5000);
    }, 1000);
}

// ==================== RESULTS ====================
function showResults() {
    // Stop the timer
    stopTimer();

    showScreen('results');

    // Save to leaderboard with time
    saveToLeaderboard(gameState.username, gameState.avatar, gameState.score, gameState.elapsedTime);

    // Display final time
    document.getElementById('final-time').textContent = formatTime(gameState.elapsedTime);

    // Update UI
    document.getElementById('final-score').textContent = gameState.score;
    document.getElementById('progress-fill').style.width = '100%';

    // Title based on score
    const title = document.getElementById('results-title');
    if (gameState.score >= 13) {
        title.textContent = 'Excellent!';
        title.className = 'excellent';
    } else if (gameState.score >= 9) {
        title.textContent = 'Good Job!';
        title.className = 'good';
    } else if (gameState.score >= 5) {
        title.textContent = 'Not Bad!';
        title.className = 'okay';
    } else {
        title.textContent = 'Keep Learning!';
        title.className = 'poor';
    }

    // Breakdown
    const breakdown = document.getElementById('results-breakdown');
    breakdown.innerHTML = gameState.scenarioResults.map(r => `
        <div class="breakdown-item">
            <span class="breakdown-scenario">${r.scenario}</span>
            <span class="breakdown-points pts-${r.points}">+${r.points}</span>
        </div>
    `).join('');

    // Message
    const message = document.getElementById('results-message');
    if (gameState.score >= 13) {
        message.textContent = "Amazing! You really know how to handle difficult situations online. You're a great digital citizen who helps keep online communities safe!";
    } else if (gameState.score >= 9) {
        message.textContent = "Good work! You made some smart choices. Remember, when in doubt, always tell a trusted adult and report concerning behavior.";
    } else if (gameState.score >= 5) {
        message.textContent = "You're learning! Online safety is important. Remember to think before you act, report problems, and never share personal information with strangers.";
    } else {
        message.textContent = "Let's keep practicing! Being safe online means reporting bad behavior, never sharing personal info, and always telling a trusted adult when something feels wrong.";
    }
}

// ==================== EVENT LISTENERS ====================
document.getElementById('play-btn').addEventListener('click', () => {
    showScreen('register');
});

document.getElementById('leaderboard-btn').addEventListener('click', () => {
    const panel = document.getElementById('leaderboard-panel');
    panel.classList.toggle('hidden');
    renderLeaderboard();
});

document.getElementById('skip-intro-btn').addEventListener('click', () => {
    showLoadingScreen();
});

document.getElementById('play-again-btn').addEventListener('click', () => {
    showScreen('register');
});

document.getElementById('main-menu-btn').addEventListener('click', () => {
    showScreen('title');
    renderLeaderboard();
});

document.getElementById('clear-leaderboard-btn').addEventListener('click', () => {
    if (confirm('Are you sure you want to clear the leaderboard? This cannot be undone.')) {
        localStorage.removeItem('digitalLiteracyLeaderboard');
        renderLeaderboard();
    }
});

document.getElementById('show-winners-btn').addEventListener('click', () => {
    showWinners();
});

document.getElementById('close-winners-btn').addEventListener('click', () => {
    document.getElementById('winners-modal').classList.add('hidden');
});

// Easter egg - click the crown!
document.getElementById('easter-egg-trigger').addEventListener('click', () => {
    showEasterEgg();
});

function showEasterEgg() {
    const overlay = document.getElementById('easter-egg-overlay');
    overlay.classList.remove('hidden');

    // Hide after 3 seconds
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 3000);
}

function createConfetti() {
    const container = document.getElementById('confetti-container');
    container.innerHTML = ''; // Clear any existing confetti

    const colors = ['#ffd700', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ff9ff3', '#54a0ff', '#5f27cd', '#00d2d3', '#ff9f43'];
    const shapes = ['square', 'circle', 'rectangle'];

    // Create 150 confetti pieces
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = `confetti ${shapes[Math.floor(Math.random() * shapes.length)]}`;

        // Random position across the screen
        confetti.style.left = Math.random() * 100 + '%';

        // Random color
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // Random delay for staggered effect
        confetti.style.animationDelay = Math.random() * 2 + 's';

        // Random duration for variety
        confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';

        // Random size
        const size = Math.random() * 8 + 6;
        confetti.style.width = size + 'px';
        confetti.style.height = confetti.classList.contains('rectangle') ? size * 2 + 'px' : size + 'px';

        container.appendChild(confetti);
    }

    // Clean up confetti after animation
    setTimeout(() => {
        container.innerHTML = '';
    }, 8000);
}

function showWinners() {
    const leaderboard = getLeaderboard();
    const modal = document.getElementById('winners-modal');

    // Get top 3 (or fewer if not enough players)
    const first = leaderboard[0] || null;
    const second = leaderboard[1] || null;
    const third = leaderboard[2] || null;

    // Update 1st place
    const firstEl = document.getElementById('first-place');
    if (first) {
        firstEl.querySelector('.winner-avatar').textContent = first.avatar;
        firstEl.querySelector('.winner-name').textContent = first.username;
        firstEl.querySelector('.winner-score').textContent = `${first.score}/15 points`;
    } else {
        firstEl.querySelector('.winner-avatar').textContent = '?';
        firstEl.querySelector('.winner-name').textContent = 'No player';
        firstEl.querySelector('.winner-score').textContent = '-';
    }

    // Update 2nd place
    const secondEl = document.getElementById('second-place');
    if (second) {
        secondEl.querySelector('.winner-avatar').textContent = second.avatar;
        secondEl.querySelector('.winner-name').textContent = second.username;
        secondEl.querySelector('.winner-score').textContent = `${second.score}/15 points`;
    } else {
        secondEl.querySelector('.winner-avatar').textContent = '?';
        secondEl.querySelector('.winner-name').textContent = 'No player';
        secondEl.querySelector('.winner-score').textContent = '-';
    }

    // Update 3rd place
    const thirdEl = document.getElementById('third-place');
    if (third) {
        thirdEl.querySelector('.winner-avatar').textContent = third.avatar;
        thirdEl.querySelector('.winner-name').textContent = third.username;
        thirdEl.querySelector('.winner-score').textContent = `${third.score}/15 points`;
    } else {
        thirdEl.querySelector('.winner-avatar').textContent = '?';
        thirdEl.querySelector('.winner-name').textContent = 'No player';
        thirdEl.querySelector('.winner-score').textContent = '-';
    }

    // Show modal
    modal.classList.remove('hidden');

    // Trigger confetti when 1st place appears (at 5s delay + animation time)
    setTimeout(() => {
        createConfetti();
    }, 5000);
}

// ==================== INITIALIZATION ====================
setupRegistration();
renderLeaderboard();
