import { InputWithLabel } from './InputWithLabel'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from './components/ui/button'

interface StepFourProps {

}

export const StepFour: React.FC<StepFourProps> = ({

}) => {



    return (
        <>
            <Card className='w-[30vw] text-left flex flex-col justify-start '>
                <CardHeader>
                    <CardTitle>Create your profile!</CardTitle>
                    <CardDescription>Please enter in your info to find a match!</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">

                </CardContent>
                <CardFooter className='flex flex-row-reverse items-start'>
                    <Button className='bg-black text-white transform transition-transform duration-200 hover:scale-105'>
                        Next
                    </Button>
                </CardFooter>
            </Card>


        </>
    );
};
