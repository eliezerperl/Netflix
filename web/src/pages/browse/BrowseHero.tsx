import { Content } from '@/models/Content'
import { axios, useEffect } from "@/utils/imports";

type Props = {}

const BrowseHero = (props: Props) => {
  const [randomContent, setRandomContent] = useState(second)

  useEffect(() => {
    const getRandomContent = async ()=> {
      const content: Content[] = await axios.get('/api/v1/content')
      const randomIndex = Math.floor(Math.random() * (content.length));
      const randomContent = content[randomIndex];
      setRandomContent(randomContent)
    }
    getRandomContent();
  }, [])

  return (
    <>
    <video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4"/>
  <source src="movie.ogg" type="video/ogg"/>
Your browser does not support the video tag.
</video>
    </>
  )
}

export default BrowseHero