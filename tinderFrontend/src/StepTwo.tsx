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

interface StepTwoProps {
    height: string;
    setHeight: (value: string) => void;
    religion: string;
    setReligion: (value: string) => void;
    race: string;
    setRace: (value: string) => void;
    interests: string;
    setInterests: (value: string) => void;
    lcStreak: string;
    setLcStreak: (value: string) => void;
    setCurrentStep: (value: number) => void;
}

export const StepTwo: React.FC<StepTwoProps> = ({
    height, setHeight,
    religion, setReligion,
    interests, setInterests,
    lcStreak, setLcStreak,
    race, setRace,
    setCurrentStep

}) => {
    return (
        <Card className='w-[30vw] text-left flex flex-col justify-start '>
            <CardHeader>
                <CardTitle>Create your profile!</CardTitle>
                <CardDescription>Please enter in your info to find a match!</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <InputWithLabel type="text" id="height" value={height} onChange={e => setHeight(e.target.value)} />
                <InputWithLabel type="text" id="religion" value={religion} onChange={e => setReligion(e.target.value)} />
                <InputWithLabel type="text" id="interests" value={interests} onChange={e => setInterests(e.target.value)} />
                <InputWithLabel type="text" id="streak" value={lcStreak} onChange={e => setLcStreak(e.target.value)} />
                <InputWithLabel type="text" id="race" value={race} onChange={e => setRace(e.target.value)} />

            </CardContent>
            <CardFooter className='flex flex-row-reverse items-start'>
                <Button className='bg-black text-white transform transition-transform duration-200 hover:scale-105' onClick={() => setCurrentStep(3)}>
                    Next
                </Button>
            </CardFooter>
        </Card>
    );
};
