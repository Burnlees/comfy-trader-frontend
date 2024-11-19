export const NAVIGATION = {
  home: {
    name: "Home",
    link: "/",
    key: "home-nav",
  },
  access: {
    name: "Access",
    link: "/access",
    key: "access-nav",
  },
  dashboard: {
    name: "Dashboard",
    link: "/dashboard",
    key: "dashboard-nav",
  },
};

export const SIDEBAR_NAV = {
  analytics: {
    name: "Analytics",
    link: "/dashboard/analytics",
    key: "dash-analytics",
  },
  strategies: {
    name: "Strategies",
    link: "/dashboard/strategies",
    key: "dash-strategies",
  },
  settings: {
    name: "Settings",
    link: "/dashboard/settings",
    key: "dash-settings",
  },
};

export const STRATEGIES = {
  trendFilteredMacd: {
    name: "Trend-Filtered MACD Strategy",
    description:
      "This trading strategy is designed to work on the 4-hour timeframe, using the MACD indicator to identify potential buy (long) or sell (short) signals by detecting overbought or oversold conditions, confirmed with a trend filter based on the EMA (Exponential Moving Average). If the price is above the EMA, it only considers buying opportunities; if below, it looks for selling opportunities. Stop-loss levels are calculated using market volatility (ATR) to minimise risk, while profit targets are based on predefined risk-reward ratios.",
    backtestMetrics: {
      "Sharpe Ratio": 0.069,
      "Sortino Ratio": 0.126,
      "Profit Factor": 1.708,
      "Avg Bars Per Trade": 29,
      "Percent Profitable": 45.45,
    },
  },
};

export const desktopSize = "960px";
