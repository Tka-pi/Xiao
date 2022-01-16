window.addEventListener('beforeunload', function(e) {
e.returnValue = '聖遺物がリセットされます。よろしいですか？';
}, false);


let ref=7;


function add1(){
    let relic = document.getElementById("relic1");
    let row_num = relic.rows.length;
    let newrow  = relic.insertRow(row_num);
    for(let j=0; j<=ref; j++){
        let cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add2(){
    let relic = document.getElementById("relic2");
    let row_num = relic.rows.length;
    let newrow  = relic.insertRow(row_num);
    for(let j=0; j<=ref; j++){
        let cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add3(){
    let relic = document.getElementById("relic3");
    let row_num = relic.rows.length;
    let newrow  = relic.insertRow(row_num);
    for(let j=0; j<=ref; j++){
        let cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add4(){
    let relic = document.getElementById("relic4");
    let row_num = relic.rows.length;
    let newrow  = relic.insertRow(row_num);
    for(let j=0; j<=(ref+1); j++){
        let cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add5(){
    let relic = document.getElementById("relic5");
    let row_num = relic.rows.length;
    let newrow  = relic.insertRow(row_num);
    for(let j=0; j<=ref; j++){
        let cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add6(){
    let relic = document.getElementById("weapon");
    let row_num = relic.rows.length;
    let newrow  = relic.insertRow(row_num);
    for(let j=0; j<=3; j++){
        let cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
    let r=row_num;
    relic.rows[row_num].cells[0].innerHTML='<input type="radio" name="compare1" id="compare1" value="'+r+'" />';
    relic.rows[row_num].cells[1].innerHTML='<input type="radio" name="compare2" id="compare2" value="'+r+'" />';
}



function del1(){
    let relic = document.getElementById("relic1");
    let row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del2(){
    let relic = document.getElementById("relic2");
    let row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del3(){
    let relic = document.getElementById("relic3");
    let row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del4(){
    let relic = document.getElementById("relic4");
    let row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del5(){
    let relic = document.getElementById("relic5");
    let row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del6(){
    let relic = document.getElementById("weapon");
    let row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}



























function start(){
let alert_echo=0;


let relic1_matrix = [];
let allrows1 = relic1.querySelectorAll('tr');
allrows1.forEach(tr=>{
let allcells1 = tr.querySelectorAll('td');
let all =[];
allcells1.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic1_matrix.push(all);
})


let relic2_matrix = [];
let allrows2 = relic2.querySelectorAll('tr');
allrows2.forEach(tr=>{
let allcells2 = tr.querySelectorAll('td');
let all =[];
allcells2.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic2_matrix.push(all);
})


let relic3_matrix = [];
let allrows3 = relic3.querySelectorAll('tr');
allrows3.forEach(tr=>{
let allcells3 = tr.querySelectorAll('td');
let all =[];
allcells3.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic3_matrix.push(all);
})


let relic4_matrix = [];
let allrows4 = relic4.querySelectorAll('tr');
allrows4.forEach(tr=>{
let allcells4 = tr.querySelectorAll('td');
let all =[];
allcells4.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic4_matrix.push(all);
})


let relic5_matrix = [];
let allrows5 = relic5.querySelectorAll('tr');
allrows5.forEach(tr=>{
let allcells5 = tr.querySelectorAll('td');
let all =[];
allcells5.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic5_matrix.push(all);
})

let artifact = [relic1_matrix,relic2_matrix,relic3_matrix,relic4_matrix,relic5_matrix];

let weapon_matrix = [];
let allrowsW = weapon.querySelectorAll('tr');
allrowsW.forEach(tr=>{
let allcellsW = tr.querySelectorAll('td');
let all =[];
allcellsW.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
weapon_matrix.push(all);
})


let C1=relic1_matrix.length;
let C2=relic2_matrix.length;
let C3=relic3_matrix.length;
let C4=relic4_matrix.length;
let C5=relic5_matrix.length;
let Cx=C1*C2*C3*C4*C5;



//基本設定
let stella=Number($("#stella").val());
let talent1=Number($("#talent1").val());
let talent2=Number($("#talent2").val());
let talent3=Number($("#talent3").val());
let p=Number($("#p").val());
let q=Number($("#q").val());
let bs=Number($("#bs").val());

let base=[stella,talent1,talent2,talent3,p,q,bs];
console.log("基本設定",base);


//不確定要素
let n=Number($("#n").val());
let m=Number($("#m").val());
let u_atk=Number($("#u_atk").val());
let u_atkr=Number($("#u_atkr").val());
let u_crit=Number($("#u_crit").val());
let u_critd=Number($("#u_critd").val());
let u_anemo=Number($("#u_anemo").val())*0.01;
let u_jump=Number($("#u_jump").val())*0.01;
let u_skill=Number($("#u_skill").val())*0.01;
let u_give=Number($("#u_give").val())*0.01;


let u=[n,m,u_atk,u_atkr,u_crit,u_critd,u_anemo,u_jump,u_skill,u_give];
console.log("不確定要素",u);


//武器要素
let N=Number($("#N").val());
let T=Number($("#T").val())+0.3;
let alpha=Number($("#alpha").val());
let beta=Number($("#beta").val());
let gamma=Number($("#gamma").val());
let N_kokg=Number($("#N_kokg").val());
let Liyue=Number($("#Liyue").val());
let constraint=Number($("#constraint").val());
if(N_kokg>3){N_kokg=3;}

let uw=[N,T,alpha,beta,gamma,N_kokg,Liyue,constraint];
console.log("武器要素",uw)


//天賦%
let jump_talent=[349,375,404,433];
let S_talent=[404,430,455,480,506,537];
let B_jump=[86,1,90.7,95.2,99.8,104.3,108.9,113.4];

let B=jump_talent[talent1-8];
let S=S_talent[talent2-8];
let burst_buff=B_jump[talent3-8]*0.01;


function eval(virtual_atkr,virtual_crit,virtual_critd,virtual_hpr){
    let rf=weapon_refine-1;


    //護摩の杖
    let hpr_goma=flag_goma*(20+5*rf);
    let total_hp=12736*(1+(hpr+virtual_hpr+hpr_goma)*0.01)+hp;
    let goma_rate_low=(0.8+rf*0.2)*0.01;
    let goma_rate_high=(1+rf*0.2)*0.01;
    let goma_rate=goma_rate_high*alpha+goma_rate_low;
    let atk_goma=flag_goma*total_hp*goma_rate;
    let critd_goma=66.2*flag_goma;


    //わはくえんと破天

    let N_in=Math.round(N);
    if(N_in<0){N_in=0;}
    let T_in=T;

    if(flag_wahak==1){
        if(N>7){N_in=7;}
        if(T>15/(7-N_in)){T_in=15/(7-N_in);}
    }
    if(flag_haten==1){
        if(N>5){N_in=5;}
        if(T>15/(5-N_in)){T_in=15/(5-N_in);}
    }


    //わはくえん
    let wahak_sum=0;
    for(let i=N_in;i<=6;i++){
        wahak_sum+=i*(3.2+0.7*rf)*T_in;
    }
    wahak_sum+=7*(3.2+0.7*rf)*(15-(7-N_in)*T_in);
    let atkr_wahak=wahak_sum/15*flag_wahak;
    let give_wahak=flag_wahak*(0.12+0.03*rf)*((15-(7-N_in)*T_in)/15);
    let crit_wahak=22.1*flag_wahak;


    //破天
    let atkr_haten=49.6;
    let haten_sum=0;
    for(let i=N_in;i<=4;i++){
        haten_sum+=i*(4+rf)*T;
    }
    haten_sum+=5*(4+rf)*(15-(5-N_in)*T_in);

    atkr_haten+=haten_sum/15*(1+beta);
    atkr_haten*=flag_haten;

    //息災
    let anemo_sok=flag_sok*(0.12+0.03*rf);
    let atkr_sok=flag_sok*((3.2+0.8*rf)*6+16.5);
    

    //天空、草、西風、試作
    let crit_ten=flag_ten*(8+2*rf);
    let charge_w=36.8*flag_ten+(55.1+30+5*rf)*flag_kusa+30.6*flag_sei+45.9*flag_hosi;

    let total_charge=charge+charge_w;
    let atkr_kusa=(total_charge-100)*(0.28+7*rf)*flag_kusa;
    if(atkr_kusa>(80+10*rf)){
        atkr_kusa=80+10*rf;
    }


    //黒岩の突槍
    let atkr_kokg=(12+3*rf)*N_kokg*flag_kokg;
    let critd_kokg=55.1*flag_kokg;
    

    //死闘
    let crit_sitou=36.8*flag_sitou;
    let atkr_sitou=flag_sitou*(gamma*(16+4*rf)+(1-gamma)*(24+6*rf));


    //洗顔
    let atkr_sengan=flag_sengan*(27.6+Liyue*(7+rf));
    let crit_sengan=flag_sengan*Liyue*(3+rf);


    //喜多院
    let skill_kitain=flag_kitain*(0.06+rf*0.015);


    
    




    let total_atk=(349+atkw)*(1+(atkr+virtual_atkr+u_atkr+atkr_wahak+atkr_sok+atkr_haten+atkr_kusa+atkr_kokg+atkr_sitou+atkr_sengan)*0.01)+atk+u_atk+atk_goma;

    let total_crit=5+19.2+crit+virtual_crit+u_crit+crit_wahak+crit_ten+crit_sitou+crit_sengan;
    if(total_crit>=100){
        total_crit=100;
    }
    let critical=1+total_crit*(50+critd+virtual_critd+u_critd+critd_goma+critd_kokg)*0.0001;

    let total_anemo=anemo+u_anemo+u_give+give_wahak+0.15+anemo_sok;

    let buff_jump=1+total_anemo+burst_buff;
    let buff_skill=1+total_anemo+skill_kitain;

    if(stella==6){
        buff_skill+=0.45;
    }else{
        buff_skill+=bs;
    }

    let model=p*n*S*buff_skill+q*m*B*buff_jump;

    if(total_charge<(constraint-100)){
        return 0;
    }else{
        return model*total_atk*critical;
    }

}






var alert_label=0;
let alert_nan=0;
let alert_minus=0;


let weapon_el = document.getElementById("weapon");
let weapon_num = weapon_el.rows.length;
let w_index=[];
let w_max=[];
let w_used=[];
let w_info=[];

for (let w=0;w<weapon_num;w++){

    //武器情報を反映
    var atkw=0;
    var flag_wahak=0;
    var flag_goma=0;
    var flag_sok=0;
    var flag_haten=0;
    var flag_ten=0;
    var flag_kusa=0;
    var flag_kokg=0;
    var flag_sitou=0;
    var flag_sengan=0;
    var flag_sei=0;
    var flag_kitain=0;
    var flag_hosi=0;
    var weapon_series=weapon_matrix[w][2];
    var weapon_refine=weapon_matrix[w][3];



    if(weapon_series==12){
        atkw=674;
        flag_wahak=1;
    }
    if(weapon_series==11){
        atkw=608;
        flag_goma=1;
    }
    if(weapon_series==10){
        atkw=741;
        flag_sok=1;
    }
    if(weapon_series==9){
        atkw=608;
        flag_haten=1;
    }
    if(weapon_series==8){
        atkw=674;
        flag_ten=1;
    }
    if(weapon_series==7){
        atkw=608;
        flag_kusa=1;
    }
    if(weapon_series==6){
        atkw=510;
        flag_kokg=1;
    }
    if(weapon_series==5){
        atkw=454;
        flag_sitou=1;
    }
    if(weapon_series==4){
        atkw=565;
        flag_sengan=1;
    }
    if(weapon_series==3){
        atkw=565;
        flag_sei=1;
    }
    if(weapon_series==2){
        atkw=565;
        flag_kitain=1;
    }
    if(weapon_series==1){
        atkw=510;
        flag_hosi=1;
    }

    w_info[w]=[atkw,flag_wahak,flag_goma,flag_sok,flag_haten,flag_ten,flag_kusa,flag_kokg,flag_sitou,flag_sengan,flag_sei,flag_kitain,flag_hosi];

    
    

    let EV_index=[];
    let EV_vector=[];
    let used_matrix=[];
    let index=0;

    for (let r1=0 ; r1<C1 ; r1++){
        for (let r2=0 ; r2<C2 ; r2++){
            for (let r3=0 ; r3<C3 ; r3++){
                for (let r4=0 ; r4<C4 ; r4++){
                    for (let r5=0 ; r5<C5 ; r5++){

                        var series= relic1_matrix[r1][0]*relic2_matrix[r2][0]*relic3_matrix[r3][0]*relic4_matrix[r4][0]*relic5_matrix[r5][0];
                        var hp=     relic1_matrix[r1][1]+relic2_matrix[r2][1]+relic3_matrix[r3][1]+relic4_matrix[r4][1]+relic5_matrix[r5][1];
                        var hpr=    relic1_matrix[r1][2]+relic2_matrix[r2][2]+relic3_matrix[r3][2]+relic4_matrix[r4][2]+relic5_matrix[r5][2];
                        var atk=    relic1_matrix[r1][3]+relic2_matrix[r2][3]+relic3_matrix[r3][3]+relic4_matrix[r4][3]+relic5_matrix[r5][3];
                        var atkr=   relic1_matrix[r1][4]+relic2_matrix[r2][4]+relic3_matrix[r3][4]+relic4_matrix[r4][4]+relic5_matrix[r5][4];
                        var crit=   relic1_matrix[r1][5]+relic2_matrix[r2][5]+relic3_matrix[r3][5]+relic4_matrix[r4][5]+relic5_matrix[r5][5];
                        var critd=  relic1_matrix[r1][6]+relic2_matrix[r2][6]+relic3_matrix[r3][6]+relic4_matrix[r4][6]+relic5_matrix[r5][6];
                        var charge= relic1_matrix[r1][7]+relic2_matrix[r2][7]+relic3_matrix[r3][7]+relic4_matrix[r4][7]+relic5_matrix[r5][7];
                        var anemo=  relic4_matrix[r4][8]*0.01;

                        if(series%(5**2)==0){
                            anemo+=0.15;
                        }
                        if(series%(3**2)==0){
                            atkr+=18;
                        }
                        if(series%(2**2)==0){
                            atkr+=18;
                        }

                        var ev=eval(0,0,0,0);

                        used_matrix[index]=[hp,hpr,atk,atkr,crit,critd,charge,anemo];
                        EV_index[index] = [r1,r2,r3,r4,r5];
                        EV_vector[index] = ev;
                        if(isNaN(ev)){
                            alert_nan=1;
                            alert_label=1;
                        }
                        if(ev<0){
                            alert_minus=1;
                            alert_label=1;
                        }
                        index++;
                    }
                }
            }
        }
    }

    
if(alert_echo==0){
    if(alert_minus==1){
        alert("期待値がマイナスです");
        alert_echo=1;
    }if(alert_nan==1){
        alert("数値を入力してください");
        alert_echo=1;
    }
}


    let max_index=0;
    let max=-1;
    for(let j=0 ; j<Cx ; j++){
        if(max<EV_vector[j]){
            max=EV_vector[j];
            max_index=j;
        }
    }
    if (max==0&&alert_echo==0){
        alert("拘束条件を満たす組がありません");
        alert_echo=1;
    }

    //最大値を与える聖遺物の
    //used:詳細ステータスベクトル、index:組情報ベクトル、max:最大火力そのもの。
    w_used[w]=used_matrix[max_index];
    w_index[w]=EV_index[max_index];
    w_max[w]=max;
    //記述簡略化のため使った武器の情報を保存。
    

    console.log("火力期待値",EV_vector);
}




//武器ループから抜けた後
let w1=Number($('input[name="compare1"]:checked').val());
let w2=Number($('input[name="compare2"]:checked').val());

if(isNaN(w1)){
    w1=0;
}
if(isNaN(w2)){
    w2=0;
}

let w_start=w1;
let w_end=w2;

if(w_max[w1]>=w_max[w2]){
    w_start=w2;
    w_end=w1;
}


//弱いほうの武器情報を反映
atkw=           w_info[w_start][0];
flag_wahak=     w_info[w_start][1];
flag_goma=      w_info[w_start][2];
flag_sok=       w_info[w_start][3];
flag_haten=     w_info[w_start][4];
flag_ten=       w_info[w_start][5];
flag_kusa=      w_info[w_start][6];
flag_kokg=      w_info[w_start][7];
flag_sitou=     w_info[w_start][8];
flag_sengan=    w_info[w_start][9];
flag_sei=       w_info[w_start][10];
flag_kitain=    w_info[w_start][11];
flag_hosi=      w_info[w_start][12];
weapon_series=weapon_matrix[w_start][2];
weapon_refine=weapon_matrix[w_start][3];

console.log(w_info[w_start]);

//その武器の最適聖遺物情報を反映
hp=        w_used[w_start][0];
hpr=       w_used[w_start][1];
atk=        w_used[w_start][2];
atkr=       w_used[w_start][3];
crit=       w_used[w_start][4];
critd=      w_used[w_start][5];
charge=     w_used[w_start][6];
anemo=      w_used[w_start][7];


let differ=[];
let limit=[0,0,0,0];

for (let i=0;i<4;i++){
    let x=0;
    let dx=1;
    let loop=0;
    
    while(dx>0.001){
        loop++;
        if(loop>1000){
            limit[i]=1;
            break;
        }

        let left=[eval(x,0,0,0),eval(0,x,0,0),eval(0,0,x,0),eval(0,0,0,x)];
        let right=[eval((x+dx),0,0,0),eval(0,(x+dx),0,0),eval(0,0,(x+dx),0),eval(0,0,0,(x+dx))];
        let a=left[i]-w_max[w_end];
        let b=right[i]-w_max[w_end];

        if(a*b>0){
            x+=dx*0.9;
        }else{
            dx*=0.5;
        }
    }

    differ[i]=x;
}
console.log(differ);


function relic_name(name){
    if(name==5){
        return"翠緑";
    }
    if(name==3){
        return "剣闘士";
    }
    if(name==2){
        return"しめ縄";
    }
    if(name==1){
        return "その他";
    }
}

function weapon_name(wname){
    if(wname==12){
        return "和璞鳶";
    }
    if(wname==11){
        return "護摩の杖";
    }
    if(wname==10){
        return "息災";
    }
    if(wname==9){
        return "破天の槍";
    }
    if(wname==8){
        return "天空の脊";
    }
    if(wname==7){
        return "草薙の稲光";
    }
    if(wname==6){
        return "黒岩の突槍";
    }
    if(wname==5){
        return "死闘の槍";
    }
    if(wname==4){
        return "千岩長槍";
    }
    if(wname==3){
        return "西風長槍";
    }
    if(wname==2){
        return "喜多院十文字槍";
    }
    if(wname==1){
        return "星鎌・試作";
    }
}


let power = document.getElementById('power');
let power_shift = document.getElementById('power_shift');
let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');

if(alert_label==0){
    //火力表示
    for (let y=0 ;y<weapon_num; y++){
        if(power.rows.length<weapon_num){
            let newrow  = power.insertRow(y);
            for(let i=0;i<4;i++){
                let newcell0 = newrow.insertCell(i);
            }
        }
        
        if(y==w1&&y==w2){
            power.rows[y].cells[0].innerHTML="A,B";
        }else{
            if(y==w1){
                power.rows[y].cells[0].innerHTML="A";
            }else if(y==w2){
                power.rows[y].cells[0].innerHTML="B";
            }else{
                power.rows[y].cells[0].innerHTML="";
            }
        }

        
        power.rows[y].cells[1].innerHTML=weapon_name(weapon_matrix[y][2]);
        power.rows[y].cells[2].innerHTML=weapon_matrix[y][3];
        power.rows[y].cells[3].innerHTML=(w_max[y]/5000).toFixed();
    }

    //換算火力表示
    power_shift.rows[0].cells[1].innerHTML=differ[0].toFixed(2);
    power_shift.rows[0].cells[2].innerHTML=differ[1].toFixed(2);
    power_shift.rows[0].cells[3].innerHTML=differ[2].toFixed(2);
    power_shift.rows[0].cells[4].innerHTML=differ[3].toFixed();

    if(w1==w2){
        for(let i=0;i<4;i++){
            power_shift.rows[0].cells[i+1].innerHTML="なし";
        }
    }

    for (let i=0;i<4;i++){
        if(limit[i]==1){
            power_shift.rows[0].cells[i+1].innerHTML="×";
        }
    }



    //結果表示
    //聖遺物のシリーズ名を表示
    for (let i=0;i<5;i++){
        result1.rows[i].cells[1].innerHTML=relic_name(artifact[i][(w_index[w1][i])][0]);

        for(let s=2;s<=(ref+1);s++){
            result1.rows[i].cells[s].innerHTML=artifact[i][(w_index[w1][i])][s-1];
        }
    }
    //詳細を表示
    if(relic4_matrix[w_index[w1][3]][ref+1]>1){
        result1.rows[3].cells[0].innerHTML="杯(風)";
    }else{
        result1.rows[3].cells[0].innerHTML="杯";
    }

    //結果2同様
    for (let i=0;i<5;i++){
        result2.rows[i].cells[1].innerHTML=relic_name(artifact[i][(w_index[w2][i])][0]);

        for(let s=2;s<=(ref+1);s++){
            result2.rows[i].cells[s].innerHTML=artifact[i][(w_index[w2][i])][s-1];
        }
    }

    if(relic4_matrix[w_index[w2][3]][ref+1]>1){
        result2.rows[3].cells[0].innerHTML="杯(風)";
    }else{
        result2.rows[3].cells[0].innerHTML="杯";
    }
}
}