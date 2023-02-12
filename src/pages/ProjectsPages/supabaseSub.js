/* import { supabase } from "./supabaseClient";

export default function chatSub() {
  supabase
    .channel("public:messages")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "messages" },
      (payload) => {
        console.log("Change received!", payload);
      }
    )
    .subscribe();
  console.log("chat listener mounted");
}
 */