import Hamburger from 'hamburger-react'
import { useState } from 'react'
import { Dialog, Slide, DialogActions, Grow } from '@mui/material';

interface MenuProps {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
}

interface MenuElementProps {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
    value: string;
    onClick: (value:string) => void;
    checked: string;
}

function BurgerElement({isOpen, setOpen, value, onClick, checked}: MenuElementProps){
    const checkedStyle = checked === value ? 'text-[#F5F5F5]' : 'text-[#A0AEC0]'


    return (
        <div className={`h-[8%] w-full flex items-center ${checkedStyle}`} onClick={(e) => {onClick(value)}}>
            <div className='ml-[10%]'>
                {value}
            </div>
        </div>
    )

}


function Menu({isOpen, setOpen}: MenuProps){
    const [checked, setChecked] = useState<string>('Home')

    const BurgerClick = (value:string) => {
        document.getElementById(value)?.scrollIntoView({behavior: 'smooth'})
        setChecked(value)
        setOpen(false)
    }
    return (
            <div className='bg-menuBg h-full w-full fixed top-0 bottom-0 left-0 right-0  z-[50]'>
                <Slide direction='left' in={isOpen} timeout={600}>
                    <div className='w-[80%] h-full ml-auto bg-[#171B22CC] border-l-[1px] border-gray-600 flex flex-col'>
                        <div className='h-full w-full mt-[20%]'>
                            <BurgerElement checked={checked} onClick={BurgerClick} isOpen={isOpen} setOpen={setOpen} value={'Home'}/>
                            <BurgerElement checked={checked} onClick={BurgerClick} isOpen={isOpen} setOpen={setOpen} value={'About'}/>
                            <BurgerElement checked={checked} onClick={BurgerClick} isOpen={isOpen} setOpen={setOpen} value={'Skills'}/>
                            <BurgerElement checked={checked} onClick={BurgerClick} isOpen={isOpen} setOpen={setOpen} value={'Experience'}/>
                            <BurgerElement checked={checked} onClick={BurgerClick} isOpen={isOpen} setOpen={setOpen} value={'Projects'}/>
                        </div>
                    </div>
                </Slide>
            </div>
    )
}

export default function BurgerMenu(){
    const [isOpen, setOpen] = useState(false)
    const burgerFixed = isOpen ? 'fixed' : 'absolute'
    function isToggled(){
        setOpen(!isOpen)
    }
    return (
        <div className={`sm:hidden ${burgerFixed} right-0 h-full w-[5%] flex-col z-[99999]`}>
            <div className="sm:hidden flex self-end h-full w-[10%] mr-[10%]">
                <div className='h-full w-full flex flex-col justify-center items-center z-[99999]'>
                    <Hamburger toggled={isOpen} toggle={isToggled} rounded label='Show menu'
                    size={20} duration={0.4} direction='left'/>
                </div>
            </div>
            {isOpen && (
                <Menu isOpen={isOpen} setOpen={setOpen}></Menu>
            )}
        </div>
    )
}