import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-4 drop-shadow-xl">
      <Card className="">
        <CardHeader>
          <CardTitle>Automated Trading Strategies</CardTitle>
        </CardHeader>
        <CardContent className="">
          Effortlessly implement and run automated trading strategies built on
          proven, backtested models. Choose from a library of pre-built
          strategies or customise your own to fit your risk profile and goals.
          Let the bot handle trade execution for you around the clock, so you
          never miss an opportunity.
        </CardContent>
      </Card>
      <Card className="">
        <CardHeader>
          <CardTitle>Comprehensive Performance Tracking & Insights</CardTitle>
        </CardHeader>
        <CardContent>
          Track your trading performance with detailed reports and analytics,
          including win/loss ratios, profit margins, and trade history.
          Understand the strengths and weaknesses of each strategy, make
          data-driven adjustments, and optimise your portfolio based on
          insightful metrics designed to support better decision-making.
        </CardContent>
      </Card>
      <Card className="">
        <CardHeader>
          <CardTitle>
            Advanced Risk Management with Customisable Controls
          </CardTitle>
        </CardHeader>
        <CardContent>
          Customise your trading strategies with advanced risk management
          controls, including adjustable stop-losses, drawdown limits, and
          position sizing. The bot monitors these settings in real-time,
          automatically adapting trades to protect your capital while maximising
          gains. Fine-tune your approach to align with your risk tolerance and
          gain peace of mind, knowing your investments are managed with
          precision.
        </CardContent>
      </Card>
    </div>
  );
};

export default Features;
