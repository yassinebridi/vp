const isProd = process.env.NODE_ENV === "production";

export const CloudName = {
  users: isProd ? "produsers" : "devusers",
};
