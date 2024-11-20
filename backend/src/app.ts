import express from "express"
import cors from "cors"
import healthRouter from "./routes/health"

const app = express()
const port = 4000

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use("/api/health", healthRouter)

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`)
})
