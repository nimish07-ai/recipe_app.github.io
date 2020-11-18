class brain_v1
{
    page_name=null
    set_page_name()
    {
        this.page_name=document.location.pathname;
        let buff=""
    
        
        // prn(buff)
        
        for(let i=0;i<this.page_name.length;i++)
        {
            if(this.page_name[i] ==".")
            {
                break
            }
            else
            {
                buff+=this.page_name[i]
            }
        }

        this.page_name=buff;

        
        
        return true
    }

    config_accords_page()
    {   
        prn('hey')
        $f().forEach(
            ev=>{

                //  prn(ev)
                if(Array.isArray(ev))
                {    
                    if(ev.length == 3)
                    {
                        // ["search_box","keypress","search_box_inner"]
                    $()[ev[2]].addEventListener(ev[1],__init__.EL[ev[0]])
                
                        // prn($()[ev[2]])
                    }
                    else 
                    {
                        //skipped
                        prn(ev,'hey')
                    }
                }
                else if(typeof(ev)=="string")
                {
                    __init__.EL[ev]()
                }
                
            }
            

        )

    }

    basic_v1()
    {
        this.set_page_name()
        setTimeout(ev=>{
            $7().config_accords_page();
        },1000)        
    }


    
    tester(class_tester)
    {
        let result={}
        Object.entries(class_tester)
        .forEach(([key, value]) => {            //function_name ,{}
                    let inner_obj={}
        
                    Object.entries(value) 
                    .forEach(([key_2, value_2]) =>      //input ,[]|| value
                            {
                                inner_obj[key_2]=NaN;

                                if(key_2.search('pr_e_') != -1)//for prev
                                   {
                                       value_2();
                                   } 



                               if(Array.isArray(value_2))
                               {
                                   let i=0;
                                   let returned_value=this[key](key_2);  //function calling
                                   
                                   inner_obj[key_2]=
                                                    returned_value == value_2[i++]  // adding value in check_obj
                                                    // not needed in not array
                                    
                                    while(i<value_2.length)
                                        { 
                                            try {
                                            
                                                inner_obj[value_2[i+1]]=((ev_1=value_2[i++],ev_2=value_2[i++])=>
                                                                {
                                                                    if(ev_1()==ev_2)
                                                                    {
                                                                        return true
                                                                    }
                                                                    else
                                                                    {
                                                                        return [false,ev_1,ev_2]
                                                                    }
                                                                })()
                                            } catch (error) {
                                                this.error.push=[error,value_2[i-2],value_2[i-1]]                                                
                                            }
                                                                                               
                                        }
                               

                                        //checking
                                        let bfr=inner_obj
                                        inner_obj={}
                                        inner_obj.check=bfr;
                           
                                        let tr=true
                                   
                                        inner_obj["result"]=(()=>{

                                            Object.values(bfr).forEach(ev=>{
                                                if(!Array.isArray(ev)==true)
                                                {
                                                    if (ev==false)
                                                    {
                                                        tr=false;
                                                    }   
                                                }
                                                else
                                                {

                                                    if(tr == true)
                                                    {
                                                        tr=false
                                                    }

                                                }

                                            })
                                            return tr
                                        })()    
                               }
                               else
                               {
                                let returned_value=this[key](key_2);  //function calling
                                if(returned_value == value_2)
                                {
                                    inner_obj[key_2]=true;
                                }
                                else
                                {
                                    inner_obj[key_2]=[false,returned_value,value_2];
                                }
                                let bfr=inner_obj
                                inner_obj={}
                                inner_obj.check=bfr;
                                
                                inner_obj["result"]=((ev=inner_obj.check[key])=>{

                                                            if(!Array.isArray(ev)==true)
                                                            {
                                                                if (ev==false)
                                                                {
                                                                    return false;
                                                                }   
                                                                else
                                                                {
                                                                    return true
                                                                }    
                                                            }

                                                
                                                                })()
                                
                               }


                            }
                            )
                    result[key]=inner_obj;
                    }
                    
                     )

        console.log(result)
    }



    cash_checker(key)
    {

        // key:value 
        
    }
    cashe_creator(data,url)
    {
        if(Array.isArray(data))//recipee directly
        {


        }
    }
        constructor()
    {
        this.basic_v1()
    }
}



export default brain_v1;