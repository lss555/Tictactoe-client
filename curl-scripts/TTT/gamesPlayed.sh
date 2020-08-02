#!/bin/bash

curl "https://tic-tac-toe-api-development.herokuapp.com" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \

echo
