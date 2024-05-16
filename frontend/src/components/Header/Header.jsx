import React from 'react'

export default function Header() {
    return (
       <>
       
       <section
        class="home relative flex items-center md:bg-header-desktop bg-header-mobile md:h-[905px] sm:h-[500px] xs:h-96 h-60 bg-cover bg-no-repeat overflow-hidden"
      >
        <div class=""></div>
        <div class="container">
          <div
            class="flex flex-col justify-center items-start mr-auto md:w-[460px] sm:w-96 xs:w-72 xs:mr-40 sm:mr-auto w-52 font-MorabbaLight text-white"
          >
            <h1
              class="pb-2 md:text-6xl sm:text-4xl xs:text-3xl text-2xl font-bold pl-4 md:pl-0 drop-shadow-main md:leading-[62px]"
            >
              قهوه عربیکا تانزانیا
            </h1>
            <h4
              class="md:text-5xl sm:text-3xl xs:text-2xl text-xl font-light md:leading-[64px] pl-4 md:pl-0"
            >
              یک فنجان بالانس !
            </h4>
            <span
              class="md:my-8 sm:my-5 my-3 w-[100px] h-0.5 bg-orange-300 shadow-main"
            ></span>
            <p
              class="font-normal md:text-2xl sm:text-xl xs:text-base text-xs font-Dana"
            >
              قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه
              است که در نواحی مختلف کمربند قهوه کشت میشود.
            </p>
          </div>
        </div>
        <div
          class="absolute child:absolute -bottom-[101.5px] h-[203px] w-full mx-auto hidden md:flex items-center justify-center"
        >
          <div
            class="w-[30px] h-[30px] border-2 border-orange-300 rounded-full z-20"
          ></div>
          <div
            class="w-[95px] h-[95px] border border-white/80 rounded-full"
          ></div>
          <div
            class="w-[145px] h-[145px] border border-white/50 rounded-full"
          ></div>
          <div
            class="w-[203px] h-[203px] border border-white/25 rounded-full"
          ></div>
        </div>
      </section></>
    )
}
