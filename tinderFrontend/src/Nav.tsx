import { Button } from "./components/ui/button"

interface NavBarProps {
    setCurrentStep: (value: number) => void;
}

export const NavBar = ({ setCurrentStep }: NavBarProps) => {

    return (
        <>
            <nav className="flex flex-row justify-between items-center fixed top-0 left-0 w-full bg-white shadow-md z-50 h-16">
                <img src="/logo.png" alt="Logo" className="h-12 w-auto ml-4" />
                <span className="text-lg font-semibold">❤️ TinderForCS! ❤️</span>
                <Button className='bg-gray-50 text-black mr-5 border-1 border-black hover:bg-black hover:text-white transform transition-transform duration-200 hover:scale-105'
                    onClick={() => {
                        location.reload()
                        setCurrentStep(1)
                    }}>HOME</Button>
            </nav>
        </>
    )
}