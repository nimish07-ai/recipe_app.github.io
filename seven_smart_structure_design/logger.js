class logger
{
    log_pbj=[]
    slash_t_counter=0
    slash_issues=0
    error=[]

    getSlash_t_counter=()=> this.slash_t_counter
    getLog_pbj=()=> this.log_pbj[0]

    entry()
    {
        this.slash_t_counter+=1;
        
        return true;
    }

    exit()
    {
        
        if(this.slash_t_counter !=0)
        
        {
            this.slash_t_counter--;
        }
        return true;
    }

    // add_function(function_name,any_input,output)
    // {
    //     let a={
    //        fname:function_name,
    //        a_i=any_input,
    //        outpu:output 
    //     }
    // }



    // type_no : type
    // info:1
    // err:2


    baby_step_adder(msg)// "type_no : msg "
    {
        try {    

            let i=this.slash_t_counter;
            // prn(i)
            let buffer="";
            for(;i>0;i--)
            {
                buffer+="\t";
            }
            buffer+=msg;
            // prn(buffer)
            this.log_pbj.push(buffer);
            // prn(this.log_pbj)
            return true
        } catch (error) {

            this.error.push({error:msg});
            return false
        }
        
        
    }

    class_tester=
    {
        "entry":{
                ".":[true,this.getSlash_t_counter,1],
                //pr_e_:ev=>{}
                },
                
        "exit":{
            ".":[true,this.getSlash_t_counter,0]
                },
        "baby_step_adder":
            {
                "hey bitch":[true,this.getLog_pbj,"hey bitch"]
            }
    
            
        // "function_name":{
        //         "input":"expected_output"
        //                 or
        //                ["output","geeter variable ",expected]
        //                pre_1:ev=>{}  
        // }


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

    constructor ()
    {
        // this.tester(this.class_tester)
        
    }
}


// let abc=new logger()

export default logger;