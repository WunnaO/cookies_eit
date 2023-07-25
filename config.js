const BearerToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwidXNlcklkIjoiNjNlYmFiYTg0MGI5Y2RhNTA3ZmQ2MTA4IiwiaWF0IjoxNjg3MjM0Mzc4fQ.7B4ovn-7OYMqCTonwrVptYxPxGFSqAyWsKWP3W5EOY0";

const config = {
  headers: {
    Key: "I069fUF1Xg69OI2JWTrRPWLbMUB1p7NCUsTJc+sbR0k=",
    Authorization: `Bearer ${BearerToken}`,
    "Content-Type": "application/json",
  },
};

export default config;
