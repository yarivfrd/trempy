import Feed from "../../components/Feed/Feed";

function Home({ data }) {
  return (
    <main className="Home">
      <Feed data={data}/>
    </main>
  )
}
export default Home;