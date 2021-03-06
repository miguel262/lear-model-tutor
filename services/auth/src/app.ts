import { BuildContextArgs, CreateApp, InferFunctionReturn } from "@pablosz/envelop-app/fastify";
import { GetDBUser } from "db";
import { GetAuth0User } from "common";

async function buildContext({ request }: BuildContextArgs) {
  const { Auth0UserPromise } = GetAuth0User(request);

  const { UserPromise } = GetDBUser(Auth0UserPromise);

  return {
    UserPromise,
    Auth0UserPromise,
  };
}

export const { buildApp, gql, registerModule } = CreateApp({
  ide: false,
  buildContext,
  scalars: {
    DateTime: 1,
  },
  codegen: {
    scalars: {
      DateTime: "string | Date",
      ID: "string | number",
    },
    deepPartialResolvers: true,
    enumsAsTypes: true,
  },
});

declare module "@pablosz/envelop-app/fastify" {
  interface EnvelopContext extends InferFunctionReturn<typeof buildContext> {}
}
