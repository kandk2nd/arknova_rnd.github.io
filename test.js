const { button, div, input, sup } = van.tags

// Create a new state object with init value 1
const counter01 = van.state(1)
const counter02 = van.state(1)

// Log whenever the value of the state is updated
// 多分、stateが更新されたら呼ばれるのがderiveな気がする。
// ただし肝心のstateが含まれていないと起動しないっぽい。
//      ∵どのstateでもderive走るのではと考えて確認したが、stateが含まれていなければ起動しなかったため
// このderive。単純に関数で引数も関数だし、引数の関数の戻り値をそのまま返すので。
// 今回の問題調査である。配列の添え字にstate使っても更新されなことがある問題に使える気がする。
//      そもそもderiveが重要関数なのに知らなかったのがだめっぽいけど。
van.derive(() => console.log(`Counter: ${counter01.val}`))
function init_state() {
    counter01.val = 1
    counter02.val = 1
}
function fn() {
    coefficient = [
        ["work", "mid", "sisan"],
        ["ou", "do", "n"],
        ["ta", "be", "tai"]
    ]
    console.log("derive 通過")
    return coefficient[counter01.val - 1][counter02.val - 1]
}
// Derived state
const counterSquared = van.derive(fn)

// Used as a child node
const dom1 = div(counter01, "+", counter02)

// Used as a property
const dom2 = input({ type: "number", value: counter01, disabled: true })

// Used in a state-derived property
const dom3 = div({ style: () => `font-size: ${counter01.val}em;` }, "Text")

// Used in a state-derived child
const dom4 = div(counter01, sup(2), () => ` = ${counterSquared.val}`)

// Button to increment the value of the state
const incrementBtn = button({ onclick: () => ++counter01.val }, "Increment")
const resetBtn = button({ onclick: init_state }, "Reset")
const incBtn2 = button({ onclick: () => ++counter02.val }, "Okawari")

van.add(document.body, incrementBtn, incBtn2, resetBtn, dom1, dom2, dom3, dom4)
