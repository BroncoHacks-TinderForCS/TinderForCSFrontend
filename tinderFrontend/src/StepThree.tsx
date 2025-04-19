import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "./components/ui/input"
import axios from "axios"

interface StepThreeProps {
    name: string;
    age: string;
    gender: string;
    college: string;
    grade: string;
    biography: string;
    height: string;
    race: string;
    religion: string;
    interests: string;
    lcStreak: string;
    category: string;
    setCurrentStep: (value: number) => void;
}

export const StepThree = ({ name,
    age,
    gender,
    college,
    grade,
    biography,
    height,
    race,
    religion,
    interests,
    lcStreak,
    category

}: StepThreeProps) => {
    const [image, setImage] = useState<File | null>(null)
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setImage(file)
            setPreviewUrl(URL.createObjectURL(file))
        }
    }

    const getCategory = (value: string): string[] => {

        switch (value) {
            case "Friends":
                return ["Friends"];
            case "Dating":
                return ["Dating"];
            default:
                return ["Friends", "Dating"];

        }
    }

    const handleSubmit = async () => {
        const userPayload = {
            id: 123,
            name: name || null,
            age: age ? parseInt(age) : null,
            gender: gender || null,
            description: biography || null,
            height: height ? parseInt(height) : null,
            race: race || null,
            religion: religion || null,
            instagram: null, // Replace with actual value if available
            spotify: null,   // Replace with actual value if available
            leetcode: lcStreak || null,
            picture: null,   // Replace with image URL if you're uploading the image and getting a URL back
            interests: interests
                ? interests.split(',').map(i => i.trim()).filter(i => i.length > 0)
                : [],
            categories: getCategory("")
        };

        console.log(userPayload)

        try {
            const res = await axios.post("http://localhost:8080/users", userPayload);
            console.log("user created success:", res.data);
        } catch (err) {
            console.error("create user error:", err);
        }
    };


    return (
        <Card className="w-[30vw]">
            <CardHeader>
                <CardTitle>Upload a Profile Photo</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 items-center">
                {previewUrl && (
                    <img
                        src={previewUrl}
                        alt="Profile preview"
                        className="rounded-xl max-w-full max-h-48 object-cover"
                    />
                )}
                <Label htmlFor="profilePhoto">Select a profile picture</Label>
                <Input
                    id="profilePhoto"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="cursor-pointer w-[200px]"
                />
                {image && (
                    <Button className="w-fit border-1 bg-black text-white transform transition-transform duration-200 hover:scale-105" onClick={handleSubmit}>
                        Create Profile
                    </Button>
                )}
            </CardContent>
        </Card>
    )
}
