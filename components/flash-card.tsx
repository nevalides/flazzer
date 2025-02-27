import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { motion } from "motion/react";

type FlashCardProps = {
    number: number,
    question: string,
    answer: string,
    hoverAnswer: 'Got It' | 'Study Again' | 'Idle'
  };
  
const FlashCard: React.FC<FlashCardProps> = ({ number, question, answer, hoverAnswer }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <Card
            onClick={() => setShowAnswer((prev) => !prev)}
            className='w-full max-w-md border-0 cursor-pointer h-48'
            style={{ perspective: '1000px' }} // Added perspective to className
        >
            <motion.div
                className="relative w-full h-full text-center border-2 rounded-xl"
                variants={{
                    'Got It': { rotate: 10, x: 30 },
                    'Study Again': { rotate: -10, x: -30 },
                    'Idle': { rotate: 0, x: 0 },
                    'Show Answer': { rotateY: showAnswer ? 180 : 0 }
                }}
                animate={[hoverAnswer, 'Show Answer']}
                transition={{ duration: 0.8 }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                <motion.div
                    className="absolute w-full h-full"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <CardHeader className="text-center space-y-2">
                        <CardTitle className="text-xl font-bold">Question {number}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <p className="text-center text-base">{question}</p>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        <p className="text-center text-muted-foreground text-sm">
                        Click card to see the answer
                        </p>
                    </CardFooter>
                </motion.div>
                <motion.div
                    className="absolute w-full h-full"
                    style={{ backfaceVisibility: 'hidden', rotateY: 180 }}
                >
                    <CardHeader className="text-center space-y-2">
                        <CardTitle className="text-xl font-bold">Answer</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <p className="text-center text-base">{answer}</p>
                    </CardContent>
                </motion.div>
            </motion.div>
        </Card>
    )
};

export default FlashCard;