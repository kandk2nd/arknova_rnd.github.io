const { div } = van.tags;
const base_land = van.state(0)
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
                tmp.push(div({ class: "hexagon", style: `background-color:#0000ff;`, onclick: () => base_land.val = 0 }, i++));
            } else if (items[i] == 1) {
                if (base_land.val == 0) {
                    tmp.push(div({ class: "hexagon", style: `background-color:#ff0000;`, onclick: () => base_land.val = 1 }, i++));
                }
                else if (base_land.val == 1) {
                    tmp.push(div({ class: "hexagon", style: `background-color:#0000ff;`, onclick: () => base_land.val = 0 }, i++));
                }
                else if (base_land.val == 2 || base_land.val == 7) {
                    tmp.push(div({ class: "hexagon", style: `background-color:#00ff00;`, onclick: () => base_land.val = 0 }, i++));
                }
                else if (base_land.val == 6 || base_land.val == 3) {
                    tmp.push(div({ class: "hexagon", style: `background-color:#00ff00;`, onclick: () => base_land.val = 0 }, i++));
                }
                else if (base_land.val == 4 || base_land.val == 5) {
                    tmp.push(div({ class: "hexagon", style: `background-color:#00ff00;`, onclick: () => base_land.val = 0 }, i++));
                }
            } else if (items[i] == 2) {
                tmp.push(div({ class: "hexagon", style: `background-color:#00ff00;`, onclick: () => base_land.val = 2 }, i++));
            } else if (items[i] == 3) {
                tmp.push(div({ class: "hexagon", style: `background-color:#ffff00;`, onclick: () => base_land.val = 3 }, i++));
            } else if (items[i] == 4) {
                tmp.push(div({ class: "hexagon", style: `background-color:#00ffff;`, onclick: () => base_land.val = 4 }, i++));
            } else if (items[i] == 5) {
                tmp.push(div({ class: "hexagon", style: `background-color:#ff00ff;`, onclick: () => base_land.val = 5 }, i++));
            } else if (items[i] == 6) {
                tmp.push(div({ class: "hexagon", style: `background-color:#ffffff;`, onclick: () => base_land.val = 6 }, i++));
            } else if (items[i] == 7) {
                tmp.push(div({ class: "hexagon", style: `background-color:#222222;`, onclick: () => base_land.val = 7 }, i++));
            }
        } while (i < items.length && i % MAX_ROW != 0);
        divs.push(div({ class: "hexagon-row" }, ...tmp));
    }
    return div(...divs); // 配列を展開してdiv要素を並べる
};

van.add(document.body, DivList());
