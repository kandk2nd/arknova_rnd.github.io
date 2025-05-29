const { div } = van.tags;
const base_land = van.state(0);
const land_color01 =
    [   // 1
        "#cccccc", // 0
        "#cccccc", // 1
        "#cc99ff", // 2
        "#9933ff", // 3
        "#6600cc", // 4
        "#6600cc", // 5
        "#9933ff", // 6
        "#cc99ff", // 7
    ];
const land_color02 =
    [   // 2
        "#ff3333", // 0
        "#cc99ff", // 1
        "#ff3333", // 0
        "#cc99ff", // 1
        "#9933ff", // 2
        "#6600cc", // 3
        "#6600cc", // 3
        "#9933ff", // 2
    ];
const land_color03 =
    [   // 3
        "#ffcc33", // 0
        "#9933ff", // 2
        "#cc99ff", // 1
        "#ffcc33", // 0
        "#cc99ff", // 1
        "#9933ff", // 2
        "#6600cc", // 3
        "#6600cc", // 3
    ];
const land_color04 =
    [   // 4
        "#663300", // 0
        "#6600cc", // 3
        "#9933ff", // 2
        "#cc99ff", // 1
        "#663300", // 0
        "#cc99ff", // 1
        "#9933ff", // 2
        "#6600cc", // 3
    ];
const land_color05 =
    [   // 5
        "#000033", // 0
        "#6600cc", // 3
        "#6600cc", // 3
        "#9933ff", // 2
        "#cc99ff", // 1
        "#000033", // 0
        "#cc99ff", // 1
        "#9933ff", // 2
    ];
const land_color06 =
    [   // 6
        "#0099ff", // 0
        "#9933ff", // 2
        "#6600cc", // 3
        "#6600cc", // 3
        "#9933ff", // 2
        "#cc99ff", // 1
        "#0099ff", // 0
        "#cc99ff", // 1
    ];
const land_color07 =
    [   // 7
        "#006633", // 0
        "#cc99ff", // 1
        "#9933ff", // 2
        "#6600cc", // 3
        "#6600cc", // 3
        "#9933ff", // 2
        "#cc99ff", // 1
        "#006633", // 0
    ];
const DivList = () => {
    //1:灰,2:赤,3:黄,4:茶,5:黒,6:青,7:緑の色
    const items = [
        7, 1, 3, 4, 0, 6, 7, 1, 2, 0,
        5, 6, 5, 2, 0, 5, 4, 6, 0, 7,
        0, 4, 1, 7, 0, 0, 3, 0, 0, 3,
        0, 2, 3, 0, 7, 0, 0, 1, 4, 5,
        0, 0, 0, 0, 5, 4, 6, 3, 2, 1,
        0, 6, 4, 0, 2, 1, 0, 7, 6, 3,
        0, 0, 5, 1, 0, 0, 0, 0, 0, 0,
        0, 3, 7, 2, 3, 7, 6, 5, 7, 0,
        0, 2, 4, 1, 6, 5, 4, 3, 2, 1,
    ];  /*ここにクラス名を*/
    const divs = [];
    const MAX_ROW = 10;
    // 色直指定ではなく、7色クラス指定で入れて。色変更をクラス指定で行う気がする。
    // forループでdivを生成
    i = 0
    divs.push(div(base_land))
    while (i < items.length) {
        tmp = [];
        do {
            if (items[i] == 0) {
                tmp.push(div({ class: "hexagon", style: () => `background-color:#ffffff;`, onclick: () => base_land.val = 0 }, 1 + i++));
            } else if (items[i] == 1) {
                tmp.push(div({ class: "hexagon", style: () => `background-color:${land_color01[base_land.val]};`, onclick: () => base_land.val = 1 }, 1 + i++));
            } else if (items[i] == 2) {
                tmp.push(div({ class: "hexagon", style: () => `background-color:${land_color02[base_land.val]};`, onclick: () => base_land.val = 2 }, 1 + i++));
            } else if (items[i] == 3) {
                tmp.push(div({ class: "hexagon", style: () => `background-color:${land_color03[base_land.val]};`, onclick: () => base_land.val = 3 }, 1 + i++));
            } else if (items[i] == 4) {
                tmp.push(div({ class: "hexagon", style: () => `background-color:${land_color04[base_land.val]};`, onclick: () => base_land.val = 4 }, 1 + i++));
            } else if (items[i] == 5) {
                tmp.push(div({ class: "hexagon", style: () => `background-color:${land_color05[base_land.val]};`, onclick: () => base_land.val = 5 }, 1 + i++));
            } else if (items[i] == 6) {
                tmp.push(div({ class: "hexagon", style: () => `background-color:${land_color06[base_land.val]};`, onclick: () => base_land.val = 6 }, 1 + i++));
            } else if (items[i] == 7) {
                tmp.push(div({ class: "hexagon", style: () => `background-color:${land_color07[base_land.val]};`, onclick: () => base_land.val = 7 }, 1 + i++));
            }
        } while (i < items.length && i % MAX_ROW != 0);
        divs.push(div({ class: "hexagon-row" }, ...tmp));
    }
    return div(...divs); // 配列を展開してdiv要素を並べる
};

van.add(document.body, Tabs(
    {
        styele: "max-width: 500px; background-color #ffffff;",
        tabButtonActiveColor: "#bae8e8",
        tabButtonRowColor: "#eeeeee",
        tabButtonBorderStyle: "none",
        tabButtonRowStyleOverrides: {
            "padding-left": "12px",
        },
    },
    {
        AOI13: DivList(),
        AOI14: div("TBD"),
    }
));
