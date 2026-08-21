const story = {

start:{
    speaker:"",
    text:"ホームに吹く風は少し冷たかった。発車まで、あと三日。",
    choices:[
        {text:"先へ進む",next:"station"}
    ]
},

station:{
    speaker:"",
    text:"人気のない駅で、一人の少女が夜空を見上げていた。",
    choices:[
        {text:"話しかける",next:"girl"}
    ]
},

girl:{
    speaker:"少女",
    text:"……あなたも、この列車に乗るの？",
    choices:[
        {text:"うなずく",next:"ticket"},
        {text:"わからないと答える",next:"ticket"}
    ]
},

ticket:{
    speaker:"少女",
    text:"じゃあ、これを持っていて。",
    subtitle:"古い銀色の切符を受け取った。",
    choices:[
        {text:"1日目へ",next:"day1"}
    ]
},

// 1日目

day1:{
    speaker:"",
    text:"発車まで、あと二日。",
    choices:[
        {text:"街を歩く",next:"memory1"},
        {text:"駅に残る",next:"memory2"}
    ]
},

memory1:{
    speaker:"",
    text:"懐かしい駄菓子屋を見つけた。",
    choices:[
        {text:"思い出を受け取る",next:"day2"}
    ]
},

memory2:{
    speaker:"",
    text:"夕焼けのホームで列車を眺めた。",
    choices:[
        {text:"思い出を受け取る",next:"day2"}
    ]
},

// 2日目

day2:{
    speaker:"",
    text:"発車まで、あと一日。",
    choices:[
        {text:"少女と話す",next:"talk1"},
        {text:"夜空を見る",next:"talk2"}
    ]
},

talk1:{
    speaker:"少女",
    text:"人はね、大切な思い出を抱えたまま旅立つんだよ。",
    choices:[
        {text:"次へ",next:"day3"}
    ]
},

talk2:{
    speaker:"",
    text:"流れ星が空を横切った。",
    choices:[
        {text:"次へ",next:"day3"}
    ]
},

// 3日目

day3:{
    speaker:"",
    text:"発車の日がやってきた。",
    choices:[
        {text:"列車に乗る",next:"endA"},
        {text:"少女を探す",next:"endB"},
        {text:"ホームに残る",next:"endC"}
    ]
},

// エンド

endA:{
    speaker:"",
    text:"列車は星々の海へ走り出した。\n\nEND A『Starlight Express』",
    ending:true
},

endB:{
    speaker:"",
    text:"振り返ると少女は微笑んでいた。\n\nEND B『Promise』",
    ending:true
},

endC:{
    speaker:"",
    text:"列車を見送り、あなたは新しい朝を迎えた。\n\nEND C『Tomorrow』",
    ending:true
}

};
