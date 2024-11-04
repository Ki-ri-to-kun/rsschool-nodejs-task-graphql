import { Type } from '@fastify/type-provider-typebox';

export const gqlResponseSchema = Type.Partial(
  Type.Object({
    data: Type.Any(),
    errors: Type.Any(),
  }),
);


export const createGqlResponseSchema = {
  body: Type.Object(
    {
      query: Type.String(),
      variables: Type.Optional(Type.Record(Type.String(), Type.Any())),
    },
    {
      additionalProperties: false,
    },
  ),
};






/*
type Post {
  id: Type.String(),
  title: Type.String(),
  content: Type.String()
}

type Profile {
  id: Type.String(), 
  isMale: Type.String(), 
  yearOfBirth: Type.String(), 
  memberType: Type.String()
}

type User {
  id: Type.String(), 
  name: Type.String(), 
  balance: Type.String(), 
  profile: Type.String(), 
  posts: Type.String(), 
  userSubscribedTo: Type.String(), 
  subscribedToUser: Type.String()
}



*/