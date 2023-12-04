import { useState } from "react"
import { supabase } from "../supabase/client";
function Login(){
 const[ email, setEmail]=  useState("")
 const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const { user, error } = await supabase.auth.signInWithOtp({
        email,
      });
  
      if (error) {
        throw error;
      }
  
      console.log("User signed in:", user);
    } catch (error) {
      console.error("Error during sign-in:", error.message);
    }
  };
  
return(
    <div>
        <form onSubmit={handleSubmit} action= "">
            <input 
            type="email" 
            name="email" 
            placeholder="correo"  
            onChange={(e)=> setEmail(e.target.value)}/>
            <button>send</button>
        </form>
    </div>
)
}
export default Login