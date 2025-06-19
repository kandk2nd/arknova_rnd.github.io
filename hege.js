const srcs = van.state([1, 2, 3, 4])
const { div, select, input, thead, h2, h4, tbody, option, form } = van.tags
function test() {
    for (let n = 0; n < 5; n++) {
        for (let i = (srcs.val.length - 1); 0 < i; i--) {
            let rnd = Math.floor((Math.random()) * (i + 1));
            let tmp = srcs.val[i];
            srcs.val[i] = srcs.val[rnd];
            srcs.val[rnd] = tmp;
        }
    }
    srcs.val = [...srcs.val]
}


const Header = () => {
    return div({ class: "header" }, "hegeee会計")
}
const Main = () => {
    return form({ class: "main", method: "POST", action: "/calc" },
        div({ class: "lows" },
            h2("lows"),
            h4("lowA"),
            select({ name: "lowA", placeholder: "lowA" },
                option({ value: 1 }, "lowA1"),
                option({ value: 2 }, "lowA2"),
                option({ value: 3 }, "lowA3"),
            ),
            h4("lowB"),
            select({ name: "lowB", placeholder: "lowB" },
                option({ value: 1 }, "lowB1"),
                option({ value: 2 }, "lowB2"),
                option({ value: 3 }, "lowB3"),
            ),
            h4("lowC"),
            select({ name: "lowC", placeholder: "lowC" },
                option({ value: 1 }, "lowC1"),
                option({ value: 2 }, "lowC2"),
                option({ value: 3 }, "lowC3"),
            )
        ),
        div({ class: "workman" },
            h2("Workman"),
            h4("peples"),
            input({ type: "number", placeholder: "人口" })
        ),
        div({ class: "middle" },
            h2("middle"),
            h4("compeny_num"),
            input({ type: "number", placeholder: "数" }),
        ),
        div({ class: "capitalist" },
            h2("capitalist"),
            h4("capital"),
            input({ type: "number", placeholder: "数" })
        )

    )
}

van.add(document.body, Header(), Main())
