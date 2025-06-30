import { Request, Response } from "express"
import DeepSeekPlayer from "../../ai/deepseekPlayer"

class TicTacToeController {
  private aiPlayer: DeepSeekPlayer

  constructor(_aiPlayer: DeepSeekPlayer) {
    this.aiPlayer = _aiPlayer
  }

  getPlayFromAI = async (req: Request, res: Response): Promise<void> => {
    try {
      const { board, player } = req.body

      if (!board || !player) {
        res.status(400).send({ error: "Missing 'board' or 'player' in request" })
        return
      }

      const boardAfterAIPlay = await this.aiPlayer.play(board, player)

      res.status(200).send({ board: boardAfterAIPlay })
    } catch (err) {
      res.status(500).send({ error: (err as Error).message })
    }
  }
}

export default TicTacToeController