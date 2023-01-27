import { useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

const useSubmitVisitor = () => {
  useEffect(() => {
    const main = async () => {
      const r = await fetch("https://ipapi.co/json");
      const json = await r.json();
      await supabase.from("visitors").insert({
        ip: json.ip,
        region: json.region,
        url: window.location.href,
      });
    };
    main();
  }, []);
};
export default useSubmitVisitor;
