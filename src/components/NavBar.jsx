import { useAuth } from '../providers/AuthProvider';
import { supabase } from '../supabase/client';

function NavBar() {
  
  return (
    <div>
      <button onClick={()=> supabase.auth.signOut}>Sign Out</button>
    </div>
  );
}

export default NavBar;
