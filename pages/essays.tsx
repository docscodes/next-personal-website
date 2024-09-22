export async function getStaticProps() {
  return {
    props: {
      pageId: "essays",
      metadata: {
        title: "Essays",
        description: "Discover the work on the essays. ",
        openGraph: {
          image: "https://example.com/image.jpg",
          url: "https://example.com"
        }
      }
    }
  }
}

export default function Essays() {
  return <div>Essays</div>
}