import React from 'react'
import img1 from './dron1.jpg'
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import {Link} from "react-router-dom";
import { useRef } from "react";


const Menu = () => {

  
  const [isActive, setIsActive] = useState(false);
   

  const product = [
    {
      id : 1,
      name : "dron1",
      category : "small drone",
      price: "20$",
      desc: "This is small drone use for spy purpose"
    },
      {
        id : 2,
        name : "dron2",
        category : "small drone",
        price: "20$",
        desc: "This is small drone use for spy purpose"
      },
  
      {
        id : 3,
        name : "dron3",
        category : "small drone",
        price: "20$",
        desc: "This is small drone use for spy purpose"
      },
  
      {
        id : 4,
        name : "dron4",
        category : "small drone",
        price: "20$",
        desc: "This is small drone use for spy purpose"
      },
  
      {
        id : 5,
        name : "dron5",
        category : "Gps drone",
        price: "20$",
        desc: "This is small drone use for spy purpose"
      },
  
      {
        id : 6,
        name : "dron6",
        category : "Gps drone",
        price: "20$",
        desc: "This is small drone use for spy purpose"
      },
  
      {
        id : 7,
        name : "dron7",
        category : "tactic drone",
        price: "20$",
        desc: "This is small drone use for spy purpose"
      },
  
      {
        id : 8,
        name : "dron8",
        category : "small drone",
        price: "20$",
        desc: "This is small drone use for spy purpose"
      },
  
      {
        id : 9,
        name : "dron10",
        category : "large drone",
        price: "20$",
        desc: "This is small drone use for spy purpose"
      },
      {
        
          id : 10,
          name : "dron10",
          category : "large drone",
          price: "20$",
          desc: "This is small drone use for spy purpose"
        
      }
    

    
  ];

  

/*const printyy = (item) =>
{
  let tst = "name" + "-" + item.id ;
  const container = document.getElementById(tst);
  container.innerHTML  = item.name;

  let tst1 = "category" + "-" +item.id;
  const container1 = document.getElementById(tst1);
  container1.innerHTML = item.category;

  let tst2 = "price" + "-" +item.id;
  const container2 = document.getElementById(tst2);
  container2.innerHTML = item.price;

  let tst3 = "desc" + "-" +item.id;
  const container3 = document.getElementById(tst3);
  container3.innerHTML = item.desc;
    
}

product.forEach(printyy);*/

const favr = (e) =>
{   

   document.getElementById(e.target.id).style.color = "pink";
   //document.getElementById(e.target.id).classList.toggle("heart");
} 
  
   
  const gps = () =>
  {
   
    const gp = product.filter(fun);

    function fun(item)
    {
      return item.category !== "Gps drone";
    }
    
    let text = 0;
   
  
   gp.forEach(fun1);
  
   function fun1(item)
   {  
      text = "product"+"-"+item.id;
     
      const container = document.getElementById(text);
     
      container.style.display = "none";
      
   }

   const gp11 = product.filter(f1);

    function f1(item)
    {
      return item.category === "Gps drone";
    }
    
    let text100 = 0;
   
  
   gp11.forEach(fu1);
  
   function fu1(item)
   {  
      text100 = "product"+"-"+item.id;
     
      const container = document.getElementById(text100);
     
      container.style.display = "block";
      
   }

  }
  
   const all = () =>
  {
    var text1 = 0;
   product.forEach(fun2);

   function fun2(item)
   {
    text1 = "product"+"-"+item.id;
     
      const container = document.getElementById(text1);
      console.log(text1);
     
      container.style.display = "block";
   }
      
     
    
   }

  
   const tactical = () =>
  {
    const gp1 = product.filter(funji);

    function funji(item)
    {
      return item.category !== "tactic drone";
    }
    
    let text3 = 0;
   
  
   gp1.forEach(fun0);
  
   function fun0(item)
   {  
      text3 = "product"+"-"+item.id;
     
      const container = document.getElementById(text3);
       console.log(text3);
      container.style.display = "none";
      
      
   }

   const gp10 = product.filter(funji);

   function funji(item)
   {
     return item.category === "tactic drone";
   }
   
   let text30 = 0;
  
 
  gp10.forEach(fun01);
 
  function fun01(item)
  {  
     text30 = "product"+"-"+item.id;
    
     const container = document.getElementById(text30);
      console.log(text30);
     container.style.display = "block";
     
     
  }
  }

  
   const large = () =>
  {
   
    
    const gp2 = product.filter(funt);

    function funt(item)
    {
      return item.category !== "large drone";
    }
    
    let text = 0;
   
  
   gp2.forEach(funti);
  
   function funti(item)
   {  
      text = "product"+"-"+item.id;
     
      const container = document.getElementById(text);
     
      container.style.display = "none";
     // console.log(container)
      
   }


   const gp3 = product.filter(fu);

    function fu(item)
    {
      return item.category === "large drone";
    }
    
    var textl = 0;
   
  
   gp3.forEach(f);
  
   function f(item)
   {  
      textl = "product"+"-"+item.id;
     
      const container1 = document.getElementById(textl);
     
      container1.style.display = "block";
      console.log(container1)
      
   }
     
    
  }


   const small = () =>
  {
    const gp3 = product.filter(funtio);

    function funtio(item)
    {
      return item.category !== "small drone";
    }
    
    let text = 0;
   
  
   gp3.forEach(funtioo);
  
   function funtioo(item)
   {  
      text = "product"+"-"+item.id;
     
      const container = document.getElementById(text);
     
      container.style.display = "none";
  }

  const gp4 = product.filter(fu);

    function fu(item)
    {
      return item.category === "small drone";
    }
    
    var text9 = 0;
   
  
   gp4.forEach(fuo);
  
   function fuo(item)
   {  
      text9 = "product"+"-"+item.id;
     
      const container = document.getElementById(text9);
     
      container.style.display = "block";
  }
     
  }

  
   
  
  
   return (
  <div id='menu'>
  <div id='me'></div>
  <h1 id='menu-heading'>Our products</h1>
  <div id='menu-button'>
    <button className
     = 'menu-button-1' onClick={all}>All</button>
    <a href='#'><button className
     = 'menu-button-1' onClick={gps} >GPS drones</button></a>
    <a href='#'><button className
     = 'menu-button-1' onClick={tactical}>Tactical drones</button></a>
    <a href='#'><button className
     = 'menu-button-1' onClick={large}>Large drones</button></a>
    <a href='#'><button className
     = 'menu-button-1' onClick={small}>Small drones</button></a>
  </div>  
      <div id='products'>
      <div id ='product-1' className='product-box'>
        <div id='product-1-image' className='product-image'>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
 
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>

  
  <div className="carousel-inner">
    <div className="item active">
     <img src={img1} alt="Los Angeles" style={{borderRadius: 20}}/>
    </div>

    <div className="item">
     <img src={img1} alt="Chicago"style={{borderRadius: 20}} />
    </div>

    <div className="item">
      <img src={img1} alt="Chicago"style={{borderRadius: 20}} />
    </div>
  </div>

 
  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#myCarousel" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right"></span>
    <span className="sr-only">Next</span>
  </a>
</div>


        </div>
        <div id='product-1-content' className='product-content'>
            <article>
            <span className="glyphicon glyphicon-heart" id='her1' onClick = {favr} style={{color :isActive ? "magenta" : ""}}></span>
            
              <h5 id='name-1' >Name: </h5>
              <h5 id='category-1'>Category: </h5>
              <h5 id="price-1">Price: </h5>
              <h5 id='desc-1'>Desc: </h5>
              
               <p>
        <a href="#" className="btn btn-info ">
          <span className="glyphicon glyphicon-shopping-cart"></span> Shop now
        </a>
      </p> 
              
            </article>
        </div>
        </div>
      

      <div id='product-2' className='product-box' >
        <div id='product-2-image' className='product-image'>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
 
 <ol className="carousel-indicators">
   <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
   <li data-target="#myCarousel" data-slide-to="1"></li>
   <li data-target="#myCarousel" data-slide-to="2"></li>
 </ol>

 
 <div className="carousel-inner">
   <div className="item active">
    <img src={img1} alt="Los Angeles" style={{borderRadius: 20}}/>
   </div>

   <div className="item">
    <img src={img1} alt="Chicago"style={{borderRadius: 20}} />
   </div>

   <div className="item">
     <img src={img1} alt="Chicago"style={{borderRadius: 20}} />
   </div>
 </div>


 <a className="left carousel-control" href="#myCarousel" data-slide="prev">
   <span className="glyphicon glyphicon-chevron-left"></span>
   <span className="sr-only">Previous</span>
 </a>
 <a className="right carousel-control" href="#myCarousel" data-slide="next">
   <span className="glyphicon glyphicon-chevron-right"></span>
   <span className="sr-only">Next</span>
 </a>
</div>
          </div>

          <div id='product-2-content' className='product-content'>
          <article>
          <span className="glyphicon glyphicon-heart" id='her2' onClick={favr} style={{color :isActive ? "magenta" : ""}}></span>
              <h5 id='name-2'>Name: </h5>
              <h5 id='category-2'>Category: </h5>
              <h5 id='price-2'>Price: </h5>
              <h5 id='desc-2'>Desc: </h5>
              <p>
        <a href="#" className="btn btn-info ">
          <span className="glyphicon glyphicon-shopping-cart"></span> Shop now
        </a>
      </p> 
              
            </article>
        </div>
      </div>
      <div id='product-3' className='product-box'>
        <div id='product-3-image' className='product-image'>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
 
 <ol className="carousel-indicators">
   <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
   <li data-target="#myCarousel" data-slide-to="1"></li>
   <li data-target="#myCarousel" data-slide-to="2"></li>
 </ol>

 
 <div className="carousel-inner">
   <div className="item active">
    <img src={img1} alt="Los Angeles" style={{borderRadius: 20}}/>
   </div>

   <div className="item">
    <img src={img1} alt="Chicago"style={{borderRadius: 20}} />
   </div>

   <div className="item">
     <img src={img1} alt="Chicago"style={{borderRadius: 20}} />
   </div>
 </div>


 <a className="left carousel-control" href="#myCarousel" data-slide="prev">
   <span className="glyphicon glyphicon-chevron-left"></span>
   <span className="sr-only">Previous</span>
 </a>
 <a className="right carousel-control" href="#myCarousel" data-slide="next">
   <span className="glyphicon glyphicon-chevron-right"></span>
   <span className="sr-only">Next</span>
 </a>
</div> 
          </div>

          <div id='product-3-content' className='product-content'>
          <article>
          <span className="glyphicon glyphicon-heart" id='her3' onClick={favr} style={{color :isActive ? "magenta" : ""}}></span>
              <h5 id='name-3'>Name:  </h5>
              <h5 id='category-3'>Category: </h5>
              <h5 id='price-3'>Price: </h5>
              <h5 id='desc-3'>Desc: </h5>
              <p>
        <a href="#" className="btn btn-info ">
          <span className="glyphicon glyphicon-shopping-cart"></span> Shop now
        </a>
      </p> 
              
            </article>
        </div>
      </div>

      <div id='product-4' className='product-box' >
        <div id='product-4-image' className='product-image'> 
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
 
 <ol className="carousel-indicators">
   <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
   <li data-target="#myCarousel" data-slide-to="1"></li>
   <li data-target="#myCarousel" data-slide-to="2"></li>
 </ol>

 
 <div className="carousel-inner">
   <div className="item active">
    <img src={img1} alt="Los Angeles" style={{borderRadius: 20}}/>
   </div>

   <div className="item">
    <img src={img1} alt="Chicago"style={{borderRadius: 20}} />
   </div>

   <div className="item">
     <img src={img1} alt="Chicago"style={{borderRadius: 20}} />
   </div>
 </div>


 <a className="left carousel-control" href="#myCarousel" data-slide="prev">
   <span className="glyphicon glyphicon-chevron-left"></span>
   <span className="sr-only">Previous</span>
 </a>
 <a className="right carousel-control" href="#myCarousel" data-slide="next">
   <span className="glyphicon glyphicon-chevron-right"></span>
   <span className="sr-only">Next</span>
 </a>
</div>
          </div>

          <div id='product-4-content' className='product-content'>
            <article>
            <span className="glyphicon glyphicon-heart" id='her4' onClick={favr} style={{color :isActive ? "magenta" : ""}}></span>
              <h5 id='name-4'>Name: </h5>
              <h5 id='category-4'>Category: </h5>
              <h5 id='price-4'>Price: </h5>
              <h5 id='desc-4'>Desc: </h5>
              <p>
        <a href="#" className="btn btn-info ">
          <span className="glyphicon glyphicon-shopping-cart"></span> Shop now
        </a>
      </p> 
              
            </article>
        </div>
      </div>

      <div id='product-5' className='product-box'  >
        <div id='product-5-image' className='product-image'>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
 
 <ol className="carousel-indicators">
   <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
   <li data-target="#myCarousel" data-slide-to="1"></li>
   <li data-target="#myCarousel" data-slide-to="2"></li>
 </ol>

 
 <div className="carousel-inner">
   <div className="item active">
    <img src={img1} alt="Los Angeles" style={{borderRadius: 20}}/>
   </div>

   <div className="item">
    <img src={img1} alt="Chicago"style={{borderRadius: 20}} />
   </div>

   <div className="item">
     <img src={img1} alt="Chicago"style={{borderRadius: 20}} />
   </div>
 </div>


 <a className="left carousel-control" href="#myCarousel" data-slide="prev">
   <span className="glyphicon glyphicon-chevron-left"></span>
   <span className="sr-only">Previous</span>
 </a>
 <a className="right carousel-control" href="#myCarousel" data-slide="next">
   <span className="glyphicon glyphicon-chevron-right"></span>
   <span className="sr-only">Next</span>
 </a>
</div> 
          </div>

          <div id='product-5-content' className='product-content'>
          <article>
          <span className="glyphicon glyphicon-heart" id='her5' onClick={favr} style={{color :isActive ? "magenta" : ""}}></span>
              <h5 id='name-5'>Name: </h5>
              <h5 id='category-5'>Category: GPS DRONES</h5>
              <h5 id='price-5'>Price:</h5>
              <h5 id='desc-5'>Desc: </h5>
              <p>
        <a href="#" className="btn btn-info ">
          <span className="glyphicon glyphicon-shopping-cart"></span> Shop now
        </a>
      </p> 
              
            </article>
        </div>
      </div>

      <div id='product-6' className='product-box' >
        <div id='product-6-image' className='product-image'>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
 
 <ol className="carousel-indicators">
   <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
   <li data-target="#myCarousel" data-slide-to="1"></li>
   <li data-target="#myCarousel" data-slide-to="2"></li>
 </ol>

 
 <div className="carousel-inner">
   <div className="item active">
    <img src={img1} alt="Los Angeles" style={{borderRadius: 20}}/>
   </div>

   <div className="item">
    <img src={img1} alt="Chicago"style={{borderRadius: 20}} />
   </div>

   <div className="item">
     <img src={img1} alt="Chicago"style={{borderRadius: 20}} />
   </div>
 </div>


 <a className="left carousel-control" href="#myCarousel" data-slide="prev">
   <span className="glyphicon glyphicon-chevron-left"></span>
   <span className="sr-only">Previous</span>
 </a>
 <a className="right carousel-control" href="#myCarousel" data-slide="next">
   <span className="glyphicon glyphicon-chevron-right"></span>
   <span className="sr-only">Next</span>
 </a>
</div> 
          </div>

          <div id='product-6-content' className='product-content'>
          <article>
          <span className="glyphicon glyphicon-heart" id='her6' onClick={favr} style={{color :isActive ? "magenta" : ""}}></span>
              <h5 id='name-6'>Name: </h5>
              <h5 id="category-6">Category:GPS DRONES</h5>
              <h5 id='price-6'>Price: </h5>
              <h5 id='desc-6'>Desc: </h5>
              <p>
        <a href="#" className="btn btn-info ">
          <span className="glyphicon glyphicon-shopping-cart"></span> Shop now
        </a>
      </p> 
              
            </article>
        </div>
      </div>
      <div id='product-7' className='product-box' >
        <div id='product-7-image' className='product-image'>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
 
 <ol className="carousel-indicators">
   <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
   <li data-target="#myCarousel" data-slide-to="1"></li>
   <li data-target="#myCarousel" data-slide-to="2"></li>
 </ol>

 
 <div className="carousel-inner">
   <div className="item active">
    <img src={img1} alt="Los Angeles" style={{borderRadius: 20}}/>
   </div>

   <div className="item">
    <img src={img1} alt="Chicago"style={{borderRadius: 20}} />
   </div>

   <div className="item">
     <img src={img1} alt="Chicago"style={{borderRadius: 20}} />
   </div>
 </div>


 <a className="left carousel-control" href="#myCarousel" data-slide="prev">
   <span className="glyphicon glyphicon-chevron-left"></span>
   <span className="sr-only">Previous</span>
 </a>
 <a className="right carousel-control" href="#myCarousel" data-slide="next">
   <span className="glyphicon glyphicon-chevron-right"></span>
   <span className="sr-only">Next</span>
 </a>
</div> 
          </div>

          <div id='product-7-content' className='product-content'>
          <article>
          <span className="glyphicon glyphicon-heart"  id=" her7" onClick={favr} style={{color :isActive ? "magenta" : ""}}></span>
              <h5 id='name-7'>Name: </h5>
              <h5 id='category-7'>Category:</h5>
              <h5 id='price-7'>Price: </h5>
              <h5 id='desc-7'>Desc: </h5>
              <p>
        <a href="#" className="btn btn-info ">
          <span className="glyphicon glyphicon-shopping-cart"></span> Shop now
        </a>
      </p> 
              
            </article>
        </div>
      </div>
      <div id='product-8' className='product-box' >
        <div id='product-8-image' className='product-image'>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
 
 <ol className="carousel-indicators">
   <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
   <li data-target="#myCarousel" data-slide-to="1"></li>
   <li data-target="#myCarousel" data-slide-to="2"></li>
 </ol>

 
 <div className="carousel-inner">
   <div className="item active">
    <img src={img1} alt="Los Angeles" style={{borderRadius: 20}}/>
   </div>

   <div className="item">
    <img src={img1} alt="Chicago"style={{borderRadius: 20}} />
   </div>

   <div className="item">
     <img src={img1} alt="Chicago"style={{borderRadius: 20}} />
   </div>
 </div>


 <a className="left carousel-control" href="#myCarousel" data-slide="prev">
   <span className="glyphicon glyphicon-chevron-left"></span>
   <span className="sr-only">Previous</span>
 </a>
 <a className="right carousel-control" href="#myCarousel" data-slide="next">
   <span className="glyphicon glyphicon-chevron-right"></span>
   <span className="sr-only">Next</span>
 </a>
</div> 
          </div>

          <div id='product-8-content' className='product-content'>
          <article>
          <span className="glyphicon glyphicon-heart" id='her8' onClick={favr} style={{color :isActive ? "magenta" : ""}}></span>
              <h5 id='name-8'>Name: </h5>
              <h5 id='category-8'>Category: </h5>
              <h5 id='price-8'>Price:</h5>
              <h5 id='desc-8'>Desc: </h5>
              <p>
        <a href="#" className="btn btn-info ">
          <span className="glyphicon glyphicon-shopping-cart"></span> Shop now
        </a>
      </p> 
              
            </article>
        </div>
      </div>
      <div id='product-9' className='product-box' >
        <div id='product-9-image' className='product-image'>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
 
 <ol className="carousel-indicators">
   <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
   <li data-target="#myCarousel" data-slide-to="1"></li>
   <li data-target="#myCarousel" data-slide-to="2"></li>
 </ol>

 
 <div className="carousel-inner">
   <div className="item active">
    <img src={img1} alt="Los Angeles" style={{borderRadius: 20}}/>
   </div>

   <div className="item">
    <img src={img1} alt="Chicago"style={{borderRadius: 20}} />
   </div>

   <div className="item">
     <img src={img1} alt="Chicago"style={{borderRadius: 20}} />
   </div>
 </div>


 <a className="left carousel-control" href="#myCarousel" data-slide="prev">
   <span className="glyphicon glyphicon-chevron-left"></span>
   <span className="sr-only">Previous</span>
 </a>
 <a className="right carousel-control" href="#myCarousel" data-slide="next">
   <span className="glyphicon glyphicon-chevron-right"></span>
   <span className="sr-only">Next</span>
 </a>
</div> 
          </div>

          <div id='product-9-content' className='product-content'>
          <article>
          <span className="glyphicon glyphicon-heart" id='her9' onClick ={favr}
          style={{color :isActive ? "magenta" : ""}}></span>
              <h5 id='name-9' >Name: </h5>
              <h5 id='category-9'>Category: </h5>
              <h5 id='price-9'>Price: </h5>
              <h5 id='desc-9'>Desc: </h5>
             
               <p>
        <a href="#" className="btn btn-info ">
          <span className="glyphicon glyphicon-shopping-cart"></span> Shop now
        </a>
      </p> 
              
            </article>
        </div>
      </div>
      <div id='product-10' className='product-box' >
        <div id='product-10-image' className='product-image'> 
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
 
 <ol className="carousel-indicators">
   <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
   <li data-target="#myCarousel" data-slide-to="1"></li>
   <li data-target="#myCarousel" data-slide-to="2"></li>
 </ol>

 
 <div className="carousel-inner">
   <div className="item active">
    <img src={img1} alt="Los Angeles" style={{borderRadius: 20}}/>
   </div>

   <div className="item">
    <img src={img1} alt="Chicago"style={{borderRadius: 20}} />
   </div>

   <div className="item">
     <img src={img1} alt="Chicago"style={{borderRadius: 20}} />
   </div>
 </div>


 <a className="left carousel-control" href="#myCarousel" data-slide="prev">
   <span className="glyphicon glyphicon-chevron-left"></span>
   <span className="sr-only">Previous</span>
 </a>
 <a className="right carousel-control" href="#myCarousel" data-slide="next">
   <span className="glyphicon glyphicon-chevron-right"></span>
   <span className="sr-only">Next</span>
 </a>
</div>
          </div>

          <div id='product-10-content' className='product-content'>
          
          <article>
          <span className="glyphicon glyphicon-heart" id='her10' onClick={favr} style={{color :isActive ? "magenta" : ""}}></span>
              <h5 id='name-10'>Name: </h5>
              <h5 id='category-10'>Category: </h5>
              <h5 id='price-10'>Price: </h5>
              <h5 id='desc-10'>Desc: </h5>
              
               <p>
        <a href="#" className="btn btn-info ">
          <span className="glyphicon glyphicon-shopping-cart"></span> Shop now
        </a>
      </p> 
              
            </article>
        </div>
      </div>
     </div>
     </div>
  )
}

export default Menu
