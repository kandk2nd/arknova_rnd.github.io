const pinksrcs = van.state([1, 2, 3, 4, 5, 6, 7])
const bluesrcs = van.state([1, 2, 3, 4, 5, 6, 7])
const { div, button, table, thead, tr, th, tbody, td, img, span } = van.tags
function test() {
    for (let n = 0; n < 7; n++) {
        for (let i = (pinksrcs.val.length - 1); 0 < i; i--) {
            let rnd = Math.floor((Math.random()) * (i + 1));
            let tmp = pinksrcs.val[i];
            pinksrcs.val[i] = pinksrcs.val[rnd];
            pinksrcs.val[rnd] = tmp;
        }
    }
    pinksrcs.val = [...pinksrcs.val]
    for (let n = 0; n < 7; n++) {
        for (let i = (bluesrcs.val.length - 1); 0 < i; i--) {
            let rnd = Math.floor((Math.random()) * (i + 1));
            let tmp = bluesrcs.val[i];
            bluesrcs.val[i] = bluesrcs.val[rnd];
            bluesrcs.val[rnd] = tmp;
        }
    }
    bluesrcs.val = [...bluesrcs.val]
}


const Header = () => {
    return div({ class: "header" }, "Gaia Project Expansion Randomizer")
}

const RandTable = () => {
    /* spanはそれ自身に機能が無いグループ化用のタグ */
    return span({ class: "main" },
        table({ onclick: test, id: "pink_species" },
            tr(
                ["1", "2", "3", "4", "5", "6", "7"].map(n => td(n))
            ),
            () => tr(pinksrcs.val.map(n => td(div({ class: "box0" + n }))))
        ),
        table({ onclick: test, id: "blue_species" },
            tr(
                ["1", "2", "3", "4", "5", "6", "7"].map(n => td(n))
            ),
            () => tr(bluesrcs.val.map(n => td(div({ class: "box0" + n }))))
        )
    )
}
const Randbutton = button({ onclick: test })
test()
van.add(document.body, Header(), RandTable(), Randbutton)
