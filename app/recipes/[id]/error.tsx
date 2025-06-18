'use client' // Error boundaries must be Client Components
 
import Image from 'next/image'
import { useEffect } from 'react'
 
export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div
      className="
        flex flex-col
        h-screen
        p-4
        text-center
        gap-4 items-center justify-center
      "
    >
      <Image src={"/no-ramen.svg"} alt="Sad ramen" width={150} height={150} />
      <h1>Uh-oh! {error.message}</h1>
    </div>
  )
}