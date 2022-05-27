import React from 'react';
import{Box,Button,ButtonGroup,Input,Heading,Link,Text} from "@chakra-ui/react"
import { IoRocketSharp } from 'react-icons/io5';
import {GoSearch } from 'react-icons/go';
import{GiWorld} from "react-icons/gi";
import{IoIosFlame}from "react-icons/io"
import{AiFillPushpin}from "react-icons/ai"
import{BsFillBookmarkStarFill}from "react-icons/bs"
import "./Projecttwo.css"
function Projecttwo() {
  return (
    <div className='maincontainer'>

      {/* //navbar */}
                <div className='navbar' style={{display:"flex", border:"1px solid Gray" ,height:"50px"}}>
                <div style={{width:"30%",justifyContent:"left" ,marginLeft:"3%"}}>
                <Link> 
                <img  width="37px"  alt ="logo" src='https://www.wework4days.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Flogo.4cc40a9ad62028ac0ab9af556de0b081.svg&w=32&q=75'/>
                </Link> 

                </div>
                <div style={{width:"70%" , textAlign:"end"}}>
                <ButtonGroup variant='outline' spacing='6'>
                <Button>Sign In </Button>
                <Button colorScheme='blue'>SignUp</Button>

                <Button colorScheme='twitter' rightIcon={<IoRocketSharp />}>
                POST A JOB 
                </Button>


                </ButtonGroup>
                </div>
               </div>
         {/* imput container */}


         <div className='imput-container'>
<Box marginTop={10} textAlign={'center'} color={'black'} >
<Heading fontSize={"85px"}>
Find The Right
</Heading>
<Heading   display={'flex'} justifyContent={"center"} gap={7} >
<Heading fontSize={"85px"} color={"blue"}>Four-Day</Heading>
<Heading fontSize={"85px"}>Week Job</Heading>
</Heading>
</Box>
<Box marginTop={10} >
<Input focusBorderColor='lime' placeholder='Here is a sample placeholder' w={630} />
<Button marginLeft={8} padding={"6"} aria-label='Search database' rightIcon={<GoSearch/>}/>
</Box>
<Box  display={"flex"} justifyContent={"center"} gap={4}>
            <Button  colorScheme='twitter' rightIcon={<IoRocketSharp />}>
             Remote
            </Button>
            <Button colorScheme='twitter' rightIcon={<IoRocketSharp />}>
             Tech 
            </Button>
            <Button colorScheme='twitter' rightIcon={<IoRocketSharp />}>
             Marketing 
            </Button>
</Box>
</div>

{/* cards */}

<div className='card-container' style={{border:"1px solid teal" ,backgroundColor:"#e2e8f0" }}>

 <div className='card' style={{display:"flex",width:"45%" ,border:"2px solid blue" , borderRadius:"3%" ,margin:"auto" ,marginTop:"20px",backgroundColor:"white"}}>
<div style={{width:"10%"}}>
  <img  width={"40"}src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75" alt='logo'/>
</div>
<div style={{width:"70%"}}>
  <Text textAlign={"left"}>Talewind</Text>
  <Heading textAlign={"left"} fontSize={20}>Leader Producer</Heading>
  <Text textAlign={"left"}>$ 2330</Text>
</div>

 <div style={{width:"30%"}}>
<div style={{display :"flex",marginTop:"10px" ,justifyContent:"space-around"}}>
  <span><GiWorld/></span> 
  <span><IoIosFlame/></span> 
  <span><AiFillPushpin/></span> 
  <span><BsFillBookmarkStarFill/></span>
 </div>
 <div style={{marginTop:"40px"}}>
   <Text>Full -Time</Text>
 </div>

</div>
 </div>
 
 {/* card 2 */}
 <div className='card' style={{display:"flex",width:"45%" ,border:"2px solid blue",backgroundColor:"white" , borderRadius:"3%" ,margin:"auto" ,marginTop:"20px"}}>
<div style={{width:"10%"}}>
  <img  width={"40"}src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75" alt='logo'/>
</div>
<div style={{width:"70%"}}>
  <Text textAlign={"left"}>Talewind</Text>
  <Heading textAlign={"left"} fontSize={20}>Leader Producer</Heading>
  <Text textAlign={"left"}>$ 2330</Text>
</div>

 <div style={{width:"30%"}}>
<div style={{display :"flex",marginTop:"10px" ,justifyContent:"space-around"}}>
  <span><GiWorld/></span> 
  <span><IoIosFlame/></span> 
  <span><AiFillPushpin/></span> 
  <span><BsFillBookmarkStarFill/></span>
 </div>
 <div style={{marginTop:"40px"}}>
   <Text>Full -Time</Text>
 </div>

</div>
 </div>

 {/* card3 */}
 <div className='card' style={{display:"flex",width:"45%" ,border:"2px solid blue",backgroundColor:"white" , borderRadius:"3%" ,margin:"auto" ,marginTop:"20px"}}>
<div style={{width:"10%"}}>
  <img  width={"40"}src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2Fd74e52d1-6529-4ab1-98b2-a27b1b9947ed&w=1920&q=75" alt='logo'/>
</div>
<div style={{width:"70%"}}>
  <Text textAlign={"left"}>Talewind</Text>
  <Heading textAlign={"left"} fontSize={20}>Leader Producer</Heading>
  <Text textAlign={"left"}>$ 2330</Text>
</div>

 <div style={{width:"30%"}}>
<div style={{display :"flex",marginTop:"10px" ,justifyContent:"space-around"}}>
  <span><GiWorld/></span> 
  <span><IoIosFlame/></span> 
  <span><AiFillPushpin/></span> 
  <span><BsFillBookmarkStarFill/></span>
 </div>
 <div style={{marginTop:"40px"}}>
   <Text>Full -Time</Text>
 </div>

</div>
 </div>
{/* card 4 */}
 <div className='card' style={{display:"flex",width:"45%" ,border:"2px solid blue",backgroundColor:"white" , borderRadius:"3%" ,margin:"auto" ,marginTop:"20px"}}>
<div style={{width:"10%"}}>
  <img  width={"40"}src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F0ecc5576-0a1c-4787-880b-6e23c379550e&w=1920&q=75" alt='logo'/>
</div>
<div style={{width:"70%"}}>
  <Text textAlign={"left"}>Talewind</Text>
  <Heading textAlign={"left"} fontSize={20}>Leader Producer</Heading>
  <Text textAlign={"left"}>$ 2330</Text>
</div>

 <div style={{width:"30%"}}>
<div style={{display :"flex",marginTop:"10px" ,justifyContent:"space-around"}}>
  <span><GiWorld/></span> 
  <span><IoIosFlame/></span> 
  <span><AiFillPushpin/></span> 
  <span><BsFillBookmarkStarFill/></span>
 </div>
 <div style={{marginTop:"40px"}}>
   <Text>Full -Time</Text>
 </div>

</div>
 </div>
 
 {/* card 5 */}
 <div className='card' style={{display:"flex",width:"45%" ,border:"2px solid blue",backgroundColor:"white" , borderRadius:"3%" ,margin:"auto" ,marginTop:"20px"}}>
<div style={{width:"10%"}}>
  <img  width={"40"}src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F9c1b3b11-db61-4d76-ab95-cfd9eb148aa5&w=1920&q=75" alt='logo'/>
</div>
<div style={{width:"70%"}}>
  <Text textAlign={"left"}>Talewind</Text>
  <Heading textAlign={"left"} fontSize={20}>Leader Producer</Heading>
  <Text textAlign={"left"}>$ 2330</Text>
</div>

 <div style={{width:"30%"}}>
<div style={{display :"flex",marginTop:"10px" ,justifyContent:"space-around"}}>
  <span><GiWorld/></span> 
  <span><IoIosFlame/></span> 
  <span><AiFillPushpin/></span> 
  <span><BsFillBookmarkStarFill/></span>
 </div>
 <div style={{marginTop:"40px"}}>
   <Text>Full -Time</Text>
 </div>

</div>
 </div>

{/* card-6 */}
<div className='card' style={{display:"flex",width:"45%" ,border:"2px solid blue" , borderRadius:"3%" ,margin:"auto" ,marginTop:"20px",backgroundColor:"white"}}>
<div style={{width:"10%"}}>
  <img  width={"40"}src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75" alt='logo'/>
</div>
<div style={{width:"70%"}}>
  <Text textAlign={"left"}>Talewind</Text>
  <Heading textAlign={"left"} fontSize={20}>Leader Producer</Heading>
  <Text textAlign={"left"}>$ 2330</Text>
</div>

 <div style={{width:"30%"}}>
<div style={{display :"flex",marginTop:"10px" ,justifyContent:"space-around"}}>
  <span><GiWorld/></span> 
  <span><IoIosFlame/></span> 
  <span><AiFillPushpin/></span> 
  <span><BsFillBookmarkStarFill/></span>
 </div>
 <div style={{marginTop:"40px"}}>
   <Text>Full -Time</Text>
 </div>

</div>
 </div>
 
 {/* card 7 */}
 <div className='card' style={{display:"flex",width:"45%" ,border:"2px solid blue",backgroundColor:"white" , borderRadius:"3%" ,margin:"auto" ,marginTop:"20px"}}>
<div style={{width:"10%"}}>
  <img  width={"40"}src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75" alt='logo'/>
</div>
<div style={{width:"70%"}}>
  <Text textAlign={"left"}>Talewind</Text>
  <Heading textAlign={"left"} fontSize={20}>Leader Producer</Heading>
  <Text textAlign={"left"}>$ 2330</Text>
</div>

 <div style={{width:"30%"}}>
<div style={{display :"flex",marginTop:"10px" ,justifyContent:"space-around"}}>
  <span><GiWorld/></span> 
  <span><IoIosFlame/></span> 
  <span><AiFillPushpin/></span> 
  <span><BsFillBookmarkStarFill/></span>
 </div>
 <div style={{marginTop:"40px"}}>
   <Text>Full -Time</Text>
 </div>

</div>
 </div>
{/* card- 8 */}
<div className='card' style={{display:"flex",width:"45%" ,border:"2px solid blue" , borderRadius:"3%" ,margin:"auto" ,marginTop:"20px",backgroundColor:"white"}}>
<div style={{width:"10%"}}>
  <img  width={"40"}src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75" alt='logo'/>
</div>
<div style={{width:"70%"}}>
  <Text textAlign={"left"}>Talewind</Text>
  <Heading textAlign={"left"} fontSize={20}>Leader Producer</Heading>
  <Text textAlign={"left"}>$ 2330</Text>
</div>

 <div style={{width:"30%"}}>
<div style={{display :"flex",marginTop:"10px" ,justifyContent:"space-around"}}>
  <span><GiWorld/></span> 
  <span><IoIosFlame/></span> 
  <span><AiFillPushpin/></span> 
  <span><BsFillBookmarkStarFill/></span>
 </div>
 <div style={{marginTop:"40px"}}>
   <Text>Full -Time</Text>
 </div>

</div>
 </div>
 
 {/* card 9 */}
 <div className='card' style={{display:"flex",width:"45%" ,border:"2px solid blue",backgroundColor:"white" , borderRadius:"3%" ,margin:"auto" ,marginTop:"20px"}}>
<div style={{width:"10%"}}>
  <img  width={"40"}src="https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75" alt='logo'/>
</div>
<div style={{width:"70%"}}>
  <Text textAlign={"left"}>Talewind</Text>
  <Heading textAlign={"left"} fontSize={20}>Leader Producer</Heading>
  <Text textAlign={"left"}>$ 2330</Text>
</div>

 <div style={{width:"30%"}}>
<div style={{display :"flex",marginTop:"10px" ,justifyContent:"space-around"}}>
  <span><GiWorld/></span> 
  <span><IoIosFlame/></span> 
  <span><AiFillPushpin/></span> 
  <span><BsFillBookmarkStarFill/></span>
 </div>
 <div style={{marginTop:"40px"}}>
   <Text>Full -Time</Text>
 </div>

</div>
 </div>
</div> </div>
  );
}

export default Projecttwo;
