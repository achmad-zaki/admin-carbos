// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

// Ambil informasi koneksi Supabase dari variabel lingkungan
const supabaseUrl: any = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey: any = process.env.NEXT_PUBLIC_SUPABASE_KEY;

// if (!supabaseUrl || !supabaseKey) {
//   throw new Error('SUPABASE_URL or SUPABASE_KEY is not defined');
// }


// Buat instance klien Supabase
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export { supabase, supabaseKey, supabaseUrl };
