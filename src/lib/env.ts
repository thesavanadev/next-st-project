import zod from "zod";

const envSchema = zod.object({
	NEXT_PUBLIC_SERVER_URL: zod.string().nonempty(),
});

export const env = envSchema.parse(process.env);
