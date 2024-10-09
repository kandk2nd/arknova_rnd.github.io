const srcs = van.state([1,2,3,4])
const {div, button, table, thead, tr, th, tbody, td,img} = van.tags
function test(){
    for(let n=0; n < 5; n++){
        for(let i = (srcs.val.length - 1); 0 < i; i--){
            let rnd =Math.floor((Math.random()) * (i + 1));
            let tmp = srcs.val[i];
            srcs.val[i] = srcs.val[rnd];
            srcs.val[rnd] = tmp;
        }
    }
    srcs.val = [...srcs.val]
}


const Header = () => {
    return div({class:"header"}, "ARK NOVA Randomizer")
}

const RandTable = () => {
    return table({onclick: test,class:"main"},
            tr(
                ["1","2","3","4","5"].map(n => td(n))
            ),
                () => tr(td(img({src:"0.png"})),srcs.val.map(n => td(img({src:n+".png"}))))
    )
}
const Randbutton = button({onclick: test})

van.add(document.body, Header(), RandTable(),Randbutton)