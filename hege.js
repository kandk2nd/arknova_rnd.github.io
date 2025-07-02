const { div, select, input, thead, h2, h4, tbody, option, form, disabled } = van.tags
const lowA = van.state(1)
const lowB = van.state(1)
const lowC = van.state(1)
const population = van.state(1)
const mid_population = van.state(1)
const mid_receivable = van.state(1)
const receivable = van.state(0)
const campany_num = van.state(0)
const worker_tax = van.derive(calc_worker_tax)
const mid_tax = van.derive(calc_mid_tax)
const hi_tax = van.derive(calc_hi_tax)
function calc_worker_tax() {
    const table = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

    return table[lowA.val - 1][lowB.val - 1] * population.val
}
function calc_mid_tax() {
    const table = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

    return table[lowA.val - 1][lowB.val - 1] * population.val
}
function calc_hi_tax() {
    const table = []
    // 入力値をテーブル行に変換する処理が必要。
    return table[lowA.val - 1][lowB.val - 1] * population.val
}
function calc_mid_tax() {
    return 1
}
function calc_hi_tax() {
    return 1
}

const items = [10, 20, 30, 40]
const Header = () => {
    return div({ class: "header" }, "hegeee会計")
}
const Main = () => {
    return form({ class: "main", method: "POST", action: "/calc" },
        div({ class: "lows" },
            h2("lows"),
            h4("lowA"),
            select({ oninput: e => lowA.val = e.target.value, name: "lowA", placeholder: "lowA" },
                option({ value: 1 }, "lowA1"),
                option({ value: 2 }, "lowA2"),
                option({ value: 3 }, "lowA3"),
            ),
            h4("lowB"),
            select({ oninput: e => lowB.val = e.target.value, name: "lowB", placeholder: "lowB" },
                option({ value: 1 }, "lowB1"),
                option({ value: 2 }, "lowB2"),
                option({ value: 3 }, "lowB3"),
            ),
            h4("lowC"),
            select({ oninput: e => lowC.val = e.target.value, name: "lowC", placeholder: "lowC" },
                option({ value: 1 }, "lowC1"),
                option({ value: 2 }, "lowC2"),
                option({ value: 3 }, "lowC3"),
            )
        ),
        div({ class: "workman" },
            h2("Workman"),
            // 2つのlowの乗算にp掛けだった気がする
            h4("population"),
            input({ id: "population", type: "number", value: population, oninput: e => population.val = e.target.value, placeholder: "人口" }),
            h4("tax"),
            input({ id: "worker_tax", type: "number", value: worker_tax, disabled }),
        ),
        div({ class: "middle" },
            h2("middle"),
            // low掛け可変とlow掛け可変indexテーブル参照だった気がする
            h4("population"),
            input({ id: "mid_population", type: "number", placeholder: "数" }),
            h4("campany_num"),
            input({ id: "mid_company_num", type: "number", placeholder: "数" }),
            h4("tax"),
            input({ id: "mid_tax", type: "number", placeholder: "数", disabled }),

        ),
        div({ class: "capitalist" },
            // low掛け可変と可変掛けlow参照テーブル
            h2("capitalist"),
            h4("receivable"),
            input({ type: "number", value: receivable, oninput: e => receivable.val = e.tartget.value, placeholder: "数" }),
            h4("campany_num"),
            input({ type: "number", value: campany_num, oninput: e => campany_num.val = e.target.value, placeholder: "数" }),
            h4("tax"),
            input({ type: "number", placeholder: "数" }),
        )

    )
}

van.add(document.body, Header(), Main())
