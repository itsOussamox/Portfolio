

function Project(){
    return (
        <div className="snap-center snap-always first:pl-8 last:pr-8 shrink-0 w-[45%] h-[95%]">

        </div>
    )
}

export default function Projects(){
    return (
        <div id="Projects" className="w-full h-[600px]">
            <div className="ml-[2%] sm:text-6xl md:text-6xl lg:text-7xl">My Projects</div>
            <div className="mt-[3%] overflow-scroll overflow-y-hidden gap-6 no-scrollbar flex h-[400px] w-full snap-x snap-mandatory relative "> 
                <div className="snap-start shrink-0 w-[20%] h-[95%] "></div>
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <div className="snap-end shrink-0 w-[20%] h-[95%] "></div>
            </div>
        </div>
    )
}