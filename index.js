// 各DOM要素の取得
const rockElement = document.getElementById('rock')
const scissorsElement = document.getElementById('scissors')
const paperElement = document.getElementById('paper')
const resultsElement = document.getElementById('results')

// 定数
const ROCK = {name:'グー', point: 0}
const SCISSORS = {name:'チョキ', point: 1}
const PAPER = {name:'パー', point: 2}
const VICTORY = '勝利'
const LOSE = '敗北'
const DRAW = '引き分け'
const HANDS = [ROCK, SCISSORS, PAPER]

// 結果を格納する配列
const results = []

// 相手の手を作る
const createEnemyHand = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    return HANDS[randomNumber]
}

// 勝負を判定する
const decideTheGame = (myHand, enemyHand) => {
    const result = (myHand.point - enemyHand.point + 3) % 3
    if(result === 0) {
        return DRAW
    }
    
    if(result === 1) {
        return LOSE
    }

    if(result === 2) {
        return VICTORY
    }
}

// じゃんけんメソッド
const doRockScissorsPaper = (event) => {
    const myHandName = event.target.innerHTML
    const myHand = HANDS.find(hand => hand.name === myHandName)
    const enemyHand = createEnemyHand()
    const winOrLose = decideTheGame(myHand, enemyHand)
    const result = {
        myHand, enemyHand, winOrLose
    }
    results.push(result)
    resultsElement.innerHTML = ''
    results.map((result, index) => {
        createElements(result, index + 1)
    })
}

// DOM要素を作って入れ込むメソッド
const createElements = (result, index) => {
    const trElement = document.createElement('tr')
    const timesTdElement = document.createElement('td')
    const myHandTdElement = document.createElement('td')
    const enermyHandTdElement = document.createElement('td')
    const winOrLoseTdElement = document.createElement('td')

    timesTdElement.innerHTML = index
    myHandTdElement.innerHTML = result.myHand.name
    enermyHandTdElement.innerHTML = result.enemyHand.name
    winOrLoseTdElement.innerHTML = result.winOrLose

    trElement.appendChild(timesTdElement)
    trElement.appendChild(myHandTdElement)
    trElement.appendChild(enermyHandTdElement)
    trElement.appendChild(winOrLoseTdElement)

    resultsElement.appendChild(trElement)
}

// 各DOM要素に紐づいたイベントリスナー(ここまとめられそうな気がする)
rockElement.addEventListener('click', (event) => {
    doRockScissorsPaper(event)
})

scissorsElement.addEventListener('click', (event) => {
    doRockScissorsPaper(event)
})

paperElement.addEventListener('click', (event) => {
    doRockScissorsPaper(event)
})