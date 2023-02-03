import React from "react";
import banner from "../images/fashion.jpg";
import  style from "../images/news_img1.jpg";
import style2 from "../images/news_img2.jpg";
import style3 from "../images/news_img3.jpg";
import money from "../images/icon_mony.png";
import money1 from "../images/icon_car.png";
import money2 from "../images/icon_gift.png";



function Nave(){
    return(
      <section>
        <div>
          <img src={banner} className="h-full w-full"/>
        </div>
        <div className=" ">
          <h1 className="mt-20 ml-20 capitalize text-6xl font-medium">latest news</h1>
          <hr className="ml-20 h-2 bg-yellow-400"/>
        </div>


        <div className="flex justify-center gap-16 mt-10">
        <div>
          <img src={style} className="h-62 w-90"/>
        </div>
        <div className=" w-[45%]">
          <h1 className="font-medium text-4xl">spiceman book. it has survived not only five.</h1>
          <div className="flex justify-between mt-3 text-lg">
            <p className="underline">7 july 2023</p>
            <p className="underline">like      comment</p>
        
          </div>
          <p className="mt-10 text-lg">lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        </div>

        <div className="flex justify-center gap-16 mt-10">
        <div>
          <img src={style2} className="h-62 w-90"/>
        </div>
        <div className=" w-[45%]">
          <h1 className="font-medium text-4xl">spiceman book. it has survived not only five.</h1>
          <div className="flex justify-between mt-3 text-lg">
            <p className="underline">7 july 2023</p>
            <p className="underline">like      comment</p>
          </div>
          <p className="mt-10 text-lg">lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        </div>

        <div className="flex justify-center gap-16 mt-10">
        <div>
          <img src={style3} className="h-62 w-90"/>
        </div>
        <div className=" w-[45%]">
          <h1 className="font-medium text-4xl">spiceman book. it has survived not only five.</h1>
          <div className="flex justify-between mt-3 text-lg">
            <p className="underline">7 july 2023</p>
            <p className="underline">like      comment</p>
          </div>
          <p className="mt-10 text-lg">lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        </div>
       
        <div className=" mt-10 flex justify-center gap-20">
          <div className="text-4xl font-bold capitalize ">
            <p>subscribe to the newwslatter</p>
          </div>
          <div className="grid">
            <input className=" border-black-500 w-[30rem] h-10 rounded-full p-2 3 " placeholder='enter your email'/>
            <button className="bg-blue-800 w-40 rounded-full mt-6 ml-40 text-white h-10">subscribe</button>
          </div>
        </div>



        
        <div className="bg-blue-800 mt-10">
        <div className="flex justify-center gap-20 mt-32">
          <div className="h-32 w-1/4  bg-white  rounded-b-2xl text-center  justfy-center ">
            <img className=" ml-32 " src={money}/>
            <p className="text-2xl">send money</p>
          </div>
          <div className="h-32 w-1/4  bg-white rounded-b-2xl text-center justfy-center ">
            <img className=" ml-32 " src={money1}/>
            <p className="text-2xl">send money</p>
          </div>
          <div className="h-32 w-1/4  bg-white  rounded-b-2xl text-center justfy-center ">
            <img className=" ml-32 " src={money2}/>
            <p className="text-2xl">send money</p>
          </div>
          
          
        </div>
       <div className="flex gap-10 ">
        <div className=" text-white mt-32 capitalize">
          <h1 className="text-4xl">information</h1>
          <p className="text-lg">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
        </div>
        <div className=" text-white mt-32 capitalize">
          <h1 className="text-4xl">information</h1>
          <p className="text-lg">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
        </div>
        <div className=" text-white mt-32 capitalize">
          <h1 className="text-4xl">information</h1>
          <p className="text-lg">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
        </div>
        <div className=" text-white mt-32 capitalize">
          <h1 className="text-4xl">information</h1>
          <p className="text-lg">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
        </div>
        </div>
        </div>
    
        </section>
    )
}

export default Nave;