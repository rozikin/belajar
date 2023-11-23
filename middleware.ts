import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside

// export const config = {
//   matcher: '/about/:path*',
// }

export function middleware(request: any) {
  
  const authRegexChecker = new RegExp('/auth/*')



  if (authRegexChecker.test(request.url)) {
    console.log('middleware invoked at time :' + new Date());
    console.log({ url: request.url });
    console.log({ pathname: request.nextUrl.pathname });
    console.log({ method: request.method });
  }

}

