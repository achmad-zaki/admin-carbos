'use client'

import Image from "next/image"

export default function LayoutAuth({ children }: any) {
  const year: number = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-[#eaeef8] flex items-center justify-center px-3 md:px-0">
      <div className="w-full md:w-5/6 flex flex-col md:flex-row md:items-center bg-white rounded-md">
        <div className="w-full md:flex-1 lg:basis-2/5 md:flex items-center justify-center bg-dark rounded-l-md hidden h-[450px]">
          <Image
            src="/assets/image-login.svg"
            alt="image login"
            width={350}
            height={350}
            priority
          />
        </div>
        <div className="md:basis-1/2 lg:basis-2/5 p-5">
          <div className="text-left md:text-center">
            <div className="flex justify-center">
              <Image
                src="/assets/logo-carbos.png"
                alt="logo carbos"
                className="p-1 bg-dark rounded-full"
                width={70}
                height={70}
              />
            </div>
            <div className="mt-3">
              <h1 className="text-3xl font-bold text-dark">Selamat Datang !</h1>
              <p className="font-normal mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          {children}
          <span className="block font-normal text-sm text-center mt-5 text-gray-400">© Copyright Carbos Indonesia {year}</span>
        </div>
      </div>
    </div>
  )
}