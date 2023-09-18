import NextTopLoader from 'nextjs-toploader'

export default function ProgressBar() {
  return (
    <NextTopLoader color="#3A74DE"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={200}
      shadow={false}
    />
  )
}
