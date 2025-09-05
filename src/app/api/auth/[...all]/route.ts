import { auth } from "@/lib/auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js";  // Next.js automatically tumhara export const (GET|POST) call karega.
 
export const { POST, GET } = toNextJsHandler(auth);