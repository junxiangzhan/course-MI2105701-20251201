// To import modules by using relative paths or import maps
// import { createApp } from 'vue';
import { createApp } from './vue.esm-browser.js';
// import ElementPlus from 'element-plus';
import ElementPlus from './element-plus.module.js';

const app = createApp({
    data() {
        const news = {
            // News
            newsPage: 1,
            newsPageSize: 4,

            // To show the news detail
            newsDetail: {
                // To control the news detail is visible or not.
                isVisible: false,
                // To pick a news to show detail.
                id: 0
            },

            // All news data
            news: [
                {
                    title: '[📌置頂] 即時對話服務上線',
                    date: '02-11',
                    content: '活動消息：有問題？現在可以透過我們的即時線上服務找到解答，快來詢問有關活動的所有問題！'
                },
                {
                    title: '[📢最新] 探索校園環境',
                    date: '03-13',
                    content: '活動消息：3 月 20 日有浪人專屬的導覽活動，讓你一覽學城之美，探索我們與大自然共生的環境。'
                },
                {
                    title: '[📢最新] 藝術家分享之夜',
                    date: '03-11',
                    content: '活動亮點：3 月 18 日藝術家分享之夜即將來臨，了解當代藝術家 <u>馬克·奇拉</u> 的創作心得。'
                },
                {
                    title: '學術講座迎來專業人士',
                    date: '03-08',
                    content: '提醒已報名者：藝術Ｘ學術融合，3 月 15 日藝術史學者 <u>葛瑞絲·安德森</u> 博士將進行學術講座。'
                },
                {
                    title: '美食節目公告',
                    date: '03-02',
                    content: '活動消息：活動期間將有 3 月 5 日至 3 月 10 日期間，學院石樓設置美食節目，品嚐來自不同國度的美味！'
                },
                {
                    title: '國際友校交流直播',
                    date: '03-02',
                    content: '活動亮點：3月30日我們將進行與日本東京藝術大學的網上直播交流，一窺他們的特色和文化。'
                },
                {
                    title: '主題展覽倒數',
                    date: '02-26',
                    content: '提醒大家：藝術展覽倒數計時中，3 月 28 日即將展出的主題作品，提前感受藝術的饗宴。'
                },
                {
                    title: '校內比賽報名開始',
                    date: '02-26',
                    content: '活動通知：抽象創作比賽報名已開跑，快來展現你的靈感，贏得 3 月 25 日的頒獎禮上的豐富獎品！'
                },
                {
                    title: '活動日曆更新',
                    date: '02-24',
                    content: '提醒大家：活動日曆已更新，拜託你們不要錯過 3 月 15 日至 3 月 20 日期間的精彩表演和工作坊！ '
                },
                {
                    title: '草間彌生親臨分享生命經歷',
                    date: '02-24',
                    content: '藝點亮：3 月 12 日，我們驕傲地宣布，世界知名藝術家 <u>草間彌生</u> 將親自指導學生藝術創作歷程！ '
                },
                {
                    title: '國際交流預告',
                    date: '02-22',
                    content: '活動消息：3 月 3 日將迎來來自巴黎藝術學院的代表，與我們練習生分享藝術視野。'
                },
                {
                    title: '校慶倒數開始！',
                    date: '02-21',
                    content: '活動提醒：踏入浪人季前，距離盛典只剩下 8 天！準備迎接 3 月起一場充滿藝術與文化的盛會！'
                },
            ]
        };

        const events = {
            // Events
            eventCalendar: {
                startDate: new Date(2024, 3 - 1, 1),
                endDate: new Date(2024, 4 - 1, 1),
                select: 13
            },

            events: {
                // Use `Date` as the key for the events.
                1: {
                    // The event title.
                    title: '東花浪人季世界開幕週 - 開幕典禮',
                    // The event time.
                    time: '15:00 - 17:00',
                    // Some description for the event.
                    description: '歡迎詞和浪人季活動介紹。'
                },
                2: {
                    // The event title.
                    title: '學生家長之夜 - 課程深度探索',
                    // The event time.
                    time: '18:00 - 20:00',
                    // Some description for the event.
                    description: '深入課程的核心，參與各項工作坊和實驗，了解孩子在不同領域的學習。',
                    // The detail information for the event.
                    detail: '學生家長之夜 -〈課程深度探索〉\n這個晚上，我們邀請家長深入課程的核心，親身體驗孩子在校的學習環境。您將參與一系列的工作坊和實驗，由學校的老師親自指導，讓您了解孩子在藝術、科學和人文領域的學習成果。這是一個難得的機會，讓您更全面地認識學校的教學理念和豐富的課程內容。'
                },
                3: {
                    title: '學生家長之夜 - 藝術創作現場',
                    time: '18:00 - 20:00',
                    description: '走進孩子的藝術天地，親身參與各種藝術創作活動，感受學生的創造力。',
                    detail: '學生家長之夜 -〈藝術創作現場〉\n今晚，您將走進孩子的藝術天地。在特別設計的藝術工作室中，您可以親身參與各種藝術創作活動，由學生們親自指導。這是一個互動的體驗，讓您感受到孩子在藝術領域的潛能和創造力。透過實際的創作過程，您將更加理解學校藝術教育的獨特之處。'
                },
                4: {
                    title: '外賓專屬活動',
                    time: '整天',
                    description: '包括參觀校園、座談會等。'
                },
                5: {
                    title: '外賓專屬活動',
                    time: '整天',
                    description: '包括參觀校園、座談會等。'
                },
                6: {
                    title: '國際美食展〈美食之夜〉',
                    time: '14:00 - 21:00',
                    description: '提供各國特色美食品嚐。',
                    detail: '國際美食展〈美食之夜〉\n歡迎來到《東花浪人季》的美食之夜！沉浸在美味的香氣中，您將有機會品嚐來自世界各地的特色美食。攤位上的廚師將親自為您烹飪，展示地道的料理技巧。此外，我們準備了一系列的文化表演，讓您在品味美食的同時，感受不同國家的藝術和音樂。'
                },
                7: {
                    title: '國際美食展〈文化交流之夜〉',
                    time: '14:00 - 21:00',
                    description: '提供各國特色美食品嚐。',
                    detail: '國際美食展〈文化交流之夜〉\n今晚是美食展的文化交流之夜！在美味佳餚的陪伴下，我們安排了一系列的文化演出，包括傳統樂器演奏、舞蹈表演和視覺藝術展覽。每一個節目都展現了來自不同國家的獨特藝術風格。在歡笑聲中，感受跨文化的交流，讓這個夜晚成為難忘的美食與藝術饗宴。'
                },
                8: {
                    title: '跨文化藝術對話論壇',
                    time: '15:00 - 17:00',
                    description: '邀請跨領域藝術家進行對話，分享不同文化對藝術的啟發。'
                },
                9: {
                    title: '學生藝術作品展覽',
                    time: '整天',
                    description: '展示學生的藝術創作，包括繪畫、雕刻、攝影等多種形式。'
                },
                10: {
                    title: '跨學校合作日',
                    time: '整天',
                    description: '與其他學校進行合作，共同探討教學方法和課程設計。',
                    detail: '10:00 - 12:00\n活動：校園導覽和歡迎儀式\n內容：各姐妹校的代表一同參與，校長致詞歡迎，學校概況介紹。\n\n14:00 - 16:00\n活動：教學方法工作坊\n內容：分為不同場次，每場由一所姐妹校的老師主持，分享各校的教學方法和經驗。'
                },
                11: {
                    title: '藝術家座談會',
                    time: '14:00 - 16:00',
                    description: '邀請藝術家分享其創作心得和藝術理念，與參與者進行互動。'
                },
                12: {
                    title: '國際教育論壇',
                    time: '整天',
                    description: '與姐妹校代表及教育專業人士進行深入的教育交流和合作討論。',
                    detail: '10:00 - 12:00\n活動：教育政策座談會\n內容：各姐妹校教育代表進行教育政策和制度的分享，探討各地區的異同。\n\n14:00 - 16:00\n活動：跨文化課程設計研討\n內容：各校教務代表分享本校的跨文化課程，進行研討和提問。'
                },
                13: {
                    title: '藝術工作坊',
                    time: '整天',
                    description: '提供各類藝術工作坊，讓參與者親身體驗不同藝術形式的製作。',
                    detail: '10:00 - 12:00\n活動：跨學科藝術工作坊\n內容：由三所姐妹校的藝術老師合作舉辦的工作坊，結合視覺藝術和表演藝術元素。\n\n14:00 - 16:00\n活動：學生合作藝術展\n內容：各校學生共同合作製作的藝術展覽，展示跨學科、跨文化的藝術作品。'
                },
                14: {
                    title: '文化交流日',
                    time: '整天',
                    description: '安排不同文化的展覽攤位，並有文化表演和交流活動。',
                    detail: '10:00 - 12:00\n活動：藝術家工作坊\n內容：邀請來自三所學校的藝術家進行工作坊，教授特定藝術技法或創作理念。\n\n14:00- 16:00 \n活動：數位藝術展示\n內容：以數位藝術為主題，展示學生和老師使用新媒體進行的實驗性藝術創作，包括虛擬現實、數位繪畫等。'
                },
                15: {
                    title: '教育專業論壇',
                    time: '整天',
                    description: '邀請來自姐妹校和其他教育機構的代表，進行教育專業的深入討論，分享各校的教學心得和最佳實踐。',
                    detail: '10:00 - 12:00\n活動: 教育專業論壇\n內容: 由三所學校的教育專業人士主持的論壇，討論最新的教學趨勢、挑戰和機會。\n\n14:00 - 16:00\n活動: 教學方法工作坊\n內容: 分為不同主題的工作坊，提供參與者實際參與、互動和討論的機會，涵蓋教學創新、多元教學法等\n \n18:00 - 20:00\n活動: 教育專業人士晚宴\n內容: 輕鬆的晚宴環境，提供教育工作者和專業人士交流的場所，分享各自的教學心得和見解。'
                },
                16: {
                    title: '跨校教學示範',
                    time: '整天',
                    description: '姐妹校教師進行實地教學示範，展示各校不同的教學風格和方法。',
                    detail: '09:00 - 12:00\n活動: 學術研討會\n內容: 由各學校的學術精英分享最新的研究成果、學術發現，促進學術界的合作和交流。\n\n14:00 - 16:00\n活動: 跨校學術交流\n內容: 學者和研究人員之間的小組交流，討論潛在的研究合作項目。\n\n18:00 - 20:00\n活動: 國際研究生交流會\n內容: 與來自不同國家的研究生分享經驗，促進國際學術交流。'
                },
                17: {
                    title: '學科合作工作坊',
                    time: '14:00 - 16:00',
                    description: '由各校學科主管和老師參與的工作坊，討論跨校學科合作的可能性，促進不同學科之間的連結。'
                },
                18: {
                    title: '藝術教育座談會',
                    time: '10:00 - 12:00',
                    description: '聚焦藝術教育的座談會，邀請藝術教育專家和藝術老師分享最新的教學理念和藝術教育的未來發展趨勢。'
                },
                19: {
                    title: '跨校課程設計競賽',
                    time: '14:00 - 17:00',
                    description: '各校教師組隊參與跨校課程設計競賽，透過合作設計創新課程，提升教學品質和豐富學科內容。'
                },
                20: {
                    title: '教育科技融合工作坊',
                    time: '整天',
                    description: '探討教育科技在課堂中的應用，邀請科技教育專家分享最新的教育科技趨勢，並進行實際應用案例的演示。',
                    detail: '10:00 - 12:00\n活動: 教育科技論壇\n內容: 探討教育科技在教學中的應用，尋找創新的教學模式。\n\n14:00 - 16:00\n活動: 教育科技展示\n內容: 學校和公司展示最新的教育科技產品和應用，提供互動體驗。\n\n18:00 - 20:00\n活動: 跨校教育科技合作交流\n內容: 教育科技專業人士的小組討論，促進校際間的教育科技合作。'
                },
                21: {
                    title: '教育成果展示與總結',
                    time: '15:00 - 17:00',
                    description: '各校教師展示教育成果，總結教育專業交流週的收獲，分享彼此的教學心得和未來合作的可能性。'
                },
                22: {
                    title: '藝術大師講座',
                    time: '14:00 - 17:00',
                    description: '邀請知名藝術家董陽孜進行講座，分享其藝術創作心得、藝術理念，以及對當代藝術與書法撞擊的看法。',
                    detail: '14:00 - 17:00\n地點： 主禮堂\n主題： 藝術與書法的對話\n嘉賓講者： 董陽孜（Dong Yangzi）\n內容摘要：\n董陽孜，著名中國書法家，將榮幸來到我們學校進行一場獨特而深刻的藝術對話。在這次講座中，董陽孜將分享她在藝術創作過程中的心得體會，深入談論她的藝術理念和對當代藝術的看法。特別關注的焦點之一是書法與其他藝術形式的碰撞，以及這種交融如何豐富了藝術的多樣性。\n活動流程：\n14:00 - 14:30：報到及入場\n14:30 - 14:45：開場致辭\n14:45 - 16:20：董陽孜藝術分享講座\n16:30 - 17:00：問答環節'
                },
                23: {
                    title: '藝術家工作坊',
                    time: '10:00 - 12:00',
                    description: '藝術家現場指導工作坊，學生和參與者有機會親自參與藝術創作，與藝術家近距離交流，感受藝術的魅力。'
                },
                24: {
                    title: '藝術探索之旅',
                    time: '09:00 - 17:00',
                    description: '安排參觀當地藝術博物館、畫廊，以及城市中的藝術品和雕塑，豐富參與者的視野，啟發藝術的不同面向。'
                },
                25: {
                    title: '學術研討會',
                    time: '15:00 - 17:00',
                    description: '邀請藝術研究專家和學者進行學術發表，探討藝術研究的最新趨勢和未來發展，促進學術交流。',
                    detail: '時間： 15:00 - 17:00\n地點： 藝術中心展覽廳\n主題： 策展與藝術的對話\n特邀嘉賓： 胡朝聖（Sean C.S. HU）\n內容摘要：\n在這次特別活動中，我們榮幸邀請到享譽國際的藝術策展人胡朝聖先生。他將分享他多年來在藝術策展領域的豐富經驗，以及他對當代藝術趨勢和展覽設計的獨特見解。這是一次與藝術專業人士深入交流的絕佳機會。\n\n15:45 - 16:45：胡朝聖先生藝術策展分享\n16:45 - 17:00：問答環節\n\n參與方式：\n藝術愛好者、練習生、教職員和公眾人士均可參與。藉由這次對談，參與者將有機會深入了解藝術策展的背後故事，以及策展人在藝術世界中的角色與挑戰。 這場對談將為參與者帶來一場藝術思考的盛宴，透過策展人的視角，深入探討藝術作品如何透過展覽呈現、影響觀眾，並探索藝術在當代社會中的意義。'
                },
                26: {
                    title: '藝術展覽與評選',
                    time: '10:00 - 17:00',
                    description: '學生和藝術家共同參與的藝術展覽，展示各種藝術作品，同時進行評選，選出優秀作品進行獎勵，鼓勵學生更積極參與藝術創作。',
                    detail: '閉幕典禮及藝術家分享會\n時間： 14:00 - 17:00\n地點： 主禮堂\n活動內容： 此次閉幕典禮將以藝術家分享會開場，邀請參與藝術學院的多位藝術家分享他們在浪人季的創作心得和背後的故事。隨後進行閉幕典禮，回顧整個浪人季的亮點和成就。'
                },
                27: {
                    title: '藝術家交流晚宴',
                    time: '18:00 - 21:00',
                    description: '邀請藝術家、學生和參與者共進晚餐，進一步深化交流，分享藝術心得，提升藝術共同體的凝聚力。'
                },
                28: {
                    title: '藝術作品拍賣',
                    time: '15:00 - 17:00',
                    description: '舉辦藝術作品拍賣活動，募集資金支持藝術教育計劃，同時為參與者提供購買藝術品的機會，促進藝術市場的活躍。'
                },
                29: {
                    title: '閉幕典禮暨藝術成果展開幕',
                    time: '15:00 - 17:00',
                    description: '學校主禮堂閉幕典禮，宣布活動結束，同時開幕藝術成果展覽。'
                },
                30: {
                    title: '學生藝術成果展示及評選',
                    time: '整天',
                    description: '展示學生閉幕週期間的藝術創作成果，進行評選和頒獎。、精選藝術家分享座談。',
                    detail: '14:00 - 16:00\n精選藝術家分享座談\n地點：藝術中心\n活動內容： 廳邀請知名藝術家分享其藝術心得，進行座談交流、做本年度分享結論。'
                },
                31: {
                    title: '藝術工作坊及結業晚宴',
                    time: '15:00 - 22:00',
                    description: '舉行結業晚宴慶祝閉幕，閉幕典禮，宣布活動結束，同時開幕藝術成果展覽。',
                    detail: '地點：各教室及校園餐廳\n提供不同類型的藝術工作坊，晚上舉行結業晚宴慶祝閉幕。\n\n結業音樂會及焰火晚會\n時間： 19:00 - 22:00\n地點： 校園廣場\n活動內容： 以絢麗的音樂會表演和絢爛的焰火晚會，正式結束〈東花浪人季〉。音樂會中將有學生和教職員的表演，展現多元的藝術風貌。焰火晚會則是為這次國際聯合校慶畫下美好的句點，為參與者留下難忘的回憶。'
                }
            }
        };

        const contest = {
            // Contest
            entryId: 0,
            // All entries
            entries: [
                {
                    name: '明天',
                    image: './images/501.jpg',
                    description: '夕陽如火，燒紅半邊天，\n金光灑落，海面波光粼粼。\n彩雲飄動，映照著遠方的帆，\n靜靜欣賞，大自然的畫卷。', // 大自然的蛋卷 (X
                    votes: 2131,
                    userVoted: false
                },
                {
                    name: '銀浦、金蟾、海',
                    image: './images/502.jpg',
                    description: '星光閃爍在寂靜的夜，\n海浪輕拍著遠方的岸邊。\n月亮掛高，金黃色的光芒，\n照亮黑暗，帶來希望。\n\n在這片廣闊的海洋中，\n我們感受著自然的力量。\n在這片神秘的夜空下，\n我們尋找著自己的方向。',
                    votes: 2510,
                    userVoted: false
                },
                {
                    name: '收獲',
                    image: './images/503.jpg',
                    description: '在光彩燦爛的日子裡，\n彩色的靈魂在舞動，\n每個人物都是一首未完成的詩篇，\n在自然的懷抱中尋找答案。\n\n或許他們是夢想家，或許他們是遊客，\n或許他們是朋友，或許他們是陌生人，\n他們的故事沒有開始，也沒有結束，\n只有在這一刻。',
                    votes: 1825,
                    userVoted: false
                },
                {
                    name: '大海',
                    image: './images/504.jpg',
                    description: '海浪拍岸聲聲響，\n震撼人心撼天驚。\n白色泡沫耀眼光，\n炫目奪目令人驚。\n\n海浪的力量無窮，\n摧枯拉朽勢不可擋。\n但它也代表生命，\n生生不息永不停。',
                    votes: 1258,
                    userVoted: false
                },
                {
                    name: '朝陽的祈禱',
                    image: './images/505.jpg',
                    description: '海洋的顏色，如詩般流淌，\n藍綠交織，自由與寧靜的歌。\n太陽灑下金黃的光芒，\n照亮每一個角落，溫暖每一處漂泊。',
                    votes: 1925,
                    userVoted: false
                }
            ]
        };

        const voteAlert = {
            isVisible: false
        }

        const loginForm = {
            // To control the login form is visible or not.
            isVisible: false,
            // To control the submit button state.
            isLoading: false,

            // The rules for the fields
            rules: {
                phoneNumber: [
                    {
                        required: true,
                        message: '請輸入您登記的電話號碼',
                        trigger: 'blur'
                    },
                    {
                        validator: phoneNumberValidator,
                        trigger: 'blur'
                    }
                ],

                email: [
                    {
                        required: true,
                        message: '請輸入您登記的電子郵件',
                        trigger: 'blur'
                    },
                    {
                        type: 'email',
                        message: '請輸入一個電子郵件',
                        trigger: ['blur', 'change']
                    }
                ]
            },

            // Store the information in the login form.
            phoneNumber: '',
            email: '',

            // Formatter and Parser
            phoneNumberFormatter,
            phoneNumberParser
        };

        const signUpForm = {
            // To control the submit button state.
            isLoading: false,

            // The rules for the fields
            rules: {
                name: [
                    {
                        required: true,
                        message: '請輸入您的姓名',
                        trigger: 'blur'
                    }
                ],

                phoneNumber: [
                    {
                        required: true,
                        message: '請輸入您登記的電話號碼',
                        trigger: 'blur'
                    },
                    {
                        validator: phoneNumberValidator,
                        trigger: 'blur'
                    },
                    {
                        validator: duplicateValidator.bind(null, 'phoneNumber'),
                        trigger: 'blur'
                    }
                ],

                email: [
                    {
                        required: true,
                        message: '請輸入您登記的電子郵件',
                        trigger: 'blur'
                    },
                    {
                        type: 'email',
                        message: '請輸入一個電子郵件',
                        trigger: ['blur', 'change']
                    },
                    {
                        validator: duplicateValidator.bind(null, 'email'),
                        trigger: 'blur'
                    }
                ]
            },

            // Store the information in the sign up form.
            name: '',
            phoneNumber: '',
            email: '',
            address: '',

            // Formatter and Parser
            phoneNumberFormatter,
            phoneNumberParser,
        }

        /**
         * To check the phone number validity.
         * 
         * Only used in form item of ElementPlus as a rule.
         * 
         * @param {*} rule 
         * @param {string} value 
         * @param {(error: string | Error) => void} callback 
         */
        function phoneNumberValidator(_rule, value, callback) {
            if (value.match(/09\d{8}|0[1-8]\d{7}/)) {
                callback();
            } else {
                callback('請輸入正確的電話號碼');
            }
        }

        /**
         * To check the information will sign up duplicatively.
         * 
         * Only used in form item of ElementPlus as a rule.
         * 
         * @param {string} type 
         * @param {*} rule 
         * @param {string} value 
         * @param {(error: string | Error) => void} callback 
         */
        function duplicateValidator(type, _rule, value, callback) {
            fetch('/api/check', {
                method: 'post',
                body: JSON.stringify({ [type]: value })
            }).then(
                res => res.json()
            ).then(result => {
                if (result) {
                    callback('已被登記，請誤重覆報名');
                } else {
                    callback();
                }
            });
        }

        /**
         * Format the given string as phone number.
         * 
         * Only used in input element of ElementPlus as a formatter.
         * 
         * @param {string} value 
         * @returns {string} The formatted phone number
         */
        function phoneNumberFormatter(value) {
            // Comfirm the input characters are valid
            value = value.replaceAll(/[^0-9]/g, '');
            // If the input is empty, return the empty string
            if (value === '')
                return '';

            // To get the formatted phone number
            let formatted = '';

            // If the phone number doesn't start with '0', then prepend it.
            if (!value.startsWith('0'))
                value = '0' + value;

            // If the phone number starts with '09xx', it's a number of mobile phone.
            if (value.startsWith('09')) {
                // format of the mobile phone number: 09xx-xxx-xxx
                formatted = value.slice(0, 4);

                if (value.length > 4) {
                    formatted += '-' + value.slice(4, 7);
                }

                if (value.length > 7) {
                    formatted += '-' + value.slice(7, 10);
                }
            } else
            // Else, it's a landline number. 
            {
                // format of the landline number: 0x-xxx-xxxx
                formatted = value.slice(0, 2);

                if (value.length > 2) {
                    formatted += '-' + value.slice(2, 5);
                }

                if (value.length > 5) {
                    formatted += '-' + value.slice(5, 9);
                }
            }

            return formatted;
        }

        /**
         * Parse the given string as phone number.
         * 
         * Only used in input element of ElementPlus as a parser.
         * 
         * @param {string} value 
         * @returns {string} The phone number
         */
        function phoneNumberParser(value) {
            // Remove all the non-numeric characters.
            return value.replaceAll(/[^0-9]/g, '');
        }

        return {
            ...news,
            ...events,
            ...contest,


            // User
            user: JSON.parse(localStorage.getItem('user') ?? 'null'),

            // Sign up Form
            signUpForm,
            // Login Form
            loginForm,
            voteAlert,

            // Alert Dialog
            alertDialog: {
                // To control the alert is visible or not.
                isVisible: false,
                // The message to be shown
                message: ''
            },

            // Search Form
            searchForm: {
                // To control the search form is visible or not.
                isVisible: false,
                query: ''
            },
            // All data to search
            search: [
                {
                    // The title of search item.
                    title: '[📌置頂] 即時對話服務上線',
                    // The keywords to be filtered.
                    keywords: '[📌置頂] 即時對話服務上線 02-11 活動消息：有問題？現在可以透過我們的即時線上服務找到解答，快來詢問有關活動的所有問題！ 最新消息',
                    // The action when the search item is clicked.
                    action() {
                        document.location.hash = '#news';
                        this.newsPage = 1;
                    }
                },
                {
                    title: '[📢最新] 探索校園環境',
                    keywords: '[📢最新] 探索校園環境 03-13 活動消息：3 月 20 日有浪人專屬的導覽活動，讓你一覽學城之美，探索我們與大自然共生的環境。 最新消息',
                    action() {
                        document.location.hash = '#news';
                        this.newsPage = 1;
                    }
                },
                {
                    title: '[📢最新] 藝術家分享之夜',
                    keywords: '[📢最新] 藝術家分享之夜 03-11 活動亮點：3 月 18 日藝術家分享之夜即將來臨，了解當代藝術家 馬克·奇拉 的創作心得。 最新消息',
                    action() {
                        document.location.hash = '#news';
                        this.newsPage = 1;
                    }
                },
                {
                    title: '學術講座迎來專業人士',
                    keywords: '學術講座迎來專業人士 03-08 提醒已報名者：藝術Ｘ學術融合，3 月 15 日藝術史學者 葛瑞絲·安德森 博士將進行學術講座。 最新消息',
                    action() {
                        document.location.hash = '#news';
                        this.newsPage = 1;
                    }
                },
                {
                    title: '美食節目公告',
                    keywords: '美食節目公告 03-02 活動消息：活動期間將有 3 月 5 日至 3 月 10 日期間，學院石樓設置美食節目，品嚐來自不同國度的美味！ 最新消息',
                    action() {
                        document.location.hash = '#news';
                        this.newsPage = 2;
                    }
                },
                {
                    title: '國際友校交流直播',
                    keywords: '國際友校交流直播 03-02 活動亮點：3月30日我們將進行與日本東京藝術大學的網上直播交流，一窺他們的特色和文化。 最新消息',
                    action() {
                        document.location.hash = '#news';
                        this.newsPage = 2;
                    }
                },
                {
                    title: '主題展覽倒數',
                    keywords: '主題展覽倒數 02-26 提醒大家：藝術展覽倒數計時中，3 月 28 日即將展出的主題作品，提前感受藝術的饗宴。 最新消息',
                    action() {
                        document.location.hash = '#news';
                        this.newsPage = 2;
                    }
                },
                {
                    title: '校內比賽報名開始',
                    keywords: '校內比賽報名開始 02-26 活動通知：抽象創作比賽報名已開跑，快來展現你的靈感，贏得 3 月 25 日的頒獎禮上的豐富獎品！ 最新消息',
                    action() {
                        document.location.hash = '#news';
                        this.newsPage = 2;
                    }
                },
                {
                    title: '活動日曆更新',
                    keywords: '活動日曆更新 02-24 提醒大家：活動日曆已更新，拜託你們不要錯過 3 月 15 日至 3 月 20 日期間的精彩表演和工作坊！  最新消息',
                    action() {
                        document.location.hash = '#news';
                        this.newsPage = 3;
                    }
                },
                {
                    title: '草間彌生親臨分享生命經歷',
                    keywords: '草間彌生親臨分享生命經歷 02-24 藝點亮：3 月 12 日，我們驕傲地宣布，世界知名藝術家 草間彌生 將親自指導學生藝術創作歷程！  最新消息',
                    action() {
                        document.location.hash = '#news';
                        this.newsPage = 3;
                    }
                },
                {
                    title: '國際交流預告',
                    keywords: '國際交流預告 02-22 活動消息：3 月 3 日將迎來來自巴黎藝術學院的代表，與我們練習生分享藝術視野。 最新消息',
                    action() {
                        document.location.hash = '#news';
                        this.newsPage = 3;
                    }
                },
                {
                    title: '校慶倒數開始！',
                    keywords: '校慶倒數開始！ 02-21 活動提醒：踏入浪人季前，距離盛典只剩下 8 天！準備迎接 3 月起一場充滿藝術與文化的盛會！ 最新消息',
                    action() {
                        document.location.hash = '#news';
                        this.newsPage = 3;
                    }
                },
                // {
                //     title: '東花浪人季世界開幕週 - 開幕典禮',
                //     keywords: '東花浪人季世界開幕週 - 開幕典禮 03-01 15:00 - 17:00 歡迎詞和浪人季活動介紹。',
                //     action () {
                //         document.location.hash = '#events';
                //     }
                // },
                {
                    title: '學生家長之夜 - 課程深度探索',
                    keywords: '學生家長之夜 - 課程深度探索 03-02 18:00 - 20:00 深入課程的核心，參與各項工作坊和實驗，了解孩子在不同領域的學習。 學生家長之夜 -〈課程深度探索〉\n這個晚上，我們邀請家長深入課程的核心，親身體驗孩子在校的學習環境。您將參與一系列的工作坊和實驗，由學校的老師親自指導，讓您了解孩子在藝術、科學和人文領域的學習成果。這是一個難得的機會，讓您更全面地認識學校的教學理念和豐富的課程內容。',
                    action() {
                        document.location.hash = '#events';
                        this.eventCalendar.select = 2;
                    }
                },
                {
                    title: '學生家長之夜 - 藝術創作現場',
                    keywords: '學生家長之夜 - 藝術創作現場 03-03 18:00 - 20:00 走進孩子的藝術天地，親身參與各種藝術創作活動，感受學生的創造力。 學生家長之夜 -〈藝術創作現場〉\n今晚，您將走進孩子的藝術天地。在特別設計的藝術工作室中，您可以親身參與各種藝術創作活動，由學生們親自指導。這是一個互動的體驗，讓您感受到孩子在藝術領域的潛能和創造力。透過實際的創作過程，您將更加理解學校藝術教育的獨特之處。',
                    action() {
                        document.location.hash = '#events';
                        this.eventCalendar.select = 3;
                    }
                },
                // {
                //     title: '外賓專屬活動',
                //     keywords: '外賓專屬活動 03-04 整天 包括參觀校園、座談會等。',
                //     action () {
                //         document.location.hash = '#events';
                //     }
                // },
                // {
                //     title: '外賓專屬活動',
                //     keywords: '外賓專屬活動 03-05 整天 包括參觀校園、座談會等。',
                //     action () {
                //         document.location.hash = '#events';
                //     }
                // },
                {
                    title: '國際美食展〈美食之夜〉',
                    keywords: '國際美食展〈美食之夜〉 03-06 14:00 - 21:00 提供各國特色美食品嚐。 國際美食展〈美食之夜〉\n歡迎來到《東花浪人季》的美食之夜！沉浸在美味的香氣中，您將有機會品嚐來自世界各地的特色美食。攤位上的廚師將親自為您烹飪，展示地道的料理技巧。此外，我們準備了一系列的文化表演，讓您在品味美食的同時，感受不同國家的藝術和音樂。',
                    action() {
                        document.location.hash = '#events';
                        this.eventCalendar.select = 6;
                    }
                },
                {
                    title: '國際美食展〈文化交流之夜〉',
                    keywords: '國際美食展〈文化交流之夜〉 03-07 14:00 - 21:00 提供各國特色美食品嚐。 國際美食展〈文化交流之夜〉\n今晚是美食展的文化交流之夜！在美味佳餚的陪伴下，我們安排了一系列的文化演出，包括傳統樂器演奏、舞蹈表演和視覺藝術展覽。每一個節目都展現了來自不同國家的獨特藝術風格。在歡笑聲中，感受跨文化的交流，讓這個夜晚成為難忘的美食與藝術饗宴。',
                    action() {
                        document.location.hash = '#events';
                        this.eventCalendar.select = 7;
                    }
                },
                // {
                //     title: '跨文化藝術對話論壇',
                //     keywords: '跨文化藝術對話論壇 03-08 15:00 - 17:00 邀請跨領域藝術家進行對話，分享不同文化對藝術的啟發。',
                //     action () {
                //         document.location.hash = '#events';
                //     }
                // },
                // {
                //     title: '學生藝術作品展覽',
                //     keywords: '學生藝術作品展覽 03-09 整天 展示學生的藝術創作，包括繪畫、雕刻、攝影等多種形式。',
                //     action () {
                //         document.location.hash = '#events';
                //     }
                // },
                {
                    title: '跨學校合作日',
                    keywords: '跨學校合作日 03-10 整天 與其他學校進行合作，共同探討教學方法和課程設計。 10:00 - 12:00\n活動：校園導覽和歡迎儀式\n內容：各姐妹校的代表一同參與，校長致詞歡迎，學校概況介紹。\n\n14:00 - 16:00\n活動：教學方法工作坊\n內容：分為不同場次，每場由一所姐妹校的老師主持，分享各校的教學方法和經驗。',
                    action() {
                        document.location.hash = '#events';
                        this.eventCalendar.select = 10;
                    }
                },
                // {
                //     title: '藝術家座談會',
                //     keywords: '藝術家座談會 03-11 14:00 - 16:00 邀請藝術家分享其創作心得和藝術理念，與參與者進行互動。',
                //     action () {
                //         document.location.hash = '#events';
                //     }
                // },
                {
                    title: '國際教育論壇',
                    keywords: '國際教育論壇 03-12 整天 與姐妹校代表及教育專業人士進行深入的教育交流和合作討論。 10:00 - 12:00\n活動：教育政策座談會\n內容：各姐妹校教育代表進行教育政策和制度的分享，探討各地區的異同。\n\n14:00 - 16:00\n活動：跨文化課程設計研討\n內容：各校教務代表分享本校的跨文化課程，進行研討和提問。',
                    action() {
                        document.location.hash = '#events';
                        this.eventCalendar.select = 12;
                    }
                },
                {
                    title: '藝術工作坊',
                    keywords: '藝術工作坊 03-13 整天 提供各類藝術工作坊，讓參與者親身體驗不同藝術形式的製作。 10:00 - 12:00\n活動：跨學科藝術工作坊\n內容：由三所姐妹校的藝術老師合作舉辦的工作坊，結合視覺藝術和表演藝術元素。\n\n14:00 - 16:00\n活動：學生合作藝術展\n內容：各校學生共同合作製作的藝術展覽，展示跨學科、跨文化的藝術作品。',
                    action() {
                        document.location.hash = '#events';
                        this.eventCalendar.select = 13;
                    }
                },
                {
                    title: '文化交流日',
                    keywords: '文化交流日 03-14 整天 安排不同文化的展覽攤位，並有文化表演和交流活動。 10:00 - 12:00\n活動：藝術家工作坊\n內容：邀請來自三所學校的藝術家進行工作坊，教授特定藝術技法或創作理念。\n\n14:00- 16:00 \n活動：數位藝術展示\n內容：以數位藝術為主題，展示學生和老師使用新媒體進行的實驗性藝術創作，包括虛擬現實、數位繪畫等。',
                    action() {
                        document.location.hash = '#events';
                        this.eventCalendar.select = 14;
                    }
                },
                {
                    title: '教育專業論壇',
                    keywords: '教育專業論壇 03-15 整天 邀請來自姐妹校和其他教育機構的代表，進行教育專業的深入討論，分享各校的教學心得和最佳實踐。 10:00 - 12:00\n活動: 教育專業論壇\n內容: 由三所學校的教育專業人士主持的論壇，討論最新的教學趨勢、挑戰和機會。\n\n14:00 - 16:00\n活動: 教學方法工作坊\n內容: 分為不同主題的工作坊，提供參與者實際參與、互動和討論的機會，涵蓋教學創新、多元教學法等\n \n18:00 - 20:00\n活動: 教育專業人士晚宴\n內容: 輕鬆的晚宴環境，提供教育工作者和專業人士交流的場所，分享各自的教學心得和見解。',
                    action() {
                        document.location.hash = '#events';
                        this.eventCalendar.select = 15;
                    }
                },
                {
                    title: '跨校教學示範',
                    keywords: '跨校教學示範 03-16 整天 姐妹校教師進行實地教學示範，展示各校不同的教學風格和方法。 09:00 - 12:00\n活動: 學術研討會\n內容: 由各學校的學術精英分享最新的研究成果、學術發現，促進學術界的合作和交流。\n\n14:00 - 16:00\n活動: 跨校學術交流\n內容: 學者和研究人員之間的小組交流，討論潛在的研究合作項目。\n\n18:00 - 20:00\n活動: 國際研究生交流會\n內容: 與來自不同國家的研究生分享經驗，促進國際學術交流。',
                    action() {
                        document.location.hash = '#events';
                        this.eventCalendar.select = 16;
                    }
                },
                // {
                //     title: '學科合作工作坊',
                //     keywords: '學科合作工作坊 03-17 14:00 - 16:00 由各校學科主管和老師參與的工作坊，討論跨校學科合作的可能性，促進不同學科之間的連結。',
                //     action () {
                //         document.location.hash = '#events';
                //     }
                // },
                // {
                //     title: '藝術教育座談會',
                //     keywords: '藝術教育座談會 03-18 10:00 - 12:00 聚焦藝術教育的座談會，邀請藝術教育專家和藝術老師分享最新的教學理念和藝術教育的未來發展趨勢。',
                //     action () {
                //         document.location.hash = '#events';
                //     }
                // },
                // {
                //     title: '跨校課程設計競賽',
                //     keywords: '跨校課程設計競賽 03-19 14:00 - 17:00 各校教師組隊參與跨校課程設計競賽，透過合作設計創新課程，提升教學品質和豐富學科內容。',
                //     action () {
                //         document.location.hash = '#events';
                //     }
                // },
                {
                    title: '教育科技融合工作坊',
                    keywords: '教育科技融合工作坊 03-20 整天 探討教育科技在課堂中的應用，邀請科技教育專家分享最新的教育科技趨勢，並進行實際應用案例的演示。 10:00 - 12:00\n活動: 教育科技論壇\n內容: 探討教育科技在教學中的應用，尋找創新的教學模式。\n\n14:00 - 16:00\n活動: 教育科技展示\n內容: 學校和公司展示最新的教育科技產品和應用，提供互動體驗。\n\n18:00 - 20:00\n活動: 跨校教育科技合作交流\n內容: 教育科技專業人士的小組討論，促進校際間的教育科技合作。',
                    action() {
                        document.location.hash = '#events';
                        this.eventCalendar.select = 20;
                    }
                },
                // {
                //     title: '教育成果展示與總結',
                //     keywords: '教育成果展示與總結 03-21 15:00 - 17:00 各校教師展示教育成果，總結教育專業交流週的收獲，分享彼此的教學心得和未來合作的可能性。',
                //     action () {
                //         document.location.hash = '#events';
                //     }
                // },
                {
                    title: '藝術大師講座',
                    keywords: '藝術大師講座 03-22 14:00 - 17:00 邀請知名藝術家董陽孜進行講座，分享其藝術創作心得、藝術理念，以及對當代藝術與書法撞擊的看法。 14:00 - 17:00\n地點： 主禮堂\n主題： 藝術與書法的對話\n嘉賓講者： 董陽孜（Dong Yangzi）\n內容摘要：\n董陽孜，著名中國書法家，將榮幸來到我們學校進行一場獨特而深刻的藝術對話。在這次講座中，董陽孜將分享她在藝術創作過程中的心得體會，深入談論她的藝術理念和對當代藝術的看法。特別關注的焦點之一是書法與其他藝術形式的碰撞，以及這種交融如何豐富了藝術的多樣性。\n活動流程：\n14:00 - 14:30：報到及入場\n14:30 - 14:45：開場致辭\n14:45 - 16:20：董陽孜藝術分享講座\n16:30 - 17:00：問答環節',
                    action() {
                        document.location.hash = '#events';
                        this.eventCalendar.select = 22;
                    }
                },
                // {
                //     title: '藝術家工作坊',
                //     keywords: '藝術家工作坊 03-23 10:00 - 12:00 藝術家現場指導工作坊，學生和參與者有機會親自參與藝術創作，與藝術家近距離交流，感受藝術的魅力。',
                //     action () {
                //         document.location.hash = '#events';
                //     }
                // },
                // {
                //     title: '藝術探索之旅',
                //     keywords: '藝術探索之旅 03-24 09:00 - 17:00 安排參觀當地藝術博物館、畫廊，以及城市中的藝術品和雕塑，豐富參與者的視野，啟發藝術的不同面向。',
                //     action () {
                //         document.location.hash = '#events';
                //     }
                // },
                {
                    title: '學術研討會',
                    keywords: '學術研討會 03-25 15:00 - 17:00 邀請藝術研究專家和學者進行學術發表，探討藝術研究的最新趨勢和未來發展，促進學術交流。 時間： 15:00 - 17:00\n地點： 藝術中心展覽廳\n主題： 策展與藝術的對話\n特邀嘉賓： 胡朝聖（Sean C.S. HU）\n內容摘要：\n在這次特別活動中，我們榮幸邀請到享譽國際的藝術策展人胡朝聖先生。他將分享他多年來在藝術策展領域的豐富經驗，以及他對當代藝術趨勢和展覽設計的獨特見解。這是一次與藝術專業人士深入交流的絕佳機會。\n\n15:45 - 16:45：胡朝聖先生藝術策展分享\n16:45 - 17:00：問答環節\n\n參與方式：\n藝術愛好者、練習生、教職員和公眾人士均可參與。藉由這次對談，參與者將有機會深入了解藝術策展的背後故事，以及策展人在藝術世界中的角色與挑戰。 這場對談將為參與者帶來一場藝術思考的盛宴，透過策展人的視角，深入探討藝術作品如何透過展覽呈現、影響觀眾，並探索藝術在當代社會中的意義。',
                    action() {
                        document.location.hash = '#events';
                        this.eventCalendar.select = 25;
                    }
                },
                {
                    title: '藝術展覽與評選',
                    keywords: '藝術展覽與評選 03-26 10:00 - 17:00 學生和藝術家共同參與的藝術展覽，展示各種藝術作品，同時進行評選，選出優秀作品進行獎勵，鼓勵學生更積極參與藝術創作。 閉幕典禮及藝術家分享會\n時間： 14:00 - 17:00\n地點： 主禮堂\n活動內容： 此次閉幕典禮將以藝術家分享會開場，邀請參與藝術學院的多位藝術家分享他們在浪人季的創作心得和背後的故事。隨後進行閉幕典禮，回顧整個浪人季的亮點和成就。',
                    action() {
                        document.location.hash = '#events';
                        this.eventCalendar.select = 26;
                    }
                },
                // {
                //     title: '藝術家交流晚宴',
                //     keywords: '藝術家交流晚宴 03-27 18:00 - 21:00 邀請藝術家、學生和參與者共進晚餐，進一步深化交流，分享藝術心得，提升藝術共同體的凝聚力。',
                //     action () {
                //         document.location.hash = '#events';
                //     }
                // },
                // {
                //     title: '藝術作品拍賣',
                //     keywords: '藝術作品拍賣 03-28 15:00 - 17:00 舉辦藝術作品拍賣活動，募集資金支持藝術教育計劃，同時為參與者提供購買藝術品的機會，促進藝術市場的活躍。',
                //     action () {
                //         document.location.hash = '#events';
                //     }
                // },
                // {
                //     title: '閉幕典禮暨藝術成果展開幕',
                //     keywords: '閉幕典禮暨藝術成果展開幕 03-29 15:00 - 17:00 學校主禮堂閉幕典禮，宣布活動結束，同時開幕藝術成果展覽。',
                //     action () {
                //         document.location.hash = '#events';
                //     }
                // },
                {
                    title: '學生藝術成果展示及評選',
                    keywords: '學生藝術成果展示及評選 03-30 整天 展示學生閉幕週期間的藝術創作成果，進行評選和頒獎。、精選藝術家分享座談。 14:00 - 16:00\n精選藝術家分享座談\n地點：藝術中心\n活動內容： 廳邀請知名藝術家分享其藝術心得，進行座談交流、做本年度分享結論。',
                    action() {
                        document.location.hash = '#events';
                        this.eventCalendar.select = 30;
                    }
                },
                {
                    title: '藝術工作坊及結業晚宴',
                    keywords: '藝術工作坊及結業晚宴 03-31 15:00 - 22:00 舉行結業晚宴慶祝閉幕，閉幕典禮，宣布活動結束，同時開幕藝術成果展覽。 地點：各教室及校園餐廳\n提供不同類型的藝術工作坊，晚上舉行結業晚宴慶祝閉幕。\n\n結業音樂會及焰火晚會\n時間： 19:00 - 22:00\n地點： 校園廣場\n活動內容： 以絢麗的音樂會表演和絢爛的焰火晚會，正式結束〈東花浪人季〉。音樂會中將有學生和教職員的表演，展現多元的藝術風貌。焰火晚會則是為這次國際聯合校慶畫下美好的句點，為參與者留下難忘的回憶。',
                    action() {
                        document.location.hash = '#events';
                        this.eventCalendar.select = 31;
                    }
                },
                {
                    title: '明天',
                    keywords: '夕陽如火，燒紅半邊天，\n金光灑落，海面波光粼粼。\n彩雲飄動，映照著遠方的帆，\n靜靜欣賞，大自然的畫卷。', // 大自然的蛋卷 (,
                    action() {
                        document.location.hash = '#contest';
                        this.entryId = 0;
                    }
                },
                {
                    title: '銀浦、金蟾、海',
                    keywords: '星光閃爍在寂靜的夜，\n海浪輕拍著遠方的岸邊。\n月亮掛高，金黃色的光芒，\n照亮黑暗，帶來希望。\n\n在這片廣闊的海洋中，\n我們感受著自然的力量。\n在這片神秘的夜空下，\n我們尋找著自己的方向。',
                    action() {
                        document.location.hash = '#contest';
                        this.entryId = 1;
                    }
                },
                {
                    title: '收獲',
                    keywords: '在光彩燦爛的日子裡，\n彩色的靈魂在舞動，\n每個人物都是一首未完成的詩篇，\n在自然的懷抱中尋找答案。\n\n或許他們是夢想家，或許他們是遊客，\n或許他們是朋友，或許他們是陌生人，\n他們的故事沒有開始，也沒有結束，\n只有在這一刻。',
                    action() {
                        document.location.hash = '#contest';
                        this.entryId = 2;
                    }
                },
                {
                    title: '大海',
                    keywords: '海浪拍岸聲聲響，\n震撼人心撼天驚。\n白色泡沫耀眼光，\n炫目奪目令人驚。\n\n海浪的力量無窮，\n摧枯拉朽勢不可擋。\n但它也代表生命，\n生生不息永不停。',
                    action() {
                        document.location.hash = '#contest';
                        this.entryId = 3;
                    }
                },
                {
                    title: '朝陽的祈禱',
                    keywords: '海洋的顏色，如詩般流淌，\n藍綠交織，自由與寧靜的歌。\n太陽灑下金黃的光芒，\n照亮每一個角落，溫暖每一處漂泊。',
                    action() {
                        document.location.hash = '#contest';
                        this.entryId = 4;
                    }
                }
            ]
        };
    },

    computed: {
        /**
         * Get the news items to show by specific page number.
         * 
         * @returns {{title: string; date: string; content: string;}[]} The news items.
         */
        newsList() {
            return this.news.slice((this.newsPage - 1) * this.newsPageSize, this.newsPage * this.newsPageSize);
        },

        /**
         * Get the search items by given query string.
         * 
         * @returns {{title: string; keywords: string; action: () => void;}[]} The search result.
         */
        searchList() {
            return this.searchForm.query.trim().split(/ +/).reduce(function (items, fragment) {
                return items.filter(function (item) {
                    return item.keywords.search(RegExp(fragment, 'g')) != -1;
                });
            }, this.search);
        },

        currentEntry() {
            return this.entries.at(this.entryId % this.entries.length);
        }
    },

    watch: {
        user: {
            deep: true,
            handler(user, oldValue) {
                if (user == null)
                    return localStorage.removeItem('user');

                localStorage.setItem('user', JSON.stringify(user));

                if (oldValue != null)
                    fetch('/api/update', {
                        method: 'post',
                        body: JSON.stringify(user)
                    }).catch(
                        () => { }
                    );
            }
        },

        'user.vote'(newVote, oldVote) {
            if (newVote in this.entries && oldVote !== null)
                this.entries[newVote].votes += 1;
            if (oldVote in this.entries && newVote !== null)
                this.entries[oldVote].votes -= 1;
        }
    },

    methods: {
        scrollTo(hash) {
            document.location.hash = '';
            document.location.hash = hash;
        },

        voteForCurrentEntry() {
            if (!this.user)
                return this.voteAlert.isVisible = true;

            const entryId = this.entries.indexOf(this.currentEntry);
            this.user.vote = this.user.vote == entryId ? -1 : entryId;
        },

        /**
         * Process the search item click event.
         * 
         * @param {{title: string; keywords: string; action: () => void}} item 
         */
        searchAction(item) {
            item.action.call(this);
            this.searchForm.isVisible = false;
        },

        /**
         * Open an alert dialog and show the message.
         * 
         * @param {string} message 
         */
        alert(message) {
            this.alertDialog.isVisible = true;
            this.alertDialog.message = message;
        },

        signUp() {
            const form = this.$refs.signUpForm;
            const { name, phoneNumber, email, address } = this.signUpForm;

            form.validate().then(
                () => fetch('/api/create', {
                    method: 'post',
                    body: JSON.stringify({ name, phoneNumber, email, address })
                })
            ).then(
                res => res.json()
            ).then(
                user => {
                    if (user.type == 'error')
                        return this.alert('註冊失敗：請檢查您的資訊是否有誤。')
                    this.alert(`註冊成功！歡迎 ${name}。`);
                    this.user = user;
                }
            ).catch(
                () => { }
            );
        },

        login() {
            const form = this.$refs.loginForm;
            const { phoneNumber, email } = this.loginForm;

            form.validate().then(
                () => fetch('/api/verify', {
                    method: 'post',
                    body: JSON.stringify({ phoneNumber, email })
                })
            ).then(
                res => res.json()
            ).then(
                user => {
                    if (user.type == 'error')
                        return this.alert('登入失敗：不正確的電話或電子郵件。')
                    this.alert(`登入成功！歡迎 ${user.name}。`);
                    this.user = user;
                    this.loginForm.isVisible = false;
                },
            ).catch(
                () => { }
            );
        },
        
        logout() {
            this.user = null;
            this.alert(`已登出，請重新登入。`);
        }
    },

    created() {
        fetch('/api/get-votes').then(
            res => res.json()
        ).then(
            votes => {
                for (const index in this.entries) {
                    this.entries[index].votes = votes[index];
                }
            }
        );
    }
});

// Register for ElementPlus to use its element.
app.use(ElementPlus);

// Render the Vue component.
app.mount(document.body)