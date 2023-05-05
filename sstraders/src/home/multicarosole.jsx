import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import { useState } from "react";
import 'react-multi-carousel/lib/styles.css';
import { BsFillArrowDownSquareFill } from "react-icons/bs";
export function Multicarosoul(){
    const [isHover,setIshover] = useState(false)
    const handleMouseEnter=()=>{
        setIshover(true);
    }
    const handleMouseleave=()=>{
        setIshover(false);
    }
    const desing ={
        backgroundColor: isHover ? 'rgba(0, 213, 255, 0.511)' : 'white'
    }
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <div>
            <Container>
                <br></br>
                <h3>Oils</h3>
                <hr></hr>
            <Carousel responsive={responsive}>
            <div>
                <a href="/Oils_Ghee">
                <img src="images/Oils_ghee/okioil.png" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} />
                </a>
            </div>
            <div>
                <a href="/Oils_Ghee">
                <img src="images/Oils_ghee/fortuneoil.jpg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} />
                </a>
            </div>
            <div>
                <a href="/Oils_Ghee">
                <img src="images/Oils_ghee/oliveoil.jpg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} />
                </a>
            </div>
            <div>
                <a href="/Oils_Ghee">
                <img src="images/Oils_ghee/GoldWinner.png" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} />
                </a>
            </div>
            </Carousel>
            <br></br> 
            <center><a href="/Oils_Ghee"><Button className="btn btn-primary">ViewMore <BsFillArrowDownSquareFill /></Button></a></center>
            <br></br>
            <br></br>
            <h3>Home Essentials</h3>
            <hr></hr>
            <Carousel responsive={responsive}>
            <div>
                <a href="/Home_Essentials"><img src="images/surf.jpg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} /></a>
            </div>
            <div>
                <a href="/Home_Essentials"><img src="images/vim.jpg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} /></a> 
            </div>
            <div>
                <a href="/Home_Essentials"><img src="images/paste.png" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} /></a>
            </div>
            <div>
                <a href="/Home_Essentials"><img src="images/homeessentias/santoor soap.jpeg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} /> </a>
            </div>
            </Carousel> 
            <br></br>
            <center><a href="/Home_Essentials"><Button className="btn btn-primary">ViewMore <BsFillArrowDownSquareFill /></Button></a></center>
            <br></br>
            <br></br>
            <h3>Milk-Bevarages</h3>
            <hr></hr>
            <Carousel responsive={responsive}>
            <div>
                <a href="/Bevarages">
                    <img src="images/bevarages/boostpic.jpg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} /></a>
            </div>
            <div>
                <a href="/Bevarages">
                <img src="images/bevarages/horlicspic.jpg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} />
                </a>
            </div>
            <div>
                <a href="/Bevarages">
                <img src="images/bevarages/3rosepic.jpg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} />
                </a>
            </div>
            <div>
                <a href="/Bevarages">
                <img src="images/bevarages/chakragold.jpg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} />
                </a>
            </div>
            </Carousel> 
            <br></br>
            <center><a href="/Bevarages"><Button className="btn btn-primary">ViewMore <BsFillArrowDownSquareFill /></Button></a></center>

            <br></br>
            <br></br>
                <h3>Rices</h3>
                <hr></hr>
            <Carousel responsive={responsive}>
            <div>
                <a href="/Rice_Atta">
                <img src="images/riceandatta/puzhungalarisi.jpg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} />
                </a>
            </div>
            <div>
                <a href="/Rice_Atta">
                <img src="images/riceandatta/kuthuravalirice.jpg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} />
                </a>
            </div>
            <div>
                <a href="/Rice_Atta">
                <img src="images/riceandatta/seeragasamba.jpg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} />
                </a>
            </div>
            <div>
                <a href="/Rice_Atta">
                <img src="images/riceandatta/pachaarisi.jpg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} />
                </a>
            </div>
            </Carousel>
            <br></br> 
            <center><a href="/Rice_Atta"><Button className="btn btn-primary">ViewMore <BsFillArrowDownSquareFill /></Button></a></center>
            <br></br>
            <br></br>
            <h3>Masala_Spices</h3>
            <hr></hr>
            <Carousel responsive={responsive}>
            <div>
                <a href="/Masalas_Spices">
                    <img src="images/Masala_Spices/aachi_chilli.jpg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} /></a>
            </div>
            <div>
                <a href="/Masalas_Spices">
                <img src="images//Masala_Spices/aachi_cumin1.jpg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} />
                </a>
            </div>
            <div>
                <a href="/Masalas_Spices">
                <img src="images/Masala_Spices/garam_aachi.jpeg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} />
                </a>
            </div>
            <div>
                <a href="/Masalas_Spices">
                <img src="images/Masala_Spices/sakthi-garam.png" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} />
                </a>
            </div>
            </Carousel> 
            <br></br>
            <center><a href="/Masalas_Spices"><Button className="btn btn-primary">ViewMore <BsFillArrowDownSquareFill /></Button></a></center>
            <br></br>
            <br></br>
            <h3>Pulses and Dalls</h3>
            <hr></hr>
            <Carousel responsive={responsive}>
            <div>
                <a href="/Pulses_Dalls">
                    <img src="images/pulses/gram.jpeg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} /></a>
            </div>
            <div>
                <a href="/Pulses_Dalls">
                <img src="images/pulses/green gram.jpeg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} />
                </a>
            </div>
            <div>
                <a href="/Pulses_Dalls">
                <img src="images/pulses/white avarai.jpeg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} />
                </a>
            </div>
            <div>
                <a href="/Pulses_Dalls">
                <img src="images/pulses/white avarai.jpeg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} />
                </a>
            </div>
            </Carousel> 
            <br></br>
            <center><a href="/Pulses_Dalls"><Button className="btn btn-primary">ViewMore <BsFillArrowDownSquareFill /></Button></a></center>
            <br></br>
            <br></br>
            <h3>Kitchen Essentials</h3>
            <hr></hr>
            <Carousel responsive={responsive}>
            <div>
                <a href="/Kitchen_Essentials">
                    <img src="images/sugars/parrys sugar.jpg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} /></a>
            </div>
            <div>
                <a href="/Kitchen_Essentials">
                <img src="images/sugars/tata salt.jpg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} />
                </a>
            </div>
            <div>
                <a href="/Kitchen_Essentials">
                <img src="images/sugars/karupatti.jpeg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} />
                </a>
            </div>
            <div>
                <a href="/Kitchen_Essentials">
                <img src="images/sugars/natu.jpeg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} />
                </a>
            </div>
            </Carousel> 
            <br></br>
            <center><a href="/Kitchen_Essentials"><Button className="btn btn-primary">ViewMore <BsFillArrowDownSquareFill /></Button></a></center>
            <br></br>
            <br></br>
            <h3>Dry Fruits</h3>
            <hr></hr>
            <Carousel responsive={responsive}>
            <div>
                <a href="/DryFruit">
                    <img src="images/Dry_Fruits/almonds.png" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} /></a>
            </div>
            <div>
                <a href="/DryFruit">
                <img src="images/Dry_Fruits/cashew.jpg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} />
                </a>
            </div>
            <div>
                <a href="/DryFruit">
                <img src="images/Dry_Fruits/dates.jpg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} />
                </a>
            </div>
            <div>
                <a href="/DryFruit">
                <img src="images/Dry_Fruits/wallnut.jpg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} />
                </a>
            </div>
            </Carousel> 
            <br></br>
            <center><a href="/DryFruit"><Button className="btn btn-primary">ViewMore <BsFillArrowDownSquareFill /></Button></a></center>
            <br></br>
            <br></br>
            <h3>FoodColors_Noodles</h3>
            <hr></hr>
            <Carousel responsive={responsive}>
            <div>
                <a href="/Food_Noodles">
                    <img src="images/food/green tin.jpeg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} /></a>
            </div>
            <div>
                <a href="/Food_Noodles">
                <img src="images/food/orange tin.jpeg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} />
                </a>
            </div>
            <div>
                <a href="/Food_Noodles">
                <img src="images/food/yippee.jpeg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} />
                </a>
            </div>
            <div>
                <a href="/Food_Noodles">
                <img src="images/food/ragi.jpeg" className="mx-auto d-block" alt="pic" width={"200px"} height={"200px"} />
                </a>
            </div>
            </Carousel> 
            <br></br>
            <center><a href="/Food_Noodles"><Button className="btn btn-primary">ViewMore <BsFillArrowDownSquareFill /></Button></a></center>
            </Container>
            
        </div>
    );
}