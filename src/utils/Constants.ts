// @ts-nocheck
export class Constants {
  static PORT = process.env.PORT || 8000;
  static APP_NAME = process.env.APP_NAME || "Ronin";
  static EXPIRES_IN = process.env.EXPIRES_IN || "3000s";
  static DATABASE =
    process.env.DATABASE ||
    "mongodb+srv://ahmdtoukir:Ixk85C7FkU0FTfsp@servertestcluster.5z0e22z.mongodb.net/?retryWrites=true&w=majority";
  static SECRET = process.env.SECRET || "secretKey";
}
