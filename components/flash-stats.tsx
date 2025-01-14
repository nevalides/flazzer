import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import * as HoverCard from "@radix-ui/react-hover-card";

type FlashStatsProps = {
  confidentResponses: string[]
  totalQuestions: number
}

const Indicator = ({ variant = 'green', confidence, responseCount, totalQuestions }: { variant: string, confidence: number, responseCount: number, totalQuestions: number }) => {
    return (
        <HoverCard.Root>
            <HoverCard.Trigger asChild>
                <div
                    className={cn("h-full", variant === 'green' ? 'bg-green-400' : variant === 'orange' ? 'bg-orange-400' : '')}
                    style={{ width: `${variant === 'green' ? confidence : variant === 'orange' ? 100 - confidence : ''}%` }}
                />
            </HoverCard.Trigger>
            <HoverCard.Portal>
                <HoverCard.Content>
                    <Card className="mt-4 p-4 bg-muted">
                        You responded
                        <strong className={variant === 'green' ? 'text-green-300' : variant === 'orange' ? 'text-orange-300' : ''}>
                            {variant === 'green' ? ' Got It ' : variant === 'orange' ? ' Study Again ' : ''}
                        </strong>
                        on {responseCount} / {totalQuestions} questions
                    </Card>
                </HoverCard.Content>
            </HoverCard.Portal>
        </HoverCard.Root>
    )
}

export default function FlashStats({ confidentResponses, totalQuestions }: FlashStatsProps) {
  const gotItResponse = confidentResponses.reduce((prev, curr) => (curr === 'Got It' ? ++prev : prev), 0);
  const confidence = Number((gotItResponse / totalQuestions).toFixed(2)) * 100;

  return (
    <Card className="w-full">
      <CardContent className="space-y-4 p-8">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            I am <br/><span className="text-4xl font-bold text-white">{confidence}%</span><br /> sure you{"\'"}re going to ace this topic
          </p>
        </div>
        <div className="h-2 w-full border rounded-lg flex overflow-hidden">
            <Indicator variant="green" confidence={confidence} responseCount={gotItResponse} totalQuestions={totalQuestions} />
            <Indicator variant="orange" confidence={confidence} responseCount={totalQuestions - gotItResponse} totalQuestions={totalQuestions} />
        </div>
      </CardContent>
    </Card>
  )
}
