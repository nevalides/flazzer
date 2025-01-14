import { Card, CardContent } from "@/components/ui/card"

type FlashStatsProps = {
  confidentResponses: string[]
  totalQuestions: number
}

export default function FlashStats({ confidentResponses, totalQuestions }: FlashStatsProps) {
  const gotItResponse = confidentResponses.reduce((prev, curr) => (curr === 'Got It' ? ++prev : prev), 0);
  const confidence = (gotItResponse / totalQuestions) * 100;

  return (
    <Card className="w-full">
      <CardContent className="space-y-4 p-8">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            I am <br/><span className="text-4xl font-bold text-white">{confidence}%</span><br /> sure you're going to ace this topic
          </p>
        </div>
        <div className="h-2 w-full border rounded-lg flex overflow-hidden">
            <div className="bg-green-400 h-full" style={{ width: `${confidence}%` }} />
            <div className="bg-orange-400 h-full" style={{ width: `${100 - confidence}%` }} />
        </div>
      </CardContent>
    </Card>
  )
}
