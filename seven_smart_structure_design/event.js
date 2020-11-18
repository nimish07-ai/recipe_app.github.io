class event_list
{
        

        pre_fetch(value,on)
        {
                
                $el("1:entry pre_fetch");
                try {
                        $L(`${value} ${on}`);
                        $().ptr=0;
                        $().abc=$().api[on](value)
                        $s().active=on;                        

                        // prn($().abc,$().abc.search("/?/") )
                        // if( $().abc.search("/?/") == -1 || $().abc.search("summary") != -1 )
                        // {
                        // $().abc+='?apiKey='
                        // $L(`1: ?  not found`);
                        // $s().active=on;
                        // } 
                        // else
                        // {
                        $().abc+='&apiKey='
                        // $L(`1: ? found`);
                        // }
                        // prn($().abc)
                        // window.ptr=0;
                        $().ptr=0
                        this.fetch(on)    
                        
                        $xl(`1:exit pre_fetch`)
                        return true
                } catch (error) {
                        $xl(`2:${error}`)
                        return false
                }
        }

        fetch(on)
        {
                // if(on<$().ptr)
                // {}

                $el("1:entry fetch");
                // prn(`${$().abc}${$().list_of_aut_key[$().ptr]}`)
                fetch(`${$().abc}${$().list_of_aut_key[$().ptr]}`)
                .then(ev=>{
                        prn(ev.url)
                        $s().done=false;
                        let abc=""
                        if(ev.status == 200)
                        {
                                $s().done=true;
                                
                                let to={
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
                                // prn(ev.url)
                                Object.entries(to).forEach(evl=>{

                                        // console.log(evl[0],ev.url.search(`${evl[0]}`))

                                        if(ev.url.search(`${evl[0]}`)!=-1)
                                        {
                                                // prn(evl[1])
                                        //         prn(evl)
                                                // prn('event')
                                        // setTimeout(ev=>__init__.EL[evl[1]](),100)
                                        // prn("done",evl[0]) 
                                                abc=evl[0];
                                    }
                                })
                                // prn('hey')
                                
                                // // $7()$s().active
                                // __init__.EL[to[$s().active]]()
                                // document.dispatchEvent(__init__.evt)
                                // __init__.EL.navigator_fetch_active_desider(on)
                                // $s()[abc]=);
                                // prn(ev.text())
                                let tosend={
                                        "key":abc,
                                        "value":ev.text()
                                }
                                
                                return tosend
                        // prn('hey bitches')
                        let buff=$s()[$s().active]=JSON.parse(`[${ev}]`);
                         

                        }
                        else if (ev.status == 401)
                        {
                                
                                setTimeout(ev=>{
                                       
                                        $().ptr+=1;
                                        __init__.EL.fetch()
                                        },100)
                                

                        }
                        
                        
                })
                .then(ev=>{
                        // if($s().done)
                        // {
                        // $s()[$s().active]=JSON.parse(`[${ev}]`);        
                        
                        // }
                        
                        let to=ev.key
                        ev.value.then(
                                evl=>{
                                        prn('hmmmm')
                                        $s()[to]=JSON.parse(`${evl}`)
                                        __init__.EL[$().o[to]]()
                                        // setTimeout(ev1=>{__init__.EL[$().o[to]]()},50)
                                }
                        )

                        

                })         
                // .catch(ev=>{})
                $xl(`1:exit fetch`)
        }       

        search_box(ev)
        {
                if($().enter_check==true)
                {
                        $().enter_check=false;
                
                }
                
                prn(ev.keyCode)
                if(ev.keyCode >=65 &&  ev.keyCode <=90 ||ev.keyCode >=48 && ev.keyCode <=57 || ev.keyCode ==8|| ev.keyCode ==13)
                {
                        $el("1:entry fetch");
                        // prn(ev.keyCode)
                        if(ev.key !="Enter"&& ev.key !="Backspace")
                        {       
                                // prn(ev.key,$qs('.search_box_inner').value)
                        $L( `1: no enter ${ev.key}`);
                        $s.buffer=$qs('.search_box_inner').value+ev.key
                        prn($s.buffer)
                        //     __init__.EL.pre_fetch($s.buffer,"smart_search")
                                
                        }
                        else
                        if (ev.key =="Enter")
                        {
                        $L( `1:  enter`)
                        prn('eter')
                        $().enter_check=true;
                        $().search_modal.style.display="none";
                        document.location.href+=`#${$s.buffer}`
                        $EE().on_enter();
                      $EE().send_bulk_id()          
                }
                        else
                        if (ev.key =="Backspace")
                        {
                        $L( `1:  backspace`)
                        $s.buffer=$qs('.search_box_inner').value
                        // prn($s.buffer)
                        }
                        
                        
                        if(__init__.out != undefined)
                        {

                        clearTimeout(__init__.out)        
                        // prn('cleared')
                        }
                        else if(__init__.out == undefined)
                        {
                        __init__.EL.search_modal()
                        
                        }
                        
                        __init__.out=setTimeout(__init__.EL.do_it_now,700)
                        $xl(`1:exit fetch`)
                }
        }
        do_it_now()
        {
                // prn("dit")
                if($s.buffer!="")
                {
                __init__.EL.pre_fetch($s.buffer,"smart_search")
                __init__.EL.search_modal()
                        
                }
        }

        navigator_fetch_active_desider(on)
        {
                let to={
                        "search":null,
                        "similar":null,
                        "smart_search":"search_modal",
                        "nutrition_widgit":null,
                        "ingrident_widgit":null,
                        "summary":null,
                        "cuisine":null,
                        "random":"trending_setup"
                }
                prn('hey')
                // // $7()$s().active
                // __init__.EL[to[$s().active]]()
                prn(on.url)
                
        }

        
        search_modal()
        {
        try {
                // prn($s().smart_search[0])
                if($().enter_check == false)
                {

                
                prn("search")
                $().search_modal.style.display="grid";
                $().search_modal.style.top=`${$().search_box_inner.parentElement.clientHeight}px`
                $().search_modal.style.width=`${$().search_box_inner.parentElement.clientWidth}px`
                $().search_modal.style.left= `${$().search_box_inner.offsetLeft}px`
                // $().search_modal.style.height="700px"
                let buffer=""
                $().search_path.style.display="none"
                $().cross_path.style.display="block";
                $().cross.style.display="block";
                
                // prn("hey",)
                try {
                        prn(Array.isArray($s().autocomplete[0]))
                        $s().autocomplete.forEach(ev=>{
                                prn(ev.title)
                                buffer+=` 
                                <div class="search_inner" onclick="id_setter('naad')" id="${ev.id}" >
                                <img src="https://spoonacular.com/recipeImages/${ev.id}-556x370.jpg" class="image_search_inner">
                                    <p class="dishes_name">${ev.title}</p>
                                </div>
                                `
                        })
               
                } catch (error) 
                        {
                                prn( error)
                        buffer+=`<div class="search_inner"  >
                        <img src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" class="image_search_inner">
                                <p> no recipee found .....</p>
                        </div>`
                        $().search_modal.innerHTML=buffer;
                        // prn(buffer)
                        return false
                        
                }
                $().search_modal.innerHTML=buffer;
                $EE().callback_setup()
                // prn(buffer)
                return true
                }
                }
         catch (error)
                 {
                        // $().search_modal.style.display="none";
                        prn(error)
                        return false

                }
        }
        
        
        on_enter()
        {
                
                $().trending.style.display="none";
                $().search_modal.style.display="none";
                $().search_for.style.display="grid";//
                $().c.className+=" after_search" 
                let abc=document.location.hash.split('#');
                $().search_result_para.innerText=`Search result for ${abc[abc.length-1]}...`
                // $EE().send_bulk_id()
        }
        send_bulk_id()
        {
                try
                {let buffer=""
                let ptr=$s().smart_search[0].length;
                let i=0;
                $s().smart_search[0].forEach(ev=>{
                        buffer+=`${ev.id}`       
                        if(i != ptr-1)
                        {
                                buffer+=","
                                i=i+1;
                        }        
                })
                         prn(buffer)
                $EE().pre_fetch(buffer,"informationBulk")
                prn('sent bi')
                }
                catch(error)
                {
                        prn(error)
                }
        }
        after_enter()
        {
                let alpha=$qsA(".dish")
                let ptr=0;
                $s().smart_search[0].forEach(ev=>{
                                let abc=`<div class="dish"><div class="image">
                                
                                </div><div class="text before">
                                <div class="text-line"><p>${ev.title}</p></div>
                                <div class="text-line"></div>
                                <div class="text-line"></div>
                                <div class="text-line"></div>
                                <div class="text-line"></div>
                        </div></div>
                        ` 
                        alpha[ptr++].innerHTML=abc;                      
                })
                
                
        }
        back_to_home()
                {
                        $().trending.style.display="grid";
                        $().search_for.style.display="none";//grid
                        $().c.className="c"
                        document.location.hash=""
                        

        }

        informationBulk(ev)
        {
                
                prn($s().informationBulk)
        }
        trending_setup()
        {
                if(__init__.debug==false)
               {
                let ptr=0;
                setTimeout(ev=>{
                        //  prn($s().random)
                $s().random.forEach(ev=>{ev.recipes.forEach(ev=>{

                        let abc=`<div class="image" >
                        <img src="${ev.image}" 
                        style="width: inherit;
                        height: inherit;
                        border-radius:inherit;"
                         >
                
                    </div>
                    <div class="_text" id="${ev.id}">
                    <p class="dishes_name">${ev.title}
                        </p>
                    </div>`;
                        prn(abc)
                        $().inner_trending[ptr].display="grid";
                        
                        $().inner_trending[ptr].innerHTML=abc;
                        // if (ptr<4)
                        // {

                        //         let doit=false;

                        //         if(doit)
                        //         {
                                ptr+=1;
                        //         }
                        // }
                })
             })
                },1000)
               
        }

        }

        recipee_display_modal()
        {
                
                $().recipee_modal.style.top=`${$().c.offsetTop}px`
                $().recipee_modal.style.width=`${$().c.offsetWidth}px`
                $().recipee_modal.style.left= `${$().c.offsetLeft}px`
                $().recipee_modal.style.height=`${$().c.offsetHeight}px`
                $().recipee_modal.parentElement.style.display="block"
                // $().c.style.display="none";
                $().search_modal.style.display="none";
                // let abc=["check_bulk_available",["pre_fetch","id","information"]]
                
        }

        check_bulk_available(id)
        {

                return false
        }
        back_to_home_recipee()
        {
                // $().c.style.display="grid";
        }
        
        cross(ev)
        {
                $().search_box_inner.value="";
                $().search_modal.style.display="none";
                $().search_path.style.display="block"
                $().cross_path.style.display="none";
                
        }
        mouse_cross()
        {
                $().cross.onmouseenter=ev=>{$().cross.style.stroke="black";}
                $().cross.onmouseleave=ev=>{$().cross.style.stroke="#189ca2b8";}
        }
       
        mode_setter()
        {
                let mode_function={
                        1:"",
                        2:"on_enter",
                        3:"recipee_display_modal"
                }

                if(document.location.hash.length==0)
                {
                        $().mode=1;
                        return true;
                }
                else if(document.location.hash.length>0)
                {
                        let abc=document.location.hash.split('#')
                        let gfh=abc.length;
                        if(abc[gfh-1].search('id=') != -1)
                        {
                                $().mode=3;
                                $EE()[mode_function[3]]()
                                return true;
                        }
                        else
                        {
                                $().mode=2;
                                $EE()[mode_function[2]]()
                                return true;
                        }
                       
                }

        }
        id_setter(ev)
        {
                // prn('hey',arguments)
        //        prn(ev.path[1])
        document.location.hash+=`#id=${ev.path[1].id}` 
        $EE().mode_setter()
        }
        callback_setup()
        {
                $qsA(".search_inner").forEach(ev=>{
                        ev.addEventListener("click",$EE().id_setter)
                })
        }
}


let event_tester=
{
        // "function_name":{
        //         "input":"expected_output"
        //                 or
        //                ["output","soem condition of variable":expected]
        //                pre_1:ev=>{}  
        // }
}



export default event_list;