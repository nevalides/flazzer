import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

type FlashCardProps = {
    number: number,
    question: string,
    answer: string
  };
  
const FlashCard: React.FC<FlashCardProps> = ({ number, question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <Card onClick={() => setShowAnswer((prev) => !prev)} className={cn("flash-card border-0 h-48", showAnswer && 'rotate')}>
        <div className="flash-card-inner border-2 rounded-xl">
            <div className="flash-card-front">
            <CardHeader className="text-center space-y-2">
                <CardTitle className="text-xl font-bold rotation">
                Question {number}
                </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
                <p className="text-center text-base">{question}</p>
            </CardContent>
            <CardFooter className="flex justify-center">
                <p className="text-center text-muted-foreground text-sm">
                Click card to see the answer
                </p>
            </CardFooter>
            </div>
            <div className="flash-card-back">
            <CardHeader className="text-center space-y-2">
                <CardTitle className="text-xl font-bold rotation">
                Answer
                </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
                <p className="text-center text-base">{answer}</p>
            </CardContent>
            </div>
        </div>
        </Card>
    )
};

export default FlashCard;