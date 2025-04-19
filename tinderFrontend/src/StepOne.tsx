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

interface StepOneProps {
    name: string;
    setName: (value: string) => void;
    age: string;
    setAge: (value: string) => void;
    gender: string;
    setGender: (value: string) => void;
    college: string;
    setCollege: (value: string) => void;
    grade: string;
    setGrade: (value: string) => void;
    biography: string;
    setBiography: (value: string) => void;
    setCategory: (value: string) => void;
    setCurrentStep: (value: number) => void;
}

export const StepOne: React.FC<StepOneProps> = ({
    name, setName,
    age, setAge,
    gender, setGender,
    college, setCollege,
    grade, setGrade,
    biography, setBiography,
    setCategory, setCurrentStep
}) => {
    return (
        <Card className='w-[30vw] text-left flex flex-col justify-start '>
            <CardHeader>
                <CardTitle>Create your profile!</CardTitle>
                <CardDescription>Please enter in your info to find a match!</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <InputWithLabel type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
                <InputWithLabel type="number" id="age" value={age} onChange={e => setAge(e.target.value)} />
                <InputWithLabel type="text" id="gender" value={gender} onChange={e => setGender(e.target.value)} />
                <InputWithLabel type="text" id="college" value={college} onChange={e => setCollege(e.target.value)} />
                <InputWithLabel type="text" id="grade" value={grade} onChange={e => setGrade(e.target.value)} />
                <InputWithLabel type="text" id="biography" value={biography} onChange={e => setBiography(e.target.value)} />

                <Select onValueChange={setCategory}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent className='bg-amber-300'>
                        <SelectItem value="Friends">Friends</SelectItem>
                        <SelectItem value="Dating">Dating</SelectItem>
                        <SelectItem value="Friends&Dating">Friends + Dating</SelectItem>
                    </SelectContent>
                </Select>
            </CardContent>
            <CardFooter className='flex flex-row-reverse items-start'>
                <Button className='bg-black text-white transform transition-transform duration-200 hover:scale-105' onClick={() => setCurrentStep(2)}>
                    Next
                </Button>
            </CardFooter>
        </Card>
    );
};
