export async function getStaticProps() {
  return {
    props: {
      pageId: "about_me",
      metadata: {
        title: "Test Title",
        description: "Discover the work on the personal website. ",
        openGraph: {
          image: "https://example.com/image.jpg",
          url: "https://example.com"
        }
      }
    }
  }
}

export default function Home() {
  return <div>About Me</div>
}