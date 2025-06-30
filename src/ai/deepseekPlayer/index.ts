import OpenAI from "openai"

class DeepSeekPlayer {
  openAiClient: OpenAI
  constructor(apiKey: string) {
    this.openAiClient = new OpenAI({
      apiKey: process.env.OPENROUTER_API_KEY,
      baseURL: "https://openrouter.ai/api/v1",
    });
  }

  async play(board: string[][], player: "X" | "O"): Promise<string[][]> {
    const response = await this.openAiClient.chat.completions.create({
      model: "deepseek/deepseek-r1:free",
      messages: [
        { role: "system", content: `You are a tic tac toe '${player}' player.` },
        { role: "user", content: `Please, return the indexes of your play as you willing to win the tic tac toe match. The current board state is the following: ${JSON.stringify(board)}. Please, answer only the coordinates in the following format '[x,y]'. Do not include any additional information or explanations. You must do a play, even if there is no way to win anymore. Reply just the coordinates in the following format '[x,y]'` },
      ],
    });

    const aiPlay: string | null = response.choices[0].message.content
    console.log(aiPlay)

    const [x, y] = eval(this.assertAIPlay(aiPlay))
    board[x][y] = player
    return board
  }

  private assertAIPlay(aiPlay: string | null): string {
    if (!aiPlay) throw new Error("AI was unable to do a play")

    return aiPlay
  }
}

export default DeepSeekPlayer
