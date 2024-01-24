import SkillTree from "./SkillTree";


export default function Skills(){
    return(
        <div id="Skills" className="w-full sm:h-[800px] h-[400px] relative">
            <SkillTree />
            <div className="absolute left-0 right-0 top-0 bottom-0 mx-auto my-auto w-[20%] text-center h-[20%]
                            sm:text-2xl text-xs">
                Some of my skills :
            </div>
        </div>
    )
}