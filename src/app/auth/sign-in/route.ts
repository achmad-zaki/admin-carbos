import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { supabaseUrl, supabaseKey } from '@/lib/supabase.lib'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const username = String(formData.get('username'))
  const password = String(formData.get('password'))
  const supabase = createRouteHandlerClient({ cookies }, { supabaseUrl, supabaseKey })

  const { data, error } = await supabase.from('Admin').select('email').eq('username', username)
  const dataku = data?.[0]?.email

  const login = async (email: any) => {

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    console.log(data)

    if (error) {
      return NextResponse.redirect(
        `${requestUrl.origin}/login?error=Could not authenticate user`,
        {
          // a 301 status is required to redirect from a POST to a GET route
          status: 301,
        }
      )
    }

    return NextResponse.redirect("http://localhost:3000/dashboard/home", {
      // a 301 status is required to redirect from a POST to a GET route
      status: 301,
    })
  }
  const response = await login(dataku);
  return response;
}
