# ticseek
A tictactoe game api that uses deepseek R1 as player 2

Ex:
```
curl --request POST \
  --url http://localhost:3001/play \
  --header 'content-type: application/json' \
  --data '{
  "player": "O",
  "board": [
    [
      "O",
      "",
      "X"
    ],
    [
      "X",
      "O",
      "O"
    ],
    [
      "X",
      "O",
      "X"
    ]
  ]
}'