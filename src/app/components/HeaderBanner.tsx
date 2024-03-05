'use client';

export type HighlightProps = {
    children: React.ReactNode;
    className?: string;
  };
  
const Highlight = ({ children, className }: HighlightProps) => {
    return (
      <span
        className={`${className} font-bold bg-gradient-to-r from-blueOne via-blueTwo to-blueThree
        bg-clip-text textTransparent font-gilroy`}>
        {children}
      </span>
    );
  };

export default function HeaderBanner(){
    return (
        <div className="grow flex mt-10 mb-8 items-center sm:ml-10 z-20">
            <div className="gap-5 flex flex-col sm:basis-3/5 max-sm:w-full text-center sm:text-left">
                <h1 className="banner-size font-bold sm:text-5xl md:text-7xl lg:text-8xl text-white">
                Hello 👋 my name <br/> is <Highlight>Oussama Bouadel</Highlight>
                </h1>
                <div className="text-lg tracking-[2%] font-normal max-sm:w-[80%] max-sm:mx-auto sm:text-xl md:text-2xl lg:text-2xl w-full sm:w-4/5 lg:w-3/4 ">
                A FullStack Web Developer with a passion for building smooth and interactive experiences. 
                </div>
            </div>
        </div>
    )
}