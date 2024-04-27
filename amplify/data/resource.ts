import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { post } from "aws-amplify/api";
import { title } from "process";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
// const schema = a.schema({
//   Post: a.model({
//     title: a.string().required(),
//     comments: a.hasMany('Comment'),
//     ownerLogin: a.string().authorization([a.allow.owner().to(['read','delete'])])
//   }).authorization([a.allow.public().to(['read'], a.allow.owner())]),
//   Comment: a.model({
//     content: a.string().required(),
//     post: a.belongsTo('Post'),
//     owner: a.string().authorization([a.allow.owner().to(['read','delete'])])
//     .authorization([a.allow.public().to(['read'], a.allow.owner())]),
// })

// const schema = a.schema({
//   Post: a.model({
//     postId: a.id(),
//     title: a.string().required(),
//     owner: a.string(),
//     comments: a.hasMany('Comment','postId'),
//   }).authorization(allow=>[allow.publicApiKey().to(["read"]),
//   allow.owner()

// ]),
// Comment: a.model({
//   commentId: a.id(),
//   content: a.string().required(),
//   post: a.belongsTo('Post','postId'),
//   owner: a.string(),
// }).authorization(allow=>[allow.publicApiKey().to(["read"]),
//   allow.owner()

// ])

// })

const schema = a.schema({
  Comment : a.model({
    content: a.string().required(),
    postId: a.id(),
    post: a.belongsTo("Post","postId"),
  }).authorization(allow=>[allow.publicApiKey().to(["read"]),
  allow.owner()]),
  Post : a.model({
    title: a.string().required(),
    comments: a.hasMany("Comment","postId"),
  }).authorization(allow=>[allow.publicApiKey().to(["read"]),
  allow.owner()]),
  
})


// const schema = a.schema({
//   Post: a
//     .model({
//       postId: a.id(),
//       title: a.string().required(),
//       comment: a.hasMany("Comment","commentId"),
//     })
//     .authorization((allow) => [
//       allow.publicApiKey().to(["read"]),
//       allow.owner(),
//     ]),
//   Comment: a
//     .model({
//       commentId: a.id(),
//       content: a.string().required(),
//       post: a.belongsTo("Post","postId"),
//     })
//     .authorization((allow) => [
//       allow.publicApiKey().to(["read"]),
//       allow.owner(),
//     ]),
// });

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 7,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
