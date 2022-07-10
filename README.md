# ebetsu_food_server

This repository is a server-side application of [ebetsu_food_app](https://github.com/mryuu4dev/ebetsu_food_app). 

It converts information from [Hot Pepper Gourmet API](https://webservice.recruit.co.jp/) into GraphQL format and provides it to clients.

## Getting Started

Create an `.env` file in the root and enter the API Key obtained from the [Hot Pepper Gourmet API](https://webservice.recruit.co.jp/) as follows:

```
GOURMET_API_KEY=<your_api_key>
```

If you want to try it, run the following commands. 
And you can use [Apollo Sandbox](https://studio.apollographql.com/sandbox/explorer/) to send requests to the GraphQL server.

```
npm install && npm run start
```