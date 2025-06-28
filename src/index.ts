import OpenAI from "openai";
import * as dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

async function askDeepSeek(board: string[][]): Promise<string> {
  const response = await openai.chat.completions.create({
    model: "deepseek/deepseek-r1:free",
    messages: [
      { role: "system", content: "You are a tic tac toe 'X' player." },
      { role: "user", content: `Please, return the indexes of your play as you willing to win the tic tac toe match. The current board state is the following: ${JSON.stringify(board)}. Please, answer only the coordinates in the following format '[x,y]'. Do not include any additional information or explanations. You must do a play, even if there is no way to win anymore. Reply just the coordinates in the following format '[x,y]'` },
    ],
  });

  console.log(response.choices[0].message.content)
  return response.choices[0].message.content ?? ""
}

let board = [['X', 'X', 'O'], ['O', 'O', 'X'], ['X', 'O', 'O']]

askDeepSeek(board).then((r: string) => {
  const [x, y] = eval(r)
  board[x][y] = "X"

  console.log(board)
});