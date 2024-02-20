import Footer from "@/utils/components/footer/Footer"
import { Facebook, Instagram, Youtube } from "lucide-react"

const BrowseFooter = () => {
  return (
    <Footer className="justify-around">
    <section className="flex">
      <a href="https://instagram.com/eliezer_perl">
        <Instagram />
      </a>
      <a href="">
        <Facebook />
      </a>
      <a href="">
        <Youtube />
      </a>
    </section>
    <section>
      <a href="mailto: eliezerrules@gmail.com">Contact us</a>
    </section>
  </Footer>
  )
}

export default BrowseFooter