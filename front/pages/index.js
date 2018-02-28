import 'isomorphic-fetch'
import Layout from '../components/Layout'

export default class extends React.Component {
  static async getInitialProps() {
    const req = await fetch(`https://api.hackerwebapp.com/news`)
    const stories = await req.json()
    return { stories }
  }
  componentDidMount = () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js")
        .catch(err => console.error("Service worker registration failed", err));
    } else {
      console.log("Service worker not supported");
    }
  }
  render() {
    return <Layout title="Latest News">
      <div>
        <h1>Latest News</h1>

        {this.props.stories.map((story) => (
          <h2><a href={story.url}>{story.title}</a></h2>
        ))}

        <style jsx>{`
        $color: #3a3;
        h1 {
          font-family: system-ui;
          font-weight: 300;
          color: $color;
        }
     `}</style>
      </div>
    </Layout>
  }
}