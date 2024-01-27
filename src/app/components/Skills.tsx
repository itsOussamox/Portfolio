import SkillTree from "./SkillTree";


export default function Skills(){
    return(
        <div id="Skills" className="w-full sm:h-[800px] h-[400px] relative">
            <div className="absolute bottom-0 left-[4%] rounded-full h-[50%] w-[30%] bg-[#12A2FF] blur-[350px] opacity-[0.3]"/>
            <div className="absolute bottom-[-10%] left-[40%] rounded-full h-[20%] w-[10%] bg-[#42EB82] blur-[350px] opacity-[0.2]"/>
            <SkillTree />
            <div className="absolute left-0 right-0 top-0 bottom-0 mx-auto my-auto w-[20%] text-center h-[20%]
                            sm:text-2xl text-xs">
                Some of my skills :
            </div>
        </div>
    )
}