const { div } = van.tags;
const base_land = van.state(0);
const land_color01 =
    [   // 1
        "#ff0000", // 0
        "#ff0000", // 1
        "#cc99ff", // 2
        "#9933ff", // 3
        "#6600cc", // 4
        "#6600cc", // 5
        "#9933ff", // 6
        "#cc99ff", // 7
    ];
const land_color02 =
    [   // 2
        "#00ff00", // 0
        "#cc99ff", // 1
        "#00ff00", // 0
        "#cc99ff", // 1
        "#9933ff", // 2
        "#6600cc", // 3
        "#6600cc", // 3
        "#9933ff", // 2
    ];
const land_color03 =
    [   // 3
        "#ffff00", // 0
        "#9933ff", // 2
        "#cc99ff", // 1
        "#ffff00", // 0
        "#cc99ff", // 1
        "#9933ff", // 2
        "#6600cc", // 3
        "#6600cc", // 3
    ];
const land_color04 =
    [   // 4
        "#00ffff", // 0
        "#6600cc", // 3
        "#9933ff", // 2
        "#cc99ff", // 1
        "#00ffff", // 0
        "#cc99ff", // 1
        "#9933ff", // 2
        "#6600cc", // 3
    ];
const land_color05 =
    [   // 5
        "#663300", // 0
        "#6600cc", // 3
        "#6600cc", // 3
        "#9933ff", // 2
        "#cc99ff", // 1
        "#663300", // 0
        "#cc99ff", // 1
        "#9933ff", // 2
    ];
const land_color06 =
    [   // 6
        "#888888", // 0
        "#9933ff", // 2
        "#6600cc", // 3
        "#6600cc", // 3
        "#9933ff", // 2
        "#cc99ff", // 1
        "#888888", // 0
        "#cc99ff", // 1
    ];
const land_color07 =
    [   // 7
        "#222222", // 0
        "#cc99ff", // 1
        "#9933ff", // 2
        "#6600cc", // 3
        "#6600cc", // 3
        "#9933ff", // 2
        "#cc99ff", // 1
        "#222222", // 0
    ];
const DivList = () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 0, 2, 4, 6, 1, 3, 5, 6, 5, 4, 3, 2, 1, 0, 5, 5, 2, 5, 4, 6];  /*ここにクラス名を*/
    const divs = [];
    const MAX_ROW = 3;
    // 色直指定ではなく、7色クラス指定で入れて。色変更をクラス指定で行う気がする。
    // forループでdivを生成
    i = 0
    divs.push(div(base_land))
    while (i < items.length) {
        tmp = [];
        do {
            if (items[i] == 0) {
                tmp.push(div({ class: "hexagon", style: () => `background-color:#ffffff;`, onclick: () => base_land.val = 0 }, i++));
            } else if (items[i] == 1) {
                tmp.push(div({ class: "hexagon", style: () => `background-color:${land_color01[base_land.val]};`, onclick: () => base_land.val = 1 }, i++));
            } else if (items[i] == 2) {
                tmp.push(div({ class: "hexagon", style: () => `background-color:${land_color02[base_land.val]};`, onclick: () => base_land.val = 2 }, i++));
            } else if (items[i] == 3) {
                tmp.push(div({ class: "hexagon", style: () => `background-color:${land_color03[base_land.val]};`, onclick: () => base_land.val = 3 }, i++));
            } else if (items[i] == 4) {
                tmp.push(div({ class: "hexagon", style: () => `background-color:${land_color04[base_land.val]};`, onclick: () => base_land.val = 4 }, i++));
            } else if (items[i] == 5) {
                tmp.push(div({ class: "hexagon", style: () => `background-color:${land_color05[base_land.val]};`, onclick: () => base_land.val = 5 }, i++));
            } else if (items[i] == 6) {
                tmp.push(div({ class: "hexagon", style: () => `background-color:${land_color06[base_land.val]};`, onclick: () => base_land.val = 6 }, i++));
            } else if (items[i] == 7) {
                tmp.push(div({ class: "hexagon", style: () => `background-color:${land_color07[base_land.val]};`, onclick: () => base_land.val = 7 }, i++));
            }
        } while (i < items.length && i % MAX_ROW != 0);
        divs.push(div({ class: "hexagon-row" }, ...tmp));
    }
    return div(...divs); // 配列を展開してdiv要素を並べる
};

van.add(document.body, DivList());
