function test(){
    let srcs = ["1.png","2.png","3.png","4.png"]
    for(let n=0; n < 5; n++){
        for(let i = (srcs.length - 1); 0 < i; i--){
            let rnd =Math.floor((Math.random()) * (i + 1));
            let tmp = srcs[i];
            srcs[i] = srcs[rnd];
            srcs[rnd] = tmp;
        }
    }
    const img1 = document.getElementById("1");
    img1.src = "0.png";
    const img2 = document.getElementById("2");
    img2.src = srcs[0];
    const img3 = document.getElementById("3");
    img3.src = srcs[1];
    const img4 = document.getElementById("4");
    img4.src = srcs[2];
    const img5 = document.getElementById("5");
    img5.src = srcs[3];

}

const {button, table, thead, tr, th, tbody, td} = van.tags

const RandTable = () => {
    return table({rule:"none", class:"dataframe"},
        thead(
            tr({style:"text-align: right;"}, 
                ["5","4","3","2","1"].map(n => th(n))
            )
        )
    )
}

van.add(document.body, RandTable())