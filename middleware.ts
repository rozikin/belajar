import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request:any) {
 console.log(request);
}
 
// export const config = {
//   matcher: '/about/:path*',
// }