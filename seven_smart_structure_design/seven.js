import brain_v1 from "./brain.js";
import api_navigate from './base.js';
import event_list from './event.js';
import logger from './logger.js';

window.prn=console.log;
window.$qs=(ms)=>document.querySelector(ms)
window.$qsA=(ms)=>document.querySelectorAll(ms)
class Seven extends brain_v1
{
    constructor()
    {
        super();
    // console.log(this)
    }
    
}

window.$7=()=>__init__.Seven;
window.$=()=>__init__.ASV();
window.$f=()=>__init__.AS().func;

window.$L=(msg)=>__init__.log.baby_step_adder(msg);
window.$lj=(msg)=>__init__.log.log_pbj;

window.$el=(msg)=>{
    __init__.log.entry();
    return __init__.log.baby_step_adder(msg);}
window.$xl=(msg)=>{
    __init__.log.baby_step_adder(msg);
    return __init__.log.exit();}
window.$s=()=>__init__.search_obj;
// window.eve=()=>__init__.EL
window.$c=()=>__init__.cache;
window.$EE=()=>__init__.EL;
window.id_setter=()=>__init__.EL.id_setter()

window.__init__={

    debug:false,
 
    //creation of obj instance for all class
    Seven:new Seven(),
    EL:new event_list(),
    log:new logger(),
    evt : new CustomEvent("MyEventType", {detail: "Any Object Here"}),
    
    // AS:()=>null, //Active_storag
    AS:()=>__init__.storage[__init__.Seven.page_name], //Active_storag
     //Active_storag
    ASV:()=>{
           return __init__.AS().variable
            },//Active_storag_variable
   
    
    
     storage:{
        // ["func name","event","var name"]
        '/main':{
            func:[
                "mode_setter",
                ["search_box","keydown","search_box_inner"],
                ["navigator_fetch_active_desider","MyEventType","document"],
                ["cross","click","cross"],
                "mouse_cross",
                ["back_to_home","click","div_back_to_trend"]
            ] // function which are associated to the given page  
             ,
            onsetup:[
                
            ],
            variable:{
                // name_variable:getter function
                list_of_aut_key:[
                    "83dec76d670e4cdea383e52e674f4822",
                    "b0aba37db80d4abf8432df402c84c6be"
                                ],
                mode:null,
                api:new api_navigate(),
                search_box_inner:$qs(".search_box_inner"),
                search_modal:$qs(".search_modal"),
                document:document,
                search_for:$qs(".searched_for"),
                trending:$qs('.trending'),
                search_result_para:$qs(".search_result_para"),
                div_back_to_trend:$qs(".div_back_to_trend"),
                inner_trending:$qsA(".dish_trend"),
                c:$qs(".c "),
                recipee_modal:$qs(".recipee_modal_up"),
                cross:$qs(".cross"),
                cross_path:$qs(".crosss_path"),
                search_path:$qs(".search_path"),
                enter_check:false,
                o:{
                    "search":null,
                    "similar":null,
                    "autocomplete":"search_modal",
                    "nutritionWidget":null,
                    "ingredientWidget":null,
                    "summary":null,
                    "cuisine":null,
                    "random":"trending_setup",
                    "informationBulk":"informationBulk"
            }
               }
        },
        
    },
    // reuse:{},

    search_obj:{
        buffer:""
    },  

    cache:{}
}









//  vegeterian non-veg flexitarian
//  Indian   German
//  Chinese  Italian 
//  American  Mexican



let abc=
{
    first:null,
    second:null,
    third:null,
    fourth:null,
    previous:{
        id:{
            cuisine:null,
            ingridents:null,
            type:null
        }
    }
}