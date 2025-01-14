import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Question } from '@/lib/schemas'

type FlashOverviewProps = {
  questions: Question[]
  confidentResponse: string[]
}

export default function FlashOverview({ questions, confidentResponse }: FlashOverviewProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Flash Session Review</CardTitle>
      </CardHeader>
      <CardContent>
          {questions.map((question, questionIndex) => {
            const response = confidentResponse[questionIndex];
            return (
                <div key={questionIndex} className="mb-8 last:mb-0">
                <h3 className="text-lg font-semibold mb-4">{question.question}</h3>
                <div className="space-y-2 p-4 border-2 rounded-xl">
                    <p>Answer: {question.answer}</p>
                    <p>Your Response: <strong className={response === 'Got It' ? 'text-green-300' : 'text-orange-300'}>{response}</strong></p>
                </div>
                </div>
            )
          })}
      </CardContent>
    </Card>
  )
}

