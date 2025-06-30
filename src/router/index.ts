import { Router } from "express"
import TicTacToeController from "../controllers/tictactoe"
import DeepSeekPlayer from "../ai/deepseekPlayer"

const router = Router()

const deepseekPlayer = new DeepSeekPlayer(process.env.OPENROUTER_API_KEY || "")
const ticTacToeController = new TicTacToeController(deepseekPlayer)

router.post("/play", ticTacToeController.getPlayFromAI)
export const aiPlayRouter = router

