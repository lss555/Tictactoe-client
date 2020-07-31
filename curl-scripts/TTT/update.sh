#!/bin/bash

curl "https://library-express-api.herokuapp.com/sign-in" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
  "game": {
    "cell": {
      "index": 0,
      "value": "x"
    },
    "over": false
  }
}'

echo
