// src/components/cards/TokenCard.jsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const TokenCard = ({ name, symbol, balance }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{name} ({symbol})</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Balance: {balance}</p>
      </CardContent>
    </Card>
  )
}

export default TokenCard;
